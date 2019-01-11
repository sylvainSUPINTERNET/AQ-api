'use strict';

import { Document, Schema, Model, model} from "mongoose";
import {NextFunction} from 'express'
import {IUser} from '../interfaces/IUser';


export var UserSchema: Schema = new Schema({
  createdAt: Date,
  email: String,
  firstName: String,
  lastName: String
});

// extra methods
UserSchema.methods.fullName = function(): string {
    return (this.firstName.trim() + " " + this.lastName.trim());
  };


// hooks (callback lifecycle)
UserSchema.pre<IUser>("save", function(next:NextFunction) {
    let user = this;
    let now = new Date();
    if (!user.createdAt) {
        user.createdAt = now;
    }
    
    next();
});


export const User: Model<IUser> = model<IUser>("User", UserSchema);
