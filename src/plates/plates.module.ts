import { Module } from '@nestjs/common';
import { PlatesService } from './plates.service';
import { PlatesController } from './plates.controller';

@Module({
  controllers: [PlatesController],
  providers: [PlatesService],
})
export class PlatesModule {}
