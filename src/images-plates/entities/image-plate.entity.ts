import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ImagePlate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  link: string;
}
