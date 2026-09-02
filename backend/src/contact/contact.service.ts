import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TelegramService } from '../telegram/telegram.service';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService,
    private readonly telegram: TelegramService,
  ) {}

  async create(data: {
    name: string;
    contact: string;
    message: string;
  }) {
    const contact = await this.prisma.contactRequest.create({
      data: {
        name: data.name,
        contact: data.contact,
        message: data.message,
      },
    });

    const telegram = this.telegram.formatContactMessage({
        name: data.name,
        contact: data.contact,
        message: data.message,
        createdAt: contact.createdAt,
    });

    await this.telegram.sendMessage(telegram);

    return contact;
  }
}