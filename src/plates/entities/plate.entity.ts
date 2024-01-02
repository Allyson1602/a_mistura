import { Category } from "src/categories/entities/category.entity";
import { Ingredient } from "src/ingredients/entities/ingredient.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Plate {
    @PrimaryGeneratedColumn()
	id: number;

    @Column()
	name: string;

    @Column()
	image: string;

    @Column()
	ingredients: Ingredient[];

    @Column()
	categories: Category[];

    @Column()
	rating: number;

    @Column()
	description: string;

    @Column()
	instructions: string[];
	
    @ManyToMany(() => Category)
    @JoinTable()
    category_id: Category[];
}
