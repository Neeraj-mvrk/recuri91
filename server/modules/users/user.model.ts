import mongoose,{ Schema, Document, Model, model, Types, } from 'mongoose';

export type User = Document & {
    _id?: string,
    email  :String,
    firstName :String,
    lastName  :String,
    mobile    :Number   
}

export const usersSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    mobile:Number,
    },{ timestamps: true });


  export const User = mongoose.model<User>('User', usersSchema);