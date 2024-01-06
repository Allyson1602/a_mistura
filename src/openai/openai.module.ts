import { Module } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { OpenaiController } from './openai.controller';
import { PlatesModule } from 'src/plates/plates.module';
import { InstructionsModule } from 'src/instructions/instructions.module';
import { ImagesPlatesModule } from 'src/images-plates/images-plates.module';

@Module({
  imports: [InstructionsModule, PlatesModule, ImagesPlatesModule],
  controllers: [OpenaiController],
  providers: [OpenaiService],
})
export class OpenaiModule {}
