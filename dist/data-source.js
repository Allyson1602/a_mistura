"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSource = void 0;
const category_entity_1 = require("./categories/entities/category.entity");
const ingredient_entity_1 = require("./ingredients/entities/ingredient.entity");
const plate_entity_1 = require("./plates/entities/plate.entity");
const instruction_entity_1 = require("./instructions/entities/instruction.entity");
const image_plate_entity_1 = require("./images-plates/entities/image-plate.entity");
const ingredient_plate_entity_1 = require("./ingredient-plates/entities/ingredient-plate.entity");
require('dotenv/config');
exports.DataSource = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
        ingredient_entity_1.Ingredient,
        plate_entity_1.Plate,
        category_entity_1.Category,
        instruction_entity_1.Instruction,
        image_plate_entity_1.ImagePlate,
        ingredient_plate_entity_1.IngredientPlate,
    ],
    synchronize: true,
};
//# sourceMappingURL=data-source.js.map