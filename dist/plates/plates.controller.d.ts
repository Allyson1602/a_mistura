import { PlatesService } from './plates.service';
import { CreatePlateDto } from './dto/create-plate.dto';
export declare class PlatesController {
    private readonly platesService;
    constructor(platesService: PlatesService);
    create(createPlateDto: CreatePlateDto): Promise<import("./entities/plate.entity").Plate>;
    findAll(): Promise<import("./entities/plate.entity").Plate[]>;
}
