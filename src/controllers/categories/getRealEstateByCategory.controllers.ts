import { Request, Response} from 'express';
import { categoriesServices } from '../../services/categories/index';


const getRealEstateByCategory = async (req: Request, res: Response) => {

  const categoryId: number = Number(req.params.id)

  const allRealEstate = await categoriesServices.getRealEstateByCategory(categoryId)

  return res.json(allRealEstate)
}

export default getRealEstateByCategory