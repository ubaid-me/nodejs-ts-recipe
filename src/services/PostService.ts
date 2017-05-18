import {Service} from "typedi";
import {Post} from "../model/Post";
import {Category} from "../model/Category";
import {PostRepository} from "../repository/PostRepository";

@Service()
export class PostService {

    constructor(private postRepository: PostRepository) {
    }


    findAll() {
        // here, for example you can load categories using mongoose
        // you can also return a promise here
        // simulate async with creating an empty promise
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