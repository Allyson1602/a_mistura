import { Module } from '@nestjs/common';
import { BardAiService } from './bard-ai.service';
import { BardAiController } from './bard-ai.controller';

@Module({
  controllers: [BardAiController],
  providers: [BardAiService],
  exports: [BardAiService],
})
export class BardAiModule {}
