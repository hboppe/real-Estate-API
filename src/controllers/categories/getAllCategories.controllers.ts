import { Request, Response } from "express";
import { TAllCategories } from "../../interfaces/categories.interfaces";
import { categoriesServices } from "../../services/categories/index";

const getAllCategories = async (
  req: Request,
  res: Response
): Promise<Response<TAllCategories>> => {
  const allCategories = await categoriesServices.getAllCategories();

  return res.json(allCategories);
};

export default getAllCategories;
