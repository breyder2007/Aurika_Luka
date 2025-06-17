import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    document.title = language === 'fr' ? 'Contact | LeotardArt' : 'Contact | LeotardArt';
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t.contact.title}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            <br />
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="mb-6">
              {t.contact.letter.greeting}<br />
              {t.contact.letter.intro}<br />
              {t.contact.letter.paragraph1}
            </p>
            <p className="mb-6">
              {t.contact.letter.paragraph2}
            </p>
            <p className="mb-6">
              {t.contact.letter.paragraph3}
            </p>
            <p className="mb-6">
              {t.contact.letter.wishes}
            </p>
            <div className="mt-12 text-right">
              <p className="font-semibold mb-1">{t.contact.letter.closing}</p>
              <p className="text-xl font-bold mb-1">{t.contact.letter.signature}</p>
              <p className="text-gray-600">{t.contact.letter.title}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
};

export default ContactPage;