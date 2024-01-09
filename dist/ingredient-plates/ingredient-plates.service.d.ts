import { CreateIngredientPlateDto } from './dto/create-ingredient-plate.dto';
import { IngredientPlate } from './entities/ingredient-plate.entity';
import { Repository } from 'typeorm';
export declare class IngredientPlatesService {
    private readonly ingredientPlateRepository;
    constructor(ingredientPlateRepository: Repository<IngredientPlate>);
    create(createIngredientPlateDto: CreateIngredientPlateDto): Promise<IngredientPlate>;
}
