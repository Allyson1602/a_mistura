import { Injectable } from '@nestjs/common';
import { CreatePlateDto } from './dto/create-plate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Plate } from './entities/plate.entity';
import { Repository } from 'typeorm';
import HttpResponse from 'src/utils/http-response';
import { EStatusCode } from 'src/enums/status-code';
import { IngredientPlate } from 'src/ingredient-plates/entities/ingredient-plate.entity';
import { Instruction } from 'src/instructions/entities/instruction.entity';
import { ImagePlate } from 'src/images-plates/entities/image-plate.entity';

@Injectable()
export class PlatesService {
  constructor(
    @InjectRepository(Plate)
    private readonly plateRepository: Repository<Plate>,
  ) {}

  async create(createPlateDto: CreatePlateDto) {
    const newIngredientPlates: IngredientPlate[] =
      createPlateDto.ingredientPlates.map((ingredientPlateItem) => {
        const ingredientPlate = new IngredientPlate();

        ingredientPlate.name = ingredientPlateItem.name;
        ingredientPlate.quantity = ingredientPlateItem.quantity;

        return ingredientPlate;
      });

    const newInstructions: Instruction[] = createPlateDto.instructions.map(
      (instructionItem) => {
        const instruction = new Instruction();

        instruction.description = instructionItem.description;
        return instruction;
      },
    );

    const newImagePlate = new ImagePlate();
    newImagePlate.description = createPlateDto.image.description;
    newImagePlate.link = createPlateDto.image.link;

    const plate: Plate = new Plate();
    plate.name = createPlateDto.name;
    plate.rating = createPlateDto.rating;
    plate.description = createPlateDto.description;
    plate.ingredientPlates = newIngredientPlates;
    plate.image = newImagePlate;
    plate.instructions = newInstructions;

    const plateCreated = await this.plateRepository.save(plate);
    return HttpResponse.success(EStatusCode.OK, plateCreated);
  }

  findAll() {
    const plates = this.plateRepository.find();
    return HttpResponse.success(EStatusCode.OK, plates);
  }
}
