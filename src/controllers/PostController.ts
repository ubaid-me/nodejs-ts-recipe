import {JsonController, Get, Post as HttpPost, Param, Delete, Body} from "routing-controllers";
import {Service} from "typedi";
import {Post} from "../model/Post";
import {PostService} from "../services/PostService";

@Service()
@JsonController()
export class PostController {

    constructor(private postService: PostService) {
    }

    @Get("/posts")
    all(): Promise<Post[]> {
        return this.postService.findAll();
    }

    @Get("/posts/:id")
    one(@Param("id") id: number): Post {
        return this.postService.findOne(id);
    }

    @HttpPost("/posts")
    post(@Body() post: Post): Post {
        return this.postService.save(post);
    }

    @Delete("/posts/:id")
    delete(@Param("id") id: number): Post {
        return this.postService.remove(id);
    }

}