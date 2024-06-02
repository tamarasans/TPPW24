import { Server } from "./server.model";


export class Client{
    constructor(public nome: string, public tipo: string, public server: Server){
    }
}