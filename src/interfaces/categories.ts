import { z } from 'zod'
import { categorySchema, createCategoryRequestSchema } from '../schemas/categories'

type TCategory = z.infer<typeof categorySchema>
type TCreateCategoryRequest = z.infer<typeof createCategoryRequestSchema>

export {
  TCategory,
  TCreateCategoryRequest
}