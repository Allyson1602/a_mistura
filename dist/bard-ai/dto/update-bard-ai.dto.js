"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBardAiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bard_ai_dto_1 = require("./create-bard-ai.dto");
class UpdateBardAiDto extends (0, mapped_types_1.PartialType)(create_bard_ai_dto_1.CreateBardAiDto) {
}
exports.UpdateBardAiDto = UpdateBardAiDto;
//# sourceMappingURL=update-bard-ai.dto.js.map