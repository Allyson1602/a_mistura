import { Module } from '@nestjs/common';
import { PlatesService } from './plates.service';
import { PlatesController } from './plates.controller';
import { Plate } from './entities/plate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientsModule } from 'src/ingredients/ingredients.module';
import { InstructionsModule } from 'src/instructions/instructions.module';
import { ImagesPlatesModule } from 'src/images-plates/images-plates.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Plate]),
    PlatesModule,
    IngredientsModule,
    InstructionsModule,
    ImagesPlatesModule,
  ],
  controllers: [PlatesController],
  providers: [PlatesService],
  exports: [PlatesService],
})
export class PlatesModule {}
