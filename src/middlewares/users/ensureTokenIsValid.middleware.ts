import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../../error';
import 'dotenv/config'

const ensureTokenIsValid = (req: Request, res: Response, next: NextFunction) => {

  const { authorization } = req.headers

  if(!authorization) throw new AppError('Missing bearer token', 401)
  
  const token: string = authorization.split(' ')[1]

  verify(token, process.env.SECRET_KEY!, (error, decoded) => {

    if(error) throw new AppError(error.message, 401)

    res.locals ={
      decoded
    }
  })

  return next();
};

export default ensureTokenIsValid;