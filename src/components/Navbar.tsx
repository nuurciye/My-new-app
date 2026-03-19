import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useMenuData } from '../hooks/useMenuData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const menuItems = useMenuData();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchResults = searchQuery
    ? menuItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const links = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.menu'), path: '/menu' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
    { name: t('nav.orderOnline'), path: '/order' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#000000]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="font-heading text-2xl font-bold text-[#F58B44] tracking-widest uppercase">
              UMUMARWAN
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'text-[#F58B44]'
                      : 'text-gray-300 hover:text-white'
                  } px-3 py-2 text-sm font-medium transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/order"
                className="bg-[#F58B44] text-white px-5 py-2 rounded-[4px] text-sm font-medium hover:bg-[#e27d3a] transition-colors flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                {t('home.orderNow')}
              </Link>
            </div>
            
            <div className="flex items-center gap-4 border-l border-white/20 pl-6" ref={searchRef}>
              <div className="relative hidden lg:block">
                <div className="flex items-center bg-[#111111] border border-white/10 rounded-[4px] px-3 py-1.5 focus-within:border-[#F58B44] transition-colors">
                  <Search className="w-4 h-4 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder={t('nav.search')}
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setIsSearchOpen(true);
                    }}
                    onFocus={() => setIsSearchOpen(true)}
                    className="bg-transparent border-none text-sm text-white focus:outline-none w-40"
                  />
                </div>
                
                {isSearchOpen && searchQuery && (
                  <div className="absolute top-full mt-2 right-0 w-72 bg-[#111111] border border-white/10 rounded-[4px] shadow-xl overflow-hidden z-50">
                    {searchResults.length > 0 ? (
                      <div className="max-h-80 overflow-y-auto">
                        {searchResults.map(item => (
                          <Link
                            key={item.id}
                            to="/order"
                            state={{ selectedItemId: item.id, category: item.category }}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery('');
                            }}
                            className="flex items-center gap-3 p-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                          >
                            <img src={item.img} alt={item.name} className="w-12 h-12 rounded object-cover" referrerPolicy="no-referrer" />
                            <div>
                              <p className="text-sm font-medium text-white">{item.name}</p>
                              <p className="text-xs text-[#F58B44]">${item.price.toFixed(2)}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-sm text-gray-400 text-center">
                        {t('nav.noResults')}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={() => setLanguage(language === 'en' ? 'so' : 'en')}
                className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/5 transition-colors text-gray-400 hover:text-white"
              >
                <span className="text-sm font-bold tracking-wider">{language === 'en' ? 'EN' : 'SO'}</span>
                <span className="text-lg leading-none">{language === 'en' ? '🇬🇧' : '🇸🇴'}</span>
              </button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'so' : 'en')}
              className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/5 transition-colors text-gray-400 hover:text-white"
            >
              <span className="text-sm font-bold tracking-wider">{language === 'en' ? 'EN' : 'SO'}</span>
              <span className="text-lg leading-none">{language === 'en' ? '🇬🇧' : '🇸🇴'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#000000] border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2">
              <div className="relative">
                <div className="flex items-center bg-[#111111] border border-white/10 rounded-[4px] px-3 py-2 focus-within:border-[#F58B44] transition-colors">
                  <Search className="w-4 h-4 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder={t('nav.search')}
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setIsSearchOpen(true);
                    }}
                    onFocus={() => setIsSearchOpen(true)}
                    className="bg-transparent border-none text-sm text-white focus:outline-none w-full"
                  />
                </div>
                
                {isSearchOpen && searchQuery && (
                  <div className="absolute top-full mt-2 left-0 right-0 bg-[#111111] border border-white/10 rounded-[4px] shadow-xl overflow-hidden z-50">
                    {searchResults.length > 0 ? (
                      <div className="max-h-60 overflow-y-auto">
                        {searchResults.map(item => (
                          <Link
                            key={item.id}
                            to="/order"
                            state={{ selectedItemId: item.id, category: item.category }}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery('');
                              setIsOpen(false);
                            }}
                            className="flex items-center gap-3 p-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                          >
                            <img src={item.img} alt={item.name} className="w-10 h-10 rounded object-cover" referrerPolicy="no-referrer" />
                            <div>
                              <p className="text-sm font-medium text-white">{item.name}</p>
                              <p className="text-xs text-[#F58B44]">${item.price.toFixed(2)}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-sm text-gray-400 text-center">
                        {t('nav.noResults')}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  location.pathname === link.path
                    ? 'text-[#F58B44] bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
