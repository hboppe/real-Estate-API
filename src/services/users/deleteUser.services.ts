import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from 'typeorm';
import { TUser } from "../../interfaces/users";

const deleteUser = async (userId: number): Promise<void> => {  

  const userRepo: Repository<User> = AppDataSource.getRepository(User)
  const userToBeDeleted: TUser | null = await userRepo.findOneBy({
    id: userId
  })

  await userRepo.softRemove(userToBeDeleted!)
    
  return;
}
export default deleteUser