import {Service} from "typedi";
import {Post} from "../model/Post";
import {Category} from "../model/Category";

@Service()
export class BaseRepository {

    dataList: any[] ;

    findAll() {
        // here, for example you can load categories using mongoose
        // you can also return a promise here
        // simulate async with creating an empty promise
        return Promise.resolve(this.dataList);
    }

    findOne(id: number) {
        // here, for example you can load post id using mongoose
        // you can also return a promise here
        let foundPost: Post = undefined;
        this.dataList.forEach(post => {
            if (post.id === id)
                foundPost = post;
        });
        return foundPost;
    }

    save(post: Post) {
        // here, for example you can save a post to mongodb using mongoose
        this.dataList.push(post);
        return post;
    }

    remove(id: number) {
        // here, for example you can save a post to mongodb using mongoose
        const post = this.findOne(id);
        if (post)
            this.dataList.splice(this.dataList.indexOf(post), 1);

        return post;
    }

}