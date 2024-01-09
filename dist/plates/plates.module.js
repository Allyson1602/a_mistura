"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatesModule = void 0;
const common_1 = require("@nestjs/common");
const plates_service_1 = require("./plates.service");
const plates_controller_1 = require("./plates.controller");
const plate_entity_1 = require("./entities/plate.entity");
const typeorm_1 = require("@nestjs/typeorm");
const instructions_module_1 = require("../instructions/instructions.module");
const images_plates_module_1 = require("../images-plates/images-plates.module");
const ingredient_plates_module_1 = require("../ingredient-plates/ingredient-plates.module");
let PlatesModule = class PlatesModule {
};
exports.PlatesModule = PlatesModule;
exports.PlatesModule = PlatesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([plate_entity_1.Plate]),
            ingredient_plates_module_1.IngredientPlatesModule,
            instructions_module_1.InstructionsModule,
            images_plates_module_1.ImagesPlatesModule,
        ],
        controllers: [plates_controller_1.PlatesController],
        providers: [plates_service_1.PlatesService],
        exports: [plates_service_1.PlatesService],
    })
], PlatesModule);
//# sourceMappingURL=plates.module.js.map