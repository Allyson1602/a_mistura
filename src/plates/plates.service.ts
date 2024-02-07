import { Inject, Injectable } from '@nestjs/common';
import { CreatePlateDto } from './dto/create-plate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Plate } from './entities/plate.entity';
import { Repository } from 'typeorm';
import HttpResponse from 'src/utils/http-response';
import { EStatusCode } from 'src/enums/status-code';
import { IngredientPlate } from 'src/ingredient-plates/entities/ingredient-plate.entity';
import { Instruction } from 'src/instructions/entities/instruction.entity';
import { ImagePlate } from 'src/images-plates/entities/image-plate.entity';
import { onlyRealValues } from 'src/utils/only-real-values';
import { onlyIds } from 'src/utils/only-ids';
import { IAiResponse } from 'src/types/response';
import { BardAiService } from 'src/bard-ai/bard-ai.service';
import { OpenaiService } from 'src/openai/openai.service';
import { CreateBardAiDto } from 'src/bard-ai/dto/create-bard-ai.dto';
import { CreateOpenaiDto } from 'src/openai/dto/create-openai.dto';

@Injectable()
export class PlatesService {
  constructor(
    @InjectRepository(Plate)
    private readonly plateRepository: Repository<Plate>,
    @Inject(BardAiService)
    private readonly bardAiService: BardAiService,
    @Inject(OpenaiService)
    private readonly openAiService: OpenaiService,
  ) {}

  async createManyByAi(createAiDto: CreateBardAiDto | CreateOpenaiDto) {
    let platesGenerated: IAiResponse | null = null;

    if (process.env.AI_ACTIVE === 'BARD_AI') {
      const platesBardAi = await this.bardAiService.generatePlate(createAiDto);
      platesGenerated = platesBardAi.data;
    } else if (process.env.AI_ACTIVE === 'OPEN_AI') {
      const platesOpenAi = await this.openAiService.generatePlate(createAiDto);
      platesGenerated = platesOpenAi.data;
    }

    const newPlates: Promise<Plate>[] = platesGenerated.recipes.map(
      (recipeItem) => {
        const instructions: Instruction[] = recipeItem.instructions.map(
          (instructionItem) => {
            const newInstruction = new Instruction();
            newInstruction.description = instructionItem;

            return newInstruction;
          },
        );

        const ingredientsPlate: IngredientPlate[] =
          recipeItem.ingredientsPlate.map((ingredientsPlateItem) => {
            const newIngredientPlate = new IngredientPlate();

            newIngredientPlate.name = ingredientsPlateItem.name;
            newIngredientPlate.quantity = ingredientsPlateItem.quantity;

            return newIngredientPlate;
          });

        // recipeItem.image.link = await this.openaiService.generatePlateImage(
        //   recipeItem.description,
        // );
        // const imagePlate = await this.imagesPlatesService.create(
        //   recipeItem.image,
        // );

        const newPlate = new Plate();
        newPlate.name = recipeItem.name;
        newPlate.rating = recipeItem.rating;
        // newPlate.image = imagePlate.data;
        newPlate.description = recipeItem.description;
        newPlate.instructions = onlyRealValues(instructions);
        newPlate.ingredientPlates = ingredientsPlate;

        return this.plateRepository.save(newPlate);
      },
    );

    return onlyIds(await Promise.all(newPlates));
  }

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
    plate.instructions = onlyRealValues(newInstructions);

    const plateCreated = await this.plateRepository.save(plate);
    return HttpResponse.success(EStatusCode.OK, plateCreated);
  }

  findAll() {
    const plates = this.plateRepository.find();
    return HttpResponse.success(EStatusCode.OK, plates);
  }
}
