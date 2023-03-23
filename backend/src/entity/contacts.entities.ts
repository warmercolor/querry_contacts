import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, JoinColumn } from "typeorm";
import { User } from "./user.entities";

@Entity('contacts')

class Contacts {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column({length: 60})
    name: string

    @Column({length: 60})
    lastname: string

    @Column({length: 60, unique: true})
    email: string

    @Column()
    phone: string

    @CreateDateColumn()
    createAt: Date

    @ManyToOne(() => User, (user) => user.contacts)
    @JoinColumn({name: "user_id"})
    user: User
}

export { Contacts }