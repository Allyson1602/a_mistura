import { Test, TestingModule } from '@nestjs/testing';
import { BardAiController } from './bard-ai.controller';
import { BardAiService } from './bard-ai.service';

describe('BardAiController', () => {
  let controller: BardAiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BardAiController],
      providers: [BardAiService],
    }).compile();

    controller = module.get<BardAiController>(BardAiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
