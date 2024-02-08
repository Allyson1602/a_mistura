import { Controller, Get, Post, Body } from '@nestjs/common';
import { InstructionsService } from './instructions.service';
import { CreateInstructionDto } from './dto/create-instruction.dto';

@Controller('instructions')
export class InstructionsController {}
