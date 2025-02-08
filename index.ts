import { Telegraf, Markup, Context } from 'telegraf';
import * as dotenv from 'dotenv';

// Загружаем переменные окружения из .env файла
dotenv.config();

// Получаем токен из переменных окружения
const token = process.env.TOKEN;

// Проверяем, установлен ли токен
if (!token) {
    throw new Error("The TOKEN is not set!");
}

// Создаем экземпляр бота
const bot = new Telegraf<Context>(token);

// Обработчик команды /start
bot.start((ctx: Context) => {
    const keyboard = Markup.inlineKeyboard([
        Markup.button.callback('Press me!', 'button_pressed')
    ]);
    
    ctx.reply('Hello! This is a test bot.', keyboard);
});

// Обработчик нажатия на кнопку
bot.action('button_pressed', (ctx: Context) => {
    ctx.answerCbQuery(); // Подтверждаем нажатие кнопки
    ctx.reply('You pressed the button!');
});

// Запускаем бота
bot.launch();

// Обработка завершения работы
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));