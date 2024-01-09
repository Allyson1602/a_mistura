import { Module } from '@nestjs/common';
import { BardAiService } from './bard-ai.service';
import { BardAiController } from './bard-ai.controller';
import { InstructionsModule } from 'src/instructions/instructions.module';
import { OpenaiModule } from 'src/openai/openai.module';
import { ImagesPlatesModule } from 'src/images-plates/images-plates.module';
import { IngredientPlatesModule } from 'src/ingredient-plates/ingredient-plates.module';
import { PlatesModule } from 'src/plates/plates.module';

@Module({
  imports: [
    InstructionsModule,
    PlatesModule,
    ImagesPlatesModule,
    IngredientPlatesModule,
    OpenaiModule,
  ],
  controllers: [BardAiController],
  providers: [BardAiService],
})
export class BardAiModule {}
