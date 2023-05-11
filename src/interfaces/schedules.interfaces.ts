import { z } from 'zod'
import { createScheduleRequestSchema, scheduleCreateInfoSchema, scheduleSchema } from '../schemas/schedules'

type TCreateScheduleRequestSchema = z.infer<typeof createScheduleRequestSchema>
type TScheduleSchema = z.infer<typeof scheduleSchema>
type TScheduleInfo = z.infer<typeof scheduleCreateInfoSchema>

export {
  TCreateScheduleRequestSchema,
  TScheduleSchema,
  TScheduleInfo
}