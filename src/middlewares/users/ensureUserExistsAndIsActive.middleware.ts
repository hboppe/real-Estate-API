import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../error"
import { TUser } from "../../interfaces/users"

const ensureUserExistsAndIsActive = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const userEmail = req.body.email
  const userRepo: Repository<User> = AppDataSource.getRepository(User)
  const foundUser: TUser | null = await userRepo.findOneBy({
    email: userEmail
  })

  if(!foundUser || foundUser.deletedAt) throw new AppError('Invalid credentials', 401)

  res.locals.user = {
    ...foundUser
  }

  return next()
}

export default ensureUserExistsAndIsActive