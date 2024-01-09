import { IsNumber, IsString } from 'class-validator';
import { CreateImagePlateDto } from 'src/images-plates/dto/create-image-plate.dto';
import { CreateIngredientPlateDto } from 'src/ingredient-plates/dto/create-ingredient-plate.dto';
import { CreateIngredientDto } from 'src/ingredients/dto/create-ingredient.dto';
import { CreateInstructionDto } from 'src/instructions/dto/create-instruction.dto';

export class CreatePlateDto {
  @IsString()
  name: string;

  @IsString()
  image: CreateImagePlateDto;

  @IsNumber()
  rating: number;

  @IsString()
  description: string;

  // categories: number[];

  ingredientPlates: CreateIngredientPlateDto[];

  instructions: CreateInstructionDto[];
}
