import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"

const getAllSchedulesByRealEstateId = async (realEstateId: number) => {

  const schedules = await AppDataSource
    .getRepository(RealEstate)
    .createQueryBuilder('realEstate')
    .leftJoinAndSelect('realEstate.schedules', 'schedule')
    .innerJoinAndSelect('schedule.user', 'user')
    .leftJoinAndSelect('realEstate.address', 'address')
    .leftJoinAndSelect('realEstate.category', 'category')
    .where('realEstate.id = :id', { id: realEstateId })
    .getOne()
    
  return schedules
}
export default getAllSchedulesByRealEstateId