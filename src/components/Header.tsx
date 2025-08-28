import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { t } from '../data/translations';

interface HeaderProps {
  language: Language;
}

const Header: React.FC<HeaderProps> = ({ language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">Л</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              {language === 'ru' ? 'Лацканы с историей' : 'Lapels with History'}
            </span>
          </motion.div>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-accent-600 transition-colors duration-200 font-medium"
            >
              {language === 'ru' ? 'Галерея' : 'Gallery'}
            </button>
            <button
              onClick={() => scrollToSection('configurator')}
              className="text-gray-700 hover:text-accent-600 transition-colors duration-200 font-medium"
            >
              {language === 'ru' ? 'Конструктор' : 'Constructor'}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-accent-600 transition-colors duration-200 font-medium"
            >
              {language === 'ru' ? 'Цены' : 'Pricing'}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-accent-600 transition-colors duration-200 font-medium"
            >
              {language === 'ru' ? 'Контакты' : 'Contact'}
            </button>
          </nav>

          {/* Мобильное меню */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-accent-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container-custom py-4 space-y-4">
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left text-gray-700 hover:text-accent-600 transition-colors duration-200 font-medium py-2"
              >
                {language === 'ru' ? 'Галерея' : 'Gallery'}
              </button>
              <button
                onClick={() => scrollToSection('configurator')}
                className="block w-full text-left text-gray-700 hover:text-accent-600 transition-colors duration-200 font-medium py-2"
              >
                {language === 'ru' ? 'Конструктор' : 'Constructor'}
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left text-gray-700 hover:text-accent-600 transition-colors duration-200 font-medium py-2"
              >
                {language === 'ru' ? 'Цены' : 'Pricing'}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-accent-600 transition-colors duration-200 font-medium py-2"
              >
                {language === 'ru' ? 'Контакты' : 'Contact'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
