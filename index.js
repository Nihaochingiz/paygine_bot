"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var telegraf_1 = require("telegraf");
var dotenv = require("dotenv");
// Загружаем переменные окружения из .env файла
dotenv.config();
// Получаем токен из переменных окружения
var token = process.env.TOKEN;
// Проверяем, установлен ли токен
if (!token) {
    throw new Error("The TOKEN is not set!");
}
// Создаем экземпляр бота
var bot = new telegraf_1.Telegraf(token);
// Обработчик команды /start
bot.start(function (ctx) {
    var keyboard = telegraf_1.Markup.inlineKeyboard([
        telegraf_1.Markup.button.callback('Press me!', 'button_pressed')
    ]);
    ctx.reply('Hello! This is a test bot.', keyboard);
});
// Обработчик нажатия на кнопку
bot.action('button_pressed', function (ctx) {
    ctx.answerCbQuery(); // Подтверждаем нажатие кнопки
    ctx.reply('You pressed the button!');
});
// Запускаем бота
bot.launch();
// Обработка завершения работы
process.once('SIGINT', function () { return bot.stop('SIGINT'); });
process.once('SIGTERM', function () { return bot.stop('SIGTERM'); });
