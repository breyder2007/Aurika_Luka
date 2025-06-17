import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TermsOfServicePage: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'fr'
      ? 'Conditions d\'Utilisation | LeotardArt'
      : language === 'uk'
      ? 'Умови Використання | LeotardArt'
      : 'Terms of Service | LeotardArt';
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
            {language === 'fr' ? 'Conditions d\'Utilisation' :
             language === 'uk' ? 'Умови Використання' :
             'Terms of Service'}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {language === 'fr'
              ? 'Ces conditions établissent vos droits et responsabilités lors de l\'utilisation de nos services.'
              : language === 'uk'
              ? 'Ці умови встановлюють ваші права та обов\'язки при використанні наших послуг.'
              : 'These terms establish your rights and responsibilities when using our services.'}
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? '1. Acceptation des Conditions' :
                 language === 'uk' ? '1. Прийняття Умов' :
                 '1. Acceptance of Terms'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'fr'
                  ? 'En accédant et en utilisant ce site web, vous acceptez ces conditions d\'utilisation dans leur intégralité. Si vous n\'êtes pas d\'accord avec une partie des conditions, vous ne devez pas utiliser nos services.'
                  : language === 'uk'
                  ? 'Отримуючи доступ та використовуючи цей веб-сайт, ви приймаєте ці умови використання в повному обсязі. Якщо ви не згодні з будь-якою частиною умов, ви не повинні використовувати наші послуги.'
                  : 'By accessing and using this website, you accept these terms of use in their entirety. If you disagree with any part of the terms, you must not use our services.'}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? '2. Services' :
                 language === 'uk' ? '2. Послуги' :
                 '2. Services'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'fr'
                  ? 'Nous nous engageons à :'
                  : language === 'uk'
                  ? 'Ми зобов\'язуємося:'
                  : 'We commit to:'}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>
                  {language === 'fr'
                    ? 'Fournir des services de conception et de confection de haute qualité'
                    : language === 'uk'
                    ? 'Надавати високоякісні послуги з дизайну та пошиття'
                    : 'Provide high-quality design and manufacturing services'}
                </li>
                <li>
                  {language === 'fr'
                    ? 'Maintenir la confidentialité des designs'
                    : language === 'uk'
                    ? 'Зберігати конфіденційність дизайнів'
                    : 'Maintain design confidentiality'}
                </li>
                <li>
                  {language === 'fr'
                    ? 'Respecter les délais convenus'
                    : language === 'uk'
                    ? 'Дотримуватися узгоджених термінів'
                    : 'Meet agreed deadlines'}
                </li>
                <li>
                  {language === 'fr'
                    ? 'Utiliser des matériaux de première qualité'
                    : language === 'uk'
                    ? 'Використовувати матеріали найвищої якості'
                    : 'Use premium quality materials'}
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? '3. Commandes et Paiements' :
                 language === 'uk' ? '3. Замовлення та Оплата' :
                 '3. Orders and Payments'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'fr'
                  ? 'Politique de commande :'
                  : language === 'uk'
                  ? 'Політика замовлень:'
                  : 'Order policy:'}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>
                  {language === 'fr'
                    ? 'Un acompte initial de 50% est requis'
                    : language === 'uk'
                    ? 'Потрібна початкова передоплата 50%'
                    : 'An initial deposit of 50% is required'}
                </li>
                <li>
                  {language === 'fr'
                    ? 'Le solde doit être réglé avant la livraison'
                    : language === 'uk'
                    ? 'Залишок повинен бути оплачений до доставки'
                    : 'The balance must be paid before delivery'}
                </li>
                <li>
                  {language === 'fr'
                    ? 'Les prix peuvent varier selon la complexité du design'
                    : language === 'uk'
                    ? 'Ціни можуть варіюватися залежно від складності дизайну'
                    : 'Prices may vary depending on design complexity'}
                </li>
                <li>
                  {language === 'fr'
                    ? 'Les modifications sont acceptées jusqu\'à un certain stade du processus'
                    : language === 'uk'
                    ? 'Зміни приймаються до певного етапу процесу'
                    : 'Modifications are accepted up to a certain stage in the process'}
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? '4. Annulations et Remboursements' :
                 language === 'uk' ? '4. Скасування та Повернення Коштів' :
                 '4. Cancellations and Refunds'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'fr'
                  ? 'Notre politique d\'annulation :'
                  : language === 'uk'
                  ? 'Наша політика скасування:'
                  : 'Our cancellation policy:'}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>
                  {language === 'fr'
                    ? 'Annulation gratuite dans les 24 premières heures'
                    : language === 'uk'
                    ? 'Безкоштовне скасування протягом перших 24 годин'
                    : 'Free cancellation within the first 24 hours'}
                </li>
                <li>
                  {language === 'fr'
                    ? 'Remboursement de 50% si annulation avant le début de la production'
                    : language === 'uk'
                    ? 'Повернення 50% коштів при скасуванні до початку виробництва'
                    : '50% refund if cancelled before production begins'}
                </li>
                <li>
                  {language === 'fr'
                    ? 'Aucun remboursement une fois la production commencée'
                    : language === 'uk'
                    ? 'Без повернення коштів після початку виробництва'
                    : 'No refund once production has started'}
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? '5. Propriété Intellectuelle' :
                 language === 'uk' ? '5. Інтелектуальна Власність' :
                 '5. Intellectual Property'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'fr'
                  ? 'Droits sur les designs :'
                  : language === 'uk'
                  ? 'Права на дизайни:'
                  : 'Rights to designs:'}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>
                  {language === 'fr'
                    ? 'Les designs finaux sont la propriété du client'
                    : language === 'uk'
                    ? 'Фінальні дизайни є власністю клієнта'
                    : 'Final designs are the property of the client'}
                </li>
                <li>
                  {language === 'fr'
                    ? 'Nous pouvons utiliser des photos du produit pour notre portfolio'
                    : language === 'uk'
                    ? 'Ми можемо використовувати фотографії продукту для нашого портфоліо'
                    : 'We may use product photos for our portfolio'}
                </li>
                <li>
                  {language === 'fr'
                    ? 'Nous respectons les droits d\'auteur des tiers'
                    : language === 'uk'
                    ? 'Ми поважаємо авторські права третіх сторін'
                    : 'We respect third-party copyrights'}
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'fr' ? '6. Modifications' :
                 language === 'uk' ? '6. Зміни' :
                 '6. Modifications'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'fr'
                  ? 'Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur immédiatement après leur publication sur le site web.'
                  : language === 'uk'
                  ? 'Ми залишаємо за собою право змінювати ці умови в будь-який час. Зміни набувають чинності відразу після їх публікації на веб-сайті.'
                  : 'We reserve the right to modify these terms at any time. Modifications take effect immediately after being published on the website.'}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;