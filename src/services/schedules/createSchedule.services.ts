import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule, User } from "../../entities"
import { TCreateScheduleRequestSchema } from "../../interfaces/schedules.interfaces"

const createSchedule = async (realEstateId: number, userId: number, scheduleInfos: TCreateScheduleRequestSchema): Promise<void> => {

  const user: User | null = await AppDataSource
    .getRepository(User)
    .findOneBy({
      id: userId
  })
  
  const realEstate: RealEstate | null = await AppDataSource
    .getRepository(RealEstate)
    .findOneBy({
      id: realEstateId
    }) 

  const scheduleRepo: Repository<Schedule> = AppDataSource
    .getRepository(Schedule)
  
  const newSchedule = scheduleRepo.create(scheduleInfos)
  newSchedule.user = user!
  newSchedule.realEstate = realEstate!
  console.log(newSchedule)

  await scheduleRepo.save(newSchedule)
}
export default createSchedule