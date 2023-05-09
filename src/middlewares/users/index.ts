import ensureEmailIsUnique from "./ensureEmailIsUnique.middleware"
import ensureDataisValid from './ensureDataIsValid.middleware';
import ensureUserExistsAndIsActive from './ensureUserExistsAndIsActive.middleware';
import ensureTokenIsValid from './ensureTokenIsValid.middleware';
import ensureUserIsAdmin from './ensureUserIsAdmin.middleware';
import checkIfUserIsAdminOrSelf from './checkIfUserIsAdminOrSelf.middleware';
import ensureIdIsValid from './ensureIdIsValid.middleware';

export const usersMiddlewares = {
  ensureEmailIsUnique,
  ensureDataisValid,
  ensureUserExistsAndIsActive,
  ensureTokenIsValid,
  ensureUserIsAdmin,
  checkIfUserIsAdminOrSelf,
  ensureIdIsValid
}