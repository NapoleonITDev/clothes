import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { t } from '../data/translations';

interface HowSectionProps {
  language: Language;
}

const HowSection: React.FC<HowSectionProps> = ({ language }) => {
  const processes = [
    {
      id: 1,
      icon: '🧵',
      title: t('how.materials', language),
      description: language === 'ru'
        ? 'Используем только премиум материалы: итальянская шерсть, французский шелк, немецкие нити. Каждый материал проходит строгий контроль качества.'
        : 'We use only premium materials: Italian wool, French silk, German threads. Each material undergoes strict quality control.',
      color: 'from-blue-500 to-blue-600',
      step: '01'
    },
    {
      id: 2,
      icon: '🎨',
      title: t('how.printing', language),
      description: language === 'ru'
        ? 'Специальная технология печати и вышивки, которая обеспечивает стойкость принта на протяжении всего срока службы изделия.'
        : 'Special printing and embroidery technology that ensures pattern durability throughout the product\'s service life.',
      color: 'from-purple-500 to-purple-600',
      step: '02'
    },
    {
      id: 3,
      icon: '🔧',
      title: t('how.care', language),
      description: language === 'ru'
        ? 'Простой уход: сухая чистка, влажная протирка при необходимости. Принт не выцветает и не теряет яркости.'
        : 'Easy care: dry cleaning, wet wiping if necessary. The pattern does not fade or lose brightness.',
      color: 'from-green-500 to-green-600',
      step: '03'
    }
  ];

  const features = [
    {
      id: 1,
      icon: '🇪🇺',
      title: language === 'ru' ? 'Made in EU' : 'Made in EU',
      description: language === 'ru'
        ? 'Производство в Европе гарантирует качество и соблюдение стандартов'
        : 'Production in Europe guarantees quality and compliance with standards'
    },
    {
      id: 2,
      icon: '✋',
      title: language === 'ru' ? 'Ручная работа' : 'Handmade',
      description: language === 'ru'
        ? 'Каждый лацкан создается вручную опытными мастерами'
        : 'Each lapel is handmade by experienced craftsmen'
    },
    {
      id: 3,
      icon: '🔒',
      title: language === 'ru' ? 'Гарантия качества' : 'Quality guarantee',
      description: language === 'ru'
        ? '14-60 дней на возврат в зависимости от варианта'
        : '14-60 days return policy depending on the option'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('how.title', language)}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('how.subtitle', language)}
          </motion.p>
        </div>

        {/* Процесс производства */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {processes.map((process, index) => (
            <motion.div
              key={process.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Номер шага */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-lg font-bold z-10">
                {process.step}
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {process.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {process.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Особенности качества */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'ru' ? 'Почему выбирают нас' : 'Why choose us'}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'ru'
                ? 'Мы не просто создаем лацканы, мы создаем произведения искусства, которые будут служить вам долгие годы'
                : 'We don\'t just create lapels, we create works of art that will serve you for many years'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Детали производства */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {language === 'ru' 
                ? 'Внимание к каждой детали' 
                : 'Attention to every detail'
              }
            </h3>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                {language === 'ru'
                  ? 'Наш процесс производства включает более 20 этапов контроля качества. Каждый лацкан проверяется на соответствие стандартам перед отправкой клиенту.'
                  : 'Our production process includes more than 20 quality control stages. Each lapel is checked for compliance with standards before being sent to the client.'
                }
              </p>
              <p className="leading-relaxed">
                {language === 'ru'
                  ? 'Мы используем только экологически чистые материалы и красители, безопасные для здоровья и окружающей среды.'
                  : 'We use only environmentally friendly materials and dyes that are safe for health and the environment.'
                }
              </p>
              <p className="leading-relaxed">
                {language === 'ru'
                  ? 'Каждый мастер проходит специальное обучение и имеет многолетний опыт работы с премиум материалами.'
                  : 'Each craftsman undergoes special training and has years of experience working with premium materials.'
                }
              </p>
            </div>
          </div>
          
          <div className="relative">
            {/* Placeholder для изображения производства */}
            <div className="aspect-square bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl shadow-lg flex items-center justify-center">
              <div className="text-center text-accent-700">
                <div className="text-6xl mb-4">🏭</div>
                <div className="text-lg font-semibold">
                  {language === 'ru' ? 'Производство' : 'Production'}
                </div>
                <div className="text-sm mt-2">
                  {language === 'ru' ? 'в Европе' : 'in Europe'}
                </div>
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-300 rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-400 rounded-full opacity-40"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowSection;
