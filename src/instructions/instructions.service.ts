import { Injectable } from '@nestjs/common';
import { CreateInstructionDto } from './dto/create-instruction.dto';
import { UpdateInstructionDto } from './dto/update-instruction.dto';
import { Instruction } from './entities/instruction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InstructionsService {
  constructor(
    @InjectRepository(Instruction)
    private readonly instructionRepository: Repository<Instruction>,
  ) {}

  async createMany(
    createInstructionsDto: CreateInstructionDto[],
  ): Promise<number[]> {
    const newInstructions: Instruction[] = createInstructionsDto.map(
      (instructionDto) => {
        const instruction = new Instruction();
        instruction.description = instructionDto.description;

        return instruction;
      },
    );

    const instructionsRaw = (
      await this.instructionRepository
        .createQueryBuilder()
        .insert()
        .into('instruction')
        .values(newInstructions)
        .execute()
    ).raw;

    const instructionsId: number[] = instructionsRaw.map((rawItem) => {
      return rawItem.id;
    });

    return instructionsId;
  }

  async create(
    createInstructionDto: CreateInstructionDto,
  ): Promise<Instruction> {
    const instruction: Instruction = new Instruction();

    instruction.description = createInstructionDto.description;

    return await this.instructionRepository.save(instruction);
  }

  async findAll(): Promise<Instruction[]> {
    const instructions = this.instructionRepository.find();

    return instructions;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} instruction`;
  // }

  // update(id: number, updateInstructionDto: UpdateInstructionDto) {
  //   return `This action updates a #${id} instruction`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} instruction`;
  // }
}
