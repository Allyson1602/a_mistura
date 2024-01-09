import { BardAiService } from './bard-ai.service';
import { CreateBardAiDto } from './dto/create-bard-ai.dto';
export declare class BardAiController {
    private readonly bardAiService;
    constructor(bardAiService: BardAiService);
    generatePlate(createBardAiDto: CreateBardAiDto): Promise<any[]>;
}
