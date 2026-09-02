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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const telegram_service_1 = require("../telegram/telegram.service");
let ContactService = class ContactService {
    prisma;
    telegram;
    constructor(prisma, telegram) {
        this.prisma = prisma;
        this.telegram = telegram;
    }
    async create(data) {
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
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, typeof (_a = typeof telegram_service_1.TelegramService !== "undefined" && telegram_service_1.TelegramService) === "function" ? _a : Object])
], ContactService);
//# sourceMappingURL=contact.service.js.map