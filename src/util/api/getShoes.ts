import {Request} from "./Request";
import {Response} from "../tools/response";

class GetShoes extends Request{
    public async getShoesList(): Promise<any>{
        return Response(await this.get('/shoesList'))
    }
}

export const getShoes = new GetShoes()
