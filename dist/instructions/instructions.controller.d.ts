import { InstructionsService } from './instructions.service';
import { CreateInstructionDto } from './dto/create-instruction.dto';
export declare class InstructionsController {
    private readonly instructionsService;
    constructor(instructionsService: InstructionsService);
    createMany(createInstructionsDto: CreateInstructionDto[]): Promise<number[]>;
    create(createInstructionDto: CreateInstructionDto): Promise<import("./entities/instruction.entity").Instruction>;
    findAll(): Promise<import("./entities/instruction.entity").Instruction[]>;
}
