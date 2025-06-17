import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand and About */}
          <div>
            <Link to="/" className="text-xl font-semibold text-white mb-4 block">
              Aurika Luka
            </Link>
            <p className="text-gray-400 mb-4">
              {t.hero.subtitle}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/aurika-luka-86825810b/" className="text-gray-400 hover:text-red-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/SportsFashionSuits/" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:AourikaLuka@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-500 transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-red-500 transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-red-500 transition-colors">
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">
              {t.footer.contact}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+33 6 47 37 33 99</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">AourikaLuka@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Aurika Luka. {t.footer.rights}</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-red-500 transition-colors">
              {t.footer.links.privacy}
            </Link>
            <Link to="/terms-of-service" className="hover:text-red-500 transition-colors">
              {t.footer.links.terms}
            </Link>
            <Link to="/cookie-policy" className="hover:text-red-500 transition-colors">
              {t.footer.links.cookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;