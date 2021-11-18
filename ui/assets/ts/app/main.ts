import {client} from "./client";
import {Hello, HelloResponse} from "./dtos";

let req: Hello = new Hello({
    name: 'World'
})
client.get(req).then((res:HelloResponse) => {
    console.log(res.result)
})