import { z } from 'zod'
import { allRealEstates, createRealEstateRequestSchema, realEstateSchema } from '../schemas/realEstate'

type TRealEstate = z.infer<typeof realEstateSchema>
type TCreateRealEstateRequest = z.infer<typeof createRealEstateRequestSchema>
type TAllRealEstates = z.infer<typeof allRealEstates>

export {
  TRealEstate,
  TCreateRealEstateRequest,
  TAllRealEstates
}