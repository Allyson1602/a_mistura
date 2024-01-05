import { Inject, Injectable } from '@nestjs/common';
import { CreatePlateDto } from './dto/create-plate.dto';
import { UpdatePlateDto } from './dto/update-plate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Plate } from './entities/plate.entity';
import { Repository } from 'typeorm';
import { IngredientsService } from 'src/ingredients/ingredients.service';
import { InstructionsService } from 'src/instructions/instructions.service';

@Injectable()
export class PlatesService {
  constructor(
    @InjectRepository(Plate)
    private readonly plateRepository: Repository<Plate>,
    @Inject(IngredientsService)
    private readonly ingredientsService: IngredientsService,
    @Inject(InstructionsService)
    private readonly instructionsService: InstructionsService,
  ) {}

  async create(createPlateDto: CreatePlateDto) {
    const ingredientsQuery = createPlateDto.ingredients.map(
      (ingredientItem) => {
        const newIngredient = this.ingredientsService.create(ingredientItem);

        return newIngredient;
      },
    );

    const instructionsQuery = createPlateDto.instructions.map(
      (instructionItem) => {
        const newInstruction = this.instructionsService.create(instructionItem);

        return newInstruction;
      },
    );

    const plate: Plate = new Plate();
    plate.name = createPlateDto.name;
    plate.image = createPlateDto.image;
    plate.rating = createPlateDto.rating;
    plate.description = createPlateDto.description;
    plate.ingredients = await Promise.all(ingredientsQuery);
    plate.instructions = await Promise.all(instructionsQuery);

    return await this.plateRepository.save(plate);
  }

  findAll() {
    const plates = this.plateRepository.find();

    return plates;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} plate`;
  // }

  // update(id: number, updatePlateDto: UpdatePlateDto) {
  //   return `This action updates a #${id} plate`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} plate`;
  // }
}
