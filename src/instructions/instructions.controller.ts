import { Controller, Get, Post, Body } from '@nestjs/common';
import { InstructionsService } from './instructions.service';
import { CreateInstructionDto } from './dto/create-instruction.dto';

@Controller('instructions')
export class InstructionsController {
  constructor(private readonly instructionsService: InstructionsService) {}

  @Post('many')
  createMany(@Body() createInstructionsDto: CreateInstructionDto[]) {
    return this.instructionsService.createMany(createInstructionsDto);
  }

  @Post()
  create(@Body() createInstructionDto: CreateInstructionDto) {
    return this.instructionsService.create(createInstructionDto);
  }

  @Get()
  findAll() {
    return this.instructionsService.findAll();
  }
}
