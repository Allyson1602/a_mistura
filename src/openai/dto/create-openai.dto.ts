import { IsArray } from 'class-validator';

export class CreateOpenaiDto {
  @IsArray()
  ingredients: string[];
}
