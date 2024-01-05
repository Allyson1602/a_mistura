import { Module } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { OpenaiController } from './openai.controller';
import { PlatesModule } from 'src/plates/plates.module';
import { InstructionsModule } from 'src/instructions/instructions.module';

@Module({
  imports: [InstructionsModule, PlatesModule],
  controllers: [OpenaiController],
  providers: [OpenaiService],
})
export class OpenaiModule {}
