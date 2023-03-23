import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { Exclude } from 'class-transformer'
import { Contacts } from './contacts.entities'

@Entity('users')

class User {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column({length: 60})
    name: string

    @Column({length: 60})
    lastname: string

    @Column({ length: 60, unique: true })
    email: string

    @Column()
    phone: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({ length: 120 })
    @Exclude()
    password?: string


    @OneToMany(() => Contacts, (contact) => contact.user)
    contacts: Contacts[]
    }


export { User }