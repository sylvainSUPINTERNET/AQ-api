'use strict';


import * as mongoose from 'mongoose';


export default class DbContext {

    protected dbUri: string = 'mongodb://127.0.0.1:27017/aqdev';
    
    constructor(){

    }


    /**
     * Retrieve db uri 
     */
    getDbUri(): string{
        return this.dbUri;
    }

    connect(){
        mongoose
        .connect(this.getDbUri(),{ useNewUrlParser: true }, (err:any) => {
            if(err){
                console.log(err.message);
            } else {
                console.log(' --> DB connected successfully ! <--');
            }
        });
    }

}