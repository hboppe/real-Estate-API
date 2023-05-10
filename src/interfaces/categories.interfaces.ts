import { z } from 'zod'
import { allCategoriesSchema, categoriesWithRealEstateSchema, categorySchema, createCategoryRequestSchema } from '../schemas/categories'

type TCategory = z.infer<typeof categorySchema>
type TCreateCategoryRequest = z.infer<typeof createCategoryRequestSchema>
type TAllCategories = z.infer<typeof allCategoriesSchema>
type TCategoryWithRealEstate = z.infer<typeof categoriesWithRealEstateSchema>

export {
  TCategory,
  TCreateCategoryRequest,
  TAllCategories,
  TCategoryWithRealEstate
}