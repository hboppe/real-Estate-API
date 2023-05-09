import { z } from 'zod'

const createUserRequestSchema = z.object({
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z.string().regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'), {message: 'Password invalid'}),
  admin: z.boolean().optional()
})

export {
  createUserRequestSchema
}