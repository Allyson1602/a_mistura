import { Test, TestingModule } from '@nestjs/testing';
import { IngredientPlatesController } from './ingredient-plates.controller';
import { IngredientPlatesService } from './ingredient-plates.service';

describe('IngredientPlatesController', () => {
  let controller: IngredientPlatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngredientPlatesController],
      providers: [IngredientPlatesService],
    }).compile();

    controller = module.get<IngredientPlatesController>(IngredientPlatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
