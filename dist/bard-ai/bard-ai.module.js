"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BardAiModule = void 0;
const common_1 = require("@nestjs/common");
const bard_ai_service_1 = require("./bard-ai.service");
const bard_ai_controller_1 = require("./bard-ai.controller");
const instructions_module_1 = require("../instructions/instructions.module");
const openai_module_1 = require("../openai/openai.module");
const images_plates_module_1 = require("../images-plates/images-plates.module");
const ingredient_plates_module_1 = require("../ingredient-plates/ingredient-plates.module");
const plates_module_1 = require("../plates/plates.module");
let BardAiModule = class BardAiModule {
};
exports.BardAiModule = BardAiModule;
exports.BardAiModule = BardAiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            instructions_module_1.InstructionsModule,
            plates_module_1.PlatesModule,
            images_plates_module_1.ImagesPlatesModule,
            ingredient_plates_module_1.IngredientPlatesModule,
            openai_module_1.OpenaiModule,
        ],
        controllers: [bard_ai_controller_1.BardAiController],
        providers: [bard_ai_service_1.BardAiService],
    })
], BardAiModule);
//# sourceMappingURL=bard-ai.module.js.map