import { z } from 'zod'
import { createUserRequestSchema, createUserReturnSchema, userSchema } from '../schemas/users'

type TCreateUserRequest = z.infer<typeof createUserRequestSchema>
type TCreateUserReturn = z.infer<typeof createUserReturnSchema>
type TUser = z.infer<typeof userSchema>

export {
  TCreateUserRequest,
  TCreateUserReturn,
  TUser
}