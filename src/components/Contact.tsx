import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { t } from '../data/translations';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // В реальном приложении здесь будет отправка через Formspree
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(formData)
      // });

      // Имитация отправки
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Скрываем сообщение об успехе через 5 секунд
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: language === 'ru' ? 'Email' : 'Email',
      value: 'hello@lapels-history.com',
      link: 'mailto:hello@lapels-history.com'
    },
    {
      icon: Phone,
      title: language === 'ru' ? 'Телефон' : 'Phone',
      value: '+49 30 123 456 78',
      link: 'tel:+493012345678'
    },
    {
      icon: MapPin,
      title: language === 'ru' ? 'Адрес' : 'Address',
      value: language === 'ru' ? 'Берлин, Германия' : 'Berlin, Germany',
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('contact.title', language)}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('contact.subtitle', language)}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {language === 'ru' ? 'Свяжитесь с нами' : 'Get in touch'}
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon size={24} className="text-accent-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {contact.title}
                    </h4>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        className="text-accent-600 hover:text-accent-700 transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{contact.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Дополнительная информация */}
            <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {language === 'ru' ? 'Часы работы' : 'Working hours'}
              </h4>
              <div className="space-y-2 text-gray-600">
                <p>{language === 'ru' ? 'Понедельник - Пятница' : 'Monday - Friday'}: 9:00 - 18:00</p>
                <p>{language === 'ru' ? 'Суббота' : 'Saturday'}: 10:00 - 16:00</p>
                <p>{language === 'ru' ? 'Воскресенье' : 'Sunday'}: {language === 'ru' ? 'Выходной' : 'Closed'}</p>
              </div>
            </div>
          </motion.div>

          {/* Форма обратной связи */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'ru' ? 'Отправить сообщение' : 'Send a message'}
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('contact.form.success', language)}
                  </h4>
                  <p className="text-gray-600">
                    {language === 'ru'
                      ? 'Мы свяжемся с вами в ближайшее время'
                      : 'We will contact you soon'
                    }
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name', language)}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200"
                      placeholder={language === 'ru' ? 'Ваше имя' : 'Your name'}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email', language)}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200"
                      placeholder={language === 'ru' ? 'your@email.com' : 'your@email.com'}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.message', language)}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder={language === 'ru' ? 'Ваше сообщение...' : 'Your message...'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <Send size={20} />
                    )}
                    <span>
                      {isSubmitting
                        ? (language === 'ru' ? 'Отправка...' : 'Sending...')
                        : t('contact.form.send', language)
                      }
                    </span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Дополнительные способы связи */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'ru' 
                ? 'Предзаказ и специальные заказы' 
                : 'Pre-orders and special orders'
              }
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'ru'
                ? 'Для предзаказов и специальных заказов свяжитесь с нами напрямую. Мы готовы обсудить ваши индивидуальные потребности.'
                : 'For pre-orders and special orders, contact us directly. We are ready to discuss your individual needs.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@lapels-history.com"
                className="btn-primary"
              >
                {language === 'ru' ? 'Написать email' : 'Send Email'}
              </a>
              <a
                href="tel:+493012345678"
                className="btn-outline"
              >
                {language === 'ru' ? 'Позвонить' : 'Call Us'}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
