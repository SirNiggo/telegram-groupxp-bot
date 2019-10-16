import { Entity, PrimaryColumn, Column } from "typeorm";
import { User } from "./User.model";
import { Chat } from "./Chat.model";

@Entity()
export class Message {

    @PrimaryColumn()
    message_id: number;

    @Column({
        nullable: true,
        default: null
    })
    from: User | null;

    @Column()
    date: number;

    @PrimaryColumn()
    chat: Chat;

    /**
     * Can be null if the message did not contain text, but for example an image
     */
    @Column({
        nullable: true,
        default: null
    })
    text: string | null;

}