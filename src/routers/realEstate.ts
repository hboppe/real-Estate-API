import { Router } from "express";
import { usersMiddlewares } from '../middlewares/users/index';
import { createRealEstateRequestSchema } from "../schemas/realEstate";
import { addressesMiddleware } from '../middlewares/addresses/index';
import { realEstateControllers } from '../controllers/realEstate/index';

const realEstateRoute: Router = Router()

realEstateRoute.post(
  '',
  usersMiddlewares.ensureDataisValid(createRealEstateRequestSchema),
  usersMiddlewares.ensureTokenIsValid,
  usersMiddlewares.ensureUserIsAdmin,
  addressesMiddleware.ensureAddressIsUnique,
  realEstateControllers.createRealEstate
)

realEstateRoute.get(
  '',
  realEstateControllers.getAllRealEstates
)

export default realEstateRoute