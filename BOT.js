var TelegramBot = require('node-telegram-bot-api');

var token = "6885005414:AAHON05Ns7T5_8Z8_i6HuPdou85t93XBZbE";
var bot = new TelegramBot(token, { polling: true });

const command_list = `/help - Помощь по командам 
/site - отправляет в чат ссылку на сайт октагона
/creator - отправляет в чат Фио Создателя`;

bot.onText(/\/start/, function (msg, match) {
	var userId = msg.from.id;
    
	bot.sendMessage(userId, "Привет Октагон!");

});

bot.onText(/\/help/, function (msg, match) {
	var userId = msg.from.id;

	bot.sendMessage(userId, command_list);

});

bot.onText(/\/site/, function (msg, match) {
	var userId = msg.from.id;

	bot.sendMessage(userId,"https://students.forus.ru/");

});

bot.onText(/\/creator/, function (msg, match) {
	var userId = msg.from.id;

	bot.sendMessage(userId, "Мой создатель Сутырин Денис Романович");

});