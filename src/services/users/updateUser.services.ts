import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TUpdateUserRequest, TUpdateUserReturn, TUser } from "../../interfaces/users";
import { userReturnSchema } from "../../schemas/users";

const updateUser = async (userId: number, userData: TUpdateUserRequest): Promise<TUpdateUserReturn> => {

  const userRepo = AppDataSource.getRepository(User)

  const oldUserData = await userRepo.findOneBy({
    id: userId
  })

  const updatedUser: TUser = userRepo.create({
    ...oldUserData,
    ...userData
  } as TUser)

  await userRepo.save(updatedUser)

  const validatedUpdatedUser: TUpdateUserReturn = userReturnSchema.parse(updatedUser)

  return validatedUpdatedUser;
};

export default updateUser;