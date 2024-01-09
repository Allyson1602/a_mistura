"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOpenaiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_openai_dto_1 = require("./create-openai.dto");
class UpdateOpenaiDto extends (0, mapped_types_1.PartialType)(create_openai_dto_1.CreateOpenaiDto) {
}
exports.UpdateOpenaiDto = UpdateOpenaiDto;
//# sourceMappingURL=update-openai.dto.js.map