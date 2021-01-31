import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../common/service';
import { User } from './user.model';
import UserService from './user.service';

export class UserController {

    private user_service: UserService = new UserService();

    public create_user(req: Request, res: Response) {
      let user_params:User = req.body;
            this.user_service.createUser(user_params, (err: any, user_data: User) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('create user successfull', user_data, res);
                    this.user_service.createUserList(user_data);
                }
            });
    }

    public get_user(req: Request, res: Response) {
            const user_filter = { username: req.body.username };
            this.user_service.filterUser(user_filter, (err: any, user_data: User) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    console.log(user_data);
                    if(user_data){
                            this.check(req,res,user_data)
                    }else{
                        failureResponse('User not found',null,res)
                    }      
                }
            });
    }

    check(req:Request,res:Response,data:User){
        if(data.password!=req.body.password){
            console.log('222222222222222')
            failureResponse('Password Mismatch',null,res);
        }else if(data.isActive === false){
            failureResponse('You are not a active user',null,res)
        }else{
            successResponse('User sucessfully login',data,res)
        }
    }

}