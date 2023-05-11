import { Router } from "express";
import { usersMiddlewares } from '../middlewares/users/index';
import { schedulesControllers } from '../controllers/schedules/index';
import { createScheduleRequestSchema } from "../schemas/schedules";
import { schedulesMiddlewares } from '../middlewares/schedules/index';
import { realEstatesMiddlewares } from '../middlewares/realEstates/index';

const scheduleRoute: Router = Router()

scheduleRoute.post(
  '',
  usersMiddlewares.ensureTokenIsValid,
  usersMiddlewares.ensureDataisValid(createScheduleRequestSchema),
  realEstatesMiddlewares.ensureRealEstateIdIsValid,
  schedulesMiddlewares.ensureRealEstateIsNotBooked,
  schedulesMiddlewares.ensureUserDoesntHaveASchedule,
  schedulesMiddlewares.ensureScheduleisDuringBusinessDaysAndHours,
  schedulesControllers.createSchedule
)

scheduleRoute.get(
  '/realEstate/:id',
  usersMiddlewares.ensureTokenIsValid,
  usersMiddlewares.ensureUserIsAdmin,
  realEstatesMiddlewares.ensureRealEstateIdIsValid,
  schedulesControllers.getAllSchedulesByRealEstateId
)

export default scheduleRoute