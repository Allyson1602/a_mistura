import { Module } from '@nestjs/common';
import { ImagesPlatesService } from './images-plates.service';
import { ImagesPlatesController } from './images-plates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagePlate } from './entities/image-plate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImagePlate])],
  controllers: [ImagesPlatesController],
  providers: [ImagesPlatesService],
  exports: [ImagesPlatesService],
})
export class ImagesPlatesModule {}
