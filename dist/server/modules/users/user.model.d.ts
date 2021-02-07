import mongoose, { Document } from 'mongoose';
export declare type User = Document & {
    _id: string;
    email: String;
    firstName: String;
    lastName: String;
    mobile: Number;
};
export declare const usersSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>>;
export declare const User: mongoose.Model<User>;
