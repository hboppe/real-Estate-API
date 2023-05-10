import { Request, Response } from 'express';
import { TUpdateUserReturn, TUpdateUserRequest } from '../../interfaces/users';
import { usersServices } from '../../services/users/index';

const updateUser = async (req: Request, res: Response): Promise<Response> => {

  const userId = Number(req.params.id)
  const userData: TUpdateUserRequest = req.body

  const updatedUser: TUpdateUserReturn = await usersServices.updateUser(userId, userData)

  return res.status(200).json(updatedUser);
};

export default updateUser;