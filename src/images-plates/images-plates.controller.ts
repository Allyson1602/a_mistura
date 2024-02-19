import { Controller } from '@nestjs/common';
import { ImagesPlatesService } from './images-plates.service';

@Controller('images-plates')
export class ImagesPlatesController {
  constructor(private readonly imagesPlatesService: ImagesPlatesService) {}
}
