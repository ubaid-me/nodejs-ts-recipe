import {Service} from "typedi";
import {Post} from "../model/Post";
import {Category} from "../model/Category";
import {PostRepository} from "../repository/PostRepository";
import {BaseRepository} from "../repository/BaseRepository";
import {BaseModel} from "../model/BaseModel";

@Service()
export class BaseService {

    constructor(private repository: BaseRepository) {
    }

    findAll() {
        return this.repository.findAll();
    }

    findOne(id: number) : BaseModel {
        return this.repository.findOne(id);
    }

    save(model: BaseModel) : BaseModel {
        return this.repository.save(model);
    }

    remove(id: number) {
        return this.repository.remove(id);
    }

}