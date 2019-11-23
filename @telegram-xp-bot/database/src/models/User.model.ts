import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm";
import { WichtelSession } from "./WichtelSession.model";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    telegram_id: number;

    @Column()
    first_name: string;

    @Column({
        nullable: true,
        default: null
    })
    last_name: string | null;

    @Column({
        nullable: true,
        default: null
    })
    username: string | null;

    @Column({
        nullable: true,
        default: null
    })
    language_code: string | null;

    @Column({
        default: false
    })
    technicalUser: boolean;

    @OneToMany(type => WichtelSession, wichtelSession => wichtelSession.creator)
    ownedWichtelSessions: WichtelSession[]

}