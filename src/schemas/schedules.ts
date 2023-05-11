import { z } from 'zod'
import { realEstateSchema } from './realEstate'

const datePattern = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/
const timePattern = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/

const scheduleSchema = z.object({
  id: z.number().int(),
  date: z.string().refine(value => datePattern.test(value), {
    message: 'Invalid time format, it should be in YYYY/MM/DD format'
  }),
  hour: z.string().refine(value => timePattern.test(value), {
    message: 'Invalid time format, it should be in HH:MM format'
  })
})

const createScheduleRequestSchema = scheduleSchema.omit({
  id: true
}).extend({
  realEstateId: z.number().int().gt(0)
})

const scheduleCreateInfoSchema = createScheduleRequestSchema.omit({
  realEstateId: true
})

// const scheduleWithUser = scheduleSchema.extend({
//   user: 
// })

// const allSchedulesOfARealEstate = realEstateSchema.extend({
//   schedules: 
// })

export {
  createScheduleRequestSchema,
  scheduleSchema,
  scheduleCreateInfoSchema
}