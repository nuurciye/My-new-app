import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useMenuData } from '../hooks/useMenuData';

export default function Menu() {
  const { t } = useLanguage();
  const menuItems = useMenuData();

  const categories = [
    {
      id: 'breakfast',
      name: t('menu.categories.breakfast'),
      items: menuItems.filter(item => item.category === t('menu.categories.breakfast'))
    },
    {
      id: 'lunch',
      name: t('menu.categories.lunch'),
      items: menuItems.filter(item => item.category === t('menu.categories.lunch'))
    },
    {
      id: 'pastry',
      name: t('menu.categories.pastry'),
      items: menuItems.filter(item => item.category === t('menu.categories.pastry'))
    },
    {
      id: 'bread',
      name: t('menu.categories.bread'),
      items: menuItems.filter(item => item.category === t('menu.categories.bread'))
    },
    {
      id: 'coffee',
      name: t('menu.categories.coffee'),
      items: menuItems.filter(item => item.category === t('menu.categories.coffee'))
    }
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const activeCategoryData = categories.find(c => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-[#000000] py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-[#F58B44] mb-4"
          >
            {t('menu.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            {t('menu.subtitle')}
          </motion.p>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar mb-12 border-b border-white/10">
          <div className="flex space-x-8 mx-auto px-2">
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
                    layoutId="activeTab"
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
            {activeCategoryData && (
              <motion.div
                key={activeCategoryData.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {activeCategoryData.items.map((item) => (
                    <div key={item.name} className="flex gap-4 items-start bg-[#111111] p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex flex-col flex-1">
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className="font-medium text-white text-lg">{item.name}</h3>
                          <span className="text-[#F58B44] font-medium ml-4">${item.price.toFixed(2)}</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
