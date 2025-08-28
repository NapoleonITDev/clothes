import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { t } from '../data/translations';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* О компании */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">Л</span>
              </div>
              <span className="text-xl font-bold">
                {language === 'ru' ? 'Лацканы с историей' : 'Lapels with History'}
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {language === 'ru'
                ? 'Создаем уникальные лацканы с авторскими принтами, которые рассказывают вашу историю. Каждый дизайн — это произведение искусства с секретом внутри.'
                : 'We create unique lapels with author patterns that tell your story. Each design is a work of art with a secret inside.'
              }
            </p>
            <div className="flex space-x-4">
              {/* Социальные сети */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <span className="text-lg">📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <span className="text-lg">📘</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <span className="text-lg">🐦</span>
              </a>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'ru' ? 'Быстрые ссылки' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {[
                { id: 'gallery', label: language === 'ru' ? 'Галерея' : 'Gallery' },
                { id: 'configurator', label: language === 'ru' ? 'Конструктор' : 'Constructor' },
                { id: 'pricing', label: language === 'ru' ? 'Цены' : 'Pricing' },
                { id: 'contact', label: language === 'ru' ? 'Контакты' : 'Contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'ru' ? 'Контакты' : 'Contact'}
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="mailto:hello@lapels-history.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  hello@lapels-history.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+493012345678"
                  className="hover:text-white transition-colors duration-200"
                >
                  +49 30 123 456 78
                </a>
              </li>
              <li>
                {language === 'ru' ? 'Берлин, Германия' : 'Berlin, Germany'}
              </li>
            </ul>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Права */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                {t('footer.rights', language).replace('2024', currentYear.toString())}
              </p>
            </div>

            {/* Дисклеймер */}
            <div className="text-center md:text-right max-w-md">
              <p className="text-gray-400 text-xs leading-relaxed">
                {t('footer.disclaimer', language)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Кнопка "Наверх" */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-accent-600 text-white rounded-full shadow-lg hover:bg-accent-700 transition-colors duration-200 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={language === 'ru' ? 'Наверх' : 'To top'}
      >
        <span className="text-lg">↑</span>
      </motion.button>
    </footer>
  );
};

export default Footer;
