import { IsNumber, IsString } from 'class-validator';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';
import { CreateIngredientDto } from 'src/ingredients/dto/create-ingredient.dto';

export class CreatePlateDto {
    @IsString()
	name: string;

    @IsString()
	image: string;

	ingredients: CreateIngredientDto[];

	categories: CreateCategoryDto[];

    @IsNumber()
	rating: number;

    @IsString()
	description: string;

	instructions: string[];
}
