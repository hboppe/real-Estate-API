import { z } from 'zod'
import { allRealEstatesSchema, createRealEstateRequestSchema, realEstateSchema } from '../schemas/realEstate'

type TRealEstate = z.infer<typeof realEstateSchema>
type TCreateRealEstateRequest = z.infer<typeof createRealEstateRequestSchema>
type TAllRealEstates = z.infer<typeof allRealEstatesSchema>

export {
  TRealEstate,
  TCreateRealEstateRequest,
  TAllRealEstates
}