import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F58B44] mb-6">
              {t('about.title')}
            </h1>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
              <p>
                {t('about.p3')}
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <h3 className="font-heading text-3xl font-bold text-[#F58B44] mb-2">2023</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{t('about.year')}</p>
              </div>
              <div>
                <h3 className="font-heading text-3xl font-bold text-[#F58B44] mb-2">100%</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{t('about.handcrafted')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] rounded-[4px] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop" 
              alt="Baker preparing dough" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
