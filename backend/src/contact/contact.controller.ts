import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
    constructor(private readonly constactService:ContactService){}

    @Post()
    create(
        @Body()
        body: {
            name: string;
            contact: string;
            message: string;
        }
    ) {
        return this.constactService.create(body);
    }
}
