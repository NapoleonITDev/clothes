import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { t } from '../data/translations';

interface WhySectionProps {
  language: Language;
}

const WhySection: React.FC<WhySectionProps> = ({ language }) => {
  const benefits = [
    {
      id: 1,
      icon: '🎯',
      title: t('why.style', language),
      description: language === 'ru' 
        ? 'Умеренная смелость, которая не нарушает деловой этикет, но добавляет характер'
        : 'Moderate boldness that doesn\'t violate business etiquette but adds character',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      icon: '😏',
      title: t('why.attitude', language),
      description: language === 'ru'
        ? 'Легкая дерзость, которая говорит о вашей уверенности и вкусе'
        : 'Light attitude that speaks of your confidence and taste',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      icon: '🤫',
      title: t('why.secret', language),
      description: language === 'ru'
        ? 'Скрытая история, которую знаете только вы и те, кому покажете'
        : 'Hidden story that only you and those you show know',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      icon: '🎁',
      title: t('why.gift', language),
      description: language === 'ru'
        ? 'Подарок с характером, который запомнится надолго'
        : 'A gift with character that will be remembered for a long time',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('why.title', language)}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('why.subtitle', language)}
          </motion.p>
        </div>

        {/* Преимущества */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {language === 'ru' 
                  ? 'Стиль, который работает на вас' 
                  : 'Style that works for you'
                }
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  {language === 'ru'
                    ? 'Наши лацканы — это не просто аксессуар, это способ выразить свою индивидуальность, оставаясь в рамках приличий. Каждый дизайн создан с пониманием того, что настоящий стиль — это баланс между смелостью и элегантностью.'
                    : 'Our lapels are not just an accessory, they are a way to express your individuality while staying within the bounds of decency. Each design is created with the understanding that true style is a balance between boldness and elegance.'
                  }
                </p>
                <p className="leading-relaxed">
                  {language === 'ru'
                    ? 'Идеально подходит для деловых встреч, особых случаев и повседневного использования. Ваш секрет будет с вами всегда, готовый удивить тех, кто заслуживает это увидеть.'
                    : 'Perfect for business meetings, special occasions and everyday use. Your secret will always be with you, ready to surprise those who deserve to see it.'
                  }
                </p>
              </div>
            </div>
            
            <div className="relative">
              {/* Placeholder для изображения */}
              <div className="aspect-square bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center text-accent-700">
                  <div className="text-6xl mb-4">💼</div>
                  <div className="text-lg font-semibold">
                    {language === 'ru' ? 'Деловой стиль' : 'Business style'}
                  </div>
                  <div className="text-sm mt-2">
                    {language === 'ru' ? 'с характером' : 'with character'}
                  </div>
                </div>
              </div>
              
              {/* Декоративные элементы */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-300 rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-400 rounded-full opacity-40"></div>
            </div>
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6">
            {language === 'ru'
              ? 'Готовы добавить характер в свой стиль?'
              : 'Ready to add character to your style?'
            }
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('configurator');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            {language === 'ru' ? 'Создать дизайн' : 'Create Design'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
