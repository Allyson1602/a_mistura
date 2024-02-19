import { Test, TestingModule } from '@nestjs/testing';
import { IngredientPlatesService } from './ingredient-plates.service';

describe('IngredientPlatesService', () => {
  let service: IngredientPlatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngredientPlatesService],
    }).compile();

    service = module.get<IngredientPlatesService>(IngredientPlatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
