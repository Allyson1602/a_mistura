import { Module } from '@nestjs/common';
import { PlatesService } from './plates.service';
import { PlatesController } from './plates.controller';
import { Plate } from './entities/plate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstructionsModule } from 'src/instructions/instructions.module';
import { ImagesPlatesModule } from 'src/images-plates/images-plates.module';
import { IngredientPlatesModule } from 'src/ingredient-plates/ingredient-plates.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Plate]),
    IngredientPlatesModule,
    InstructionsModule,
    ImagesPlatesModule,
  ],
  controllers: [PlatesController],
  providers: [PlatesService],
  exports: [PlatesService],
})
export class PlatesModule {}
