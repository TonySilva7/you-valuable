import {Repository, EntityRepository} from "typeorm"
import { Tag } from "../entities/Tag";

class TagRepository extends Repository<Tag>{

}

export {TagRepository}