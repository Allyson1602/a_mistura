import { IsString } from 'class-validator';

export class CreateInstructionDto {
  @IsString()
  description: string;
}
