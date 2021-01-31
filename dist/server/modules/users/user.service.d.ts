import { User } from './user.model';
export default class UserService {
    createUser(user_params: User, callback: any): void;
    filterUser(query: any, callback: any): void;
    createUserList(user_params: User): void;
}
