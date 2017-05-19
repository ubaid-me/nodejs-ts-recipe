import {JsonController, Get, Post as HttpPost, Param, Delete, Body} from "routing-controllers";
import {Service} from "typedi";
import {Post} from "../../lib/model/Post";
import {PostService} from "../../lib/services/PostService";
import {BaseController} from "./BaseController";
import {BaseModel} from "../../lib/model/BaseModel";

@Service()
@JsonController()
export class PostController extends BaseController{

    constructor(postService: PostService) {
        super(postService);
    }

    @Get("/posts")
    all(): Promise<Post[]> {
        return super.all();
    }

    @Get("/posts/:id")
    one(@Param("id") id: number) {
        return super.one(id);
    }

    @HttpPost("/posts")
    post(@Body() post: BaseModel) {
        return super.post(post);
    }

    @Delete("/posts/:id")
    delete(@Param("id") id: number) {
        return super.delete(id);
    }

}