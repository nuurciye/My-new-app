import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#111111] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-[#F58B44] tracking-widest uppercase mb-4">UMUMARWAN</h2>
            <p className="text-gray-400 max-w-md mb-6">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/umumarwan_bakery?igsh=Y2FiNjR0NnhjOXly" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F58B44] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@ummarwan_bakery?_r=1&_t=ZN-94kYwizW1Ha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F58B44] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="/menu" className="text-gray-400 hover:text-[#F58B44] transition-colors">{t('nav.menu')}</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-[#F58B44] transition-colors">{t('nav.about')}</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-[#F58B44] transition-colors">{t('nav.contact')}</a></li>
              <li><a href="/order" className="text-gray-400 hover:text-[#F58B44] transition-colors">{t('nav.orderOnline')}</a></li>
              <li><a href="/source-code.zip" download className="text-[#F58B44] hover:text-white transition-colors">Download Source Code</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">{t('footer.visitUs')}</h3>
            <address className="text-gray-400 not-italic space-y-2">
              <p>
                <a href="https://maps.google.com/?q=28M7+485+Arbe+Mall,+W+Taleex,+Mogadishu,+Somalia" target="_blank" rel="noopener noreferrer" className="hover:text-[#F58B44] transition-colors whitespace-pre-line">
                  {t('footer.address')}
                </a>
              </p>
              <p className="pt-2">{t('footer.hours1')}</p>
              <p>{t('footer.hours2')}</p>
              <p className="pt-2">
                <a href="tel:+252612301508" className="hover:text-[#F58B44] transition-colors">(+2526) 123-01508</a>
              </p>
              <p>
                <a href="mailto:Mahaddahir24@gmail.com" className="hover:text-[#F58B44] transition-colors">Mahaddahir24@gmail.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
