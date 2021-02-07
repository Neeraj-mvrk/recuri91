import { User } from './user.model';
export default class UserService {
    createUser(user_params: User, callback: any): void;
    filterUser(query: any, callback: any): void;
    updateUser(user_params: User, callback: any): void;
    deleteUser(_id: String, callback: any): void;
}
