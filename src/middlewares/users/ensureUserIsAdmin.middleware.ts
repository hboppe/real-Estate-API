import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../error';

const ensureUserIsAdmin = (req: Request, res: Response, next: NextFunction) => {

  const { admin } = res.locals.decoded;

  if(!admin) throw new AppError('Insufficient permission', 403)
  
  return next();
};

export default ensureUserIsAdmin;