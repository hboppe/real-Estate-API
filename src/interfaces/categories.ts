import { z } from 'zod'
import { allCategoriesSchema, categorySchema, createCategoryRequestSchema } from '../schemas/categories'

type TCategory = z.infer<typeof categorySchema>
type TCreateCategoryRequest = z.infer<typeof createCategoryRequestSchema>
type TAllCategories = z.infer<typeof allCategoriesSchema>

export {
  TCategory,
  TCreateCategoryRequest,
  TAllCategories
}