import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { TelegramModule } from 'src/telegram/telegram.module';

@Module({
  controllers: [ContactController],
  providers: [ContactService],
  imports: [TelegramModule]
})
export class ContactModule {}
