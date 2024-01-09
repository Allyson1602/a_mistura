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
exports.InstructionsService = void 0;
const common_1 = require("@nestjs/common");
const instruction_entity_1 = require("./entities/instruction.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let InstructionsService = class InstructionsService {
    constructor(instructionRepository) {
        this.instructionRepository = instructionRepository;
    }
    async createMany(createInstructionsDto) {
        const newInstructions = createInstructionsDto.map((instructionDto) => {
            const instruction = new instruction_entity_1.Instruction();
            instruction.description = instructionDto.description;
            return instruction;
        });
        const instructionsRaw = (await this.instructionRepository
            .createQueryBuilder()
            .insert()
            .into('instruction')
            .values(newInstructions)
            .execute()).raw;
        const instructionsId = instructionsRaw.map((rawItem) => {
            return rawItem.id;
        });
        return instructionsId;
    }
    async create(createInstructionDto) {
        const instruction = new instruction_entity_1.Instruction();
        instruction.description = createInstructionDto.description;
        return await this.instructionRepository.save(instruction);
    }
    async findAll() {
        const instructions = this.instructionRepository.find();
        return instructions;
    }
};
exports.InstructionsService = InstructionsService;
exports.InstructionsService = InstructionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(instruction_entity_1.Instruction)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InstructionsService);
//# sourceMappingURL=instructions.service.js.map