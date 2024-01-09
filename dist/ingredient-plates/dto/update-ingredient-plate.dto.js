"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIngredientPlateDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ingredient_plate_dto_1 = require("./create-ingredient-plate.dto");
class UpdateIngredientPlateDto extends (0, mapped_types_1.PartialType)(create_ingredient_plate_dto_1.CreateIngredientPlateDto) {
}
exports.UpdateIngredientPlateDto = UpdateIngredientPlateDto;
//# sourceMappingURL=update-ingredient-plate.dto.js.map