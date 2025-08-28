import { ProductVariant } from '../types';

export const PRODUCT_VARIANTS: ProductVariant[] = [
  {
    id: 'classic',
    name: 'Классик',
    nameEn: 'Classic',
    description: 'Базовый вариант для повседневного использования',
    descriptionEn: 'Basic option for everyday use',
    price: 89,
    originalPrice: 119,
    discount: 25,
    features: [
      'Качественная ткань',
      'Базовые принты',
      'Стандартная отделка',
      'Доставка 5-7 дней'
    ],
    featuresEn: [
      'Quality fabric',
      'Basic prints',
      'Standard finishing',
      'Delivery 5-7 days'
    ],
    popular: false
  },
  {
    id: 'story',
    name: 'История',
    nameEn: 'Story',
    description: 'Премиум вариант с авторскими принтами',
    descriptionEn: 'Premium option with author prints',
    price: 149,
    originalPrice: 199,
    discount: 25,
    features: [
      'Премиум ткань',
      'Авторские принты',
      'Улучшенная отделка',
      'Приоритетная доставка',
      'Персональная консультация'
    ],
    featuresEn: [
      'Premium fabric',
      'Author prints',
      'Enhanced finishing',
      'Priority delivery',
      'Personal consultation'
    ],
    popular: true
  },
  {
    id: 'collector',
    name: 'Коллекционер',
    nameEn: 'Collector',
    description: 'Эксклюзивный вариант для ценителей',
    descriptionEn: 'Exclusive option for connoisseurs',
    price: 299,
    originalPrice: 399,
    discount: 25,
    features: [
      'Эксклюзивная ткань',
      'Уникальные принты',
      'Ручная отделка',
      'Экспресс доставка',
      'Персональный менеджер',
      'Подарочная упаковка'
    ],
    featuresEn: [
      'Exclusive fabric',
      'Unique prints',
      'Hand finishing',
      'Express delivery',
      'Personal manager',
      'Gift packaging'
    ],
    popular: false
  }
];

export const getProductById = (id: string): ProductVariant | undefined => {
  return PRODUCT_VARIANTS.find(product => product.id === id);
};

export const getPopularProducts = (): ProductVariant[] => {
  return PRODUCT_VARIANTS.filter(product => product.popular);
};
