import { z } from 'zod'
import { addressSchema, createAddressRequesSchema } from '../schemas/addresses'

type TAddress = z.infer<typeof addressSchema>
type TCreateAddressRequest = z.infer<typeof createAddressRequesSchema>

export {
  TAddress,
  TCreateAddressRequest
}