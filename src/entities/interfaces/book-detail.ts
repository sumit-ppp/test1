import mongoose  from "mongoose";


export interface BookDetails extends mongoose.Document { 
    bookName: string;
    authorName: string;
    authorEmail: string;
    bookPrice: number;
    bookDescription: string;
}