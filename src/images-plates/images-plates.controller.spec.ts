import { Test, TestingModule } from '@nestjs/testing';
import { ImagesPlatesController } from './images-plates.controller';
import { ImagesPlatesService } from './images-plates.service';

describe('ImagesPlatesController', () => {
  let controller: ImagesPlatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagesPlatesController],
      providers: [ImagesPlatesService],
    }).compile();

    controller = module.get<ImagesPlatesController>(ImagesPlatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
