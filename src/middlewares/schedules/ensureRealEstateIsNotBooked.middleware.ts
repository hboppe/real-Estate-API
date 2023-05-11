import { Request, Response, NextFunction } from 'express';
import { Brackets, SelectQueryBuilder } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Schedule } from '../../entities';
import { AppError } from '../../error';

const ensureRealEstateIsNotBooked = async (req: Request, res: Response, next: NextFunction) => {
  
  const { realEstateId, date, hour } = req.body;

  const schedules = await AppDataSource
    .getRepository(Schedule)
    .createQueryBuilder('schedule')
    .leftJoinAndSelect('schedule.realEstate', 'realEstate')
    .where('schedule.date = :date', { date: date })
    .andWhere(
      new Brackets((qb) => {
        qb.where('schedule.hour = :hour', { hour: hour })
        .andWhere('schedule.realEstateId = :id', { id: realEstateId })
      })
    )
    .getOne()
  
  if(schedules) throw new AppError('Schedule to this real estate at this date and time already exists', 409)

  return next();
};

export default ensureRealEstateIsNotBooked