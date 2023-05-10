import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { TAllCategories } from "../../interfaces/categories.interfaces";

const getAllCategories = async (): Promise<TAllCategories> => {
  const allCategories: TAllCategories = await AppDataSource.getRepository(
    Category
  ).find();

  return allCategories;
};
export default getAllCategories;
