import {Service} from "typedi";
import {Post} from "../model/Post";
import {Category} from "../model/Category";
import {PostRepository} from "../repository/PostRepository";

@Service()
export class BaseService {

    constructor(private repository: PostRepository) {
    }

    findAll() {
        return this.repository.findAll();
    }

    findOne(id: number) {
        return this.repository.findOne(id);
    }

    save(post: Post) {
        return this.repository.save(post);
    }

    remove(id: number) {
        return this.repository.remove(id);
    }

}