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
exports.PlatesController = void 0;
const common_1 = require("@nestjs/common");
const plates_service_1 = require("./plates.service");
const create_plate_dto_1 = require("./dto/create-plate.dto");
let PlatesController = class PlatesController {
    constructor(platesService) {
        this.platesService = platesService;
    }
    create(createPlateDto) {
        return this.platesService.create(createPlateDto);
    }
    findAll() {
        return this.platesService.findAll();
    }
};
exports.PlatesController = PlatesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_plate_dto_1.CreatePlateDto]),
    __metadata("design:returntype", void 0)
], PlatesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlatesController.prototype, "findAll", null);
exports.PlatesController = PlatesController = __decorate([
    (0, common_1.Controller)('plates'),
    __metadata("design:paramtypes", [plates_service_1.PlatesService])
], PlatesController);
//# sourceMappingURL=plates.controller.js.map