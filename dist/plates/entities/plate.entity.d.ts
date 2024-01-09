import { Category } from 'src/categories/entities/category.entity';
import { ImagePlate } from 'src/images-plates/entities/image-plate.entity';
import { IngredientPlate } from 'src/ingredient-plates/entities/ingredient-plate.entity';
import { Instruction } from 'src/instructions/entities/instruction.entity';
export declare class Plate {
    id: number;
    name: string;
    image: ImagePlate;
    rating: number;
    description: string;
    categories: Category[];
    ingredientPlates: IngredientPlate[];
    instructions: Instruction[];
}
