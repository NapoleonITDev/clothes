import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';
import { t } from '../data/translations';
import { getFAQByCategory, getAllFAQ } from '../data/faq';

interface FAQProps {
  language: Language;
}

const FAQ: React.FC<FAQProps> = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'all', name: language === 'ru' ? 'Все вопросы' : 'All questions' },
    { id: 'general', name: language === 'ru' ? 'Общие' : 'General' },
    { id: 'shipping', name: language === 'ru' ? 'Доставка' : 'Shipping' },
    { id: 'returns', name: language === 'ru' ? 'Возврат' : 'Returns' },
    { id: 'care', name: language === 'ru' ? 'Уход' : 'Care' }
  ];

  const faqItems = activeCategory === 'all' 
    ? getAllFAQ() 
    : getFAQByCategory(activeCategory as any);

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('faq.title', language)}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('faq.subtitle', language)}
          </motion.p>
        </div>

        {/* Фильтр по категориям */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category.id
                  ? 'bg-accent-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* FAQ элементы */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openItems.has(item.id)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {language === 'ru' ? item.question : item.questionEn}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.has(item.id) ? (
                    <ChevronUp size={20} className="text-accent-600" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openItems.has(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {language === 'ru' ? item.answer : item.answerEn}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Дополнительная помощь */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'ru' 
                ? 'Не нашли ответ на свой вопрос?' 
                : 'Didn\'t find the answer to your question?'
              }
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'ru'
                ? 'Наша команда поддержки готова помочь вам. Свяжитесь с нами любым удобным способом.'
                : 'Our support team is ready to help you. Contact us in any convenient way.'
              }
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              {language === 'ru' ? 'Связаться с нами' : 'Contact Us'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
