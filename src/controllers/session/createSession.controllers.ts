import { Request, Response } from "express";
import { TLogin } from "../../interfaces/session.interfaces";
import { TUser } from "../../interfaces/users";
import { sessionServices } from "../../services/session/index";

const createSession = (
  req: Request,
  res: Response
): Response<string> => {
  const userFullData: TUser = res.locals.user;
  const userLoginData: TLogin = req.body;

  const sessionToken = sessionServices.createSession(
    userFullData,
    userLoginData
  );

  return res.status(200).json({
    token: `Bearer ${sessionToken}`,
  });
};

export default createSession;
