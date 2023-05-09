import { z } from 'zod'
import { allUsersSchema, createUserRequestSchema, createUserReturnSchema, updateUserRequestSchema, updateUserReturnSchema, userReturnSchema, userSchema } from '../schemas/users'

type TCreateUserRequest = z.infer<typeof createUserRequestSchema>
type TCreateUserReturn = z.infer<typeof createUserReturnSchema>
type TUser = z.infer<typeof userSchema>
type TAllUsers = z.infer<typeof allUsersSchema>
type TUpdateUserRequest = z.infer<typeof updateUserRequestSchema>
type TUserReturn = z.infer<typeof userReturnSchema>
type TUpdateUserReturn = z.infer<typeof updateUserReturnSchema>

export {
  TCreateUserRequest,
  TCreateUserReturn,
  TUser,
  TAllUsers,
  TUpdateUserRequest,
  TUserReturn,
  TUpdateUserReturn
}