import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Heart, Share2, Star, Users, TrendingUp } from 'lucide-react';
import { Language } from '../types';

interface DesignBattlesProps {
  language: Language;
}

interface DesignEntry {
  id: string;
  name: string;
  description: string;
  votes: number;
  image: string;
  author: string;
  isWinner?: boolean;
}

const DesignBattles: React.FC<DesignBattlesProps> = ({ language }) => {
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [showVoteModal, setShowVoteModal] = useState(false);

  // Mock data for design battles
  const topDesigns: DesignEntry[] = [
    {
      id: '1',
      name: language === 'ru' ? 'Геометрическая симфония' : 'Geometric Symphony',
      description: language === 'ru' ? 'Современный минимализм с геометрическими формами' : 'Modern minimalism with geometric shapes',
      votes: 1247,
      image: '🎨',
      author: 'Alex K.',
      isWinner: true
    },
    {
      id: '2',
      name: language === 'ru' ? 'Литературные мотивы' : 'Literary Motifs',
      description: language === 'ru' ? 'Вдохновлено произведениями классиков' : 'Inspired by classic literature',
      votes: 892,
      image: '📚',
      author: 'Maria S.'
    },
    {
      id: '3',
      name: language === 'ru' ? 'Архитектурные линии' : 'Architectural Lines',
      description: language === 'ru' ? 'Городская эстетика и структура' : 'Urban aesthetics and structure',
      votes: 756,
      image: '🏛️',
      author: 'David L.'
    },
    {
      id: '4',
      name: language === 'ru' ? 'Природные текстуры' : 'Natural Textures',
      description: language === 'ru' ? 'Органические формы и природные мотивы' : 'Organic shapes and natural motifs',
      votes: 634,
      image: '🌿',
      author: 'Elena R.'
    },
    {
      id: '5',
      name: language === 'ru' ? 'Космические узоры' : 'Cosmic Patterns',
      description: language === 'ru' ? 'Галактические мотивы и звездные карты' : 'Galactic motifs and star maps',
      votes: 521,
      image: '✨',
      author: 'Nikolai V.'
    }
  ];

  const handleVote = (designId: string) => {
    setSelectedDesign(designId);
    setShowVoteModal(true);
  };

  const handleShare = (design: DesignEntry) => {
    const text = language === 'ru' 
      ? `Посмотрите на потрясающий дизайн "${design.name}" от ${design.author}! Голосуйте за лучший дизайн недели!`
      : `Check out this amazing design "${design.name}" by ${design.author}! Vote for the best design of the week!`;
    
    const url = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: language === 'ru' ? 'Дизайн недели' : 'Design of the Week',
        text: text,
        url: url
      });
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(`${text} ${url}`);
      alert(language === 'ru' ? 'Ссылка скопирована!' : 'Link copied!');
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-6 py-3 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Trophy className="w-5 h-5" />
            <span>{language === 'ru' ? 'Дизайн-баттлы недели' : 'Weekly Design Battles'}</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {language === 'ru' ? 'Голосуйте за' : 'Vote for the'}
            <span className="gradient-text ml-3">
              {language === 'ru' ? 'лучший дизайн' : 'Best Design'}
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
              ? 'Каждую неделю наши дизайнеры создают уникальные принты. Голосуйте за любимые и делитесь с друзьями!'
              : 'Every week our designers create unique prints. Vote for your favorites and share with friends!'
            }
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Users, value: '2,847', label: language === 'ru' ? 'Участников' : 'Participants' },
            { icon: Heart, value: '15,234', label: language === 'ru' ? 'Голосов' : 'Votes' },
            { icon: Share2, value: '8,921', label: language === 'ru' ? 'Поделились' : 'Shares' },
            { icon: TrendingUp, value: '+127%', label: language === 'ru' ? 'Рост' : 'Growth' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-100 to-primary-100 rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-accent-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Top Designs */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {topDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                design.isWinner ? 'ring-2 ring-yellow-400 scale-105' : 'hover:scale-105'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Winner Badge */}
              {design.isWinner && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Trophy className="w-3 h-3" />
                    <span>{language === 'ru' ? 'Победитель' : 'Winner'}</span>
                  </div>
                </div>
              )}

              {/* Design Preview */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-6xl">{design.image}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{design.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{design.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    {language === 'ru' ? 'Автор:' : 'By:'} <span className="font-medium">{design.author}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{design.votes}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleVote(design.id)}
                    className="flex-1 bg-accent-600 text-white py-2 px-4 rounded-lg hover:bg-accent-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Heart className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {language === 'ru' ? 'Голосовать' : 'Vote'}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => handleShare(design)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-accent-50 to-primary-50 rounded-3xl p-12 border border-accent-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            {language === 'ru' 
              ? 'Хотите участвовать в следующем баттле?' 
              : 'Want to participate in the next battle?'
            }
          </h3>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {language === 'ru'
              ? 'Создайте свой уникальный дизайн лацкана и получите шанс стать победителем недели!'
              : 'Create your unique lapel design and get a chance to become the winner of the week!'
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary group">
              <span>{language === 'ru' ? 'Создать дизайн' : 'Create Design'}</span>
              <Trophy className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            
            <button className="btn-outline">
              {language === 'ru' ? 'Узнать правила' : 'Learn Rules'}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Vote Modal */}
      {showVoteModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowVoteModal(false)}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-100 to-primary-100 rounded-full flex items-center justify-center">
              <Heart className="w-10 h-10 text-accent-600 fill-current" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'ru' ? 'Спасибо за голос!' : 'Thanks for voting!'}
            </h3>
            
            <p className="text-gray-600 mb-6">
              {language === 'ru'
                ? 'Ваш голос учтен. Результаты будут объявлены в конце недели.'
                : 'Your vote has been counted. Results will be announced at the end of the week.'
              }
            </p>
            
            <button
              onClick={() => setShowVoteModal(false)}
              className="btn-primary w-full"
            >
              {language === 'ru' ? 'Отлично!' : 'Great!'}
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default DesignBattles;
