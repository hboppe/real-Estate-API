import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../../data-source';
import { RealEstate } from '../../entities';
import { AppError } from '../../error';

const ensureRealEstateIdIsValid = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  let realEstateId;

  req.method === 'POST' 
  ? realEstateId = Number(req.body.realEstateId) 
  : realEstateId = Number(req.params.id)

  const foundRealEstate = await AppDataSource
    .getRepository(RealEstate)
    .findOneBy({
      id: realEstateId
    })
    
  if(!foundRealEstate) throw new AppError('RealEstate not found', 404)
  
  return next();
};

export default ensureRealEstateIdIsValid