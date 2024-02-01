import { Inject, Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { CreateOpenaiDto } from './dto/create-openai.dto';
import { PlatesService } from 'src/plates/plates.service';
import { Plate } from 'src/plates/entities/plate.entity';
import { InstructionsService } from 'src/instructions/instructions.service';
import { Instruction } from 'src/instructions/entities/instruction.entity';
import { ImagesPlatesService } from 'src/images-plates/images-plates.service';
import { onlyRealValues } from 'src/utils/only-real-values';
import { IngredientPlate } from 'src/ingredient-plates/entities/ingredient-plate.entity';
import bardAiData from 'src/bard-ai/bard-ai.data';
require('dotenv/config');

const openai = new OpenAI();

@Injectable()
export class OpenaiService {
  constructor(
    @Inject(PlatesService)
    private readonly platesService: PlatesService,
    @Inject(InstructionsService)
    private readonly instructionsService: InstructionsService,
    @Inject(ImagesPlatesService)
    private readonly imagesPlatesService: ImagesPlatesService,
  ) {}

  async generatePlate(createOpenaiDto: CreateOpenaiDto) {
    bardAiData.messages = [
      ...bardAiData.messages,
      {
        role: 'user',
        content: `Busque receitas de comida que possuem apenas esses ingredientes: ${createOpenaiDto.ingredients.join(
          ', ',
        )}.`,
      },
    ];
    const completion = await openai.chat.completions.create(bardAiData);

    const responseOpenai = JSON.parse(completion.choices[0].message.content);

    const plates = responseOpenai.recipes.map(async (recipeItem) => {
      const instructions: Promise<Instruction>[] = recipeItem.instructions.map(
        (instructionItem) => {
          return this.instructionsService.create({
            description: instructionItem,
          });
        },
      );

      const ingredientsPlate: Promise<IngredientPlate>[] =
        recipeItem.ingredientsPlate.map((ingredientPlateItem) => {
          const newIngredientPlate = new IngredientPlate();

          newIngredientPlate.name = ingredientPlateItem.name;
          newIngredientPlate.quantity = ingredientPlateItem.quantity;

          return newIngredientPlate;
        });

      recipeItem.image.link = await this.generatePlateImage(
        recipeItem.description,
      );
      const imagePlate = this.imagesPlatesService.create(recipeItem.image);

      const newPlate = new Plate();
      newPlate.name = recipeItem.name;
      newPlate.rating = recipeItem.rating;
      newPlate.image = await imagePlate;
      newPlate.description = recipeItem.description;
      newPlate.instructions = onlyRealValues(await Promise.all(instructions));
      newPlate.ingredientPlates = onlyRealValues(
        await Promise.all(ingredientsPlate),
      );

      return this.platesService.create(newPlate);
    });

    return await Promise.all(plates);
  }

  async generatePlateImage(descriptionImage: string) {
    const response = await openai.images.generate({
      model: 'dall-e-2',
      prompt: descriptionImage,
      size: '1024x1024',
      quality: 'standard',
      n: 1,
    });

    const imageUrl = response.data[0].url;
    return imageUrl;
  }
}
