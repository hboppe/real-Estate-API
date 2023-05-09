import { NextFunction, Request, Response } from "express"
import { ZodSchema } from "zod"
import { TCreateUserRequest } from "../../interfaces/users"

const ensureDataisValid = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction): void => {
  
  const validatedData: TCreateUserRequest = schema.parse(req.body);

  req.body = validatedData

  return next()
}

export default ensureDataisValid