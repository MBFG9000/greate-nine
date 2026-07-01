# Duron Construction

Сайт работает на Next.js App Router. Главная страница, каталог услуг и страницы услуг предварительно рендерятся в HTML; интерактивные секции гидратируются в браузере.

## Запуск

```bash
npm install
npm run dev
```

Production-проверка:

```bash
npm run lint
npm run build
npm start
```

Для показа отложенных секций главной страницы задайте:

```bash
NEXT_PUBLIC_SHOW_DEFERRED_HOME_SECTIONS=true
```

Старое имя `VITE_SHOW_DEFERRED_HOME_SECTIONS` временно поддерживается в `next.config.mjs` для совместимости с текущим окружением деплоя.
