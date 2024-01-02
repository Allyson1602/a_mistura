import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Ingredient } from './entities/ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
  ) {}

  async create(createIngredientDto: CreateIngredientDto) {
    const ingredient: Ingredient = new Ingredient();

    ingredient.name = createIngredientDto.name;
    ingredient.quantity = createIngredientDto.quantity;

    return await this.ingredientRepository.save(ingredient);
  }

  findAll() {
    return `This action returns all ingredients`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} ingredient`;
  // }

  // update(id: number, updateIngredientDto: UpdateIngredientDto) {
  //   return `This action updates a #${id} ingredient`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} ingredient`;
  // }
}
