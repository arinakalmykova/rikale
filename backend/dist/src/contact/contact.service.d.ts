import { PrismaService } from '../prisma/prisma.service';
import { TelegramService } from '../telegram/telegram.service';
export declare class ContactService {
    private readonly prisma;
    private readonly telegram;
    constructor(prisma: PrismaService, telegram: TelegramService);
    create(data: {
        name: string;
        contact: string;
        message: string;
    }): Promise<{
        name: string;
        contact: string;
        message: string;
        createdAt: Date;
        id: number;
    }>;
}
