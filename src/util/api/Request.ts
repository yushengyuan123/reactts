import Axios from "axios";

export class Request {
    get(url: string): any {
        return  Axios.get(url)
    }
}

