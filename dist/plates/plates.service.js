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
exports.PlatesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const plate_entity_1 = require("./entities/plate.entity");
const typeorm_2 = require("typeorm");
const instructions_service_1 = require("../instructions/instructions.service");
const images_plates_service_1 = require("../images-plates/images-plates.service");
const ingredient_plates_service_1 = require("../ingredient-plates/ingredient-plates.service");
let PlatesService = class PlatesService {
    constructor(plateRepository, ingredientplatesService, instructionsService, imagesPlatesService) {
        this.plateRepository = plateRepository;
        this.ingredientplatesService = ingredientplatesService;
        this.instructionsService = instructionsService;
        this.imagesPlatesService = imagesPlatesService;
    }
    async create(createPlateDto) {
        const ingredientsQuery = createPlateDto.ingredientPlates.map((ingredientItem) => {
            const newIngredient = this.ingredientplatesService.create(ingredientItem);
            return newIngredient;
        });
        const instructionsQuery = createPlateDto.instructions.map((instructionItem) => {
            const newInstruction = this.instructionsService.create(instructionItem);
            return newInstruction;
        });
        const imagePlate = this.imagesPlatesService.create(createPlateDto.image);
        const plate = new plate_entity_1.Plate();
        plate.name = createPlateDto.name;
        plate.rating = createPlateDto.rating;
        plate.description = createPlateDto.description;
        plate.image = await imagePlate;
        plate.ingredientPlates = await Promise.all(ingredientsQuery);
        plate.instructions = await Promise.all(instructionsQuery);
        return await this.plateRepository.save(plate);
    }
    findAll() {
        const plates = this.plateRepository.find();
        return plates;
    }
};
exports.PlatesService = PlatesService;
exports.PlatesService = PlatesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(plate_entity_1.Plate)),
    __param(1, (0, common_1.Inject)(ingredient_plates_service_1.IngredientPlatesService)),
    __param(2, (0, common_1.Inject)(instructions_service_1.InstructionsService)),
    __param(3, (0, common_1.Inject)(images_plates_service_1.ImagesPlatesService)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ingredient_plates_service_1.IngredientPlatesService,
        instructions_service_1.InstructionsService,
        images_plates_service_1.ImagesPlatesService])
], PlatesService);
//# sourceMappingURL=plates.service.js.map