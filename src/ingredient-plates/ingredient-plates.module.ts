import { Module } from '@nestjs/common';
import { IngredientPlatesService } from './ingredient-plates.service';
import { IngredientPlatesController } from './ingredient-plates.controller';
import { IngredientPlate } from './entities/ingredient-plate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([IngredientPlate])],
  controllers: [IngredientPlatesController],
  providers: [IngredientPlatesService],
  exports: [IngredientPlatesService],
})
export class IngredientPlatesModule {}
