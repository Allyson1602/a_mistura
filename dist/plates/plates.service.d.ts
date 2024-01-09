import { CreatePlateDto } from './dto/create-plate.dto';
import { Plate } from './entities/plate.entity';
import { Repository } from 'typeorm';
import { InstructionsService } from 'src/instructions/instructions.service';
import { ImagesPlatesService } from 'src/images-plates/images-plates.service';
import { IngredientPlatesService } from 'src/ingredient-plates/ingredient-plates.service';
export declare class PlatesService {
    private readonly plateRepository;
    private readonly ingredientplatesService;
    private readonly instructionsService;
    private readonly imagesPlatesService;
    constructor(plateRepository: Repository<Plate>, ingredientplatesService: IngredientPlatesService, instructionsService: InstructionsService, imagesPlatesService: ImagesPlatesService);
    create(createPlateDto: CreatePlateDto): Promise<Plate>;
    findAll(): Promise<Plate[]>;
}
