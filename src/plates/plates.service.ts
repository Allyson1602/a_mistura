import { Inject, Injectable } from '@nestjs/common';
import { CreatePlateDto } from './dto/create-plate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Plate } from './entities/plate.entity';
import { Repository } from 'typeorm';
import { InstructionsService } from 'src/instructions/instructions.service';
import { ImagesPlatesService } from 'src/images-plates/images-plates.service';
import { IngredientPlatesService } from 'src/ingredient-plates/ingredient-plates.service';

@Injectable()
export class PlatesService {
  constructor(
    @InjectRepository(Plate)
    private readonly plateRepository: Repository<Plate>,
    @Inject(IngredientPlatesService)
    private readonly ingredientplatesService: IngredientPlatesService,
    @Inject(InstructionsService)
    private readonly instructionsService: InstructionsService,
    @Inject(ImagesPlatesService)
    private readonly imagesPlatesService: ImagesPlatesService,
  ) {}

  async create(createPlateDto: CreatePlateDto) {
    const ingredientsQuery = createPlateDto.ingredientPlates.map(
      (ingredientItem) => {
        const newIngredient =
          this.ingredientplatesService.create(ingredientItem);

        return newIngredient;
      },
    );

    const instructionsQuery = createPlateDto.instructions.map(
      (instructionItem) => {
        const newInstruction = this.instructionsService.create(instructionItem);

        return newInstruction;
      },
    );

    const imagePlate = this.imagesPlatesService.create(createPlateDto.image);

    const plate: Plate = new Plate();
    plate.name = createPlateDto.name;
    plate.rating = createPlateDto.rating;
    plate.description = createPlateDto.description;
    plate.image = await imagePlate;
    plate.ingredientPlates = await Promise.all(ingredientsQuery);
    plate.instructions = await Promise.all(instructionsQuery);

    return await this.plateRepository.save(plate);
  }

  findAll() {
    const plates = this.plateRepository.find();

    return plates;
  }
}
