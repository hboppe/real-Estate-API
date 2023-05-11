import { Router } from "express";
import { usersMiddlewares } from '../middlewares/users/index';
import { schedulesControllers } from '../controllers/schedules/index';
import { createScheduleRequestSchema } from "../schemas/schedules";
import { schedulesMiddlewares } from '../middlewares/schedules/index';

const scheduleRoute: Router = Router()

scheduleRoute.post(
  '',
  // usersMiddlewares.ensureDataisValid(createScheduleRequestSchema),
  schedulesMiddlewares.ensureRealEstateIsNotBooked,
  usersMiddlewares.ensureTokenIsValid,
  schedulesControllers.createSchedule
)

export default scheduleRoute