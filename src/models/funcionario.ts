import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Departamento } from './departamento';

@Entity()
export class Funcionario {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;
    
    @ManyToMany(type => Departamento) @JoinTable() 
    departamentos!: Departamento[];
}