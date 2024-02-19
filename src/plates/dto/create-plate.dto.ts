import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';
import { CreateImagePlateDto } from 'src/images-plates/dto/create-image-plate.dto';
import { CreateIngredientPlateDto } from 'src/ingredient-plates/dto/create-ingredient-plate.dto';
import { CreateInstructionDto } from 'src/instructions/dto/create-instruction.dto';

export class CreatePlateDto {
  @IsString()
  name: string;

  @IsObject()
  image: CreateImagePlateDto;

  @IsNumber()
  rating: number;

  @IsString()
  description: string;

  // categories: number[];

  ingredientPlates: CreateIngredientPlateDto[];

  instructions: CreateInstructionDto[];
}

export class CreateAiDto {
  ingredients: string[];
}
