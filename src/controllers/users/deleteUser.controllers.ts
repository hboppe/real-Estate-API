import { Request, Response, NextFunction } from 'express';
import { usersServices } from '../../services/users/index';

const deleteUser = async (req: Request, res: Response): Promise<Response> => {

  const userId: number = Number(req.params.id)

  await usersServices.deleteUser(userId)

  return res.status(204).json();
};

export default deleteUser