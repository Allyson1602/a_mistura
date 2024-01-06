import { Test, TestingModule } from '@nestjs/testing';
import { ImagesPlatesService } from './images-plates.service';

describe('ImagesPlatesService', () => {
  let service: ImagesPlatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagesPlatesService],
    }).compile();

    service = module.get<ImagesPlatesService>(ImagesPlatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
