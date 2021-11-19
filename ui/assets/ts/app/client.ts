import {JsonServiceClient} from "@servicestack/client";

// @ts-ignore
let apiUrl = apiURL;

console.log(apiUrl)

export const client = new JsonServiceClient(apiUrl);