import validator from 'validator';
import mongoose, { Schema } from 'mongoose';
import { BookDetails } from './interfaces/book-detail'
import { MongoCollection } from '../constants/mongo.constants';


const bookDetailSchema: Schema = new Schema(

    {
        bookName: {
            type:String,
            trim: true,
            required:true,
        },
        authorName: {
            type: String,
            trim: true,
            required:true
        
    },
        authorEmail: {
            type: String,
            required:true
    },
        bookPrice: {
            type:Number,
            required:true
        
    },
        bookDescription: {
            type: String,
            required:false
    }

    }




)
export const bookModel = mongoose.model<BookDetails>(MongoCollection.Bookdata,bookDetailSchema);