import { OpenaiService } from './openai.service';
import { CreateOpenaiDto } from './dto/create-openai.dto';
export declare class OpenaiController {
    private readonly openaiService;
    constructor(openaiService: OpenaiService);
    generatePlate(createOpenaiDto: CreateOpenaiDto): Promise<any[]>;
    generatePlateImage(description: string): Promise<string>;
}
