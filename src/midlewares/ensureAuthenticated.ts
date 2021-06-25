import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  // receive token
  const authToken = request.headers.authorization;
  
  // validate that the token is filled in
  if (!authToken) {
    return response.status(401).end();
  }
  
  // validate token
  const [, token] = authToken.split(" ");
  try {
    const { sub } = verify(token, "e5ce196fda8a1d8b73937431da9a55c8") as IPayload;
    request.user_id = sub;
    
    return next();
  } catch (e) {
    return response.status(401).end();
  }
  
  // retrieve user information
  
}