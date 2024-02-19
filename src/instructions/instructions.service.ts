import { Injectable } from '@nestjs/common';
import { CreateInstructionDto } from './dto/create-instruction.dto';
import { Instruction } from './entities/instruction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import HttpResponse from 'src/utils/http-response';
import { EStatusCode } from 'src/enums/status-code';
import { IHttpResponse } from 'src/types/response';

@Injectable()
export class InstructionsService {
  constructor(
    @InjectRepository(Instruction)
    private readonly instructionRepository: Repository<Instruction>,
  ) {}

  async createMany(
    createInstructionsDto: CreateInstructionDto[],
  ): Promise<IHttpResponse<number[]>> {
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

    return HttpResponse.success(EStatusCode.OK, instructionsId);
  }

  async create(
    createInstructionDto: CreateInstructionDto,
  ): Promise<Instruction> {
    const instruction: Instruction = new Instruction();

    instruction.description = createInstructionDto.description;

    return await this.instructionRepository.save(instruction);
  }

  async findAll(): Promise<IHttpResponse<Instruction[]>> {
    const instructions = await this.instructionRepository.find();

    return HttpResponse.success(EStatusCode.OK, instructions);
  }
}
