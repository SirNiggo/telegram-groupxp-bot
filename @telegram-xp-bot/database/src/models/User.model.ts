import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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

}