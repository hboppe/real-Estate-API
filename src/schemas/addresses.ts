import { z } from 'zod'

const addressSchema = z.object({
  id: z.number().int(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).nullable().default(null),
  city: z.string().max(20),
  state: z.string().max(2)
})

const createAddressRequesSchema = addressSchema.omit({
  id: true
})

export {
  addressSchema,
  createAddressRequesSchema
}