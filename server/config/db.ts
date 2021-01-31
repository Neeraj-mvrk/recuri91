import mongoose from 'mongoose'
import env from "../environment"

class Db{
    public mongoUrl: string =  env.getDBName();
     connection:any= mongoose.Connection;
    constructor(){

    }
    /**
     * Create connection and connect to DB from environment
     */
    async mongoSetup(): Promise<void> {
        try{
            let connect= await mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
        if(connect){
            console.log("Connected to MongoDB")
        }
        }catch(err){
            console.log('[DB] MongoDB connection error. Please make sure MongoDB is running.', err);
            process.exit(0);
        }
             }
}

export default new Db();