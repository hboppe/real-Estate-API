import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { TAllUsers } from '../../interfaces/users';
import { allUsersSchema } from '../../schemas/users';

const getAllUsers = async () => {

  const allUserss = await AppDataSource.
  getRepository(User)
  .find()

  const validatedData: TAllUsers = allUsersSchema.parse(allUserss)

  return validatedData;
};

export default getAllUsers;