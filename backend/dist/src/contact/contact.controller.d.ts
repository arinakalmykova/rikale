import { ContactService } from './contact.service';
export declare class ContactController {
    private readonly constactService;
    constructor(constactService: ContactService);
    create(body: {
        name: string;
        contact: string;
        message: string;
    }): Promise<{
        id: number;
        createdAt: Date;
        name: string;
        contact: string;
        message: string;
    }>;
}
