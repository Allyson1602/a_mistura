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
exports.Plate = void 0;
const category_entity_1 = require("../../categories/entities/category.entity");
const image_plate_entity_1 = require("../../images-plates/entities/image-plate.entity");
const ingredient_plate_entity_1 = require("../../ingredient-plates/entities/ingredient-plate.entity");
const instruction_entity_1 = require("../../instructions/entities/instruction.entity");
const typeorm_1 = require("typeorm");
let Plate = class Plate {
};
exports.Plate = Plate;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Plate.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plate.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => image_plate_entity_1.ImagePlate),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", image_plate_entity_1.ImagePlate)
], Plate.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], Plate.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plate.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => category_entity_1.Category),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Plate.prototype, "categories", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => ingredient_plate_entity_1.IngredientPlate),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Plate.prototype, "ingredientPlates", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => instruction_entity_1.Instruction, (instruction) => instruction.plate),
    __metadata("design:type", Array)
], Plate.prototype, "instructions", void 0);
exports.Plate = Plate = __decorate([
    (0, typeorm_1.Entity)()
], Plate);
//# sourceMappingURL=plate.entity.js.map