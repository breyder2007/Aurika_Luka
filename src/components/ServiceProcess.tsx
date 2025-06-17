import React from 'react';
import { services } from '../data';
import { Pencil, Scissors, BedDouble as Needle, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const ServiceProcess: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'pencil': return <Pencil className="text-red-500 h-8 w-8" />;
      case 'scissors': return <Scissors className="text-red-500 h-8 w-8" />;
      case 'needle': return <Scissors className="text-red-500 h-8 w-8 transform rotate-45" />;
      case 'lightbulb': return <Lightbulb className="text-red-500 h-8 w-8" />;
      default: return <Pencil className="text-red-500 h-8 w-8" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.process.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.services.process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Process Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/464236030_2932793810212227_8223744442379499299_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tGtLKax3VscQ7kNvwFrEPhq&_nc_oc=AdktaWIprP60PC8tqU7HauWhs-hQPH8wjbllURV-7TvivaRr1Npn2G7Q3uJSDaT8GNe3BUb8uDEQAeBZ1K-gZTo6&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=-HQx_Oj1odGhx9Ezgirliw&oh=00_AfJjWHirClQ-N4trS-nYJEUwuiu4E6w8XIbXNZ0C9xCCmQ&oe=683B447E" 
                alt={language === 'fr' ? "Processus de design" : language === 'uk' ? "Процес дизайну" : "Design process"}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-red-100 rounded-full -z-10"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gray-100 rounded-full -z-10"></div>
          </div>

          {/* Process Steps */}
          <div>
            <div className="space-y-12">
              {services.map((service, index) => (
                <div key={service.id} className="flex">
                  {/* Step number and line */}
                  <div className="mr-6 flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full text-red-600 font-bold">
                      {index + 1}
                    </div>
                    {index < services.length - 1 && (
                      <div className="w-0.5 grow bg-gray-200 my-2"></div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div>
                    <div className="flex items-center mb-3">
                      {getIcon(service.icon)}
                      <h3 className="text-xl font-bold ml-3">{service.title[language]}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {service.description[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;