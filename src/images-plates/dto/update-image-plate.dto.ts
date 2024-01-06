import { PartialType } from '@nestjs/mapped-types';
import { CreateImagePlateDto } from './create-image-plate.dto';

export class UpdateImagePlateDto extends PartialType(CreateImagePlateDto) {}
