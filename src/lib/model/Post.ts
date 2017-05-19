import {Category} from "./Category";
import {BaseModel} from "./BaseModel";

export class Post extends BaseModel{

    title: string;
    text: string;
    createDate: Date = new Date();
    categories: Category[];

    constructor(id: number,
                title: string,
                text: string,
                categories: Category[]) {
        super(id);
        this.title = title;
        this.text = text;
        this.categories = categories;
    }

}