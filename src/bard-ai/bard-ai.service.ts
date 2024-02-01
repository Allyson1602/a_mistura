import { Inject, Injectable } from '@nestjs/common';
import { CreateBardAiDto } from './dto/create-bard-ai.dto';
import { Instruction } from 'src/instructions/entities/instruction.entity';
import { IngredientPlate } from 'src/ingredient-plates/entities/ingredient-plate.entity';
import { Plate } from 'src/plates/entities/plate.entity';
import { onlyRealValues } from 'src/utils/only-real-values';
import { ImagesPlatesService } from 'src/images-plates/images-plates.service';
import { InstructionsService } from 'src/instructions/instructions.service';
import { PlatesService } from 'src/plates/plates.service';
import { OpenaiService } from 'src/openai/openai.service';
import descriptionIAGenerate from 'src/utils/description-ia-generate';
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv/config');

@Injectable()
export class BardAiService {
  constructor(
    @Inject(PlatesService)
    private readonly platesService: PlatesService,
    @Inject(InstructionsService)
    private readonly instructionsService: InstructionsService,
    @Inject(ImagesPlatesService)
    private readonly imagesPlatesService: ImagesPlatesService,
    @Inject(OpenaiService)
    private readonly openaiService: OpenaiService,
  ) {}

  private genAI = new GoogleGenerativeAI(process.env.BARDAI_API_KEY);

  async generatePlate(createBardAiDto: CreateBardAiDto) {
    const model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `
      ${descriptionIAGenerate} 
      Busque receitas de comida que possuem apenas esses ingredientes: ${createBardAiDto.ingredients.join(
        ', ',
      )}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    const responseBardAi = JSON.parse(response.text());

    const plates = responseBardAi.recipes.map(async (recipeItem) => {
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

      recipeItem.image.link = await this.openaiService.generatePlateImage(
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
}
