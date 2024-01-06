import { Injectable } from '@nestjs/common';
import { ImagePlate } from './entities/image-plate.entity';
import { CreateImagePlateDto } from './dto/create-image-plate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ImagesPlatesService {
  constructor(
    @InjectRepository(ImagePlate)
    private readonly imagePlateRepository: Repository<ImagePlate>,
  ) {}

  async create(createImagePlateDto: CreateImagePlateDto) {
    const newImagePlate = new ImagePlate();

    newImagePlate.description = createImagePlateDto.description;
    newImagePlate.link = createImagePlateDto.link;

    return await this.imagePlateRepository.save(newImagePlate);
  }
}
