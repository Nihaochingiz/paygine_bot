**Требования для установки**
- Ubuntu 22.04.5 LTS (WSL)
- Node.js v18.20.6
- Typescript Version 5.7.3
- npm 10.8.2


🚀 **Быстрый старт**  

1. **Клонирование репозитория**
   ```bash
   git clone https://github.com/Nihaochingiz/paygine_bot.git
   cd paygine_bot
   ```

2. **Установка зависимостей**
   Убедитесь, что у вас установлены Node.js и npm. Затем выполните:
   ```bash
   npm install
   ```
   Это установит все зависимости, указанные в `package.json`.

⚙️ **Настройка**
Создайте файл `.env` в корне проекта:
```bash
touch .env
```
Добавьте в него токен вашего бота:
```env
TOKEN=ваш-токен-бота
```
Замените `ваш-токен-бота` на токен, который вы получили от BotFather.

🏃 **Запуск бота**

**Сборка и запуск**
Скомпилируйте TypeScript-код:
```bash
tsc
```
Запустите бота:
```bash
node index.js
```

