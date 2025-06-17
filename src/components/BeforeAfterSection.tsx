import React, { useState } from 'react';
import { beforeAfterItems } from '../data';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfterSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  
  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % beforeAfterItems.length);
    setShowAfter(false);
  };

  const goToPrevious = () => {
    setActiveIndex((current) => 
      current === 0 ? beforeAfterItems.length - 1 : current - 1
    );
    setShowAfter(false);
  };

  const toggleAfterImage = () => {
    setShowAfter(prev => !prev);
  };

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{t.beforeAfter.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            {t.beforeAfter.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Image comparison */}
          <div 
            className="relative overflow-hidden rounded-lg shadow-xl"
            onMouseEnter={() => setShowAfter(true)}
            onMouseLeave={() => setShowAfter(false)}
            onClick={toggleAfterImage}
            onTouchStart={toggleAfterImage}
            role="button"
            tabIndex={0}
            aria-label={showAfter ? "Show before image" : "Show after image"}
          >
            <div className="relative w-full aspect-[3/4]">
              {/* Before Image (Background) */}
              <img 
                src={beforeAfterItems[activeIndex].beforeImage} 
                alt={`${t.beforeAfter.title} - ${beforeAfterItems[activeIndex].title[language]} (Before)`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* After Image (Foreground with reveal on tap/hover) */}
              <div 
                className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out bg-cover bg-center ${
                  showAfter ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ backgroundImage: `url(${beforeAfterItems[activeIndex].afterImage})` }}
              >
                {/* Gradient overlay for transition effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
              </div>
              
              {/* Tap/Hover instruction */}
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
                showAfter ? 'opacity-0' : 'opacity-100'
              }`}>
                <span className="bg-black/70 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                  {window.matchMedia('(hover: none)').matches ? t.beforeAfter.tapText : t.beforeAfter.hoverText}
                </span>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Text content */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
              {beforeAfterItems[activeIndex].title[language]}
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              {beforeAfterItems[activeIndex].description[language]}
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-base sm:text-lg mb-2">{t.beforeAfter.designProcess}</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  {t.beforeAfter.designProcessText}
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-base sm:text-lg mb-2">{t.beforeAfter.attention}</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  {t.beforeAfter.attentionText}
                </p>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex space-x-2 mt-6 sm:mt-8">
              {beforeAfterItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setShowAfter(false);
                  }}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    activeIndex === index ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                  aria-label={`View example ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;