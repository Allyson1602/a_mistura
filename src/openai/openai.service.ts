import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { CreateOpenaiDto } from './dto/create-openai.dto';
import openAiData, { openAiImageData } from 'src/openai/open-ai.data';
import { IAiResponse } from 'src/types/response';
import HttpResponse from 'src/utils/http-response';
require('dotenv/config');

@Injectable()
export class OpenaiService {
  private openai = new OpenAI();

  private async getRecipesOpenAi(
    createOpenaiDto: CreateOpenaiDto,
  ): Promise<IAiResponse> {
    openAiData.messages = [
      ...openAiData.messages,
      {
        role: 'user',
        content: `Busque receitas de comida que possuem apenas esses ingredientes: ${createOpenaiDto.ingredients.join(
          ', ',
        )}.`,
      },
    ];

    const completion = await this.openai.chat.completions.create(openAiData);

    return JSON.parse(completion.choices[0].message.content);
  }

  async generatePlate(createOpenaiDto: CreateOpenaiDto) {
    const recipesAi: IAiResponse = await this.getRecipesOpenAi(createOpenaiDto);

    return HttpResponse.success(200, recipesAi);
  }

  async generatePlateImage(descriptionImage: string) {
    openAiImageData.prompt = descriptionImage;

    const response = await this.openai.images.generate(openAiImageData);

    return HttpResponse.success(200, response.data[0].url);
  }
}
