import ensureEmailIsUnique from "./ensureEmailIsUnique.middleware"
import ensureDataisValid from './ensureDataIsValid.middleware';

export const usersMiddlewares = {
  ensureEmailIsUnique,
  ensureDataisValid
}