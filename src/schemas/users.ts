import { boolean, z } from 'zod'

const createUserRequestSchema = z.object({
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z.string().regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'), {message: 'Password invalid'}),
  admin: z.boolean().default(false)
})

const userSchema = z.object({
  id: z.number().int(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z.string(),
  admin: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
  deletedAt: z.date().nullable()
})

const createUserReturnSchema = userSchema.omit({
  password: true
})

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export {
  createUserRequestSchema,
  userSchema,
  createUserReturnSchema,
  loginSchema
}