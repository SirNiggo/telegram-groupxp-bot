import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ChatPhoto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    small_file_id: string;

    @Column()
    big_file_id: string;
}