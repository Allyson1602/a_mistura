"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientPlatesModule = void 0;
const common_1 = require("@nestjs/common");
const ingredient_plates_service_1 = require("./ingredient-plates.service");
const ingredient_plates_controller_1 = require("./ingredient-plates.controller");
const ingredient_plate_entity_1 = require("./entities/ingredient-plate.entity");
const typeorm_1 = require("@nestjs/typeorm");
let IngredientPlatesModule = class IngredientPlatesModule {
};
exports.IngredientPlatesModule = IngredientPlatesModule;
exports.IngredientPlatesModule = IngredientPlatesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ingredient_plate_entity_1.IngredientPlate])],
        controllers: [ingredient_plates_controller_1.IngredientPlatesController],
        providers: [ingredient_plates_service_1.IngredientPlatesService],
        exports: [ingredient_plates_service_1.IngredientPlatesService],
    })
], IngredientPlatesModule);
//# sourceMappingURL=ingredient-plates.module.js.map