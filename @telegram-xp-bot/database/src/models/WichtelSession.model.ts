import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";
import { Chat } from "./Chat.model";
import { User } from "./User.model";

@Entity()
export class WichtelSession {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    chat: Chat;

    @Column()
    creator: User;

    @PrimaryColumn()
    name: string;

    @Column()
    participants: User[];

}