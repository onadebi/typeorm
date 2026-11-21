import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "./common.entity.ts";

@Entity({ name: 'cat' })
export class Cat extends CommonEntity {

    @PrimaryGeneratedColumn("uuid", { name: "user_id" })
    user_id!: string;

    @Column({ name: "name", type: 'varchar', length: 256, nullable: false })
    name!: string;

    @Column({ name: "normalized_name", type: 'varchar', length: 256, nullable: false })
    normalized_name!: string;

    @Column({ type: 'varchar', nullable: false })
    breed_id!: string;

    @Column({ type: 'int', nullable: true })
    age?: number

    @Column({ type: 'boolean', nullable: false, default: false })
    is_active: boolean = false;

}