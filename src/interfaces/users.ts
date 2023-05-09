import { z } from 'zod'
import { allUsersSchema, createUserRequestSchema, createUserReturnSchema, userSchema } from '../schemas/users'

type TCreateUserRequest = z.infer<typeof createUserRequestSchema>
type TCreateUserReturn = z.infer<typeof createUserReturnSchema>
type TUser = z.infer<typeof userSchema>
type TAllUsers = z.infer<typeof allUsersSchema>

export {
  TCreateUserRequest,
  TCreateUserReturn,
  TUser,
  TAllUsers
}