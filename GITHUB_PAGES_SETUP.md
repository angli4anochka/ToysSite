# Инструкция по развертыванию на GitHub Pages

## Шаги для развертывания:

### 1. Создайте новый репозиторий на GitHub
1. Перейдите на https://github.com/new
2. Назовите репозиторий (например, `handmade-toys-shop`)
3. Сделайте его публичным (Public)
4. НЕ инициализируйте с README, .gitignore или лицензией
5. Нажмите "Create repository"

### 2. Подключите локальный репозиторий к GitHub
После создания репозитория, выполните команды в терминале:

```bash
# Замените YOUR-USERNAME на ваш GitHub username
# Замените YOUR-REPOSITORY-NAME на название вашего репозитория
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
git branch -M main
git push -u origin main
```

### 3. Настройте GitHub Pages
1. Перейдите в Settings вашего репозитория
2. В левом меню найдите "Pages"
3. В разделе "Build and deployment":
   - Source: выберите "GitHub Actions"
4. Сохраните изменения

### 4. Обновите vite.config.ts
Если ваш репозиторий называется НЕ `YOUR-USERNAME.github.io`, нужно добавить base URL:

```typescript
export default defineConfig(({ mode }) => ({
  base: '/YOUR-REPOSITORY-NAME/', // добавьте эту строку
  server: {
    host: "::",
    port: 8080,
  },
  // ... остальная конфигурация
}));
```

### 5. Запустите деплой
После первого push, GitHub Actions автоматически запустит workflow. 
Вы можете следить за процессом во вкладке "Actions" вашего репозитория.

### 6. Доступ к сайту
После успешного деплоя, ваш сайт будет доступен по адресу:
- `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/`

## Обновление сайта
Каждый раз, когда вы делаете push в main ветку, сайт автоматически обновится:

```bash
git add .
git commit -m "Ваше сообщение о изменениях"
git push
```

## Альтернативный способ деплоя (через gh-pages)
Если вы хотите использовать пакет gh-pages:

1. Установите пакет:
```bash
npm install --save-dev gh-pages
```

2. Обновите vite.config.ts с base URL (как описано выше)

3. Запустите деплой:
```bash
npm run deploy
```

## Проблемы и решения

### Если сайт не появляется:
1. Проверьте статус workflow во вкладке Actions
2. Убедитесь, что GitHub Pages включен в Settings
3. Подождите несколько минут - первый деплой может занять время
4. Проверьте правильность base URL в vite.config.ts

### EmailJS на продакшене:
Не забудьте настроить EmailJS (см. EMAILJS_SETUP.md) и обновить ключи в коде перед деплоем!