import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";


class CreateTagService {
  
  async execute(name: string) {
    
    const tagRepository = getCustomRepository(TagRepository);
    if (!name) {
      throw new Error("Name can't be empty");
    }
    
    const tagAlreadyExists = await tagRepository.findOne({ name });
    if (tagAlreadyExists) {
      throw new Error("Tag already exists!");
    }
    
    const tag = tagRepository.create({ name });
    await tagRepository.save(tag);
  }
}

export {CreateTagService}