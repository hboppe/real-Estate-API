import { Router } from "express";
import { usersControllers } from "../controllers";
import { usersMiddlewares } from '../middlewares/users/index';
import { createUserRequestSchema, updateUserRequestSchema } from "../schemas/users";

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

usersRoute.patch(
  '/:id',
  usersMiddlewares.ensureDataisValid(updateUserRequestSchema),
  usersMiddlewares.ensureIdIsValid,
  usersMiddlewares.ensureTokenIsValid,
  usersMiddlewares.checkIfUserIsAdminOrSelf,
  usersControllers.updateUser
)

export default usersRoute