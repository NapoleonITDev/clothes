import { FAQItem } from '../types';

export const FAQ_ITEMS: FAQItem[] = [
  // Общие вопросы
  {
    id: 'faq01',
    question: 'Что такое "Лацканы с историей"?',
    questionEn: 'What is "Lapels with History"?',
    answer: 'Это премиум лацканы с авторскими принтами внутри и под воротником. Каждый дизайн уникален и рассказывает свою историю, видимую только вам и тем, кому вы захотите показать.',
    answerEn: 'These are premium lapels with author patterns inside and under the collar. Each design is unique and tells its own story, visible only to you and those you want to show.',
    category: 'general'
  },
  {
    id: 'faq02',
    question: 'Как работает конструктор дизайнов?',
    questionEn: 'How does the design constructor work?',
    answer: 'Выберите модель лацкана (notch, peak или shawl), выберите принт из нашей коллекции, подберите цвет канта и нитки для петли бутоньерки. Предпросмотр обновляется в реальном времени.',
    answerEn: 'Choose a lapel model (notch, peak or shawl), select a pattern from our collection, choose trim color and thread color for the boutonniere loop. Preview updates in real time.',
    category: 'general'
  },
  {
    id: 'faq03',
    question: 'Можно ли загрузить свой принт?',
    questionEn: 'Can I upload my own pattern?',
    answer: 'В настоящее время мы используем только авторские паттерны из нашей коллекции. Это гарантирует качество и уникальность каждого дизайна.',
    answerEn: 'Currently, we use only author patterns from our collection. This guarantees the quality and uniqueness of each design.',
    category: 'general'
  },

  // Доставка
  {
    id: 'faq04',
    question: 'Сколько стоит доставка?',
    questionEn: 'How much does delivery cost?',
    answer: 'Стандартная доставка по России - 500₽, по Европе - 15€. При заказе от 5000₽ доставка бесплатная. Express доставка доступна за дополнительную плату.',
    answerEn: 'Standard delivery in Russia - 500₽, in Europe - 15€. Free delivery for orders over 5000₽. Express delivery is available for an additional fee.',
    category: 'shipping'
  },
  {
    id: 'faq05',
    question: 'Сколько времени занимает доставка?',
    questionEn: 'How long does delivery take?',
    answer: 'Стандартная доставка: Россия - 3-7 дней, Европа - 7-14 дней. Express доставка: Россия - 1-2 дня, Европа - 2-4 дня.',
    answerEn: 'Standard delivery: Russia - 3-7 days, Europe - 7-14 days. Express delivery: Russia - 1-2 days, Europe - 2-4 days.',
    category: 'shipping'
  },
  {
    id: 'faq06',
    question: 'Доставляете ли вы по всему миру?',
    questionEn: 'Do you deliver worldwide?',
    answer: 'Да, мы доставляем по всему миру. Стоимость и сроки доставки зависят от страны. Свяжитесь с нами для уточнения деталей.',
    answerEn: 'Yes, we deliver worldwide. Delivery cost and time depend on the country. Contact us for details.',
    category: 'shipping'
  },

  // Возврат
  {
    id: 'faq07',
    question: 'Можно ли вернуть товар?',
    questionEn: 'Can I return the product?',
    answer: 'Да, у нас есть политика возврата: Classic - 14 дней, Story - 30 дней, Collector - 60 дней. Товар должен быть в оригинальном состоянии.',
    answerEn: 'Yes, we have a return policy: Classic - 14 days, Story - 30 days, Collector - 60 days. The product must be in original condition.',
    category: 'returns'
  },
  {
    id: 'faq08',
    question: 'Как оформить возврат?',
    questionEn: 'How do I arrange a return?',
    answer: 'Свяжитесь с нашей службой поддержки в течение срока возврата. Мы предоставим инструкции и этикетку для отправки. Возврат осуществляется за счёт покупателя.',
    answerEn: 'Contact our support service within the return period. We will provide instructions and a shipping label. Return is at the buyer\'s expense.',
    category: 'returns'
  },

  // Уход
  {
    id: 'faq09',
    question: 'Как ухаживать за лацканами?',
    questionEn: 'How to care for lapels?',
    answer: 'Рекомендуем сухую чистку. При необходимости можно протереть влажной тканью. Не используйте агрессивные моющие средства. Храните в прохладном сухом месте.',
    answerEn: 'We recommend dry cleaning. If necessary, you can wipe with a damp cloth. Do not use aggressive detergents. Store in a cool, dry place.',
    category: 'care'
  },
  {
    id: 'faq10',
    question: 'Принт не выцветает?',
    questionEn: 'Does the pattern not fade?',
    answer: 'Мы используем специальные краски и технологии печати, которые обеспечивают стойкость принта. При правильном уходе принт сохраняет яркость на протяжении всего срока службы.',
    answerEn: 'We use special paints and printing technologies that ensure pattern durability. With proper care, the pattern maintains brightness throughout its service life.',
    category: 'care'
  }
];

export const getFAQByCategory = (category: FAQItem['category']): FAQItem[] => {
  return FAQ_ITEMS.filter(item => item.category === category);
};

export const getAllFAQ = (): FAQItem[] => {
  return FAQ_ITEMS;
};
