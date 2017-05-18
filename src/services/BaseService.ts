import {Service} from "typedi";
import {Post} from "../model/Post";
import {Category} from "../model/Category";
import {PostRepository} from "../repository/PostRepository";

@Service()
export class BaseService {

    constructor(private postRepository: PostRepository) {
    }

    findAll() {
        return this.postRepository.findAll();
    }

    findOne(id: number) {
        return this.postRepository.findOne(id);
    }

    save(post: Post) {
        return this.postRepository.save(post);
    }

    remove(id: number) {
        return this.postRepository.remove(id);
    }

}