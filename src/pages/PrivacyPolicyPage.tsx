import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicyPage: React.FC = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'fr' 
      ? 'Politique de Confidentialité | LeotardArt'
      : language === 'uk'
      ? 'Політика Конфіденційності | LeotardArt'
      : 'Privacy Policy | LeotardArt';
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
            {language === 'fr' ? 'Politique de Confidentialité' :
             language === 'uk' ? 'Політика Конфіденційності' :
             'Privacy Policy'}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Votre confidentialité est importante pour nous. Voici comment nous collectons et utilisons vos informations.'
              : language === 'uk'
              ? 'Ваша конфіденційність важлива для нас. Ось як ми збираємо та використовуємо вашу інформацію.'
              : 'Your privacy is important to us. Here\'s how we collect and use your information.'}
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? '1. Informations Collectées' :
                 language === 'uk' ? '1. Інформація, яку ми Збираємо' :
                 '1. Information We Collect'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'fr'
                  ? 'Nous collectons les informations que vous nous fournissez directement lorsque vous :'
                  : language === 'uk'
                  ? 'Ми збираємо інформацію, яку ви надаєте нам безпосередньо, коли ви:'
                  : 'We collect information that you provide directly to us when you:'}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>
                  {language === 'fr' ? 'Vous inscrivez sur notre site' :
                   language === 'uk' ? 'Реєструєтесь на нашому сайті' :
                   'Register on our site'}
                </li>
                <li>
                  {language === 'fr' ? 'Passez une commande' :
                   language === 'uk' ? 'Розміщуєте замовлення' :
                   'Place an order'}
                </li>
                <li>
                  {language === 'fr' ? 'Vous abonnez à notre newsletter' :
                   language === 'uk' ? 'Підписуєтесь на нашу розсилку' :
                   'Subscribe to our newsletter'}
                </li>
                <li>
                  {language === 'fr' ? 'Nous contactez pour des questions' :
                   language === 'uk' ? 'Звертаєтесь до нас із запитаннями' :
                   'Contact us with questions'}
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? '2. Utilisation des Informations' :
                 language === 'uk' ? '2. Використання Інформації' :
                 '2. Use of Information'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'fr'
                  ? 'Nous utilisons les informations collectées pour :'
                  : language === 'uk'
                  ? 'Ми використовуємо зібрану інформацію для:'
                  : 'We use the collected information to:'}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>
                  {language === 'fr' ? 'Traiter vos commandes' :
                   language === 'uk' ? 'Обробки ваших замовлень' :
                   'Process your orders'}
                </li>
                <li>
                  {language === 'fr' ? 'Vous envoyer des mises à jour sur votre commande' :
                   language === 'uk' ? 'Надсилання оновлень щодо вашого замовлення' :
                   'Send you order updates'}
                </li>
                <li>
                  {language === 'fr' ? 'Répondre à vos questions' :
                   language === 'uk' ? 'Відповіді на ваші запитання' :
                   'Answer your questions'}
                </li>
                <li>
                  {language === 'fr' ? 'Améliorer nos services' :
                   language === 'uk' ? 'Покращення наших послуг' :
                   'Improve our services'}
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? '3. Protection des Données' :
                 language === 'uk' ? '3. Захист Даних' :
                 '3. Data Protection'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'fr'
                  ? 'Nous mettons en œuvre des mesures de sécurité pour protéger vos informations personnelles :'
                  : language === 'uk'
                  ? 'Ми впроваджуємо заходи безпеки для захисту ваших персональних даних:'
                  : 'We implement security measures to protect your personal information:'}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>
                  {language === 'fr' ? 'Chiffrement SSL' :
                   language === 'uk' ? 'SSL шифрування' :
                   'SSL encryption'}
                </li>
                <li>
                  {language === 'fr' ? 'Accès restreint aux données personnelles' :
                   language === 'uk' ? 'Обмежений доступ до персональних даних' :
                   'Restricted access to personal data'}
                </li>
                <li>
                  {language === 'fr' ? 'Surveillance régulière de la sécurité' :
                   language === 'uk' ? 'Регулярний моніторинг безпеки' :
                   'Regular security monitoring'}
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? '4. Vos Droits' :
                 language === 'uk' ? '4. Ваші Права' :
                 '4. Your Rights'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'fr'
                  ? 'Conformément au RGPD, vous disposez des droits suivants :'
                  : language === 'uk'
                  ? 'Відповідно до GDPR, ви маєте такі права:'
                  : 'In accordance with GDPR, you have the following rights:'}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>
                  {language === 'fr' ? 'Droit d\'accès à vos données personnelles' :
                   language === 'uk' ? 'Право на доступ до ваших персональних даних' :
                   'Right to access your personal data'}
                </li>
                <li>
                  {language === 'fr' ? 'Droit de rectification des données inexactes' :
                   language === 'uk' ? 'Право на виправлення неточних даних' :
                   'Right to rectify inaccurate data'}
                </li>
                <li>
                  {language === 'fr' ? 'Droit à l\'effacement de vos données' :
                   language === 'uk' ? 'Право на видалення ваших даних' :
                   'Right to erasure of your data'}
                </li>
                <li>
                  {language === 'fr' ? 'Droit d\'opposition au traitement de vos données' :
                   language === 'uk' ? 'Право на заперечення проти обробки ваших даних' :
                   'Right to object to data processing'}
                </li>
                <li>
                  {language === 'fr' ? 'Droit à la portabilité de vos données' :
                   language === 'uk' ? 'Право на перенесення ваших даних' :
                   'Right to data portability'}
                </li>
                <li>
                  {language === 'fr' ? 'Droit de retirer votre consentement à tout moment' :
                   language === 'uk' ? 'Право відкликати свою згоду в будь-який час' :
                   'Right to withdraw your consent at any time'}
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;