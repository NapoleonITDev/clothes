# Лацканы с историей | Lapels with History

**Стильный и продающий лендинг для премиум лацканов с интерактивным конструктором**

A stylish and sales-focused landing page for premium lapels with an interactive design constructor.

## ✨ Новые возможности | New Features

### 🎨 Улучшенный дизайн | Enhanced Design
- **Современная эстетика** с градиентами, тенями и анимациями
- **Glass morphism** эффекты и backdrop blur
- **Плавающие элементы** и динамические анимации
- **Улучшенная типографика** с Playfair Display и Inter
- **Кастомные кнопки** с hover эффектами и трансформациями

### 🚀 Виральные механики | Viral Mechanics
- **Weekly Drop** - еженедельные новые принты с таймером
- **Design Battles** - голосование за лучшие дизайны недели
- **Социальные доказательства** с реальными метриками
- **Система голосования** и шеринга дизайнов
- **Ограниченные тиражи** для создания urgency

### 💰 Продающие элементы | Sales Elements
- **Улучшенные CTA** с градиентами и анимациями
- **Система скидок** и оригинальных цен
- **Urgency элементы** (ограниченный тираж, таймеры)
- **Trust badges** с иконками и описаниями
- **Социальные доказательства** и отзывы

### 🎯 Конструктор | Constructor
- **Стильные контролы** с цветовыми индикаторами
- **Визуальные подсказки** и иконки для каждого элемента
- **Улучшенная навигация** с группировкой опций
- **Интерактивные элементы** с hover эффектами
- **Цветовая система** для лучшего UX

## 🛠 Технологии | Technologies

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS с кастомными компонентами
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build**: Vite
- **Deployment**: GitHub Pages + GitHub Actions

## 🚀 Быстрый старт | Quick Start

```bash
# Установка зависимостей | Install dependencies
pnpm install

# Запуск в режиме разработки | Start development server
pnpm dev

# Сборка для продакшена | Build for production
pnpm build

# Предпросмотр сборки | Preview build
pnpm preview

# Запуск тестов | Run tests
pnpm test
```

## 📱 Особенности | Features

### 🎨 Интерактивный конструктор
- Выбор модели лацкана (notch, peak, shawl)
- 20+ уникальных паттернов
- Настройка цветов канта и ниток
- Реальное время предпросмотра
- Сохранение конфигурации в URL

### 🌟 Виральные механики
- **Weekly Drop**: Новые принты каждую пятницу
- **Design Battles**: Голосование за лучшие дизайны
- **Социальный шеринг**: Поделитесь своим дизайном
- **Генерация превью**: Создайте изображение для соцсетей

### 💎 Продающие элементы
- **Urgency**: Ограниченные тиражи и таймеры
- **Social Proof**: Отзывы, рейтинги, метрики
- **Trust**: Made in EU, гарантии, сертификаты
- **CTA**: Множественные точки входа

## 🎯 Структура проекта | Project Structure

```
src/
├── components/           # React компоненты
│   ├── Configurator/    # Конструктор лацканов
│   ├── Hero.tsx         # Главная секция
│   ├── WeeklyDrop.tsx   # Еженедельные дропы
│   ├── DesignBattles.tsx # Дизайн-баттлы
│   └── ...              # Другие секции
├── data/                # Данные и конфигурация
├── lib/                 # Утилиты и хелперы
├── types.ts             # TypeScript типы
└── index.css            # Стили и анимации
```

## 🎨 Кастомные стили | Custom Styles

### Цветовая палитра
```css
/* Primary colors */
--primary-50: #eff6ff
--primary-600: #2563eb
--primary-900: #1e3a8a

/* Accent colors */
--accent-50: #f0f9ff
--accent-600: #0284c7
--accent-900: #0c4a6e

/* Trim colors */
--trim-ivory: #fffff0
--trim-navy: #000080

/* Stitch colors */
--stitch-red: #dc2626
--stitch-gold: #ca8a04
```

### Анимации
```css
/* Floating animation */
.floating { animation: floating 3s ease-in-out infinite; }

/* Pulse glow */
.pulse-glow { animation: pulse-glow 2s ease-in-out infinite alternate; }

/* Custom keyframes */
@keyframes floating { /* ... */ }
@keyframes pulse-glow { /* ... */ }
```

## 📊 Производительность | Performance

- **Lighthouse Score**: ≥90 (Performance, Accessibility, SEO)
- **Lazy Loading**: Компоненты загружаются по мере необходимости
- **Font Preloading**: Критические шрифты загружаются заранее
- **Image Optimization**: Оптимизированные SVG паттерны
- **Bundle Splitting**: Разделение кода для лучшей загрузки

## 🌐 SEO и мета-теги

- **Open Graph**: Социальные превью для соцсетей
- **Schema.org**: Структурированные данные для продуктов
- **Meta tags**: Title, description, keywords
- **Favicon**: SVG иконка
- **Sitemap**: Автоматическая генерация

## 🚀 Деплой | Deployment

### GitHub Pages
```bash
# Автоматический деплой через GitHub Actions
git push origin main

# Ручной деплой
pnpm build
gh-pages -d dist
```

### Настройка
1. Создайте репозиторий на GitHub
2. Включите GitHub Pages в настройках
3. Настройте GitHub Actions workflow
4. Добавьте CNAME файл для кастомного домена

## 🧪 Тестирование | Testing

```bash
# Запуск тестов
pnpm test

# Покрытие кода
pnpm test --coverage

# Watch режим
pnpm test --watch
```

## 📱 Адаптивность | Responsiveness

- **Mobile First**: Дизайн начинается с мобильных устройств
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Touch Friendly**: Оптимизировано для тач-устройств
- **Performance**: Оптимизация для медленных соединений

## 🔧 Конфигурация | Configuration

### Environment Variables
```bash
# .env.example
VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint
VITE_PLAUSIBLE_DOMAIN=your_domain
VITE_GITHUB_PAGES_BASE=/repo-name/
VITE_ANALYTICS_ENABLED=true
```

### Tailwind Config
```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { /* custom colors */ },
      animation: { /* custom animations */ },
      keyframes: { /* custom keyframes */ }
    }
  }
}
```

## 🎯 Roadmap

### Ближайшие планы
- [ ] Интеграция с реальными платежными системами
- [ ] Система пользователей и авторизации
- [ ] Админ-панель для управления контентом
- [ ] API для динамических данных

### Долгосрочные цели
- [ ] Мобильное приложение
- [ ] AR предпросмотр лацканов
- [ ] Интеграция с CRM системами
- [ ] Многоязычность (EN, DE, FR)

## 🤝 Вклад | Contributing

1. Форкните репозиторий
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'feat: add amazing feature'`)
4. Запушьте в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия | License

MIT License - см. файл [LICENSE](LICENSE) для деталей.

## 📞 Поддержка | Support

- **Email**: support@lapels-with-history.com
- **Telegram**: @lapels_support
- **Issues**: GitHub Issues

---

**Создано с ❤️ для ценителей стиля и качества**

**Created with ❤️ for style and quality connoisseurs**
