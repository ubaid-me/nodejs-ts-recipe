import {Service} from "typedi";
import {Post} from "../model/Post";
import {Category} from "../model/Category";
import {BaseRepository} from "./BaseRepository";

@Service()
export class PostRepository extends BaseRepository {

    public dataList = [
        new Post(1, "post #1", "about post #1", [new Category(1, "People"), new Category(2, "Technology")]),
        new Post(2, "post #2", "about post #2", [new Category(2, "Technology")]),
        new Post(3, "post #3", "about post #3", [new Category(3, "Politics")]),
        new Post(4, "post #4", "about post #4", [new Category(3, "Politics"), new Category(4, "Economy")]),
    ];
}