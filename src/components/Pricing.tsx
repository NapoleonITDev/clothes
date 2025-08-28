import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, ArrowRight, Clock, Shield } from 'lucide-react';
import { Language } from '../types';
import { t } from '../data/translations';
import { PRODUCT_VARIANTS } from '../data/products';

interface PricingProps {
  language: Language;
}

const Pricing: React.FC<PricingProps> = ({ language }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4" />
            <span>{language === 'ru' ? 'Выберите свой уровень' : 'Choose Your Level'}</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {language === 'ru' ? 'Тарифы и' : 'Pricing &'}
            <span className="gradient-text ml-3">
              {language === 'ru' ? 'варианты' : 'Options'}
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {language === 'ru' 
              ? 'От классического стиля до коллекционного экземпляра — каждый вариант создан для тех, кто ценит детали'
              : 'From classic style to collector\'s piece — each option is crafted for those who appreciate details'
            }
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {PRODUCT_VARIANTS.map((variant, index) => (
            <motion.div
              key={variant.id}
              className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
                variant.id === 'story' 
                  ? 'ring-2 ring-accent-500 scale-105 lg:scale-110' 
                  : 'hover:scale-105'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Popular Badge */}
              {variant.id === 'story' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-accent-500 to-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4 inline mr-2" />
                    {language === 'ru' ? 'Популярно' : 'Popular'}
                  </div>
                </div>
              )}

              {/* Card Header */}
              <div className="p-8 text-center border-b border-gray-100">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  variant.id === 'classic' ? 'bg-gray-100' :
                  variant.id === 'story' ? 'bg-accent-100' :
                  'bg-primary-100'
                }`}>
                  {variant.id === 'classic' && <Shield className="w-8 h-8 text-gray-600" />}
                  {variant.id === 'story' && <Star className="w-8 h-8 text-accent-600" />}
                  {variant.id === 'collector' && <Crown className="w-8 h-8 text-primary-600" />}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {language === 'ru' ? variant.name : variant.nameEn}
                </h3>
                
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    €{variant.price}
                  </span>
                  {variant.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-2">
                      €{variant.originalPrice}
                    </span>
                  )}
                </div>

                {variant.discount && (
                  <div className="inline-flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    <span>🔥</span>
                    <span>{language === 'ru' ? `Скидка ${variant.discount}%` : `${variant.discount}% OFF`}</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {(language === 'ru' ? variant.features : variant.featuresEn).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    variant.id === 'story'
                      ? 'bg-gradient-to-r from-accent-600 to-accent-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>{language === 'ru' ? 'Оформить' : 'Order Now'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-accent-50 to-primary-50 rounded-3xl p-12 border border-accent-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'ru' 
                ? 'Готовы создать свой уникальный стиль?' 
                : 'Ready to create your unique style?'
              }
            </h3>
            
            <p className="text-lg text-gray-600 mb-8">
              {language === 'ru'
                ? 'Присоединяйтесь к тем, кто уже оценил качество и внимание к деталям'
                : 'Join those who already appreciate quality and attention to detail'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="btn-primary group"
              >
                <span>{language === 'ru' ? 'Начать сейчас' : 'Start Now'}</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="btn-outline">
                {language === 'ru' ? 'Узнать больше' : 'Learn More'}
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>{language === 'ru' ? 'Безопасная оплата' : 'Secure Payment'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>{language === 'ru' ? 'Быстрая доставка' : 'Fast Delivery'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>{language === 'ru' ? 'Гарантия качества' : 'Quality Guarantee'}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
