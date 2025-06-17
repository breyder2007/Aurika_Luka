import React, { useEffect } from 'react';
import { ArrowRight, Scissors } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const ServicesPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    document.title = language === 'fr' ? 'Nos Services | LeotardArt' : 
                     language === 'uk' ? 'Наші Послуги | LeotardArt' : 
                     'Our Services | LeotardArt';
  }, [language]);

  const sportsList = {
    fr: [
      'Gymnastique Artistique',
      'Gymnastique aux Agrès',
      'Patinage Artistique',
      'Natation Synchronisée',
      'Gymnastique Acrobatique',
      'Gymnastique Aérobic',
      'Twirling Bâton',
      'Gymnastique Rythmique (GR)',
      'Trampoline',
      'Danse Sportive (Lt, St)',
      'Performance'
    ],
    en: [
      'Artistic Gymnastics',
      'Apparatus Gymnastics',
      'Figure Skating',
      'Synchronized Swimming',
      'Acrobatic Gymnastics',
      'Aerobic Gymnastics',
      'Baton Twirling',
      'Rhythmic Gymnastics (RG)',
      'Trampoline',
      'Dance Sport (Lt, St)',
      'Performance'
    ],
    uk: [
      'Спортивна Гімнастика',
      'Гімнастика на Снарядах',
      'Фігурне Катання',
      'Синхронне Плавання',
      'Акробатична Гімнастика',
      'Спортивна Аеробіка',
      'Художнє Жонглювання',
      'Художня Гімнастика',
      'Стрибки на Батуті',
      'Спортивні Танці',
      'Виступи'
    ]
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t.services.pageTitle}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {t.services.pageSubtitle}
          </p>
        </div>
      </div>

      {/* Sports List Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{t.services.sports.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sportsList[language].map((sport, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center space-x-3">
                  <Scissors className="text-red-500 h-5 w-5 transform -rotate-45" />
                  <span className="text-gray-800">{sport}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">{t.services.designProcess.title}</h2>

            <div className="space-y-12">
              {/* Sketch Proposals */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6">{t.services.process.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <ul className="space-y-4">
                      {t.services.designSteps && Object.entries(t.services.designSteps).map(([key, value]) => (
                        <li key={key} className="flex items-center space-x-3">
                          <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600">
                      {t.services.process.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Custom Designs */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6">{t.services.customDesigns.title}</h3>
                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <p className="text-gray-800">
                    {t.services.customDesigns.description}
                  </p>
                </div>
              </div>

              {/* Haute Couture Workshop */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6">{t.services.workshop.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      {t.services.designProcess.title}
                    </h4>
                    <p className="text-gray-600">
                      {t.services.designProcess.description}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      {t.services.creationWork.title}
                    </h4>
                    <p className="text-gray-600">
                      {t.services.creationWork.description}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      {t.services.designTrend.title}
                    </h4>
                    <p className="text-gray-600">
                      {t.services.designTrend.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t.services.readyToCreate.title}</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.services.readyToCreate.description}
          </p>
          <a
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md transition-all transform hover:translate-y-[-2px] font-medium inline-flex items-center"
          >
            {t.services.contactNow}
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;