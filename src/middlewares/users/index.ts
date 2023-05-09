import ensureEmailIsUnique from "./ensureEmailIsUnique.middleware"
import ensureDataisValid from './ensureDataIsValid.middleware';
import ensureUserExistsAndIsActive from './ensureUserExistsAndIsActive.middleware';

export const usersMiddlewares = {
  ensureEmailIsUnique,
  ensureDataisValid,
  ensureUserExistsAndIsActive
}