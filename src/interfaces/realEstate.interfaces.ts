import { z } from 'zod'
import { createRealEstateRequestSchema, realEstateSchema } from '../schemas/realEstate'

type TRealEstate = z.infer<typeof realEstateSchema>
type TCreateRealEstateRequest = z.infer<typeof createRealEstateRequestSchema>

export {
  TRealEstate,
  TCreateRealEstateRequest
}