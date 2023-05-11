import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../error";
import { TCategory } from "../../interfaces/categories.interfaces";

const ensureCategoryNameIsUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  
  const categoryName: string = req.body.name;

  const foundCategory: TCategory | null = await AppDataSource.getRepository(
    Category
  ).findOneBy({
    name: categoryName,
  });

  if (foundCategory) throw new AppError("Category already exists", 409);

  return next();
};

export default ensureCategoryNameIsUnique;
