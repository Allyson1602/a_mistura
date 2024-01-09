import { DataSourceOptions } from 'typeorm';
import { Category } from './categories/entities/category.entity';
import { Ingredient } from './ingredients/entities/ingredient.entity';
import { Plate } from './plates/entities/plate.entity';
import { Instruction } from './instructions/entities/instruction.entity';
import { ImagePlate } from './images-plates/entities/image-plate.entity';
import { IngredientPlate } from './ingredient-plates/entities/ingredient-plate.entity';
require('dotenv/config');

export const DataSource: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    Ingredient,
    Plate,
    Category,
    Instruction,
    ImagePlate,
    IngredientPlate,
  ],
  synchronize: true,
};
