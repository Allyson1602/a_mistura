import { Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import categoriesData from './categories.data';
import HttpResponse from 'src/utils/http-response';
import { IHttpResponse } from 'src/types/response';
import { EStatusCode } from 'src/enums/status-code';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async createInitialCategories(): Promise<IHttpResponse<number[]>> {
    const newCategoriesId: number[] = [];

    for (const categoryData of categoriesData) {
      const hasCategory = await this.categoryRepository.findOne({
        where: { name: categoryData },
      });

      if (!hasCategory) {
        const newCategory = new Category();
        newCategory.name = categoryData;

        const categoryCreated = await this.categoryRepository.create(
          newCategory,
        );
        newCategoriesId.push(categoryCreated.id);
      }
    }

    return HttpResponse.success(EStatusCode.CREATED, newCategoriesId);
  }

  findAll() {
    const categories = this.categoryRepository.find();

    return HttpResponse.success(EStatusCode.CREATED, categories);
  }
}
