import {
  TCategory,
  TCreateCategoryRequest,
} from "../../interfaces/categories.interfaces";
import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";

const createCategory = async (
  categoryData: TCreateCategoryRequest
): Promise<TCategory> => {
  const categoryRepo: Repository<Category> =
    AppDataSource.getRepository(Category);
  const newCategory: TCategory = categoryRepo.create(categoryData);
  await categoryRepo.save(newCategory);

  return newCategory;
};
export default createCategory;
