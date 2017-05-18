import {Service} from "typedi";
import {Post} from "../model/Post";
import {Category} from "../model/Category";
import {PostRepository} from "../repository/PostRepository";
import {BaseService} from "../services/BaseService";

@Service()
export class PostService extends BaseService {

    constructor(postRepository: PostRepository) {
        super(postRepository);
    }

}