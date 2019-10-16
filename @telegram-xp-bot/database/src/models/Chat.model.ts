import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from "typeorm";
import { ChatPhoto } from "./ChatPhoto.model";

export enum ChatType {
    PRIVATE = "private",
    GROUP = "group",
    SUPERGROUP = "supergroup",
    CHANNEL = "channel",
    UNKNOWN = "unknown"
}

@Entity()
export class Chat {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    telegram_id: number;

    @Column({
        type: "enum",
        enum: ChatType,
        default: ChatType.UNKNOWN
    })
    type: ChatType

    @Column({
        nullable: true,
        default: null
    })
    title: string | null;

    @Column({
        nullable: true,
        default: null
    })
    photo: ChatPhoto | null;

    @Column({
        nullable: true,
        default: null
    })
    description: string | null;

}