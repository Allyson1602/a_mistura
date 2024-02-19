import { PartialType } from '@nestjs/mapped-types';
import { CreateBardAiDto } from './create-bard-ai.dto';

export class UpdateBardAiDto extends PartialType(CreateBardAiDto) {}
