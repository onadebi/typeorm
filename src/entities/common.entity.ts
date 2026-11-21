import { Column } from "typeorm";


export class CommonEntity {

    @Column({ type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP(6)' })
    created_at!: Date;

    @Column({ type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP(6)' })
    updated_at!: Date;

    @Column({ type: 'boolean', nullable: false, default: true })
    is_active: boolean = true;

}