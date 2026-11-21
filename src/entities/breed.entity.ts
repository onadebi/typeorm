import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "./common.entity.ts";
import { MaxLength, MinLength } from "class-validator";

@Entity("breed")
export class Breed extends CommonEntity {

    @PrimaryGeneratedColumn('uuid', { name: "breed_id" })
    breed_id!: string;

    @Column({ type: 'varchar', length: 256 })
    @MinLength(3)
    @MaxLength(256)
    name!: string

    @Column({ type: 'varchar', length: 256 })
    private normalized_name!: string

    @BeforeInsert()
    @BeforeUpdate()
    normalizeNormalizedName(): void {
        this.normalized_name = (this.normalized_name ?? "").trim().toLowerCase();
    }
}