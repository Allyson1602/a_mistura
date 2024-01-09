import { OnModuleInit } from '@nestjs/common';
import { CategoriesService } from './categories/categories.service';
import { IngredientsService } from './ingredients/ingredients.service';
export declare class AppModule implements OnModuleInit {
    private readonly categoriesService;
    private readonly ingredientsService;
    constructor(categoriesService: CategoriesService, ingredientsService: IngredientsService);
    onModuleInit(): Promise<void>;
}
