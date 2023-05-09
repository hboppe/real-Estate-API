import { Request, Response } from "express"
import { TCreateUserReturn } from "../../interfaces/users"
import { createUserReturnSchema } from "../../schemas/users"
import { usersServices } from "../../services"

const createUser = async (req: Request, res: Response): Promise<Response<TCreateUserReturn>> => {

  const createdUser = await usersServices.createUser(req.body)
  const validatedUser = createUserReturnSchema.parse(createdUser)

  return res.status(201).json(validatedUser)
}

export default createUser