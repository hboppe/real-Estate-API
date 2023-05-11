import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

class AppError extends Error {
  message: string
  statusCode: number

  constructor(message: string, statusCode: number = 400){
    super(message)
    this.message = message;
    this.statusCode = statusCode;
  }
}

const handleError = (error: Error, req: Request, res: Response, next: NextFunction) => {

  if(error instanceof AppError){
    return res.status(error.statusCode).json({
      message: error.message
    })
  }

  if(error instanceof ZodError) {
    return res.status(400).json({
      message: error.flatten().fieldErrors
    })
  }

  console.error(error)
  return res.status(500).json({
    message: 'Internal Server Error'
  })
}

export {
  AppError,
  handleError
}