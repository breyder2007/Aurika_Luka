import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CookiePolicyPage: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'fr'
      ? 'Politique des Cookies | LeotardArt'
      : language === 'uk'
      ? 'Політика Використання Cookies | LeotardArt'
      : 'Cookie Policy | LeotardArt';
  }, [language]);

  return (
    <div className="min-h-screen">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {language === 'fr' ? 'Politique des Cookies' : 
             language === 'uk' ? 'Політика Використання Cookies' :
             'Cookie Policy'}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Informations sur l\'utilisation des cookies pour améliorer votre expérience sur notre site.'
              : language === 'uk'
              ? 'Інформація про те, як ми використовуємо файли cookie для покращення вашого досвіду на нашому сайті.'
              : 'Information about how we use cookies to improve your experience on our site.'}
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? '1. Qu\'est-ce que les Cookies ?' : 
                 language === 'uk' ? '1. Що таке Cookies?' :
                 '1. What are Cookies?'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'fr'
                  ? 'Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez notre site. Ils nous aident à :'
                  : language === 'uk'
                  ? 'Cookies - це невеликі текстові файли, які зберігаються на вашому пристрої під час відвідування нашого сайту. Вони допомагають нам:'
                  : 'Cookies are small text files stored on your device when you visit our site. They help us to:'}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>
                  {language === 'fr'
                    ? 'Mémoriser vos préférences'
                    : language === 'uk'
                    ? 'Запам\'ятовувати ваші налаштування'
                    : 'Remember your preferences'}
                </li>
                <li>
                  {language === 'fr'
                    ? 'Comprendre comment vous utilisez notre site'
                    : language === 'uk'
                    ? 'Розуміти, як ви використовуєте наш сайт'
                    : 'Understand how you use our site'}
                </li>
                <li>
                  {language === 'fr'
                    ? 'Améliorer votre expérience de navigation'
                    : language === 'uk'
                    ? 'Покращувати ваш досвід користування'
                    : 'Improve your browsing experience'}
                </li>
                <li>
                  {language === 'fr'
                    ? 'Vous fournir un contenu personnalisé'
                    : language === 'uk'
                    ? 'Надавати вам персоналізований контент'
                    : 'Provide you with personalized content'}
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? '2. Types de Cookies Utilisés' : 
                 language === 'uk' ? '2. Види Cookies, які ми Використовуємо' :
                 '2. Types of Cookies Used'}
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">
                    {language === 'fr' ? 'Cookies Essentiels' :
                     language === 'uk' ? 'Необхідні Cookies' :
                     'Essential Cookies'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'fr'
                      ? 'Nécessaires au fonctionnement de base du site. Ils ne peuvent pas être désactivés.'
                      : language === 'uk'
                      ? 'Необхідні для базового функціонування сайту. Їх не можна вимкнути.'
                      : 'Necessary for the basic functioning of the site. They cannot be disabled.'}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">
                    {language === 'fr' ? 'Cookies de Performance' :
                     language === 'uk' ? 'Cookies Продуктивності' :
                     'Performance Cookies'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'fr'
                      ? 'Nous aident à comprendre comment vous interagissez avec le site, nous permettant d\'améliorer son fonctionnement.'
                      : language === 'uk'
                      ? 'Допомагають нам зрозуміти, як ви взаємодієте з сайтом, що дозволяє покращити його роботу.'
                      : 'Help us understand how you interact with the site, allowing us to improve its functionality.'}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">
                    {language === 'fr' ? 'Cookies de Fonctionnalité' :
                     language === 'uk' ? 'Функціональні Cookies' :
                     'Functionality Cookies'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'fr'
                      ? 'Permettent de mémoriser vos préférences et de personnaliser votre expérience.'
                      : language === 'uk'
                      ? 'Дозволяють запам\'ятовувати ваші налаштування та персоналізувати ваш досвід.'
                      : 'Allow us to remember your preferences and personalize your experience.'}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">
                    {language === 'fr' ? 'Cookies de Marketing' :
                     language === 'uk' ? 'Маркетингові Cookies' :
                     'Marketing Cookies'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'fr'
                      ? 'Utilisés pour vous montrer des publicités pertinentes basées sur vos intérêts.'
                      : language === 'uk'
                      ? 'Використовуються для показу релевантної реклами на основі ваших інтересів.'
                      : 'Used to show you relevant advertisements based on your interests.'}
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? '3. Contrôle des Cookies' :
                 language === 'uk' ? '3. Керування Cookies' :
                 '3. Cookie Control'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'fr'
                  ? 'Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez :'
                  : language === 'uk'
                  ? 'Ви можете керувати та/або видаляти cookies за бажанням:'
                  : 'You can control and/or delete cookies as you wish:'}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>
                  {language === 'fr'
                    ? 'Configurez votre navigateur pour refuser les cookies'
                    : language === 'uk'
                    ? 'Налаштуйте ваш браузер для відхилення cookies'
                    : 'Configure your browser to reject cookies'}
                </li>
                <li>
                  {language === 'fr'
                    ? 'Supprimez les cookies existants'
                    : language === 'uk'
                    ? 'Видаліть існуючі cookies'
                    : 'Delete existing cookies'}
                </li>
                <li>
                  {language === 'fr'
                    ? 'Configurez des notifications pour les nouveaux cookies'
                    : language === 'uk'
                    ? 'Налаштуйте сповіщення для нових cookies'
                    : 'Set up notifications for new cookies'}
                </li>
              </ul>
              <p className="text-gray-600">
                {language === 'fr'
                  ? 'Notez que la désactivation des cookies peut affecter la fonctionnalité de ce site et d\'autres sites que vous visitez.'
                  : language === 'uk'
                  ? 'Зверніть увагу, що вимкнення cookies може вплинути на функціональність цього та інших сайтів, які ви відвідуєте.'
                  : 'Note that disabling cookies may affect the functionality of this site and other sites you visit.'}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? '4. Mises à Jour de la Politique' :
                 language === 'uk' ? '4. Оновлення Політики' :
                 '4. Policy Updates'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'fr'
                  ? 'Nous pouvons mettre à jour cette politique des cookies occasionnellement. Nous vous recommandons de la consulter régulièrement pour être informé de tout changement.'
                  : language === 'uk'
                  ? 'Ми можемо періодично оновлювати цю політику використання cookies. Рекомендуємо регулярно перевіряти її, щоб бути в курсі будь-яких змін.'
                  : 'We may update this cookie policy occasionally. We recommend checking it regularly to stay informed of any changes.'}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;