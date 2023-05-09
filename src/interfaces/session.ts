import { z } from 'zod'
import { loginSchema } from '../schemas/users'

type TLogin = z.infer<typeof loginSchema>

export {
  TLogin
}