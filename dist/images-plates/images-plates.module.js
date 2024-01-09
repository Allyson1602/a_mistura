"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesPlatesModule = void 0;
const common_1 = require("@nestjs/common");
const images_plates_service_1 = require("./images-plates.service");
const images_plates_controller_1 = require("./images-plates.controller");
const typeorm_1 = require("@nestjs/typeorm");
const image_plate_entity_1 = require("./entities/image-plate.entity");
let ImagesPlatesModule = class ImagesPlatesModule {
};
exports.ImagesPlatesModule = ImagesPlatesModule;
exports.ImagesPlatesModule = ImagesPlatesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([image_plate_entity_1.ImagePlate])],
        controllers: [images_plates_controller_1.ImagesPlatesController],
        providers: [images_plates_service_1.ImagesPlatesService],
        exports: [images_plates_service_1.ImagesPlatesService],
    })
], ImagesPlatesModule);
//# sourceMappingURL=images-plates.module.js.map