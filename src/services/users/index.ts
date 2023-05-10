import createUser from './createUser.services';
import getAllUsers from './getAllUsers.services';
import updateUser from './updateUser.services';
import deleteUser from './deleteUser.services';

export const usersServices = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser
}