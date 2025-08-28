import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { t } from '../data/translations';

interface GalleryProps {
  language: Language;
}

const Gallery: React.FC<GalleryProps> = ({ language }) => {
  const images = [
    {
      id: 1,
      src: '/images/lapel-notch.jpg',
      alt: 'Notch lapel',
      title: language === 'ru' ? 'Notch лацкан' : 'Notch lapel',
      description: language === 'ru' ? 'Классический вариант для делового стиля' : 'Classic option for business style'
    },
    {
      id: 2,
      src: '/images/lapel-peak.jpg',
      alt: 'Peak lapel',
      title: language === 'ru' ? 'Peak лацкан' : 'Peak lapel',
      description: language === 'ru' ? 'Элегантный выбор для особых случаев' : 'Elegant choice for special occasions'
    },
    {
      id: 3,
      src: '/images/lapel-shawl.jpg',
      alt: 'Shawl lapel',
      title: language === 'ru' ? 'Shawl лацкан' : 'Shawl lapel',
      description: language === 'ru' ? 'Утончённый вариант для вечерних нарядов' : 'Sophisticated option for evening wear'
    }
  ];

  const secretFeatures = [
    {
      id: 1,
      title: language === 'ru' ? 'Секретный принт внутри' : 'Secret pattern inside',
      description: language === 'ru' ? 'Авторский принт, видимый только при отвороте лацкана' : 'Author pattern visible only when the lapel is turned',
      icon: '🔍'
    },
    {
      id: 2,
      title: language === 'ru' ? 'Принт под воротником' : 'Pattern under collar',
      description: language === 'ru' ? 'Скрытая деталь, которая удивит даже самых внимательных' : 'Hidden detail that will surprise even the most attentive',
      icon: '✨'
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('gallery.title', language)}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('gallery.subtitle', language)}
          </motion.p>
        </div>

        {/* Основные изображения */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] bg-gray-200 relative">
                {/* Placeholder для изображения */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-4xl mb-2">👔</div>
                    <div className="text-sm font-medium">{image.title}</div>
                  </div>
                </div>
                
                {/* Hover эффект */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Секретные особенности */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {language === 'ru' ? 'Секреты, которые видны не всем' : 'Secrets not visible to everyone'}
            </h3>
            <div className="space-y-6">
              {secretFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Placeholder для изображения секретных особенностей */}
            <div className="aspect-square bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl shadow-lg flex items-center justify-center">
              <div className="text-center text-accent-700">
                <div className="text-6xl mb-4">🔐</div>
                <div className="text-lg font-semibold">
                  {language === 'ru' ? 'Откройте секрет' : 'Discover the secret'}
                </div>
                <div className="text-sm mt-2">
                  {language === 'ru' ? 'Поверните лацкан' : 'Turn the lapel'}
                </div>
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-400 rounded-full opacity-30"></div>
          </motion.div>
        </div>

        {/* Призыв к действию */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6">
            {language === 'ru' 
              ? 'Создайте свой уникальный дизайн с секретом внутри'
              : 'Create your unique design with a secret inside'
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

export default Gallery;
