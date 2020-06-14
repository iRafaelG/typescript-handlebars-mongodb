// import node modules
import mongoose, { Schema, model } from 'mongoose';

// interface
export interface IBook extends mongoose.Document {
    title: String;
    author: String;
    isbn: String;
}

// schema definition
const BookSchema = new Schema({
    title: String,
    author: String,
    isbn: String
});

export default model<IBook>('Book', BookSchema);
