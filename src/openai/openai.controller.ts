import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { CreateOpenaiDto } from './dto/create-openai.dto';

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Post()
  generatePlate(@Body() createOpenaiDto: CreateOpenaiDto) {
    return this.openaiService.generatePlate(createOpenaiDto);
  }

  @Get('image')
  generatePlateImage(@Query('description') description: string) {
    return this.openaiService.generatePlateImage(description);
  }
}
