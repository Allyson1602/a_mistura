import { Test, TestingModule } from '@nestjs/testing';
import { BardAiService } from './bard-ai.service';

describe('BardAiService', () => {
  let service: BardAiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BardAiService],
    }).compile();

    service = module.get<BardAiService>(BardAiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
