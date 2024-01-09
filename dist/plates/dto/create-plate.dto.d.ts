import { CreateImagePlateDto } from 'src/images-plates/dto/create-image-plate.dto';
import { CreateIngredientPlateDto } from 'src/ingredient-plates/dto/create-ingredient-plate.dto';
import { CreateInstructionDto } from 'src/instructions/dto/create-instruction.dto';
export declare class CreatePlateDto {
    name: string;
    image: CreateImagePlateDto;
    rating: number;
    description: string;
    ingredientPlates: CreateIngredientPlateDto[];
    instructions: CreateInstructionDto[];
}
