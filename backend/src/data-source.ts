import 'reflect-metadata'
import 'dotenv/config'
import { DataSource } from 'typeorm'
import { User } from './entity/user.entities'
import { Contacts } from './entity/contacts.entities'
import { default1679587064209 } from './migration/1679587064209-default'

const AppDataSource = new DataSource(
    process.env.NODE_ENV === 'test' ?
    {
        type: 'sqlite',
        database: ':memory:',
        synchronize: true,
        entities: ['src/entities/*.ts']
    } :
    {
    type: 'postgres',
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT!),
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    synchronize: false,
    logging: true,
    entities: [User, Contacts],
    migrations: [default1679587064209]
})

export default AppDataSource
