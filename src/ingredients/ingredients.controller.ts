import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Post('many')
  createMany(@Body() createIngredientsDto: CreateIngredientDto[]) {
    return this.ingredientsService.createMany(createIngredientsDto);
  }

  @Get(':name')
  findAll(@Param('name') name: string) {
    return this.ingredientsService.findAll(name);
  }
}
