import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import { errorHandler } from './errors/ErrorHandler'
import { routerUsers } from './routes/user.routes';
import { routerContacts } from './routes/contacts.routes';
import { routerLogin } from './routes/login.routes';

const app = express()
app.use(express.json())

app.use('/users', routerUsers, )
app.use('/contacts', routerContacts)
app.use('/login', routerLogin)
app.use(errorHandler)

export default app