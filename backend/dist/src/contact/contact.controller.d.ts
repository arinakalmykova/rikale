import { ContactService } from './contact.service';
export declare class ContactController {
    private readonly constactService;
    constructor(constactService: ContactService);
    create(body: {
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
