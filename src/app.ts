import "reflect-metadata"
import "express-async-errors"
import express from "express"
import usersRoute from './routers/users';
import { handleError } from "./error";
import sessionRoute from "./routers/session";
import categoryRoute from "./routers/categories";
import realEstateRoute from "./routers/realEstate";
import scheduleRoute from "./routers/schedule";

const app = express()
app.use(express.json())

app.use('/users', usersRoute)
app.use('/login', sessionRoute)
app.use('/categories', categoryRoute)
app.use('/realEstate', realEstateRoute)
app.use('/schedules', scheduleRoute)

app.use(handleError)

export default app