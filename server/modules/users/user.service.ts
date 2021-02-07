import { User } from './user.model';


export default class UserService {
    
    public createUser(user_params: User, callback: any) {
        const user = new User(user_params);
        user.save(callback);
    }

    public filterUser(query: any, callback: any) {
        User.findOne(query, callback);
    }

    public updateUser(user_params: User, callback: any) {
        const query = { _id: user_params._id };
        User.findOneAndUpdate(query, user_params, callback);
    }
    
    public deleteUser(_id: String, callback: any) {
        const query = { _id: _id };
        User.deleteOne(query, callback);
    }
    
}