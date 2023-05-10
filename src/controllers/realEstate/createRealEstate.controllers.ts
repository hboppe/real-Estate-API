import { Request, Response} from 'express';
import { realEstateServices } from '../../services/realEstate/index';

const createRealEstate = async (req: Request, res: Response): Promise<Response> => {

  const { address, categoryId, ...realEstateData } = req.body

  const newRealEstate = await realEstateServices.createRealEstate(address, categoryId, realEstateData)

  return res.status(201).json(newRealEstate)
}

export default createRealEstate