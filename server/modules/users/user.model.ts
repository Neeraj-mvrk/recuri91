import mongoose,{ Schema, Document, Model, model, Types, } from 'mongoose';
import { ModificationNote } from '../common/model';

export type User = Document & {
    _id: string,
    username  :String,
    password  :string,
    firstName :String,
    lastName  :String,
    mobile    :Number,
    country   :String,
    isActive  :Boolean

    
}

export const usersSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    mobile:Number,
    isActive: Boolean,
    modification_notes: [ModificationNote]});


  export const User = mongoose.model<User>('User', usersSchema);