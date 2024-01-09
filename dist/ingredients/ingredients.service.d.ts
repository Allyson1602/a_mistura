import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { Ingredient } from './entities/ingredient.entity';
import { Repository } from 'typeorm';
export declare class IngredientsService {
    private readonly ingredientRepository;
    constructor(ingredientRepository: Repository<Ingredient>);
    createInitialIngredients(): Promise<void>;
    createMany(createIngredientsDto: CreateIngredientDto[]): Promise<number[]>;
    create(createIngredientDto: CreateIngredientDto): Promise<Ingredient>;
    findAll(name: string): Promise<Ingredient[]>;
    findByName(name: string): Promise<Ingredient>;
}
