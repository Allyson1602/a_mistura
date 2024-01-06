import { Inject, Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { CreateOpenaiDto } from './dto/create-openai.dto';
import { Openai } from './entities/openai.entity';
import { Ingredient } from 'src/ingredients/entities/ingredient.entity';
import { PlatesService } from 'src/plates/plates.service';
import { Plate } from 'src/plates/entities/plate.entity';
import { InstructionsService } from 'src/instructions/instructions.service';
import { Instruction } from 'src/instructions/entities/instruction.entity';
import { ImagesPlatesService } from 'src/images-plates/images-plates.service';
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
    const ingredients: Ingredient[] = [];

    createOpenaiDto.ingredients.forEach(async (ingredientItem) => {
      const newIngredient = new Ingredient();
      newIngredient.name = ingredientItem.name.toLowerCase().trim();
      newIngredient.quantity = '';

      ingredients.push(newIngredient);
    });

    const newPlateOpenai = new Openai();
    newPlateOpenai.ingredients = await Promise.all(ingredients);

    const ingredientsName = ingredients.map((ingredientItem) => {
      return ingredientItem.name;
    });

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content:
            'Crie um JSON com o resultado em português, em minúsculo mas com as chaves dos atributos em inglês. Retorne no máximo 5 receitas. Retorne as informações name, rating, description, image, instructions e ingredients. Ingredients deve ter os valores de todos os ingredientes utilizados para preparar a receita, além dos já informados. Buscar primeiramente receitas que utilizam apenas os ingredientes informados. O valor de ingredients deve ser um array com name e quantity. Quantity é a unidade de medida utilizada naquele ingrediente, por exemplo 2, 100g, 300ml. O valor de instructions deve ser um array com os passos para o preparo da receita. Image é um object com uma descrição detalhada da receita de comida para gerar uma imagem em que descrição é description no JSON. Exemplo: {recipes: [{name: "", rating: 0, description: "", image: {description: ""}, instructions: ["", "", ""], ingredients: [{name: "", quantity: ""}]]}',
        },
        {
          role: 'user',
          content: `Busque receitas de comida que possuem esses ingredientes: ${ingredientsName.join(
            ', ',
          )}.`,
        },
      ],
      model: 'gpt-3.5-turbo-1106',
      temperature: 1,
      response_format: { type: 'json_object' }, //  instruir o modelo a produzir JSON por conta própria por meio de uma mensagem do sistema ou do usuário
    });

    const responseOpenai = JSON.parse(completion.choices[0].message.content);

    const plates = responseOpenai.recipes.map(async (recipeItem) => {
      const instructions: Promise<Instruction>[] = recipeItem.instructions.map(
        (instructionItem) => {
          return this.instructionsService.create({
            description: instructionItem,
          });
        },
      );

      recipeItem.image.link = await this.generatePlateImage(
        recipeItem.description,
      );
      const imagePlate = this.imagesPlatesService.create(recipeItem.image);

      const newPlate = new Plate();
      newPlate.name = recipeItem.name;
      newPlate.rating = recipeItem.rating;
      newPlate.image = await imagePlate;
      newPlate.description = recipeItem.description;
      newPlate.instructions = await Promise.all(instructions);
      newPlate.ingredients = await Promise.all(ingredients);

      return this.platesService.create(newPlate);
    });

    return await Promise.all(plates);
  }

  async generatePlateImage(descriptionImage: string) {
    // const response = await openai.images.generate({
    //   model: 'dall-e-3',
    //   prompt: descriptionImage,
    //   size: '1024x1024',
    //   quality: 'standard',
    //   n: 1,
    // });

    // const imageUrl = response.data[0].url;
    // return imageUrl;

    return '';
  }
}
