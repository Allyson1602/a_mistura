import { Category } from 'src/categories/entities/category.entity';
import { ImagePlate } from 'src/images-plates/entities/image-plate.entity';
import { IngredientPlate } from 'src/ingredient-plates/entities/ingredient-plate.entity';
import { Ingredient } from 'src/ingredients/entities/ingredient.entity';
import { Instruction } from 'src/instructions/entities/instruction.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Plate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => ImagePlate, {
    cascade: true,
  })
  @JoinColumn()
  image: ImagePlate;

  @Column('decimal')
  rating: number;

  @Column()
  description: string;

  // @ManyToMany(() => Category)
  // @JoinTable()
  // categories: Category[];

  @ManyToMany(() => IngredientPlate, {
    cascade: true,
  })
  @JoinTable()
  ingredientPlates: IngredientPlate[];

  @OneToMany(() => Instruction, (instruction) => instruction.plate, {
    cascade: true,
  })
  instructions: Instruction[];
}
