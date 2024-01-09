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
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content:
            'Você é um cozinheiro. Respire fundo, Crie um JSON em português e em minúsculo mas com as chaves dos atributos em inglês. Crie receitas mais simples e fáceis de fazer possíveis. É de extrema importância buscar receitas que utilizem apenas os ingredientes informados. Você receberá uma quantidade indefinida de ingredientes para encontrar receitas que utilizam apenas esses ingredientes. Retorne no máximo 5 receitas. Retorne as informações name, rating, description, image, instructions e ingredientsPlate. Ingredients deve ter os valores de todos os ingredientes utilizados para preparar a receita em minúsculo e no singular. O valor de ingredientsPlate deve ser um array com name (name em minúsculo) e quantity. Quantity é a unidade de medida utilizada naquele ingrediente, por exemplo 2 unidades, 100g, 300ml. O valor de instructions deve ser um array com os passos para o preparo da receita. Image é um object com uma descrição detalhada da receita de comida para gerar uma imagem em que descrição é description no JSON. Exemplo: {recipes: [{name: "", rating: 0, description: "", image: {description: ""}, instructions: ["", "", ""], ingredientsPlate: [{name: "", quantity: ""}]]}. Faça o seu melhor!. Por exemplo se receber os ingredientes ovo e pão francês, pode ser gerado o seguinte: {recipes: [{name: "Pão com ovo", rating: 5, description: "Um delicioso pão com ovo", image: {description: "Um pão com ovo quente"}, instructions: ["Frite o ovo", "Corte o pão", "Coloque o ovo frito dentro do pão"], ingredientsPlate: [{name: "ovo", quantity: "2 unidades"}, {name: "pão frances", quantity: "1 unidade"}]]}. Um outro exemplo: {recipes: [{name: "Espaguete de carne moída", rating: 4.6, description: "Um delicioso prato de espaguete de carne moída com extrato de tomate", image: {description: "Um prato de espaguete de carne moída com extrato de tomate"}, instructions: ["Em uma panela, ferva a água e após isso coloque o macarrão e espere até ficar no ponto", "prepare o tempero para a carne e frite em outra panela", "em outra panela, deixe o extrato de tomate por 5 minutos", "misture o extrato de tomate com a carne moída e jogue por cima do macarrão ao seu gosto"], ingredientsPlate: [{name: "macarrão", quantity: "500g"}, {name: "carne moída", quantity: "200g"}, {name: "extrato de tomate", quantity: "1 lata"}]]}',
        },
        {
          role: 'user',
          content: `Busque receitas de comida que possuem apenas esses ingredientes: ${createOpenaiDto.ingredients.join(
            ', ',
          )}.`,
        },
      ],
      model: 'gpt-3.5-turbo-1106',
      temperature: 1,
      response_format: { type: 'json_object' },
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
