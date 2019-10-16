import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Role {

    @PrimaryColumn()
    name: string;

    @Column()
    allowedFunctions: Function[];

}