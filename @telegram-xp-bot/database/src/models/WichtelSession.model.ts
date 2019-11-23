import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Chat } from "./Chat.model";
import { User } from "./User.model";

@Entity()
export class WichtelSession {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    chat: Chat;

    @ManyToOne(type => User, user => user.ownedWichtelSessions)
    creator: User;

    @PrimaryColumn()
    name: string;

    @ManyToMany(type => User)
    @JoinTable()
    participants: User[];

}