import React, { useState } from 'react';
import { Mail, Send, AlertCircle, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sport: '',
    message: '',
    preferredDate: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = t.contact.errors.nameRequired;
    }

    if (!formData.email.trim()) {
      errors.email = t.contact.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t.contact.errors.emailInvalid;
    }

    if (!formData.sport) {
      errors.sport = t.contact.errors.sportRequired;
    }

    if (!formData.message.trim()) {
      errors.message = t.contact.errors.messageRequired;
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      setFormData({
        name: '',
        email: '',
        sport: '',
        message: '',
        preferredDate: ''
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const sports = [
    t.contact.sports.artisticGymnastics,
    t.contact.sports.figureSkatting,
    t.contact.sports.synchronizedSwimming,
    t.contact.sports.rhythmicGymnastics,
    t.contact.sports.danceSport
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8 order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6">{t.contact.contactInfoTitle}</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full flex-shrink-0 mr-4">
                  <Phone className="text-red-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{t.contact.phone}</h4>
                  <p className="text-gray-600">+33 6 47 37 33 99</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full flex-shrink-0 mr-4">
                  <Mail className="text-red-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{t.contact.email}</h4>
                  <p className="text-gray-600">AourikaLuka@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8 order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-6">{t.contact.sendMessageTitle}</h3>

            {submitted ? (
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h4 className="font-bold text-green-700 mb-2">{t.contact.messageSentHeader}</h4>
                <p className="text-green-600">
                  {t.contact.messageSentText}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.contact.fullNameLabel} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.contact.emailLabel} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="sport" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.sportLabel} *
                  </label>
                  <select
                    id="sport"
                    name="sport"
                    value={formData.sport}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 ${
                      formErrors.sport ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">{t.contact.selectSportPlaceholder}</option>
                    {sports.map((sport) => (
                      <option key={sport} value={sport}>{sport}</option>
                    ))}
                  </select>
                  {formErrors.sport && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {formErrors.sport}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.preferredDateLabel}
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.messageLabel} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={t.contact.messagePlaceholder}
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      {t.contact.sendMessageButton}
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 mt-4">
                  {t.contact.requiredFieldsText}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;