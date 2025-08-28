import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Language } from '../types';
import { t } from '../data/translations';
import { getReviews, getAverageRating } from '../data/reviews';

interface ReviewsProps {
  language: Language;
}

const Reviews: React.FC<ReviewsProps> = ({ language }) => {
  const [currentReview, setCurrentReview] = useState(0);
  const reviews = getReviews(5);
  const averageRating = getAverageRating();

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
  };

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
            {t('reviews.title', language)}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('reviews.subtitle', language)}
          </motion.p>
        </div>

        {/* Общий рейтинг */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={`${
                    i < Math.floor(averageRating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">
              {averageRating}/5
            </span>
            <span className="text-sm text-gray-600">
              ({reviews.length} {language === 'ru' ? 'отзывов' : 'reviews'})
            </span>
          </div>
        </motion.div>

        {/* Карусель отзывов */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative"
          >
            {/* Иконка цитаты */}
            <div className="absolute top-6 right-6 text-accent-200">
              <Quote size={40} />
            </div>

            {/* Рейтинг */}
            <div className="flex items-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={`${
                    i < reviews[currentReview].rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Текст отзыва */}
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
              "{language === 'ru' ? reviews[currentReview].text : reviews[currentReview].textEn}"
            </blockquote>

            {/* Автор */}
            <div className="flex items-center justify-between">
              <div>
                <cite className="text-lg font-semibold text-gray-900 not-italic">
                  {reviews[currentReview].author}
                </cite>
                <p className="text-sm text-gray-500">
                  {new Date(reviews[currentReview].date).toLocaleDateString(
                    language === 'ru' ? 'ru-RU' : 'en-US',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }
                  )}
                </p>
              </div>
              
              {reviews[currentReview].verified && (
                <div className="flex items-center space-x-2 text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm font-medium">
                    {language === 'ru' ? 'Проверенный' : 'Verified'}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Навигация */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevReview}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
              aria-label={language === 'ru' ? 'Предыдущий отзыв' : 'Previous review'}
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </button>

            {/* Индикаторы */}
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentReview
                      ? 'bg-accent-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`${language === 'ru' ? 'Отзыв' : 'Review'} ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
              aria-label={language === 'ru' ? 'Следующий отзыв' : 'Next review'}
            >
              <ChevronRight size={24} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Дополнительная информация */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'ru' 
                ? 'Присоединяйтесь к довольным клиентам' 
                : 'Join satisfied customers'
              }
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'ru'
                ? 'Создайте свой уникальный дизайн и станьте частью нашего сообщества ценителей стиля'
                : 'Create your unique design and become part of our community of style connoisseurs'
              }
            </p>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
