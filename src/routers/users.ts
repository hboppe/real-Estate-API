import { Router } from "express";
import { usersControllers } from "../controllers";
import { usersMiddlewares } from '../middlewares/users/index';
import { createUserRequestSchema } from "../schemas/users";

const usersRoute: Router = Router();

usersRoute.post(
  '',
  usersMiddlewares.ensureDataisValid(createUserRequestSchema),
  usersMiddlewares.ensureEmailIsUnique,
  usersControllers.createUser
)

usersRoute.get(
  '',
  usersMiddlewares.ensureTokenIsValid,
  usersMiddlewares.ensureUserIsAdmin,
  usersControllers.getAllUsers
)

export default usersRoute