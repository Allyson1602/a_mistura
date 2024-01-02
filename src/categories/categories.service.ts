import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async createInitialCategories() {
    const appetizer = new Category();
    appetizer.name = 'entradas';

    const mainDishes = new Category();
    mainDishes.name = 'pratos principais';

    const desserts = new Category();
    desserts.name = 'sobremesas';

    const salads = new Category();
    salads.name = 'saladas';

    const soupsBroths = new Category();
    soupsBroths.name = 'sopas e caldos';

    const fishSeafood = new Category();
    fishSeafood.name = 'peixe e frutos do mar';

    const vegetarianVegan = new Category();
    vegetarianVegan.name = 'vegetarianas e veganas';

    const pastas = new Category();
    pastas.name = 'massas';

    const breakfast = new Category();
    breakfast.name = 'café da manhã';

    const breadsCakes = new Category();
    breadsCakes.name = 'pães e bolos';

    const healthy = new Category();
    healthy.name = 'saudável';

    const newCategories: Category[] = [
      appetizer,
      mainDishes,
      desserts,
      salads,
      soupsBroths,
      fishSeafood,
      vegetarianVegan,
      pastas,
      breakfast,
      breadsCakes,
      healthy,
    ];

    for (const categoryData of newCategories) {
      const existingCategory = await this.categoryRepository.findOne({
        where: { name: categoryData.name },
      });

      if (!existingCategory) {
        const newCategory = this.categoryRepository.create(categoryData);
        await this.categoryRepository.save(newCategory);
      }
    }
  }

  // create(createCategoryDto: CreateCategoryDto) {
  //   return 'This action adds a new category';
  // }

  findAll() {
    const categories = this.categoryRepository.find();

    return categories;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} category`;
  // }
  // update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   return `This action updates a #${id} category`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} category`;
  // }
}
