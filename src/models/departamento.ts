import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Departamento {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;   
}