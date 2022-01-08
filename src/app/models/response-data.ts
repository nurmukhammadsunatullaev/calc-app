import {Type} from "./type";

export interface ResponseData {
    data : Type[]
    errorMessage:string
    status:number
    time:number
}
