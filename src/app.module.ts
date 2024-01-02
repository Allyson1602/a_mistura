import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatesModule } from './plates/plates.module';

@Module({
  imports: [PlatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
