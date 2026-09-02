import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectModule } from './project/projects.module';
import { ContactModule } from './contact/contact.module';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [PrismaModule, ProjectModule, TelegramModule, ContactModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
