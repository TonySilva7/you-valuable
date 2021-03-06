import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

interface IAuthenticateRequest {
  email: string,
  password: string,
}

class AuthenticateUserService {
  
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepository = getCustomRepository(UserRepository);
    
    // verify email
    const user = await userRepository.findOne({ email });
    
    if (!user) {
      throw new Error("Email/Password incorrect!");
    }
    
    // verify password - Method compare return a boolean
    const passwordMatch = await compare(password, user.password);
    
    if (!passwordMatch) {
      throw new Error("Email/Password incorrect!");
    }
    
    // generate token
    const token = sign(
      { email: user.email },
      "e5ce196fda8a1d8b73937431da9a55c8",
      {
        subject: user.id,
        expiresIn: "1d",
      });
    
    return token;
  }
}

export { AuthenticateUserService };