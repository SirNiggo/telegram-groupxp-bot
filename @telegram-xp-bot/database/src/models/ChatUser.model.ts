import { Entity, Column, PrimaryColumn } from "typeorm";
import { Chat } from "./Chat.model";
import { User } from "./User.model";
import { Role } from "./Role.model";

@Entity()
export class ChatUser {

    @Column()
    role: Role;

    @PrimaryColumn()
    chat: Chat;

    @PrimaryColumn()
    user: User;

    @Column({
        default: 0
    })
    xp: number;

    can(functionName: string): boolean {
        return this.role.allowedFunctions.some((elem) => {
            return elem.name === functionName;
        });
    }

}