import {  Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
  TCreateAddressRequest,
} from "../../interfaces/addresses.interfaces";
import {
  TCreateRealEstateRequest
} from "../../interfaces/realEstate.interfaces";
import Address from "../../entities/addresses.entity";
import { Category, RealEstate } from "../../entities";
import { realEstateSchema } from "../../schemas/realEstate";

const createRealEstate = async (
  address: TCreateAddressRequest,
  categoryId: number,
  realEstateInfo: TCreateRealEstateRequest
): Promise<any> => {


  const addressRepo: Repository<Address> = AppDataSource.getRepository(Address);
  const newAddress: Address = addressRepo.create(address);
  await addressRepo.save(newAddress);

  const foundCategory = await AppDataSource
    .getRepository(Category)
    .findOneBy({
      id: categoryId
    })
    
  const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
  
  const newRealEstate: RealEstate = realEstateRepo.create({
    ...realEstateInfo
  })

  newRealEstate.address = newAddress
  newRealEstate.category = foundCategory!

  await realEstateRepo.save(newRealEstate);

  const realEstateWithAddress = await realEstateRepo
    .createQueryBuilder("realEstate")
    .leftJoinAndSelect("realEstate.address", "address")
    .leftJoinAndSelect("realEstate.category", "category")
    .where("realEstate.id = :id", { id: newRealEstate.id })
    .getOne();


  // console.log(realEstateSchema)
  // if (!realEstateWithAddress) {
  //   throw new Error(`No real estate record found with id ${newRealEstate.id}`);
  // }
  
  // const validatedRealEstate = realEstateSchema.parse({realEstateWithAddress});


  return realEstateWithAddress;
};
export default createRealEstate;
