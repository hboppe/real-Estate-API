import { Request, Response, NextFunction } from 'express';
import { Brackets } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Schedule } from '../../entities';
import { AppError } from '../../error';

const ensureUserDoesntHaveASchedule = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const userId = Number(res.locals.decoded.sub)
  const { date, hour } = req.body

  const scheduledVisit: Schedule | null = await AppDataSource
    .getRepository(Schedule)
    .createQueryBuilder('schedule')
    .leftJoinAndSelect('schedule.user', 'user')
    .where('schedule.date = :date', { date: date })
    .andWhere(
      new Brackets((qb) => {
        qb.where('schedule.hour = :hour', { hour: hour })
        .andWhere('schedule.userId = :id', { id: userId })
      })
    )
    .getOne()
  
  if(scheduledVisit) throw new AppError('User schedule to this real estate at this date and time already exists', 409)

  return next();
};

export default ensureUserDoesntHaveASchedule