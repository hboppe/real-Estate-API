import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../error';

const ensureScheduleisDuringBusinessDaysAndHours = (req: Request, res: Response, next: NextFunction) => {
  const { date, hour } = req.body
  const solicitatedHour = Number(hour.substring(0, 2))
  const solicitatedDay = new Date(date).toDateString()

  if(solicitatedHour < 8 || solicitatedHour > 18) throw new AppError('Invalid hour, available times are 8AM to 18PM', 400)

  if(solicitatedDay.includes('Sat') || solicitatedDay.includes('Sun')) throw new AppError('Invalid date, work days are monday to friday', 400)

  return next();
};

export default ensureScheduleisDuringBusinessDaysAndHours