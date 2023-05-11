import { Request, Response} from 'express';
import { TCreateScheduleRequestSchema } from '../../interfaces/schedules.interfaces';
import { schedulesServices } from '../../services/schedules/index';

const createSchedule = async (req: Request, res: Response): Promise<Response> => {

  const realEstateeId: number = Number(req.body.realEstateId)
  const userId: number = Number(res.locals.decoded.sub)
  const { date, hour }: TCreateScheduleRequestSchema = req.body

  await schedulesServices.createSchedule(realEstateeId, userId, { date,hour })

  return res.status(201).json({
    message: 'Schedule created'
  })
}

export default createSchedule