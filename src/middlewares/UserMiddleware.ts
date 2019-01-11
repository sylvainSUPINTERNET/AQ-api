'use strict';

import {Request, Response, NextFunction} from 'express';
import {User} from '../db/models/User';
import Utils from '../Utils'

class UserMiddleware extends Utils{

    constructor(){
        super();
    }

    async usersListAsync() {
        console.log('calling async usersList');
        try {
            let result = await this.getUsers();
            console.log("OK", result);
            console.log(" -_-_-_-_-_- ASYNC calling done. -_-_-_-_-_- ")
            
        } catch (e){
            console.log("ERROR", e)
        }
    }

      getUsers() {
        return new Promise( (resolve, reject) => {
            User
            .find()
            .then((data) => {
                if(data){
                    this.delayResolver(resolve,data, 4000)
                } else {
                    this.delayRejected(reject,data,4000)
                }
            })
            .catch((err)=>{
                this.delayRejected(reject,err,4000)
            })

          });
      }
}

export const UserMdlr = new UserMiddleware();
