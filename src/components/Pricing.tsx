import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Language } from '../types';
import { t } from '../data/translations';
import { PRODUCT_VARIANTS } from '../data/products';

interface PricingProps {
  language: Language;
}

const Pricing: React.FC<PricingProps> = ({ language }) => {
  const handleOrder = (productId: string) => {
    // В реальном приложении здесь будет переход на страницу оплаты
    // Пока что просто скроллим к контактам
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('pricing.title', language)}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('pricing.subtitle', language)}
          </motion.p>
        </div>

        {/* Карточки цен */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {PRODUCT_VARIANTS.map((product, index) => (
            <motion.div
              key={product.id}
              className={`relative bg-white rounded-2xl shadow-xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                product.popular
                  ? 'border-accent-600 scale-105'
                  : 'border-gray-200'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Популярный бейдж */}
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star size={16} className="fill-current" />
                    <span>{language === 'ru' ? 'Популярный' : 'Popular'}</span>
                  </div>
                </div>
              )}

              {/* Заголовок */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {language === 'ru' ? product.name : product.nameEn}
                </h3>
                <p className="text-gray-600">
                  {language === 'ru' ? product.description : product.descriptionEn}
                </p>
              </div>

              {/* Цена */}
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  €{product.price}
                </div>
                <p className="text-sm text-gray-500">
                  {language === 'ru' ? 'за единицу' : 'per unit'}
                </p>
              </div>

              {/* Особенности */}
              <div className="space-y-3 mb-8">
                {(language === 'ru' ? product.features : product.featuresEn).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Кнопка заказа */}
              <button
                onClick={() => handleOrder(product.id)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  product.popular
                    ? 'bg-accent-600 hover:bg-accent-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {t('pricing.order', language)}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <motion.div
          className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            {language === 'ru' 
              ? 'Нужна помощь с выбором?' 
              : 'Need help choosing?'
            }
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {language === 'ru'
              ? 'Наша команда экспертов готова помочь вам выбрать идеальный вариант. Свяжитесь с нами для персональной консультации.'
              : 'Our team of experts is ready to help you choose the perfect option. Contact us for a personal consultation.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('configurator');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              {language === 'ru' ? 'Создать дизайн' : 'Create Design'}
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-outline"
            >
              {language === 'ru' ? 'Связаться с нами' : 'Contact Us'}
            </button>
          </div>
        </motion.div>

        {/* Гарантии */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: '🚚',
              title: language === 'ru' ? 'Быстрая доставка' : 'Fast delivery',
              description: language === 'ru'
                ? 'Доставляем по всему миру с отслеживанием'
                : 'We deliver worldwide with tracking'
            },
            {
              icon: '🔒',
              title: language === 'ru' ? 'Безопасная оплата' : 'Secure payment',
              description: language === 'ru'
                ? 'Защищенные платежи через проверенные системы'
                : 'Secure payments through verified systems'
            },
            {
              icon: '✅',
              title: language === 'ru' ? 'Гарантия качества' : 'Quality guarantee',
              description: language === 'ru'
                ? 'Возврат и обмен в течение гарантийного срока'
                : 'Return and exchange within warranty period'
            }
          ].map((guarantee, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{guarantee.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {guarantee.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {guarantee.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
