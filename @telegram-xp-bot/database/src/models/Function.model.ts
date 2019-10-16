import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Function {

    @PrimaryColumn()
    name: string;

    @Column()
    description: string;

}