import { z } from 'zod'
import { createScheduleRequestSchema, scheduleSchema } from '../schemas/schedules'

type TCreateScheduleRequestSchema = z.infer<typeof createScheduleRequestSchema>
type TScheduleSchema = z.infer<typeof scheduleSchema>


export {
  TCreateScheduleRequestSchema,
  TScheduleSchema
}