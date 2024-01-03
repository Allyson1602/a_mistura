import { IsNumber, IsString } from 'class-validator';
import { CreateIngredientDto } from 'src/ingredients/dto/create-ingredient.dto';
import { CreateInstructionDto } from 'src/instructions/dto/create-instruction.dto';

export class CreatePlateDto {
  @IsString()
  name: string;

  @IsString()
  image: string;

  @IsNumber()
  rating: number;

  @IsString()
  description: string;

  // categories: number[];

  ingredients: CreateIngredientDto[];

  instructions: CreateInstructionDto[];
}
