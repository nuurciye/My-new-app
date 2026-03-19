import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#000000] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-[#F58B44] mb-4"
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-[#F58B44]/10 p-3 rounded-[4px]">
                <MapPin className="w-6 h-6 text-[#F58B44]" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-white mb-1">{t('contact.location')}</h3>
                <p className="text-gray-400">
                  <a href="https://maps.google.com/?q=28M7+485+Arbe+Mall,+W+Taleex,+Mogadishu,+Somalia" target="_blank" rel="noopener noreferrer" className="hover:text-[#F58B44] transition-colors">
                    28M7+485 Arbe Mall, W Taleex<br />Mogadishu, Somalia
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-[#F58B44]/10 p-3 rounded-[4px]">
                <Clock className="w-6 h-6 text-[#F58B44]" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-white mb-1">{t('contact.hours')}</h3>
                <p className="text-gray-400 whitespace-pre-line">{t('contact.hoursDesc').replace('<br />', '\n')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-[#F58B44]/10 p-3 rounded-[4px]">
                <Phone className="w-6 h-6 text-[#F58B44]" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-white mb-1">{t('contact.phone')}</h3>
                <p className="text-gray-400">
                  <a href="tel:+252612301508" className="hover:text-[#F58B44] transition-colors">(+2526) 123-01508</a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-[#F58B44]/10 p-3 rounded-[4px]">
                <Mail className="w-6 h-6 text-[#F58B44]" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-white mb-1">{t('contact.email')}</h3>
                <p className="text-gray-400">
                  <a href="mailto:Mahaddahir24@gmail.com" className="hover:text-[#F58B44] transition-colors">Mahaddahir24@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-6">
              <a href="https://www.instagram.com/umumarwan_bakery?igsh=Y2FiNjR0NnhjOXly" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F58B44] transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span>Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@ummarwan_bakery?_r=1&_t=ZN-94kYwizW1Ha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F58B44] transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                <span>TikTok</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#111111] p-8 rounded-[4px] border border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">{t('contact.nameLabel')}</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#000000] border border-white/10 rounded-[4px] px-4 py-3 text-white focus:outline-none focus:border-[#F58B44] transition-colors"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">{t('contact.emailLabel')}</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-[#000000] border border-white/10 rounded-[4px] px-4 py-3 text-white focus:outline-none focus:border-[#F58B44] transition-colors"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">{t('contact.messageLabel')}</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-[#000000] border border-white/10 rounded-[4px] px-4 py-3 text-white focus:outline-none focus:border-[#F58B44] transition-colors resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#F58B44] text-white font-medium py-3 rounded-[4px] hover:bg-[#e27d3a] transition-colors"
              >
                {t('contact.send')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
