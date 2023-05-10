import { compareSync } from "bcryptjs";
import { TLogin } from "../../interfaces/session.interfaces";
import { AppError } from "../../error";
import { sign } from "jsonwebtoken";
import { TUser } from "../../interfaces/users";
import process from "process";
import "dotenv/config";

const createSession = (userFullData: TUser, userLoginData: TLogin): string => {
  const match = compareSync(userLoginData.password, userFullData.password);

  if (!match) throw new AppError("Invalid credentials", 401);

  const token: string = sign(
    { admin: userFullData.admin, email: userFullData.email },
    process.env.DATABASE_URL!,
    { expiresIn: "24h", subject: String(userFullData.id) }
  );

  return token;
};

export default createSession;
