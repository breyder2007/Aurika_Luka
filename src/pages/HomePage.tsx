import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceProcess from '../components/ServiceProcess';
import BeforeAfterSection from '../components/BeforeAfterSection';
import { galleryItems } from '../data';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const HomePage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = language === 'fr' 
      ? 'LeotardArt - Design et Création de Justaucorps Haute Couture'
      : language === 'uk'
      ? 'LeotardArt - Дизайн та Створення Купальників Від-Кутюр'
      : 'LeotardArt - Design and Creation of Haute Couture Leotards';
  }, [language]);

  // Filter only featured gallery items for homepage
  const featuredGalleryItems = galleryItems.filter(item => item.featured);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = selectedImageIndex === 0 ? featuredGalleryItems.length - 1 : selectedImageIndex - 1;
    } else {
      newIndex = selectedImageIndex === featuredGalleryItems.length - 1 ? 0 : selectedImageIndex + 1;
    }
    setSelectedImageIndex(newIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    }
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <ServiceProcess />
      <BeforeAfterSection />
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.gallery.featured}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.gallery.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGalleryItems.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => handleImageClick(index)}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative aspect-[3/4]"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.sport}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/gallery" 
              className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
            >
              {t.gallery.viewAll}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={48} />
          </button>

          <div 
            className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[80vh] flex justify-center">
              <img
                src={featuredGalleryItems[selectedImageIndex].image}
                alt={featuredGalleryItems[selectedImageIndex].title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-white text-2xl font-bold">
                {featuredGalleryItems[selectedImageIndex].title}
              </h3>
              <p className="text-gray-300 mt-2">
                {featuredGalleryItems[selectedImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;