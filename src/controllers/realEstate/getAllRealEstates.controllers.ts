import { Request, Response} from 'express';
import { realEstateServices } from '../../services/realEstate/index';

const getAllRealEstates = async (req: Request, res: Response): Promise<Response> => {

  const allRealEstates = await realEstateServices.getAllRealEstates()
  
  return res.json(allRealEstates)
}

export default getAllRealEstates