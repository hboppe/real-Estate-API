import { z } from 'zod'
import { addressSchema, createAddressRequesSchema } from './addresses'
import { categorySchema } from './categories'

const realEstateSchema = z.object({
  id: z.number().int(),
  sold: z.boolean().default(false),
  value: z.number().gt(0).or(z.string()),
  size: z.number().int().gt(0),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().nullable().or(z.string()),
  category: categorySchema,
  address: addressSchema
})

const createRealEstateRequestSchema = realEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  deletedAt: true,
  updatedAt: true,
  address: true,
  category: true
}).extend({
  address: createAddressRequesSchema,
  categoryId: z.number().int()
})

const allRealEstatesSchema = realEstateSchema.omit({
  category: true
}).array()

export {
  realEstateSchema,
  createRealEstateRequestSchema,
  allRealEstatesSchema
}
