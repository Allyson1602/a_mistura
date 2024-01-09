import { CreateInstructionDto } from './dto/create-instruction.dto';
import { Instruction } from './entities/instruction.entity';
import { Repository } from 'typeorm';
export declare class InstructionsService {
    private readonly instructionRepository;
    constructor(instructionRepository: Repository<Instruction>);
    createMany(createInstructionsDto: CreateInstructionDto[]): Promise<number[]>;
    create(createInstructionDto: CreateInstructionDto): Promise<Instruction>;
    findAll(): Promise<Instruction[]>;
}
