import { ProductVariant } from '../types';

export const PRODUCT_VARIANTS: ProductVariant[] = [
  {
    id: 'classic',
    name: 'Classic',
    nameEn: 'Classic',
    description: 'Базовый вариант с классическим принтом. Идеально для повседневного использования и деловых встреч.',
    descriptionEn: 'Basic variant with classic pattern. Perfect for everyday use and business meetings.',
    price: 89,
    features: [
      'Классический принт',
      'Стандартная отделка',
      'Быстрая доставка',
      '14 дней на возврат'
    ],
    featuresEn: [
      'Classic pattern',
      'Standard finishing',
      'Fast delivery',
      '14-day return policy'
    ]
  },
  {
    id: 'story',
    name: 'Story',
    nameEn: 'Story',
    description: 'Премиум вариант с уникальным авторским принтом. Каждый дизайн рассказывает свою историю.',
    descriptionEn: 'Premium variant with unique author pattern. Each design tells its own story.',
    price: 129,
    features: [
      'Уникальный авторский принт',
      'Премиум отделка',
      'Персональная упаковка',
      'Приоритетная доставка',
      '30 дней на возврат'
    ],
    featuresEn: [
      'Unique author pattern',
      'Premium finishing',
      'Personal packaging',
      'Priority delivery',
      '30-day return policy'
    ],
    popular: true
  },
  {
    id: 'collector',
    name: 'Collector',
    nameEn: 'Collector',
    description: 'Эксклюзивный коллекционный вариант. Ограниченный тираж, ручная работа, сертификат подлинности.',
    descriptionEn: 'Exclusive collector variant. Limited edition, handmade, authenticity certificate.',
    price: 199,
    features: [
      'Эксклюзивный дизайн',
      'Ручная работа',
      'Сертификат подлинности',
      'Нумерованный экземпляр',
      'VIP упаковка',
      'Бесплатная доставка',
      '60 дней на возврат'
    ],
    featuresEn: [
      'Exclusive design',
      'Handmade',
      'Authenticity certificate',
      'Numbered copy',
      'VIP packaging',
      'Free delivery',
      '60-day return policy'
    ]
  }
];

export const getProductById = (id: string): ProductVariant | undefined => {
  return PRODUCT_VARIANTS.find(product => product.id === id);
};

export const getPopularProduct = (): ProductVariant | undefined => {
  return PRODUCT_VARIANTS.find(product => product.popular);
};
