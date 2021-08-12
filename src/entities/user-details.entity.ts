import validator from 'validator';
import mongoose, { Schema } from 'mongoose';
import {UserDeatils } from './interfaces/user-detail'
import { MongoCollection } from '../constants/mongo.constants';


const userDetailSchema: Schema = new Schema(

    {
        userName: {
            type:String,
            trim: true,
            required:true,
        },
        email: {
            type: String,
            
            required:true
        
    },
        password: {
            type:String,
            required:true
        
    }

    }




)
export const userModel = mongoose.model<UserDeatils>(MongoCollection.UserData,userDetailSchema);