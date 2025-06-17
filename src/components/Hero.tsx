import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://i.imgur.com/9VK5uX7.jpeg')",
          filter: 'brightness(0.4)'
        }}
      ></div>

      {/* Red gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/60 to-transparent z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 min-h-[100dvh] flex items-center relative z-20">
        <div className="max-w-2xl pt-20 pb-32">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link 
              to="/contact" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 rounded-md transition-all transform hover:translate-y-[-2px] font-medium flex items-center justify-center"
            >
              {t.hero.cta.primary}
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/gallery" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 rounded-md transition-all transform hover:translate-y-[-2px] font-medium text-center"
            >
              {t.hero.cta.secondary}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
        <span className="text-white text-xs sm:text-sm mb-2">
          {language === 'fr' ? 'Découvrir Plus' : language === 'en' ? 'Discover More' : 'Дізнатися Більше'}
        </span>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;