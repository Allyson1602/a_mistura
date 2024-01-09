"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const category_entity_1 = require("./entities/category.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let CategoriesService = class CategoriesService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async createInitialCategories() {
        const appetizer = new category_entity_1.Category();
        appetizer.name = 'entradas';
        const mainDishes = new category_entity_1.Category();
        mainDishes.name = 'pratos principais';
        const desserts = new category_entity_1.Category();
        desserts.name = 'sobremesas';
        const salads = new category_entity_1.Category();
        salads.name = 'saladas';
        const soupsBroths = new category_entity_1.Category();
        soupsBroths.name = 'sopas e caldos';
        const fishSeafood = new category_entity_1.Category();
        fishSeafood.name = 'peixe e frutos do mar';
        const vegetarianVegan = new category_entity_1.Category();
        vegetarianVegan.name = 'vegetarianas e veganas';
        const pastas = new category_entity_1.Category();
        pastas.name = 'massas';
        const breakfast = new category_entity_1.Category();
        breakfast.name = 'café da manhã';
        const breadsCakes = new category_entity_1.Category();
        breadsCakes.name = 'pães e bolos';
        const healthy = new category_entity_1.Category();
        healthy.name = 'saudável';
        const newCategories = [
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
                this.categoryRepository.save(newCategory);
            }
        }
    }
    findAll() {
        const categories = this.categoryRepository.find();
        return categories;
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map