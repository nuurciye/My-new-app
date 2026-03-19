import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ShoppingBag, Truck, Utensils, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useMenuData, MenuItem } from '../hooks/useMenuData';

type OrderType = 'pickup' | 'delivery' | 'dine-in';

interface CartItem extends MenuItem {
  cartItemId: string;
  quantity: number;
  selectedCustomizations: Record<string, string[]>;
}

export default function OnlineOrdering() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const menuItems = useMenuData();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoMessage, setPromoMessage] = useState({ text: '', type: '' });
  
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [currentCustomizations, setCurrentCustomizations] = useState<Record<string, string[]>>({});

  const handleCustomizationChange = (categoryId: string, optionId: string, type: 'single' | 'multiple') => {
    setCurrentCustomizations(prev => {
      const current = prev[categoryId] || [];
      if (type === 'single') {
        return { ...prev, [categoryId]: [optionId] };
      } else {
        if (current.includes(optionId)) {
          return { ...prev, [categoryId]: current.filter(id => id !== optionId) };
        } else {
          return { ...prev, [categoryId]: [...current, optionId] };
        }
      }
    });
  };

  const calculateItemPrice = (item: MenuItem, customizations: Record<string, string[]>) => {
    let price = item.price;
    if (item.customizations) {
      item.customizations.forEach(category => {
        const selectedOptions = customizations[category.id] || [];
        selectedOptions.forEach(optionId => {
          const option = category.options.find(o => o.id === optionId);
          if (option && option.price) {
            price += option.price;
          }
        });
      });
    }
    return price;
  };

  const getCustomizationString = (item: MenuItem, customizations: Record<string, string[]>) => {
    if (!item.customizations) return '';
    const parts: string[] = [];
    item.customizations.forEach(category => {
      const selectedOptions = customizations[category.id] || [];
      selectedOptions.forEach(optionId => {
        const option = category.options.find(o => o.id === optionId);
        if (option) {
          parts.push(option.name);
        }
      });
    });
    return parts.join(', ');
  };

  const addToCart = (item: MenuItem, customizations: Record<string, string[]> = {}) => {
    if (item.customizations && item.customizations.length > 0 && Object.keys(customizations).length === 0) {
      setSelectedItem(item);
      setCurrentCustomizations({});
      return;
    }

    // Check required customizations
    if (item.customizations) {
      const missingRequired = item.customizations.find(c => c.required && (!customizations[c.id] || customizations[c.id].length === 0));
      if (missingRequired) {
        alert(`${t('order.required')}: ${missingRequired.name}`);
        return;
      }
    }

    const cartItemId = `${item.id}-${JSON.stringify(customizations)}`;
    
    setCart(prev => {
      const existing = prev.find(i => i.cartItemId === cartItemId);
      if (existing) {
        return prev.map(i => i.cartItemId === cartItemId ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, cartItemId, quantity: 1, selectedCustomizations: customizations }];
    });
    
    setSelectedItem(null);
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.cartItemId === cartItemId) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const subtotal = cart.reduce((sum, item) => sum + (calculateItemPrice(item, item.selectedCustomizations) * item.quantity), 0);
  const discountAmount = discountApplied ? subtotal * 0.2 : 0;
  const deliveryFee = orderType === 'delivery' ? 2 : 0;
  const total = subtotal - discountAmount + deliveryFee;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'UMUMARWAN20') {
      setDiscountApplied(true);
      setPromoMessage({ text: t('order.codeApplied'), type: 'success' });
    } else {
      setDiscountApplied(false);
      setPromoMessage({ text: t('order.invalidCode'), type: 'error' });
    }
  };

  const getEstimatedTime = () => {
    if (orderType === 'dine-in') return `Immediate (Table ${tableNumber || 'TBD'})`;
    if (!timeSlot) return 'Please select a time slot';

    if (orderType === 'pickup') {
      if (timeSlot === 'asap') return '15-20 minutes';
      return `Ready at ${timeSlot}`;
    }

    if (orderType === 'delivery') {
      if (timeSlot === 'asap') return `30-45 minutes`;
      
      const slotLabels: Record<string, string> = {
        '10:00': '10:00 AM - 11:00 AM',
        '11:00': '11:00 AM - 12:00 PM',
        '12:00': '12:00 PM - 1:00 PM',
        '13:00': '1:00 PM - 2:00 PM',
        '14:00': '2:00 PM - 3:00 PM',
        '15:00': '3:00 PM - 4:00 PM',
      };
      return slotLabels[timeSlot] || timeSlot;
    }
    return '';
  };

  const categories = [
    { id: 'breakfast', name: t('menu.categories.breakfast') },
    { id: 'lunch', name: t('menu.categories.lunch') },
    { id: 'pastry', name: t('menu.categories.pastry') },
    { id: 'bread', name: t('menu.categories.bread') },
    { id: 'coffee', name: t('menu.categories.coffee') }
  ];

  const [activeCategory, setActiveCategory] = useState(() => {
    if (location.state?.category) {
      const cat = categories.find(c => c.name === location.state.category);
      if (cat) return cat.id;
    }
    return categories[0].id;
  });

  const [scrollToItemId, setScrollToItemId] = useState<string | null>(null);

  useEffect(() => {
    if (location.state?.category) {
      const cat = categories.find(c => c.name === location.state.category);
      if (cat) setActiveCategory(cat.id);
    }
    if (location.state?.selectedItemId) {
      setScrollToItemId(location.state.selectedItemId);
      // Clear state so it doesn't trigger again on refresh
      navigate(location.pathname, { replace: true, state: {} });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state, navigate]);

  useEffect(() => {
    if (scrollToItemId) {
      let attempts = 0;
      const interval = setInterval(() => {
        const element = document.getElementById(`menu-item-${scrollToItemId}`);
        if (element) {
          clearInterval(interval);
          setScrollToItemId(null);
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add a brief highlight effect
            element.classList.add('ring-2', 'ring-[#F58B44]', 'ring-offset-2', 'ring-offset-[#000000]');
            setTimeout(() => {
              element.classList.remove('ring-2', 'ring-[#F58B44]', 'ring-offset-2', 'ring-offset-[#000000]');
            }, 2000);
          }, 100);
        } else if (attempts > 20) {
          clearInterval(interval);
          setScrollToItemId(null);
        }
        attempts++;
      }, 100);
      return () => clearInterval(interval);
    }
  }, [scrollToItemId]);

  const activeCategoryName = categories.find(c => c.id === activeCategory)?.name;

  return (
    <div className="min-h-screen bg-[#000000] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-[#F58B44] mb-4"
          >
            {t('order.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            {t('order.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex overflow-x-auto hide-scrollbar mb-8 border-b border-white/10">
              <div className="flex space-x-8 px-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`pb-4 text-lg font-medium whitespace-nowrap transition-colors relative ${
                      activeCategory === category.id ? 'text-[#F58B44]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {category.name}
                    {activeCategory === category.id && (
                      <motion.div
                        layoutId="activeOrderTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F58B44]"
                        initial={false}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeCategoryName && (
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {menuItems.filter(i => i.category === activeCategoryName).map((item) => {
                        const cartItemCount = cart.filter(c => c.id === item.id).reduce((sum, c) => sum + c.quantity, 0);
                        return (
                          <div id={`menu-item-${item.id}`} key={item.id} className="bg-[#111111] p-4 rounded-[4px] border border-white/5 flex gap-4 items-center transition-all duration-300">
                            <img src={item.img} alt={item.name} className="w-16 h-16 rounded object-cover" referrerPolicy="no-referrer" />
                            <div className="flex-1">
                              <h3 className="font-medium text-white text-lg">{item.name}</h3>
                              <p className="text-gray-400">${item.price.toFixed(2)}</p>
                            </div>
                            {cartItemCount > 0 && (!item.customizations || item.customizations.length === 0) ? (
                              <div className="flex items-center gap-2 bg-[#000000] rounded-[4px] p-1 border border-white/10">
                                <button 
                                  onClick={() => {
                                    const cartItem = cart.find(c => c.id === item.id);
                                    if (cartItem) updateQuantity(cartItem.cartItemId, -1);
                                  }}
                                  className="text-gray-400 hover:text-white p-1"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <motion.span 
                                  key={cartItemCount}
                                  initial={{ scale: 1.5, color: '#F58B44' }}
                                  animate={{ scale: 1, color: '#FFFFFF' }}
                                  className="text-white w-4 text-center text-sm"
                                >
                                  {cartItemCount}
                                </motion.span>
                                <button 
                                  onClick={() => {
                                    const cartItem = cart.find(c => c.id === item.id);
                                    if (cartItem) updateQuantity(cartItem.cartItemId, 1);
                                  }}
                                  className="text-gray-400 hover:text-white p-1"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                            ) : (
                              <button 
                                onClick={() => addToCart(item)}
                                className="bg-white/10 hover:bg-[#F58B44] text-white px-3 py-2 rounded-[4px] transition-colors text-sm font-medium"
                              >
                                {item.customizations && item.customizations.length > 0 ? t('order.customize') : <Plus className="w-5 h-5" />}
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#111111] p-6 rounded-[4px] border border-white/5 sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <h2 className="font-heading text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-[#F58B44]" />
                {t('order.yourOrder')}
              </h2>
              
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">{t('order.emptyCart')}</p>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                    <AnimatePresence initial={false}>
                      {cart.map((item) => (
                        <motion.div 
                          key={item.id} 
                          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex justify-between items-center overflow-hidden"
                        >
                          <div className="flex-1">
                            <h4 className="text-white font-medium">{item.name}</h4>
                            {item.desc && (
                              <p className="text-gray-400 text-xs mt-0.5 line-clamp-2">
                                {item.desc}
                              </p>
                            )}
                            {Object.keys(item.selectedCustomizations).length > 0 && (
                              <p className="text-gray-500 text-xs mt-0.5">
                                {getCustomizationString(item, item.selectedCustomizations)}
                              </p>
                            )}
                            <p className="text-gray-400 text-sm mt-0.5">${(calculateItemPrice(item, item.selectedCustomizations) * item.quantity).toFixed(2)}</p>
                          </div>
                          <div className="flex items-center gap-3 bg-[#000000] rounded-[4px] p-1 border border-white/10">
                            <button 
                              onClick={() => updateQuantity(item.cartItemId, -1)}
                              className="text-gray-400 hover:text-white p-1"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <motion.span 
                              key={item.quantity}
                              initial={{ scale: 1.5, color: '#F58B44' }}
                              animate={{ scale: 1, color: '#FFFFFF' }}
                              className="text-white w-4 text-center"
                            >
                              {item.quantity}
                            </motion.span>
                            <button 
                              onClick={() => updateQuantity(item.cartItemId, 1)}
                              className="text-gray-400 hover:text-white p-1"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex gap-2 mb-6 bg-[#000000] p-1 rounded-[4px]">
                      <button 
                        onClick={() => setOrderType('delivery')}
                        className={`flex-1 py-2 text-sm font-medium rounded-[4px] flex items-center justify-center gap-2 transition-colors ${orderType === 'delivery' ? 'bg-[#F58B44] text-white' : 'text-gray-400 hover:text-white'}`}
                      >
                        <Truck className="w-4 h-4" /> {t('order.delivery')}
                      </button>
                      <button 
                        onClick={() => setOrderType('pickup')}
                        className={`flex-1 py-2 text-sm font-medium rounded-[4px] flex items-center justify-center gap-2 transition-colors ${orderType === 'pickup' ? 'bg-[#F58B44] text-white' : 'text-gray-400 hover:text-white'}`}
                      >
                        <ShoppingBag className="w-4 h-4" /> {t('order.pickup')}
                      </button>
                      <button 
                        onClick={() => setOrderType('dine-in')}
                        className={`flex-1 py-2 text-sm font-medium rounded-[4px] flex items-center justify-center gap-2 transition-colors ${orderType === 'dine-in' ? 'bg-[#F58B44] text-white' : 'text-gray-400 hover:text-white'}`}
                      >
                        <Utensils className="w-4 h-4" /> {t('order.dineIn')}
                      </button>
                    </div>

                    {orderType === 'delivery' && (
                      <div className="space-y-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">{t('order.phone')}</label>
                          <input 
                            type="tel" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder={t('order.phonePlaceholder')}
                            className="w-full bg-[#000000] border border-white/10 rounded-[4px] px-3 py-2 text-white focus:outline-none focus:border-[#F58B44] text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">{t('order.address')}</label>
                          <input 
                            type="text" 
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder={t('order.addressPlaceholder')}
                            className="w-full bg-[#000000] border border-white/10 rounded-[4px] px-3 py-2 text-white focus:outline-none focus:border-[#F58B44] text-sm"
                          />
                        </div>
                      </div>
                    )}

                    {orderType === 'dine-in' && (
                      <div className="space-y-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">{t('order.tableNumber')}</label>
                          <input 
                            type="text" 
                            value={tableNumber}
                            onChange={(e) => setTableNumber(e.target.value)}
                            placeholder={t('order.tablePlaceholder')}
                            className="w-full bg-[#000000] border border-white/10 rounded-[4px] px-3 py-2 text-white focus:outline-none focus:border-[#F58B44] text-sm"
                          />
                        </div>
                      </div>
                    )}

                    {(orderType === 'delivery' || orderType === 'pickup') && (
                      <div className="space-y-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">{t('order.timeSlot')}</label>
                          <select 
                            value={timeSlot}
                            onChange={(e) => setTimeSlot(e.target.value)}
                            className="w-full bg-[#000000] border border-white/10 rounded-[4px] px-3 py-2 text-white focus:outline-none focus:border-[#F58B44] text-sm"
                          >
                            <option value="">{t('order.selectTime')}</option>
                            <option value="asap">{t('order.asap')}</option>
                            <option value="10:00">10:00 AM - 11:00 AM</option>
                            <option value="11:00">11:00 AM - 12:00 PM</option>
                            <option value="12:00">12:00 PM - 1:00 PM</option>
                            <option value="13:00">1:00 PM - 2:00 PM</option>
                            <option value="14:00">2:00 PM - 3:00 PM</option>
                            <option value="15:00">3:00 PM - 4:00 PM</option>
                          </select>
                        </div>
                      </div>
                    )}

                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">{t('order.specialInstructions')}</label>
                        <textarea 
                          value={specialInstructions}
                          onChange={(e) => setSpecialInstructions(e.target.value)}
                          placeholder={t('order.specialInstructionsPlaceholder')}
                          rows={3}
                          className="w-full bg-[#000000] border border-white/10 rounded-[4px] px-3 py-2 text-white focus:outline-none focus:border-[#F58B44] text-sm resize-none"
                        />
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-4 mb-4">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder={t('order.promoCode')}
                          className="flex-1 bg-[#000000] border border-white/10 rounded-[4px] px-3 py-2 text-white focus:outline-none focus:border-[#F58B44] text-sm uppercase"
                        />
                        <button
                          onClick={handleApplyPromo}
                          className="bg-white/10 hover:bg-[#F58B44] text-white px-4 py-2 rounded-[4px] text-sm font-medium transition-colors"
                        >
                          {t('order.apply')}
                        </button>
                      </div>
                      {promoMessage.text && (
                        <p className={`text-xs mt-2 ${promoMessage.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                          {promoMessage.text}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between text-gray-400">
                        <span>{t('order.subtotal')}</span>
                        <motion.span 
                          key={subtotal}
                          initial={{ scale: 1.1, color: '#F58B44' }}
                          animate={{ scale: 1, color: '#9ca3af' }}
                        >
                          ${subtotal.toFixed(2)}
                        </motion.span>
                      </div>
                      {discountApplied && (
                        <div className="flex justify-between text-green-400">
                          <span>{t('order.discount')}</span>
                          <span>-${discountAmount.toFixed(2)}</span>
                        </div>
                      )}
                      {orderType === 'delivery' && (
                        <div className="flex justify-between text-gray-400">
                          <span>{t('order.deliveryFee')}</span>
                          <span>${deliveryFee.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-[#F58B44] font-medium pt-2 border-t border-white/5">
                        <span>{t('order.estTime')}</span>
                        <span className="text-right">{getEstimatedTime()}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-gray-400">{t('order.total')}</span>
                      <motion.span 
                        key={total}
                        initial={{ scale: 1.1, color: '#F58B44' }}
                        animate={{ scale: 1, color: '#ffffff' }}
                        className="text-2xl font-bold text-white"
                      >
                        ${total.toFixed(2)}
                      </motion.span>
                    </div>
                    <button 
                      onClick={() => {
                        if (orderType === 'delivery' && (!address || !phone)) {
                          alert(t('order.alertAddressPhone'));
                          return;
                        }
                        if (orderType === 'dine-in' && !tableNumber) {
                          alert(t('order.alertTable'));
                          return;
                        }
                        if ((orderType === 'delivery' || orderType === 'pickup') && !timeSlot) {
                          alert(t('order.alertTimeSlot'));
                          return;
                        }
                        
                        const orderDetails = {
                          cart,
                          orderType,
                          total,
                          subtotal,
                          discountAmount,
                          deliveryFee,
                          estimatedTime: getEstimatedTime(),
                          address,
                          phone,
                          tableNumber,
                          timeSlot,
                          specialInstructions
                        };

                        let msg = `*New Order from Umumarwan Bakery*\n`;
                        msg += `Order Type: ${orderType.charAt(0).toUpperCase() + orderType.slice(1)}\n`;
                        if (orderType === 'delivery') {
                          msg += `Phone: ${phone}\n`;
                          msg += `Address: ${address}\n`;
                        }
                        if (orderType === 'dine-in') msg += `Table Number: ${tableNumber}\n`;
                        if (orderType !== 'dine-in') msg += `Time Slot: ${timeSlot}\n`;
                        if (specialInstructions) msg += `Special Instructions: ${specialInstructions}\n`;

                        msg += `\n*Items:*\n`;
                        cart.forEach(item => {
                          const customString = getCustomizationString(item, item.selectedCustomizations);
                          const itemPrice = calculateItemPrice(item, item.selectedCustomizations);
                          msg += `${item.quantity}x ${item.name} ${customString ? `(${customString}) ` : ''}- $${(itemPrice * item.quantity).toFixed(2)}\n`;
                        });

                        msg += `\nSubtotal: $${subtotal.toFixed(2)}\n`;
                        if (discountApplied) {
                          msg += `Discount (20%): -$${discountAmount.toFixed(2)}\n`;
                        }
                        if (orderType === 'delivery') msg += `Delivery Fee: $${deliveryFee.toFixed(2)}\n`;
                        msg += `*Total: $${total.toFixed(2)}*\n`;

                        const whatsappUrl = `https://wa.me/252612301508?text=${encodeURIComponent(msg)}`;
                        window.open(whatsappUrl, '_blank');

                        navigate('/order-confirmation', { state: orderDetails });
                      }}
                      className="w-full bg-[#F58B44] text-white font-medium py-3 rounded-[4px] hover:bg-[#e27d3a] transition-colors"
                    >
                      {t('order.placeOrder')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Customization Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111111] border border-white/10 rounded-lg w-full max-w-md overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#000000]">
                <h3 className="text-xl font-semibold text-white">{selectedItem.name}</h3>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-400 hover:text-white p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto flex-1">
                {selectedItem.customizations?.map(category => (
                  <div key={category.id} className="mb-6 last:mb-0">
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="text-white font-medium">{category.name}</h4>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {category.required ? t('order.required') : t('order.optional')}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      {category.options.map(option => {
                        const isSelected = (currentCustomizations[category.id] || []).includes(option.id);
                        return (
                          <label 
                            key={option.id} 
                            className={`flex items-center justify-between p-3 rounded-[4px] border cursor-pointer transition-colors ${
                              isSelected ? 'border-[#F58B44] bg-[#F58B44]/10' : 'border-white/10 bg-[#000000] hover:border-white/30'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-4 h-4 rounded-sm border flex items-center justify-center ${
                                isSelected ? 'border-[#F58B44] bg-[#F58B44]' : 'border-gray-500'
                              }`}>
                                {isSelected && <div className="w-2 h-2 bg-black rounded-[1px]" />}
                              </div>
                              <span className="text-gray-300 text-sm">{option.name}</span>
                            </div>
                            {option.price && (
                              <span className="text-gray-400 text-sm">+${option.price.toFixed(2)}</span>
                            )}
                            <input 
                              type={category.type === 'single' ? 'radio' : 'checkbox'}
                              name={category.id}
                              checked={isSelected}
                              onChange={() => handleCustomizationChange(category.id, option.id, category.type)}
                              className="hidden"
                            />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-white/10 bg-[#000000] flex gap-3">
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 py-3 rounded-[4px] border border-white/10 text-white font-medium hover:bg-white/5 transition-colors"
                >
                  {t('order.cancel')}
                </button>
                <button 
                  onClick={() => addToCart(selectedItem, currentCustomizations)}
                  className="flex-1 py-3 rounded-[4px] bg-[#F58B44] text-white font-medium hover:bg-[#e27d3a] transition-colors flex justify-between px-4"
                >
                  <span>{t('order.addToCart')}</span>
                  <span>${calculateItemPrice(selectedItem, currentCustomizations).toFixed(2)}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
