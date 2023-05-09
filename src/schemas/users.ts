import { z } from 'zod'

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
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().nullable().or(z.string()),
  deletedAt: z.date().nullable().or(z.string())
})

const createUserReturnSchema = userSchema.omit({
  password: true
})

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

const allUsersSchema = userSchema.omit({
  password: true
}).array()

const updateUserRequestSchema = createUserRequestSchema.omit({
  admin: true
}).partial()

const updateUserReturnSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string()
})

const userReturnSchema = userSchema.omit({
  password: true
})

export {
  createUserRequestSchema,
  userSchema,
  createUserReturnSchema,
  loginSchema,
  allUsersSchema,
  updateUserRequestSchema,
  userReturnSchema,
  updateUserReturnSchema
}