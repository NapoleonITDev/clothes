import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Clock, Gift } from 'lucide-react';
import { Language } from '../types';
import { t } from '../data/translations';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-accent-500/20 rounded-full blur-xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-16 h-16 bg-primary-500/20 rounded-full blur-lg"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container-custom relative z-10 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Star className="w-5 h-5 text-yellow-500 fill-current" />
          <span className="text-sm font-semibold text-gray-800">
            {language === 'ru' ? 'Новинка 2024' : 'New 2024'}
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-shadow-lg">
            {language === 'ru' ? 'Лацканы с' : 'Lapels with'}
          </span>
          <br />
          <span className="gradient-text bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent text-shadow-lg">
            {language === 'ru' ? 'историей' : 'History'}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {language === 'ru' 
            ? 'Тонкая деталь, которая говорит за вас. Принт внутри лацкана и под воротником — видно только тем, кому вы захотите показать.'
            : 'A subtle detail that speaks for you. Print inside the lapel and under the collar — visible only to those you want to show.'
          }
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="btn-primary group">
            <span>{language === 'ru' ? 'Собрать свой дизайн' : 'Create Your Design'}</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="btn-secondary group">
            <span>{language === 'ru' ? 'Купить / Предзаказ' : 'Buy / Pre-order'}</span>
            <Gift className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            {
              icon: Shield,
              title: language === 'ru' ? 'Made in EU' : 'Made in EU',
              subtitle: language === 'ru' ? 'Качество Европы' : 'European Quality'
            },
            {
              icon: Clock,
              title: language === 'ru' ? '14 дней' : '14 Days',
              subtitle: language === 'ru' ? 'Возврат' : 'Return'
            },
            {
              icon: Star,
              title: language === 'ru' ? 'Ручная работа' : 'Handmade',
              subtitle: language === 'ru' ? 'Внимание к деталям' : 'Attention to Detail'
            }
          ].map((badge, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-500 to-primary-600 rounded-full flex items-center justify-center">
                <badge.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {badge.title}
              </h3>
              <p className="text-sm text-gray-600">
                {badge.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Urgency element */}
        <motion.div
          className="mt-12 inline-flex items-center space-x-3 bg-red-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Clock className="w-5 h-5 animate-pulse" />
          <span className="text-sm font-semibold">
            {language === 'ru' ? 'Ограниченный тираж' : 'Limited Edition'}
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
