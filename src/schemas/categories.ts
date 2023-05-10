import { z } from 'zod'

const categorySchema = z.object({
  id: z.number(),
  name: z.string().max(45)
})

const createCategoryRequestSchema = categorySchema.omit({
  id: true
})

const allCategoriesSchema = categorySchema.array()

export {
  categorySchema,
  createCategoryRequestSchema,
  allCategoriesSchema
}