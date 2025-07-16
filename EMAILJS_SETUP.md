# Настройка EmailJS для отправки писем

## Шаги для настройки:

1. **Зарегистрируйтесь на EmailJS**
   - Перейдите на https://www.emailjs.com/
   - Создайте бесплатный аккаунт

2. **Создайте Email Service**
   - В панели управления выберите "Email Services"
   - Нажмите "Add New Service"
   - Выберите Gmail (или другой провайдер)
   - Следуйте инструкциям для подключения вашего email

3. **Создайте Email Templates**
   
   **Template 1 - Для контактной формы:**
   - Перейдите в "Email Templates"
   - Нажмите "Create New Template"
   - Назовите его "Contact Form"
   - Используйте следующий шаблон:

   **Subject**: Новое сообщение с сайта: {{subject}}
   
   **Content**:
   ```
   Вы получили новое сообщение с сайта игрушек ручной работы:
   
   От: {{from_name}}
   Email: {{from_email}}
   Тема: {{subject}}
   
   Сообщение:
   {{message}}
   ```

   **Template 2 - Для подписки на рассылку:**
   - Создайте еще один шаблон
   - Назовите его "Newsletter Subscription"
   - Используйте следующий шаблон:

   **Subject**: Новая подписка на рассылку
   
   **Content**:
   ```
   Новая подписка на рассылку вашего сайта!
   
   Email подписчика: {{subscriber_email}}
   
   {{message}}
   ```

4. **Получите ключи**
   - В разделе "Integration" найдите:
     - Service ID (например: service_abc123)
     - Template ID (например: template_xyz789)
     - Public Key (в разделе "Account" -> "API Keys")

5. **Обновите код**
   
   **В файле `src/components/ContactModal.tsx`:**
   ```typescript
   const SERVICE_ID = 'YOUR_SERVICE_ID';
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';     // ID шаблона Contact Form
   const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```
   
   **В файле `src/components/Footer.tsx`:**
   ```typescript
   const SERVICE_ID = 'YOUR_SERVICE_ID';
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';     // ID шаблона Newsletter Subscription
   const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```
   
   Замените на ваши реальные значения:
   ```typescript
   const SERVICE_ID = 'service_abc123';        // Ваш Service ID (одинаковый для обоих)
   const TEMPLATE_ID = 'template_xyz789';      // Разные Template ID для каждой формы
   const PUBLIC_KEY = 'abcdefghijk';           // Ваш Public Key (одинаковый для обоих)
   ```

6. **Раскомментируйте строки отправки**
   В обоих файлах найдите и раскомментируйте строку:
   ```typescript
   await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
   ```

## Альтернативное решение (без EmailJS)

Если вы хотите использовать другой способ отправки email, вы можете:

1. Настроить backend с Node.js и Nodemailer
2. Использовать Netlify Functions или Vercel Functions
3. Использовать другие сервисы: SendGrid, Mailgun, etc.

## Текущее состояние

Сейчас форма:
- Собирает все данные (имя, email, тема, сообщение)
- Показывает их в консоли браузера
- Имитирует отправку с показом статуса успеха
- Все письма будут отправляться на angli4anochka@gmail.com