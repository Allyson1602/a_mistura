import { IsNumber, IsString } from 'class-validator';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';
import { Category } from 'src/categories/entities/category.entity';
import { CreateIngredientDto } from 'src/ingredients/dto/create-ingredient.dto';
import { JoinTable, ManyToMany } from 'typeorm';

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
    
    category_id: Category[];
}
