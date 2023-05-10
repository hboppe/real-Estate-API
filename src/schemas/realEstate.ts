import { z } from 'zod'
import { addressSchema } from './addresses'

const realEstateSchema = z.object({
  id: z.number().int(),
  sold: z.boolean().default(false),
  value: z.number().gt(0),
  size: z.number().int().gt(0),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().nullable().or(z.string()),
  deletedAt: z.date().nullable().or(z.string()),
  categoryId: z.number().int(),
  address: addressSchema
})

const createRealEstateRequestSchema = realEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  deletedAt: true,
  updatedAt: true
})

export {
  realEstateSchema,
  createRealEstateRequestSchema
}
