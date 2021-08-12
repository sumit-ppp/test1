import mongoose from 'mongoose';

export interface UserDeatils extends mongoose.Document { 

    userName: string;
    email: string;
    password: String;



}