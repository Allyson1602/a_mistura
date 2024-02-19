import { Ingredient } from 'src/ingredients/entities/ingredient.entity';
import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Openai {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Ingredient)
  @JoinTable()
  ingredients: Ingredient[];
}
