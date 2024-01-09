import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
export declare class CategoriesService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    createInitialCategories(): Promise<void>;
    findAll(): Promise<Category[]>;
}
