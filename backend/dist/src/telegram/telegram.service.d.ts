export declare class TelegramService {
    private readonly botToken;
    private readonly chatId;
    constructor();
    sendMessage(text: string): Promise<boolean>;
    formatContactMessage(data: {
        name: string;
        contact: string;
        message: string;
        createdAt?: Date;
    }): string;
}
