import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { AppError } from "../../error"
import { TCategoryWithRealEstate } from "../../interfaces/categories.interfaces"
import { categoriesWithRealEstateSchema } from "../../schemas/categories"

const getRealEstateByCategory = async (categoryId: number): Promise<TCategoryWithRealEstate> => {

  const categoryWithRealEstate: Category | null = await AppDataSource
  .getRepository(Category)
  .createQueryBuilder('category')
  .leftJoinAndSelect('category.realEstate', 'realEstate')
  .where('category.id = :id', { id: categoryId })
  .getOne()

  if(!categoryWithRealEstate) throw new AppError('Category not found', 404)

  const validatedcategoryWithRealEstate = categoriesWithRealEstateSchema.parse(categoryWithRealEstate)

  return validatedcategoryWithRealEstate
}
export default getRealEstateByCategory