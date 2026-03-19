import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#F58B44] text-white overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
              <p className="text-sm font-medium text-center flex-1">
                {t('home.banner')}
              </p>
              <button
                onClick={() => setShowBanner(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop" 
            alt="Fresh Artisanal Bread" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="https://i.postimg.cc/7hM47Y5j/Screenshot-20260317-003532-Instagram.png"
            alt="Umumarwan Logo"
            className="w-32 md:w-48 h-auto mb-6 rounded-full shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold text-[#F58B44] mb-4 tracking-widest uppercase"
          >
            UMUMARWAN
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#C26E3A] mb-2 tracking-widest uppercase"
          >
            {t('home.heroTitle')}
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm text-[#C26E3A]/70 mb-10 tracking-widest"
          >
            est 2023
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/order" 
              className="bg-[#F58B44] text-white px-8 py-4 rounded-[4px] font-medium hover:bg-[#e27d3a] transition-colors flex items-center justify-center gap-2"
            >
              {t('home.orderNow')} <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/menu" 
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-[4px] font-medium hover:bg-white/20 transition-colors flex items-center justify-center"
            >
              {t('home.viewMenu')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F58B44] mb-4">{t('home.specialties.title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t('home.specialties.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('home.specialties.items.croissant.title'),
                desc: t('home.specialties.items.croissant.desc'),
                img: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: t('home.specialties.items.sourdough.title'),
                desc: t('home.specialties.items.sourdough.desc'),
                img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: t('home.specialties.items.tart.title'),
                desc: t('home.specialties.items.tart.desc'),
                img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=80"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer bg-[#111111]/80 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:border-[#F58B44]/30 transition-colors"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-80" />
                </div>
                <div className="p-6 relative -mt-12">
                  <h3 className="font-heading text-2xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Gallery */}
      <section className="py-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F58B44] mb-4">{t('home.gallery.title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t('home.gallery.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                img: "https://i.postimg.cc/gk39x0Ct/20260317-032732.gif",
                title: t('home.gallery.behindScenes')
              },
              {
                img: "https://i.postimg.cc/XvJDkNzR/20260317-033119.gif",
                title: t('home.gallery.freshOut')
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative block aspect-[9/16] rounded-xl overflow-hidden border border-white/5 hover:border-[#F58B44]/50 transition-colors"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-xl font-semibold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-[#111111] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 mb-8 text-[#F58B44]">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
          </div>
          <blockquote className="font-heading text-2xl md:text-3xl text-white italic leading-relaxed mb-8">
            "{t('home.testimonial.quote')}"
          </blockquote>
          <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">{t('home.testimonial.author')}</p>
        </div>
      </section>
    </div>
  );
}
