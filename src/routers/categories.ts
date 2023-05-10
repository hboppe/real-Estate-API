import { Router } from "express";
import { usersMiddlewares } from '../middlewares/users/index';
import { createCategoryRequestSchema } from "../schemas/categories";
import { categoriesMiddlewares } from '../middlewares/categories/index';
import { categoriesControllers } from '../controllers/categories/index';

const categoryRoute: Router = Router()

categoryRoute.post(
  '',
  usersMiddlewares.ensureDataisValid(createCategoryRequestSchema),
  usersMiddlewares.ensureTokenIsValid,
  usersMiddlewares.ensureUserIsAdmin,
  categoriesMiddlewares.ensureCategoryNameIsUnique,
  categoriesControllers.createCategory
)

categoryRoute.get(
  '',
  categoriesControllers.getAllCategories
)

categoryRoute.get(
  '/:id/realEstate',
  categoriesControllers.getRealEstateByCategory
)

export default categoryRoute