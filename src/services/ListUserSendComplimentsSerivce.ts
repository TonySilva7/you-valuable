import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";

class ListUserSendComplimentsService {
  async execute(user_id: string) {
    const complimentRepository = getCustomRepository(ComplimentRepository);
    
    const compliments = await complimentRepository.find({
      where: {
        user_sender: user_id,
      }
    });
    
    return compliments;
  }
}

export { ListUserSendComplimentsService };