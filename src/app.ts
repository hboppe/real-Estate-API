import "reflect-metadata"
import "express-async-errors"
import express from "express"
import usersRoute from './routers/users';
import { handleError } from "./error";
import sessionRoute from "./routers/session";

const app = express()
app.use(express.json())

app.use('/users', usersRoute)
app.use('/login', sessionRoute)

app.use(handleError)

export default app