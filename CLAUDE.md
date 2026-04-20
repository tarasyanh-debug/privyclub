# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Команды

```bash
npm run dev          # Запуск dev-сервера на localhost:8080
npm run build        # Продакшн-сборка
npm run build:dev    # Dev-сборка (сохраняет source maps, без минификации)
npm run lint         # Проверка ESLint
npm run test         # Запуск тестов один раз
npm run test:watch   # Запуск тестов в режиме слежения
npm run preview      # Предпросмотр продакшн-сборки
```

Юнит-тесты находятся в `src/test/` и соответствуют паттерну `src/**/*.{test,spec}.{ts,tsx}` через Vitest с jsdom. Запуск одного файла: `npx vitest run src/test/example.test.ts`. Для компонентных тестов доступны `@testing-library/react` и `@testing-library/jest-dom` (настройка в `src/test/setup.ts`).

Playwright установлен (`@playwright/test`), но npm-скрипт для него пока не настроен.

## Архитектура

Это одностраничный маркетинговый сайт на React + TypeScript (русскоязычный клуб недвижимости "Privy Club"), собранный на Vite.

**App shell** (`src/App.tsx`): оборачивает приложение в `QueryClientProvider`, `TooltipProvider`, `BrowserRouter` и Sonner `<Toaster>`. Роуты: `/` → `Index.tsx`, `*` → `NotFound.tsx`.

**Лендинг** (`src/pages/Index.tsx`): компонует секции в порядке — `Navbar`, `HeroSection`, `HowItWorksSection`, `AboutSection`, `PricingSection`, `TestimonialsSection`, `FeaturesSection`, `GeographySection`, `FAQSection`, `CTASection`, `FooterSection`.

**`InviteModal`** (`src/components/InviteModal.tsx`): встраивает `https://privyclub.tilda.ws/invite` через iframe внутри Dialog. Используется в `Navbar`, `HeroSection` и `CTASection`. Родительский компонент управляет состоянием `open` и передаёт его как prop.

**Неиспользуемые компоненты**: `HomesSection`, `StatsSection` и `NavLink` существуют в `src/components/`, но не рендерятся в `Index.tsx`.

**Навигация**: якорные ссылки (`#about`, `#how-it-works` и т.д.) для прокрутки по секциям; нет многостраничной маршрутизации кроме 404.

**UI-компоненты**: shadcn/ui в `src/components/ui/`, построены на примитивах Radix UI. Новые shadcn-компоненты добавлять через CLI, а не писать вручную.

**Стилизация**: Tailwind CSS с CSS-переменными для темизации (HSL). Кастомные шрифты:
- `font-heading` — Plus Jakarta Sans
- `font-body` — DM Sans
- `font-logo` — Sora (только для логотипа/бренда)

Кастомные анимации (`fade-up`, `scroll-left`) и стандартные анимации аккордеона определены в `tailwind.config.ts`. Для условных классов использовать `cn()` из `src/lib/utils.ts` (clsx + tailwind-merge).

**Анимации**: framer-motion (`^11`) установлен и доступен для сложных/императивных анимаций помимо Tailwind keyframes.

**Состояние**: локальный `useState` для UI-состояния; TanStack React Query доступен, но пока почти не используется.

**Path alias**: `@/` указывает на `src/` (настроено в `tsconfig.json` и `vite.config.ts`).

**Иконки**: `lucide-react` — единственная иконочная библиотека, уже используется в `Navbar`.

**Формы**: `react-hook-form` + `zod` установлены и готовы к использованию; `@hookform/resolvers` уже в зависимостях.

**Хуки**: `src/hooks/use-mobile.tsx` — хук для определения мобильного брейкпоинта (`useIsMobile()`).

**Якорные IDs секций**: `#about`, `#how-it-works`, `#geography`, `#features` — используются в навигации `Navbar`. Новые секции должны иметь соответствующий `id` атрибут.

**Платформа Lovable**: `lovable-tagger` активен в конфиге Vite dev-сервера — внедряет метаданные компонентов для визуального редактора Lovable. Не удалять.
