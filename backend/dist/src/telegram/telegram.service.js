"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramService = void 0;
const common_1 = require("@nestjs/common");
let TelegramService = class TelegramService {
    botToken;
    chatId;
    constructor() {
        this.botToken = process.env.TELEGRAM_BOT_TOKEN;
        this.chatId = process.env.TELEGRAM_CHAT_ID;
    }
    async sendMessage(text) {
        if (!this.botToken || !this.chatId) {
            console.error('Телеграмм не настроен');
            return false;
        }
        try {
            const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: this.chatId,
                    text: text,
                    parse_mode: 'HTML',
                }),
            });
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Ошибка Telegram API:', errorText);
                return false;
            }
            console.log('Сообщение отправлено в Telegram');
            return true;
        }
        catch (error) {
            console.error('Ошибка при отправке в Telegram:', error);
            return false;
        }
    }
    formatContactMessage(data) {
        const date = data.createdAt
            ? new Date(data.createdAt).toLocaleString('ru-RU')
            : new Date().toLocaleString('ru-RU');
        return `
    <b>НОВАЯ ЗАЯВКА</b>

    <b>Имя:</b> ${data.name}
    <b>Контакт:</b> ${data.contact}
    <b>Сообщение:</b> ${data.message}
    <b>Время:</b> ${date}
        `.trim();
    }
};
exports.TelegramService = TelegramService;
exports.TelegramService = TelegramService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TelegramService);
//# sourceMappingURL=telegram.service.js.map