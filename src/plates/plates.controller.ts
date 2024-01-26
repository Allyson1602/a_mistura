import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlatesService } from './plates.service';
import { CreatePlateDto } from './dto/create-plate.dto';

@Controller('plates')
export class PlatesController {
  constructor(private readonly platesService: PlatesService) {}

  @Post()
  create(@Body() createPlateDto: CreatePlateDto) {
    return this.platesService.create(createPlateDto);
  }

  @Get()
  findAll() {
    return this.platesService.findAll();
  }
}
