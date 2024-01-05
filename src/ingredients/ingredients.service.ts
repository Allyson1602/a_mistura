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

  async createMany(
    createIngredientsDto: CreateIngredientDto[],
  ): Promise<number[]> {
    const newIngredients: Ingredient[] = createIngredientsDto.map(
      (ingredientDto) => {
        const ingredient = new Ingredient();
        ingredient.name = ingredientDto.name;
        ingredient.quantity = ingredientDto.quantity;

        return ingredient;
      },
    );

    const ingredientsRaw = (
      await this.ingredientRepository
        .createQueryBuilder()
        .insert()
        .into('ingredient')
        .values(newIngredients)
        .execute()
    ).raw;

    const ingredientsId: number[] = ingredientsRaw.map((rawItem) => {
      return rawItem.id;
    });

    return ingredientsId;
  }

  async create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    const ingredient: Ingredient = new Ingredient();

    ingredient.name = createIngredientDto.name;
    ingredient.quantity = createIngredientDto.quantity;

    return await this.ingredientRepository.save(ingredient);
  }

  async findAll(): Promise<Ingredient[]> {
    const ingredients = this.ingredientRepository.find();

    return ingredients;
  }

  async findByName(name: string): Promise<Ingredient> {
    const ingredient = this.ingredientRepository.findOneBy({
      name: name,
    });

    return ingredient;
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
