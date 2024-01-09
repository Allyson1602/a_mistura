import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class IngredientPlate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  quantity: string;
}
