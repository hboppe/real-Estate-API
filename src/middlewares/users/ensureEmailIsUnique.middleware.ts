import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";

const ensureEmailIsUnique = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const userEmail = req.body.email
  const foundEmail: User | null = await AppDataSource
    .getRepository(User)
    .createQueryBuilder('user')
    .where('user.email = :email', { email: userEmail})
    .getOne()
  
  if(foundEmail) throw new AppError('Email already exists', 409)

  return next()
}

export default ensureEmailIsUnique;