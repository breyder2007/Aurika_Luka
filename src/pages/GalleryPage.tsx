import React, { useEffect } from 'react';
import GalleryGrid from '../components/GalleryGrid';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const GalleryPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    document.title = language === 'fr' ? 'Galerie | LeotardArt' : 'Gallery | LeotardArt';
  }, [language]);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div 
        className="relative min-h-[60vh] flex items-center"
        style={{ 
          backgroundImage: "url('https://i.imgur.com/9VK5uX7.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="container mx-auto px-4 text-center relative z-10 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t.gallery.pageTitle}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {t.gallery.pageSubtitle}
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <GalleryGrid />
    </div>
  );
};

export default GalleryPage;