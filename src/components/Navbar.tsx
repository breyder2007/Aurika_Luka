import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLanguageMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsLanguageMenuOpen(false);
    }
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const toggleLanguageMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLanguageChange = (lang: 'fr' | 'en' | 'uk') => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const getLanguageLabel = (lang: string) => {
    switch (lang) {
      case 'fr': return 'Français';
      case 'en': return 'English';
      case 'uk': return 'Українська';
      default: return lang.toUpperCase();
    }
  };

  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-gradient-to-b from-black/80 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center gap-3 group z-50"
            onClick={() => handleNavigation('/')}
          >
            <img 
              src="https://www.aourika.com/images/logo.png" 
              alt="Aurika Luka" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label={t.nav.home} isScrolled={isScrolled} />
            <NavLink to="/services" label={t.nav.services} isScrolled={isScrolled} />
            <NavLink to="/gallery" label={t.nav.gallery} isScrolled={isScrolled} />
            
            {/* Desktop Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className={`flex items-center space-x-1 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                <Globe size={20} />
                <span>{getLanguageLabel(language)}</span>
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[160px]">
                  <button
                    onClick={() => handleLanguageChange('fr')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Français
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange('uk')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Українська
                  </button>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className={`px-6 py-2 rounded-full transition-all transform hover:scale-105 ${
                isScrolled
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-white text-red-600 hover:bg-red-50'
              }`}
              onClick={() => handleNavigation('/contact')}
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguageMenu}
              className={`flex items-center space-x-1 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <Globe size={20} />
              <span>{getLanguageLabel(language)}</span>
            </button>
            <button 
              className="p-2 rounded-full transition-colors z-50"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
              ) : (
                <Menu size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-black/95 md:hidden transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
            <Link 
              to="/" 
              className="text-2xl font-medium text-white hover:text-red-300 transition-colors"
              onClick={() => handleNavigation('/')}
            >
              {t.nav.home}
            </Link>
            <Link 
              to="/services" 
              className="text-2xl font-medium text-white hover:text-red-300 transition-colors"
              onClick={() => handleNavigation('/services')}
            >
              {t.nav.services}
            </Link>
            <Link 
              to="/gallery" 
              className="text-2xl font-medium text-white hover:text-red-300 transition-colors"
              onClick={() => handleNavigation('/gallery')}
            >
              {t.nav.gallery}
            </Link>
            
            {/* Mobile Language Menu */}
            <div className="w-48">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLanguageChange('fr');
                }}
                className="w-full text-white hover:text-red-400 py-2 text-xl"
              >
                Français
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLanguageChange('en');
                }}
                className="w-full text-white hover:text-red-400 py-2 text-xl"
              >
                English
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLanguageChange('uk');
                }}
                className="w-full text-white hover:text-red-400 py-2 text-xl"
              >
                Українська
              </button>
            </div>
            
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
              onClick={() => handleNavigation('/contact')}
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isScrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`relative font-medium transition-colors ${
        isScrolled 
          ? isActive ? 'text-red-600' : 'text-gray-800 hover:text-red-600'
          : isActive ? 'text-red-400' : 'text-white hover:text-red-200'
      }`}
    >
      {label}
      {isActive && (
        <span className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full ${
          isScrolled ? 'bg-red-600' : 'bg-red-400'
        }`} />
      )}
    </Link>
  );
};

export default Navbar;