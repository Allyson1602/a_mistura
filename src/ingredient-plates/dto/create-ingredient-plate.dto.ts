import { IsString } from 'class-validator';

export class CreateIngredientPlateDto {
  @IsString()
  name: string;

  @IsString()
  quantity: string;
}
