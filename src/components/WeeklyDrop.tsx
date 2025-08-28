import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles, ArrowRight, Gift } from 'lucide-react';
import { Language } from '../types';

interface WeeklyDropProps {
  language: Language;
}

const WeeklyDrop: React.FC<WeeklyDropProps> = ({ language }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate time until next Friday at 12:00 PM
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextFriday = new Date();
      
      // Find next Friday
      const daysUntilFriday = (5 - now.getDay() + 7) % 7;
      nextFriday.setDate(now.getDate() + daysUntilFriday);
      nextFriday.setHours(12, 0, 0, 0);
      
      const difference = nextFriday.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToConfigurator = () => {
    const element = document.getElementById('configurator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-blue-500/20 rounded-full blur-lg"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold">
              {language === 'ru' ? 'Новый дроп каждую пятницу' : 'New drop every Friday'}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-shadow-lg">
              {language === 'ru' ? 'Weekly' : 'Weekly'}
            </span>
            <br />
            <span className="gradient-text bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent text-shadow-lg">
              {language === 'ru' ? 'Drop' : 'Drop'}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {language === 'ru'
              ? 'Каждую пятницу в 12:00 мы выпускаем новые эксклюзивные принты. Успейте забронировать свой дизайн!'
              : 'Every Friday at 12:00 PM we release new exclusive prints. Book your design before it\'s gone!'
            }
          </motion.p>
        </div>

        {/* Countdown Timer */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: language === 'ru' ? 'Дней' : 'Days', value: timeLeft.days, color: 'from-purple-500 to-purple-600' },
              { label: language === 'ru' ? 'Часов' : 'Hours', value: timeLeft.hours, color: 'from-blue-500 to-blue-600' },
              { label: language === 'ru' ? 'Минут' : 'Minutes', value: timeLeft.minutes, color: 'from-green-500 to-green-600' },
              { label: language === 'ru' ? 'Секунд' : 'Seconds', value: timeLeft.seconds, color: 'from-orange-500 to-orange-600' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`bg-gradient-to-b ${item.color} rounded-2xl p-6 shadow-lg mb-3`}>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-white/80 text-sm font-medium">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Preview of Next Drop */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {language === 'ru' ? 'Следующий дроп:' : 'Next drop:'}
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: language === 'ru' ? 'Геометрическая поэзия' : 'Geometric Poetry',
                  description: language === 'ru' ? 'Абстрактные формы в стиле модерн' : 'Abstract shapes in modern style',
                  preview: '🎨'
                },
                {
                  name: language === 'ru' ? 'Литературные мотивы' : 'Literary Motifs',
                  description: language === 'ru' ? 'Вдохновлено классической литературой' : 'Inspired by classic literature',
                  preview: '📚'
                },
                {
                  name: language === 'ru' ? 'Архитектурные линии' : 'Architectural Lines',
                  description: language === 'ru' ? 'Городская эстетика и структура' : 'Urban aesthetics and structure',
                  preview: '🏛️'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-4xl mb-3">{item.preview}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.name}</h4>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-accent-500 to-primary-600 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">
              {language === 'ru' 
                ? 'Забронируйте свой дизайн сейчас!' 
                : 'Book your design now!'
              }
            </h3>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {language === 'ru'
                ? 'Создайте уникальный лацкан с новым принтом и получите эксклюзивную скидку 20% на предзаказ'
                : 'Create a unique lapel with the new print and get an exclusive 20% discount on pre-order'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToConfigurator}
                className="bg-white text-accent-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2 group"
              >
                <span>{language === 'ru' ? 'Создать дизайн' : 'Create Design'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors duration-300 flex items-center space-x-2">
                <Gift className="w-5 h-5" />
                <span>{language === 'ru' ? 'Узнать больше' : 'Learn More'}</span>
              </button>
            </div>

            {/* Bonus Info */}
            <div className="mt-8 p-4 bg-white/10 rounded-2xl border border-white/20">
              <p className="text-white/90 text-sm">
                <span className="font-semibold">🎁 {language === 'ru' ? 'Бонус:' : 'Bonus:'}</span>
                {language === 'ru'
                  ? ' Первые 50 заказов получают бесплатную доставку и подарочную упаковку'
                  : ' First 50 orders get free shipping and gift packaging'
                }
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeeklyDrop;
