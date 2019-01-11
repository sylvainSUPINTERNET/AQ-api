'use strict';

import { User } from 'db/models/User';

import {Response, Request, NextFunction} from 'express'
import { UserMdlr } from '../middlewares/UserMiddleware';
import { IUser } from 'db/interfaces/IUser';

class UserController {
    
    constructor(){}

    getUsersAsync(req:Request, res: Response, next: NextFunction){
        UserMdlr
        .usersListAsync()
        .then((users) => {
            next(users);
        })
        .catch((err) => {
            next(err);
        })
    }
    
}


export const UserCtrl = new UserController;