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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const plates_module_1 = require("./plates/plates.module");
const ingredients_module_1 = require("./ingredients/ingredients.module");
const categories_module_1 = require("./categories/categories.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const data_source_1 = require("./data-source");
const instructions_module_1 = require("./instructions/instructions.module");
const categories_service_1 = require("./categories/categories.service");
const openai_module_1 = require("./openai/openai.module");
const images_plates_module_1 = require("./images-plates/images-plates.module");
const ingredients_service_1 = require("./ingredients/ingredients.service");
const ingredient_plates_module_1 = require("./ingredient-plates/ingredient-plates.module");
const bard_ai_module_1 = require("./bard-ai/bard-ai.module");
let AppModule = class AppModule {
    constructor(categoriesService, ingredientsService) {
        this.categoriesService = categoriesService;
        this.ingredientsService = ingredientsService;
    }
    async onModuleInit() {
        await this.categoriesService.createInitialCategories();
        await this.ingredientsService.createInitialIngredients();
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            }),
            plates_module_1.PlatesModule,
            ingredients_module_1.IngredientsModule,
            categories_module_1.CategoriesModule,
            typeorm_1.TypeOrmModule.forRoot(data_source_1.DataSource),
            instructions_module_1.InstructionsModule,
            openai_module_1.OpenaiModule,
            images_plates_module_1.ImagesPlatesModule,
            ingredient_plates_module_1.IngredientPlatesModule,
            bard_ai_module_1.BardAiModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService,
        ingredients_service_1.IngredientsService])
], AppModule);
//# sourceMappingURL=app.module.js.map