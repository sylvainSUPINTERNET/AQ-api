'use strict';

import * as express from "express";
import * as bodyParser from "body-parser";

import DbContext from './db/DbContext';


class Api extends DbContext{
    public server: express.Application;

    constructor(){
        super();
        this.server = express();
        this.config();
    }

    private config(): void{
        // support application/json type post data
        this.server.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.server.use(bodyParser.urlencoded({ extended: false }));
    }

    public run():void{
        this.server.listen(3022, () => {
            console.log(`API server runs on : 3022 `);
        })
    }

    public bootDb(): void{
        this.connect();
    }
}


export default new Api();

