import { Router } from "express";
import { usersMiddlewares } from '../middlewares/users/index';
import { loginSchema } from "../schemas/users";
import { sessionControllers } from '../controllers/session/index';

const sessionRoute: Router = Router()

sessionRoute.post(
  '',
  usersMiddlewares.ensureDataisValid(loginSchema),
  usersMiddlewares.ensureUserExistsAndIsActive,
  sessionControllers.createSession
)

export default sessionRoute