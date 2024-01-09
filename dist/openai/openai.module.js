"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenaiModule = void 0;
const common_1 = require("@nestjs/common");
const openai_service_1 = require("./openai.service");
const openai_controller_1 = require("./openai.controller");
const plates_module_1 = require("../plates/plates.module");
const instructions_module_1 = require("../instructions/instructions.module");
const images_plates_module_1 = require("../images-plates/images-plates.module");
const ingredient_plates_module_1 = require("../ingredient-plates/ingredient-plates.module");
let OpenaiModule = class OpenaiModule {
};
exports.OpenaiModule = OpenaiModule;
exports.OpenaiModule = OpenaiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            instructions_module_1.InstructionsModule,
            plates_module_1.PlatesModule,
            images_plates_module_1.ImagesPlatesModule,
            ingredient_plates_module_1.IngredientPlatesModule,
        ],
        controllers: [openai_controller_1.OpenaiController],
        providers: [openai_service_1.OpenaiService],
        exports: [openai_service_1.OpenaiService],
    })
], OpenaiModule);
//# sourceMappingURL=openai.module.js.map