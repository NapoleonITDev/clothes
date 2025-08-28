import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Language, LapelConfig } from '../../types';
import { t } from '../../data/translations';
import { updateURL, saveConfigToStorage } from '../../lib/urlState';
import Canvas from './Canvas';
import Controls from './Controls';
import Share from './Share';

interface ConfiguratorProps {
  language: Language;
  config: LapelConfig;
  onConfigChange: (config: LapelConfig) => void;
}

const Configurator: React.FC<ConfiguratorProps> = ({ 
  language, 
  config, 
  onConfigChange 
}) => {
  useEffect(() => {
    // Обновляем URL и сохраняем в localStorage при изменении конфигурации
    updateURL(config);
    saveConfigToStorage(config);
  }, [config]);

  const handleConfigChange = (updates: Partial<LapelConfig>) => {
    const newConfig = { ...config, ...updates };
    onConfigChange(newConfig);
  };

  return (
    <section id="configurator" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('configurator.title', language)}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('configurator.subtitle', language)}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Canvas с предпросмотром */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Canvas config={config} />
          </motion.div>

          {/* Панель управления */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Controls
              language={language}
              config={config}
              onConfigChange={handleConfigChange}
            />
            
            {/* Кнопка поделиться */}
            <div className="mt-8">
              <Share 
                language={language} 
                config={config} 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Configurator;
