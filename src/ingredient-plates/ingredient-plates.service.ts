import { Injectable } from '@nestjs/common';
import { CreateIngredientPlateDto } from './dto/create-ingredient-plate.dto';
import { IngredientPlate } from './entities/ingredient-plate.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import HttpResponse from 'src/utils/http-response';
import { EStatusCode } from 'src/enums/status-code';

@Injectable()
export class IngredientPlatesService {
  constructor(
    @InjectRepository(IngredientPlate)
    private readonly ingredientPlateRepository: Repository<IngredientPlate>,
  ) {}

  async create(createIngredientPlateDto: CreateIngredientPlateDto) {
    const ingredientPlate: IngredientPlate = new IngredientPlate();

    ingredientPlate.name = createIngredientPlateDto.name;
    ingredientPlate.quantity = createIngredientPlateDto.quantity;

    const ingredientPlateCreated = await this.ingredientPlateRepository.save(
      ingredientPlate,
    );
    return HttpResponse.success(EStatusCode.CREATED, ingredientPlateCreated);
  }
}
