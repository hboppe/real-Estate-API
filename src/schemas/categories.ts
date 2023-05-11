import { z } from 'zod'
import { realEstateSchema } from './realEstate'

const categorySchema = z.object({
  id: z.number(),
  name: z.string().max(45)
})

const createCategoryRequestSchema = categorySchema.omit({
  id: true
})

const categoriesWithRealEstateSchema = categorySchema.extend({
  realEstate: realEstateSchema.omit({
    address: true,
    category: true
  }).array()
})

const allCategoriesSchema = categorySchema.array()

export {
  categorySchema,
  createCategoryRequestSchema,
  allCategoriesSchema,
  categoriesWithRealEstateSchema
}