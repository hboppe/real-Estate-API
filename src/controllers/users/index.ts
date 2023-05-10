import createUser from './createUser.controllers';
import getAllUsers from './getAllUsers.controllers';
import updateUser from './updateUser.controllers';
import deleteUser from './deleteUser.controllers';

export const usersControllers = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser
}