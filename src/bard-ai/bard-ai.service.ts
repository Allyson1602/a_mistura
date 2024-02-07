require('dotenv/config');
import { Inject, Injectable } from '@nestjs/common';
import { CreateBardAiDto } from './dto/create-bard-ai.dto';
import { PlatesService } from 'src/plates/plates.service';
import descriptionIAGenerate from 'src/utils/description-ia-generate';
import { IBardAiResponse } from 'src/types/bard-ai-response';
import HttpResponse from 'src/utils/http-response';
import { IAiResponse, IHttpResponse } from 'src/types/response';
const { GoogleGenerativeAI } = require('@google/generative-ai');

@Injectable()
export class BardAiService {
  private genAI = new GoogleGenerativeAI(process.env.BARDAI_API_KEY);

  private async getRecipesBardAi(
    createBardAiDto: CreateBardAiDto,
  ): Promise<IAiResponse> {
    const model = this.genAI.getGenerativeModel({
      model: process.env.BARDAI_MODEL,
    });

    const prompt = `
      ${descriptionIAGenerate}
      Busque receitas de comida que possuem apenas esses ingredientes: ${createBardAiDto.ingredients.join(
        ', ',
      )}`;

    const result: IBardAiResponse = await model.generateContent(prompt);
    const response = result.response;

    let responseText: string = response.text();
    if (responseText && responseText.startsWith('```')) {
      responseText = responseText.slice(4, responseText.length - 4);
    }
    return JSON.parse(responseText);
  }

  async generatePlate(
    createBardAiDto: CreateBardAiDto,
  ): Promise<IHttpResponse<IAiResponse>> {
    const recipesAi: IAiResponse = await this.getRecipesBardAi(createBardAiDto);

    return HttpResponse.success(200, recipesAi);
  }
}
