import { useLocation, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, Clock, Utensils, Truck, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function OrderConfirmation() {
  const location = useLocation();
  const orderDetails = location.state;
  const { t } = useLanguage();

  if (!orderDetails) {
    return <Navigate to="/order" replace />;
  }

  const { cart, orderType, total, subtotal, deliveryFee, estimatedTime, address, tableNumber, specialInstructions } = orderDetails;

  return (
    <div className="min-h-screen bg-[#000000] py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#111111] border border-white/10 rounded-lg p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <CheckCircle className="w-16 h-16 text-[#F58B44] mx-auto mb-6" />
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              {t('orderConfirmation.title')}
            </h1>
            <p className="text-gray-400">
              {t('orderConfirmation.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white border-b border-white/10 pb-2">{t('orderConfirmation.details')}</h3>
              
              <div className="flex items-start gap-3 text-gray-300">
                {orderType === 'delivery' ? <Truck className="w-5 h-5 text-[#F58B44]" /> : 
                 orderType === 'pickup' ? <ShoppingBag className="w-5 h-5 text-[#F58B44]" /> : 
                 <Utensils className="w-5 h-5 text-[#F58B44]" />}
                <div>
                  <p className="font-medium text-white capitalize">{orderType === 'dine-in' ? t('order.dineIn') : orderType === 'delivery' ? t('order.delivery') : t('order.pickup')}</p>
                  {orderType === 'delivery' && <p className="text-sm text-gray-400">{address}</p>}
                  {orderType === 'dine-in' && <p className="text-sm text-gray-400">{t('orderConfirmation.table')} {tableNumber}</p>}
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-[#F58B44]" />
                <div>
                  <p className="font-medium text-white">{t('orderConfirmation.estimatedTime')}</p>
                  <p className="text-sm text-gray-400">{estimatedTime}</p>
                </div>
              </div>

              {specialInstructions && (
                <div className="flex items-start gap-3 text-gray-300">
                  <div className="w-5 h-5 flex items-center justify-center text-[#F58B44]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">{t('orderConfirmation.specialInstructions')}</p>
                    <p className="text-sm text-gray-400">{specialInstructions}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white border-b border-white/10 pb-2">{t('orderConfirmation.summary')}</h3>
              <div className="space-y-3 max-h-[200px] overflow-y-auto pr-2">
                {cart.map((item: any) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-300">{item.quantity}x {item.name}</span>
                    <span className="text-white">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-white/10 pt-3 space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>{t('order.subtotal')}</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between text-gray-400">
                    <span>{t('order.deliveryFee')}</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold text-white pt-2">
                  <span>{t('order.total')}</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/"
              className="inline-block bg-[#F58B44] text-white font-medium px-8 py-3 rounded-[4px] hover:bg-[#e27d3a] transition-colors"
            >
              {t('orderConfirmation.backToHome')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
