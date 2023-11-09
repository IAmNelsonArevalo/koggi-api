import { Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: 'name', length: 255 })
    name: string;
    @Column({name: 'email', length: 255})
    email: string;
    @Column({ name: 'picture_url', length: 1000 })
    picture_url: string;
    @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
    @UpdateDateColumn({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}