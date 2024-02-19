import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { Ingredient } from './entities/ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import HttpResponse from 'src/utils/http-response';
import { IHttpResponse } from 'src/types/response';
import ingredientsData from './ingredients.data';
import { EStatusCode } from 'src/enums/status-code';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
  ) {}

  async createInitialIngredients(): Promise<IHttpResponse<number[]>> {
    const newIngredientsId: number[] = [];

    for (const ingredientItem of [...new Set(ingredientsData)]) {
      const hasIngredient = await this.ingredientRepository.findOne({
        where: { name: ingredientItem },
      });

      if (!hasIngredient) {
        const newIngredient = { name: ingredientItem };

        const ingredientCreated = await this.ingredientRepository.save(
          newIngredient,
        );
        newIngredientsId.push(ingredientCreated.id);
      }
    }

    return HttpResponse.success(EStatusCode.CREATED, newIngredientsId);
  }

  async createMany(
    createIngredientsDto: CreateIngredientDto[],
  ): Promise<IHttpResponse<number[]>> {
    const newIngredients: Ingredient[] = createIngredientsDto.map(
      (ingredientDto) => {
        const ingredient = new Ingredient();
        ingredient.name = ingredientDto.name;

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

    return HttpResponse.success(EStatusCode.CREATED, ingredientsId);
  }

  async create(
    createIngredientDto: CreateIngredientDto,
  ): Promise<IHttpResponse<Ingredient>> {
    const ingredient: Ingredient = new Ingredient();

    ingredient.name = createIngredientDto.name;

    const newIngredient = await this.ingredientRepository.save(ingredient);
    return HttpResponse.success(EStatusCode.CREATED, newIngredient);
  }

  async findAll(name: string): Promise<IHttpResponse<Ingredient[]>> {
    const ingredients: Ingredient[] = await this.ingredientRepository.find({
      where: {
        name: ILike(`${name}%`),
      },
      take: 12,
    });

    return HttpResponse.success(EStatusCode.OK, ingredients);
  }
}
