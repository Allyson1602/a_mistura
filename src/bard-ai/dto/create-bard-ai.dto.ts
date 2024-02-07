import { IsArray } from 'class-validator';

export class CreateBardAiDto {
  @IsArray()
  ingredients: string[];
}
