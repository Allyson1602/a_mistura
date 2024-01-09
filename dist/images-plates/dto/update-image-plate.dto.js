"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateImagePlateDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_image_plate_dto_1 = require("./create-image-plate.dto");
class UpdateImagePlateDto extends (0, mapped_types_1.PartialType)(create_image_plate_dto_1.CreateImagePlateDto) {
}
exports.UpdateImagePlateDto = UpdateImagePlateDto;
//# sourceMappingURL=update-image-plate.dto.js.map