import "reflect-metadata"
import "express-async-errors"
import express from "express"
import usersRoute from './routers/users';
import { handleError } from "./error";

const app = express()
app.use(express.json())

app.use('/users', usersRoute)

app.use(handleError)

export default app