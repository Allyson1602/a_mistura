import { Plate } from 'src/plates/entities/plate.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Plate, (plate: Plate) => plate.category)
  plates: Plate[];
}
