import { CreateBardAiDto } from './dto/create-bard-ai.dto';
import { ImagesPlatesService } from 'src/images-plates/images-plates.service';
import { InstructionsService } from 'src/instructions/instructions.service';
import { PlatesService } from 'src/plates/plates.service';
import { OpenaiService } from 'src/openai/openai.service';
export declare class BardAiService {
    private readonly platesService;
    private readonly instructionsService;
    private readonly imagesPlatesService;
    private readonly openaiService;
    constructor(platesService: PlatesService, instructionsService: InstructionsService, imagesPlatesService: ImagesPlatesService, openaiService: OpenaiService);
    private genAI;
    generatePlate(createBardAiDto: CreateBardAiDto): Promise<any[]>;
}
