import { Module } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { OpenaiController } from './openai.controller';
import { PlatesModule } from 'src/plates/plates.module';
import { InstructionsModule } from 'src/instructions/instructions.module';
import { ImagesPlatesModule } from 'src/images-plates/images-plates.module';
import { IngredientPlatesModule } from 'src/ingredient-plates/ingredient-plates.module';

@Module({
  imports: [
    InstructionsModule,
    PlatesModule,
    ImagesPlatesModule,
    IngredientPlatesModule,
  ],
  controllers: [OpenaiController],
  providers: [OpenaiService],
  exports: [OpenaiService],
})
export class OpenaiModule {}
