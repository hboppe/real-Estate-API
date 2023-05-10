import { Request, Response } from 'express';
import { TCreateCategoryRequest } from '../../interfaces/categories';
import { categoriesServices } from '../../services/categories/index';

const createCategory = async (req: Request, res: Response): Promise<Response> => {

  const categoryData: TCreateCategoryRequest = req.body
  const newCategory = await categoriesServices.createCategory(categoryData)

  return res.status(201).json(newCategory);
};

export default createCategory