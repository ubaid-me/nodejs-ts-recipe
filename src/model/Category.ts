import {BaseModel} from "./BaseModel";
export class Category extends BaseModel{

    name: string;

    constructor(id: number, name: string) {
        super(id);
        this.name = name;
    }

}