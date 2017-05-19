import {JsonController, Get, Post as HttpPost, Param, Delete, Body} from "routing-controllers";
import {Service} from "typedi";
import {Post} from "../../lib/model/Post";
import {PostService} from "../../lib/services/PostService";
import {BaseService} from "../../lib/services/BaseService";
import {BaseModel} from "../../lib/model/BaseModel";

@Service()
@JsonController()
export class BaseController {

    constructor(private service: BaseService) {
    }

    all(): Promise<BaseModel[]> {
        return this.service.findAll();
    }

    one(@Param("id") id: number) {
        return this.service.findOne(id);
    }

    post(@Body() model: BaseModel) {
        return this.service.save(model);
    }

    delete(@Param("id") id: number): BaseModel {
        return this.service.remove(id);
    }

}