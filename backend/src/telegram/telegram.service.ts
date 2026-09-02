import { Injectable } from '@nestjs/common';

@Injectable()
export class TelegramService {
  private readonly botToken: string | undefined;
  private readonly chatId: string | undefined;
  constructor() {
    this.botToken = process.env.TELEGRAM_BOT_TOKEN;
    this.chatId = process.env.TELEGRAM_CHAT_ID;
  }

  async sendMessage(text: string): Promise<boolean> {
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
    } catch (error) {
        console.error('Ошибка при отправке в Telegram:', error);
        return false;
    }
  }

  formatContactMessage(data: {
    name: string;
    contact: string;
    message: string;
    createdAt?: Date;
  }): string {
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
}
