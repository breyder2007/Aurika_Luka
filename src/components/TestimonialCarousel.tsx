import React, { useState, useEffect } from 'react';
import { testimonials } from '../data';
import { Quote } from 'lucide-react';

const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-600/10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-red-600/10 rounded-full"></div>
        <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-red-600/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. Descubre por qué deportistas de élite confían en nosotros.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-10 relative">
            {/* Quote icon */}
            <div className="absolute -top-5 -left-2 bg-red-600 rounded-full p-3">
              <Quote size={24} className="text-white" />
            </div>
            
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/3">
                    <div className="rounded-lg overflow-hidden aspect-square shadow-md">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-2/3">
                    <p className="text-gray-700 text-lg mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900">{testimonial.name}</h4>
                      <p className="text-red-600">{testimonial.sport}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-red-600' : 'bg-gray-300'
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;