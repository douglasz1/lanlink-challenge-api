import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Funcionario } from './funcionario';

@Entity()
export class Movimentacao {
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(type => Funcionario)
    funcionario!: Funcionario;
    
    @Column()
    descricao!: string;
    
    @Column()
    valor!: number;
}