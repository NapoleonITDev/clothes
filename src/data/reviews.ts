import { Review } from '../types';

export const REVIEWS: Review[] = [
  {
    id: 'review01',
    author: 'Александр К.',
    rating: 5,
    text: 'Потрясающее качество! Принт внутри лацкана выглядит очень стильно, а главное - это мой маленький секрет. Все друзья в восторге от детали.',
    textEn: 'Amazing quality! The pattern inside the lapel looks very stylish, and most importantly - it\'s my little secret. All friends are delighted with the detail.',
    date: '2024-01-15',
    verified: true
  },
  {
    id: 'review02',
    author: 'Мария С.',
    rating: 5,
    text: 'Заказала для мужа на день рождения. Он был в восторге! Особенно понравился принт "Звёздная ночь" - очень романтично и необычно.',
    textEn: 'Ordered for my husband\'s birthday. He was delighted! Especially liked the "Starry Night" pattern - very romantic and unusual.',
    date: '2024-01-10',
    verified: true
  },
  {
    id: 'review03',
    author: 'Дмитрий В.',
    rating: 4,
    text: 'Отличный подарок для делового партнёра. Качество на высоте, доставка быстрая. Единственное - хотелось бы больше вариантов цветов канта.',
    textEn: 'Great gift for a business partner. Quality is excellent, delivery is fast. The only thing - I would like more trim color options.',
    date: '2024-01-08',
    verified: true
  },
  {
    id: 'review04',
    author: 'Елена П.',
    rating: 5,
    text: 'Купила себе и не пожалела! Принт "Мрамор" выглядит очень элегантно. Теперь это моя любимая деталь в гардеробе.',
    textEn: 'Bought for myself and didn\'t regret it! The "Marble" pattern looks very elegant. Now this is my favorite detail in my wardrobe.',
    date: '2024-01-05',
    verified: true
  },
  {
    id: 'review05',
    author: 'Сергей М.',
    rating: 5,
    text: 'Подарил другу на свадьбу. Он был потрясён! Особенно понравилась идея "секрета на подвороте". Теперь все гости хотят такие же.',
    textEn: 'Gave it to a friend for his wedding. He was amazed! Especially liked the idea of "secret on the inside". Now all guests want the same.',
    date: '2024-01-01',
    verified: true
  }
];

export const getReviews = (limit?: number): Review[] => {
  if (limit) {
    return REVIEWS.slice(0, limit);
  }
  return REVIEWS;
};

export const getAverageRating = (): number => {
  const totalRating = REVIEWS.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((totalRating / REVIEWS.length) * 10) / 10;
};
