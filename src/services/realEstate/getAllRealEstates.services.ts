import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"
import { TAllRealEstates } from "../../interfaces/realEstate.interfaces"
import { allRealEstatesSchema } from "../../schemas/realEstate"

const getAllRealEstates = async (): Promise<TAllRealEstates> => {

  const allRealEstates: RealEstate[] = await AppDataSource
    .getRepository(RealEstate)
    .createQueryBuilder('realEstate')
    .leftJoinAndSelect('realEstate.address', 'address')
    .getMany()
  
  const validatedAllRealEstate: TAllRealEstates = allRealEstatesSchema.parse(allRealEstates);

  return validatedAllRealEstate
}

export default getAllRealEstates