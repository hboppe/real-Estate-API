import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";
import { Address } from "../../entities";
import { AppError } from "../../error";
import { TAddress } from "../../interfaces/addresses.interfaces";

const ensureAddressIsUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { address } = req.body;
  const foundAddress: TAddress | null = await AppDataSource.getRepository(
    Address
  ).findOneBy({
    ...address,
  });

  if (foundAddress) throw new AppError("Address already exists", 409);

  return next();
};

export default ensureAddressIsUnique;
