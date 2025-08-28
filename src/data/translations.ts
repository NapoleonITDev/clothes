import { Language } from '../types';

export type TranslationKey = 
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.cta.design'
  | 'hero.cta.buy'
  | 'hero.badges.madeInEU'
  | 'hero.badges.return'
  | 'hero.badges.handmade'
  | 'gallery.title'
  | 'gallery.subtitle'
  | 'gallery.secretPattern'
  | 'gallery.underCollar'
  | 'configurator.title'
  | 'configurator.subtitle'
  | 'configurator.model.title'
  | 'configurator.model.notch'
  | 'configurator.model.peak'
  | 'configurator.model.shawl'
  | 'configurator.pattern.title'
  | 'configurator.trim.title'
  | 'configurator.stitch.title'
  | 'configurator.gender.male'
  | 'configurator.gender.female'
  | 'configurator.share'
  | 'configurator.share.success'
  | 'why.title'
  | 'why.subtitle'
  | 'why.style'
  | 'why.attitude'
  | 'why.secret'
  | 'why.gift'
  | 'how.title'
  | 'how.subtitle'
  | 'how.materials'
  | 'how.printing'
  | 'how.care'
  | 'reviews.title'
  | 'reviews.subtitle'
  | 'pricing.title'
  | 'pricing.subtitle'
  | 'pricing.order'
  | 'faq.title'
  | 'faq.subtitle'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.form.name'
  | 'contact.form.email'
  | 'contact.form.message'
  | 'contact.form.send'
  | 'contact.form.success'
  | 'footer.rights'
  | 'footer.disclaimer';

export const TRANSLATIONS: Record<Language, Record<TranslationKey, string>> = {
  ru: {
    'hero.title': 'Лацканы с историей',
    'hero.subtitle': 'Тонкая деталь, которая говорит за вас. Принт внутри лацкана и под воротником — видно только тем, кому вы захотите показать.',
    'hero.cta.design': 'Собрать свой дизайн',
    'hero.cta.buy': 'Купить / Предзаказ',
    'hero.badges.madeInEU': 'Made in EU',
    'hero.badges.return': '14 дней возврат',
    'hero.badges.handmade': 'Ручная отделка',
    'gallery.title': 'Идея продукта',
    'gallery.subtitle': 'Каждый лацкан — это произведение искусства с секретом внутри',
    'gallery.secretPattern': 'Секретный принт внутри лацкана',
    'gallery.underCollar': 'Принт под воротником',
    'configurator.title': 'Конструктор дизайнов',
    'configurator.subtitle': 'Создайте уникальный лацкан, который расскажет вашу историю',
    'configurator.model.title': 'Модель лацкана',
    'configurator.model.notch': 'Notch',
    'configurator.model.peak': 'Peak',
    'configurator.model.shawl': 'Shawl',
    'configurator.pattern.title': 'Принт',
    'configurator.trim.title': 'Цвет канта',
    'configurator.stitch.title': 'Цвет нитки',
    'configurator.gender.male': 'Мужской',
    'configurator.gender.female': 'Женский',
    'configurator.share': 'Поделиться дизайном',
    'configurator.share.success': 'Ссылка скопирована!',
    'why.title': 'Почему это круто для взрослых',
    'why.subtitle': 'Стиль, который говорит о вас больше, чем слова',
    'why.style': 'Умеренная смелость',
    'why.attitude': 'Легкая дерзость',
    'why.secret': 'Скрытая история',
    'why.gift': 'Подарок с характером',
    'how.title': 'Как это сделано',
    'how.subtitle': 'Качество, которое чувствуется в каждой детали',
    'how.materials': 'Премиум материалы',
    'how.printing': 'Специальная печать',
    'how.care': 'Простой уход',
    'reviews.title': 'Отзывы клиентов',
    'reviews.subtitle': 'Что говорят о нас те, кто уже попробовал',
    'pricing.title': 'Выберите свой вариант',
    'pricing.subtitle': 'От классики до коллекционных экземпляров',
    'pricing.order': 'Оформить заказ',
    'faq.title': 'Часто задаваемые вопросы',
    'faq.subtitle': 'Ответы на самые популярные вопросы',
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Есть вопросы? Мы готовы помочь',
    'contact.form.name': 'Имя',
    'contact.form.email': 'Email',
    'contact.form.message': 'Сообщение',
    'contact.form.send': 'Отправить',
    'contact.form.success': 'Сообщение отправлено!',
    'footer.rights': '© 2024 Лацканы с историей. Все права защищены.',
    'footer.disclaimer': 'Используем собственные авторские паттерны и мотивы, не нарушающие чьи-либо права.'
  },
  en: {
    'hero.title': 'Lapels with History',
    'hero.subtitle': 'A subtle detail that speaks for you. The pattern inside the lapel and under the collar is visible only to those you want to show.',
    'hero.cta.design': 'Create Your Design',
    'hero.cta.buy': 'Buy / Pre-order',
    'hero.badges.madeInEU': 'Made in EU',
    'hero.badges.return': '14-day return',
    'hero.badges.handmade': 'Handmade',
    'gallery.title': 'Product Concept',
    'gallery.subtitle': 'Every lapel is a work of art with a secret inside',
    'gallery.secretPattern': 'Secret pattern inside the lapel',
    'gallery.underCollar': 'Pattern under the collar',
    'configurator.title': 'Design Constructor',
    'configurator.subtitle': 'Create a unique lapel that tells your story',
    'configurator.model.title': 'Lapel Model',
    'configurator.model.notch': 'Notch',
    'configurator.model.peak': 'Peak',
    'configurator.model.shawl': 'Shawl',
    'configurator.pattern.title': 'Pattern',
    'configurator.trim.title': 'Trim Color',
    'configurator.stitch.title': 'Thread Color',
    'configurator.gender.male': 'Male',
    'configurator.gender.female': 'Female',
    'configurator.share': 'Share Design',
    'configurator.share.success': 'Link copied!',
    'why.title': 'Why It\'s Cool for Adults',
    'why.subtitle': 'Style that says more about you than words',
    'why.style': 'Moderate boldness',
    'why.attitude': 'Light attitude',
    'why.secret': 'Hidden story',
    'why.gift': 'Gift with character',
    'how.title': 'How It\'s Made',
    'how.subtitle': 'Quality that is felt in every detail',
    'how.materials': 'Premium materials',
    'how.printing': 'Special printing',
    'how.care': 'Easy care',
    'reviews.title': 'Customer Reviews',
    'reviews.subtitle': 'What those who have already tried say about us',
    'pricing.title': 'Choose Your Option',
    'pricing.subtitle': 'From classic to collector\'s items',
    'pricing.order': 'Place Order',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Answers to the most popular questions',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions? We\'re here to help',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    'contact.form.success': 'Message sent!',
    'footer.rights': '© 2024 Lapels with History. All rights reserved.',
    'footer.disclaimer': 'We use our own author patterns and motifs that do not violate anyone\'s rights.'
  }
};

export const t = (key: TranslationKey, language: Language): string => {
  return TRANSLATIONS[language][key] || key;
};
