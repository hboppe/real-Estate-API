import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { TCreateUserRequest, TCreateUserReturn, TUser } from "../../interfaces/users"
import User from '../../entities/users.entity';

const createUser = async (userData: TCreateUserRequest) => {

  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const user: TUser =  userRepo.create(userData)
  await userRepo.save(user)

  return user
}

export default createUser