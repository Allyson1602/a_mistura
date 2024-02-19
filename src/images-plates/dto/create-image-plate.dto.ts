import { IsDefined, IsString } from 'class-validator';

export class CreateImagePlateDto {
  @IsString()
  @IsDefined()
  description: string;

  @IsString()
  @IsDefined()
  link: string;
}
