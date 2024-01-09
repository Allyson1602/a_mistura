import { ImagePlate } from './entities/image-plate.entity';
import { CreateImagePlateDto } from './dto/create-image-plate.dto';
import { Repository } from 'typeorm';
export declare class ImagesPlatesService {
    private readonly imagePlateRepository;
    constructor(imagePlateRepository: Repository<ImagePlate>);
    create(createImagePlateDto: CreateImagePlateDto): Promise<ImagePlate>;
}
