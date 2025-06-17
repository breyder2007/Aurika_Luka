import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { galleryItems } from '../data';

const GalleryGrid: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language];
  
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
      newIndex = selectedImageIndex === 0 ? galleryItems.length - 1 : selectedImageIndex - 1;
    } else {
      newIndex = selectedImageIndex === galleryItems.length - 1 ? 0 : selectedImageIndex + 1;
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
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{t.gallery.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => handleImageClick(index)}
              className="cursor-pointer flex flex-col items-center"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 sm:mt-4 text-center">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImageIndex !== null && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button 
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 transition-colors z-50"
              aria-label="Close"
            >
              <X size={24} className="sm:w-8 sm:h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50"
              aria-label="Previous"
            >
              <ChevronLeft size={24} className="sm:w-12 sm:h-12" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50"
              aria-label="Next"
            >
              <ChevronRight size={24} className="sm:w-12 sm:h-12" />
            </button>

            <div 
              className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-h-[80vh] flex justify-center">
                <img
                  src={galleryItems[selectedImageIndex].image}
                  alt={galleryItems[selectedImageIndex].title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="text-center mt-4 sm:mt-6">
                <h3 className="text-lg sm:text-2xl font-bold text-white">
                  {galleryItems[selectedImageIndex].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mt-2">
                  {galleryItems[selectedImageIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;