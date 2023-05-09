import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { AppError } from '../../error';

const ensureIdIsValid = async (req: Request, res: Response, next: NextFunction) => {

  const userId = Number(req.params.id)

  const foundUser = await AppDataSource
  .getRepository(User)
  .findOneBy({
    id: userId
  })

  if(!foundUser) throw new AppError('User not found', 404)

  return next();
};

export default ensureIdIsValid;