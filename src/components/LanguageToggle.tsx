import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  language, 
  onLanguageChange 
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex">
        <button
          onClick={() => onLanguageChange('ru')}
          className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
            language === 'ru'
              ? 'bg-accent-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          RU
        </button>
        <button
          onClick={() => onLanguageChange('en')}
          className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
            language === 'en'
              ? 'bg-accent-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          EN
        </button>
      </div>
    </motion.div>
  );
};

export default LanguageToggle;
