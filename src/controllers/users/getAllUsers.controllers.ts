import { Request, Response, NextFunction } from 'express';
import { usersServices } from '../../services/users/index';

const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {

  const allUsers = await usersServices.getAllUsers()

  return res.status(200).json(allUsers);
};

export default getAllUsers;