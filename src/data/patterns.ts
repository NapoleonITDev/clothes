import { Pattern } from '../types';

export const PATTERNS: Pattern[] = [
  // Геометрические паттерны
  {
    id: 'geo01',
    name: 'Геометрия 01',
    nameEn: 'Geometry 01',
    preview: '/patterns/geo01_thumb.png',
    file: '/patterns/geo01.svg',
    tags: ['универсальный', 'минимал', 'геометрия'],
    tagsEn: ['universal', 'minimal', 'geometric'],
    category: 'geometric'
  },
  {
    id: 'geo02',
    name: 'Точки и линии',
    nameEn: 'Dots & Lines',
    preview: '/patterns/geo02_thumb.png',
    file: '/patterns/geo02.svg',
    tags: ['классика', 'точки', 'линии'],
    tagsEn: ['classic', 'dots', 'lines'],
    category: 'geometric'
  },
  {
    id: 'geo03',
    name: 'Шестигранники',
    nameEn: 'Hexagons',
    preview: '/patterns/geo03_thumb.png',
    file: '/patterns/geo03.svg',
    tags: ['современный', 'шестигранники', 'структура'],
    tagsEn: ['modern', 'hexagons', 'structure'],
    category: 'geometric'
  },
  {
    id: 'geo04',
    name: 'Волны',
    nameEn: 'Waves',
    preview: '/patterns/geo04_thumb.png',
    file: '/patterns/geo04.svg',
    tags: ['динамичный', 'волны', 'плавность'],
    tagsEn: ['dynamic', 'waves', 'smooth'],
    category: 'geometric'
  },
  {
    id: 'geo05',
    name: 'Сетка',
    nameEn: 'Grid',
    preview: '/patterns/geo05_thumb.png',
    file: '/patterns/geo05.svg',
    tags: ['архитектурный', 'сетка', 'порядок'],
    tagsEn: ['architectural', 'grid', 'order'],
    category: 'geometric'
  },

  // Текстуры
  {
    id: 'texture01',
    name: 'Мрамор',
    nameEn: 'Marble',
    preview: '/patterns/texture01_thumb.png',
    file: '/patterns/texture01.svg',
    tags: ['премиум', 'мрамор', 'элегантность'],
    tagsEn: ['premium', 'marble', 'elegance'],
    category: 'texture'
  },
  {
    id: 'texture02',
    name: 'Бумага',
    nameEn: 'Paper',
    preview: '/patterns/texture02_thumb.png',
    file: '/patterns/texture02.svg',
    tags: ['текстура', 'бумага', 'естественность'],
    tagsEn: ['texture', 'paper', 'natural'],
    category: 'texture'
  },
  {
    id: 'texture03',
    name: 'Дерево',
    nameEn: 'Wood',
    preview: '/patterns/texture03_thumb.png',
    file: '/patterns/texture03.svg',
    tags: ['органический', 'дерево', 'теплота'],
    tagsEn: ['organic', 'wood', 'warmth'],
    category: 'texture'
  },
  {
    id: 'texture04',
    name: 'Металл',
    nameEn: 'Metal',
    preview: '/patterns/texture04_thumb.png',
    file: '/patterns/texture04.svg',
    tags: ['индустриальный', 'металл', 'прочность'],
    tagsEn: ['industrial', 'metal', 'strength'],
    category: 'texture'
  },
  {
    id: 'texture05',
    name: 'Кожа',
    nameEn: 'Leather',
    preview: '/patterns/texture05_thumb.png',
    file: '/patterns/texture05.svg',
    tags: ['премиум', 'кожа', 'роскошь'],
    tagsEn: ['premium', 'leather', 'luxury'],
    category: 'texture'
  },

  // Литературные мотивы
  {
    id: 'literary01',
    name: 'Звёздная ночь',
    nameEn: 'Starry Night',
    preview: '/patterns/literary01_thumb.png',
    file: '/patterns/literary01.svg',
    tags: ['романтичный', 'звёзды', 'мечты'],
    tagsEn: ['romantic', 'stars', 'dreams'],
    category: 'literary'
  },
  {
    id: 'literary02',
    name: 'Облака',
    nameEn: 'Clouds',
    preview: '/patterns/literary02_thumb.png',
    file: '/patterns/literary02.svg',
    tags: ['воздушный', 'облака', 'свобода'],
    tagsEn: ['airy', 'clouds', 'freedom'],
    category: 'literary'
  },
  {
    id: 'literary03',
    name: 'Книжные страницы',
    nameEn: 'Book Pages',
    preview: '/patterns/literary03_thumb.png',
    file: '/patterns/literary03.svg',
    tags: ['интеллектуальный', 'книги', 'знания'],
    tagsEn: ['intellectual', 'books', 'knowledge'],
    category: 'literary'
  },
  {
    id: 'literary04',
    name: 'Карта',
    nameEn: 'Map',
    preview: '/patterns/literary04_thumb.png',
    file: '/patterns/literary04.svg',
    tags: ['путешествия', 'карта', 'приключения'],
    tagsEn: ['travel', 'map', 'adventure'],
    category: 'literary'
  },
  {
    id: 'literary05',
    name: 'Часы',
    nameEn: 'Clock',
    preview: '/patterns/literary05_thumb.png',
    file: '/patterns/literary05.svg',
    tags: ['время', 'часы', 'философия'],
    tagsEn: ['time', 'clock', 'philosophy'],
    category: 'literary'
  },

  // Абстрактные
  {
    id: 'abstract01',
    name: 'Поток',
    nameEn: 'Flow',
    preview: '/patterns/abstract01_thumb.png',
    file: '/patterns/abstract01.svg',
    tags: ['динамичный', 'поток', 'движение'],
    tagsEn: ['dynamic', 'flow', 'movement'],
    category: 'abstract'
  },
  {
    id: 'abstract02',
    name: 'Градиент',
    nameEn: 'Gradient',
    preview: '/patterns/abstract02_thumb.png',
    file: '/patterns/abstract02.svg',
    tags: ['современный', 'градиент', 'цвет'],
    tagsEn: ['modern', 'gradient', 'color'],
    category: 'abstract'
  },
  {
    id: 'abstract03',
    name: 'Спираль',
    nameEn: 'Spiral',
    preview: '/patterns/abstract03_thumb.png',
    file: '/patterns/abstract03.svg',
    tags: ['органический', 'спираль', 'рост'],
    tagsEn: ['organic', 'spiral', 'growth'],
    category: 'abstract'
  },
  {
    id: 'abstract04',
    name: 'Фрактал',
    nameEn: 'Fractal',
    preview: '/patterns/abstract04_thumb.png',
    file: '/patterns/abstract04.svg',
    tags: ['математический', 'фрактал', 'бесконечность'],
    tagsEn: ['mathematical', 'fractal', 'infinity'],
    category: 'abstract'
  },
  {
    id: 'abstract05',
    name: 'Хаос',
    nameEn: 'Chaos',
    preview: '/patterns/abstract05_thumb.png',
    file: '/patterns/abstract05.svg',
    tags: ['креативный', 'хаос', 'творчество'],
    tagsEn: ['creative', 'chaos', 'creativity'],
    category: 'abstract'
  }
];

export const getPatternById = (id: string): Pattern | undefined => {
  return PATTERNS.find(pattern => pattern.id === id);
};

export const getPatternsByCategory = (category: Pattern['category']): Pattern[] => {
  return PATTERNS.filter(pattern => pattern.category === category);
};

export const getPatternsByTag = (tag: string): Pattern[] => {
  return PATTERNS.filter(pattern => 
    pattern.tags.includes(tag) || pattern.tagsEn.includes(tag)
  );
};
