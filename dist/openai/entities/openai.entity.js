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
exports.Openai = void 0;
const ingredient_entity_1 = require("../../ingredients/entities/ingredient.entity");
const typeorm_1 = require("typeorm");
let Openai = class Openai {
};
exports.Openai = Openai;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Openai.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => ingredient_entity_1.Ingredient),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Openai.prototype, "ingredients", void 0);
exports.Openai = Openai = __decorate([
    (0, typeorm_1.Entity)()
], Openai);
//# sourceMappingURL=openai.entity.js.map