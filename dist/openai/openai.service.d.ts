import { CreateOpenaiDto } from './dto/create-openai.dto';
import { PlatesService } from 'src/plates/plates.service';
import { InstructionsService } from 'src/instructions/instructions.service';
import { ImagesPlatesService } from 'src/images-plates/images-plates.service';
export declare class OpenaiService {
    private readonly platesService;
    private readonly instructionsService;
    private readonly imagesPlatesService;
    constructor(platesService: PlatesService, instructionsService: InstructionsService, imagesPlatesService: ImagesPlatesService);
    generatePlate(createOpenaiDto: CreateOpenaiDto): Promise<any[]>;
    generatePlateImage(descriptionImage: string): Promise<string>;
}
