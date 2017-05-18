import {JsonController, Get, Post as HttpPost, Param, Delete, Body} from "routing-controllers";
import {Service} from "typedi";
import {Post} from "../model/Post";
import {PostService} from "../services/PostService";
import {BaseService} from "../services/BaseService";

@Service()
@JsonController()
export class BaseController {

    constructor(private service: BaseService) {
    }

    all(): Promise<Post[]> {
        return this.service.findAll();
    }

    one(@Param("id") id: number): Post {
        return this.service.findOne(id);
    }

    post(@Body() post: Post): Post {
        return this.service.save(post);
    }

    delete(@Param("id") id: number): Post {
        return this.service.remove(id);
    }

}