import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../error';

const ensureDateIsInTheFuture = (req: Request, res: Response, next: NextFunction) => {
  const { date} = req.body

  if(new Date(date) < new Date()) throw new AppError('Invalid date provided. Please ensure your scheduled date is in the future.', 400)

  return next();
};

export default ensureDateIsInTheFuture