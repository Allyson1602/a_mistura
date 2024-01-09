import { Controller, Post, Body } from '@nestjs/common';
import { BardAiService } from './bard-ai.service';
import { CreateBardAiDto } from './dto/create-bard-ai.dto';

@Controller('bard-ai')
export class BardAiController {
  constructor(private readonly bardAiService: BardAiService) {}

  @Post()
  generatePlate(@Body() createBardAiDto: CreateBardAiDto) {
    return this.bardAiService.generatePlate(createBardAiDto);
  }
}
