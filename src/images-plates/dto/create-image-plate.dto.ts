import { IsString } from 'class-validator';

export class CreateImagePlateDto {
  @IsString()
  description: string;

  @IsString()
  link: string;
}
