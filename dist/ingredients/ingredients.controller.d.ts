import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
export declare class IngredientsController {
    private readonly ingredientsService;
    constructor(ingredientsService: IngredientsService);
    createMany(createIngredientsDto: CreateIngredientDto[]): Promise<number[]>;
    create(createIngredientDto: CreateIngredientDto): Promise<import("./entities/ingredient.entity").Ingredient>;
    findAll(name: string): Promise<import("./entities/ingredient.entity").Ingredient[]>;
}
