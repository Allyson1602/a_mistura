import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Instruction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
