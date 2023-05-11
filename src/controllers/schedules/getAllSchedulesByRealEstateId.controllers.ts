import { Request, Response} from 'express';
import { schedulesServices } from '../../services/schedules/index';

const getAllSchedulesByRealEstateId = async (req: Request, res: Response) => {

  const realEstateId: number = Number(req.params.id)

  const schedules = await schedulesServices.getAllSchedulesByRealEstateId(realEstateId)
  
  return res.json(schedules)
}

export default getAllSchedulesByRealEstateId