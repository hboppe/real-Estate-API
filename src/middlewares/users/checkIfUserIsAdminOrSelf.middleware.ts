import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../error';

const checkIfUserIsAdminOrSelf = (req: Request, res: Response, next: NextFunction) => {
  const userIdToUpdate: number = Number(req.params.id)

  const userId: number = Number(res.locals.decoded.sub)
  const { admin } = res.locals.decoded

  if(userIdToUpdate !== userId && !admin) throw new AppError('Insufficient permission', 403)

  return next();
};

export default checkIfUserIsAdminOrSelf;