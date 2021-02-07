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
                }
            });
    }

    public get_user(req: Request, res: Response) {
            const user_filter = { username: req.body.username };
            this.user_service.filterUser(user_filter, (err: any, user_data: User) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    //console.log(user_data);
                    if(user_data){
                        successResponse('update user successfull', user_data, res);
                    }else{
                        failureResponse('User not found',null,res)
                    }      
                }
            });
    }

    public update_user(req: Request, res: Response) {
        let user_params:User = req.body;
                    this.user_service.updateUser(user_params, (err: any) => {
                        if (err) {
                            mongoError(err, res);
                        } else {
                            successResponse('update user successfull', null, res);
                        }
                    });
    }

    public delete_user(req: Request, res: Response) {
        if (req.params.id) {
            this.user_service.deleteUser(req.params.id, (err: any, delete_details:any) => {
                if (err) {
                    mongoError(err, res);
                } else if (delete_details.deletedCount !== 0) {
                    successResponse('delete user successfull', null, res);
                } else {
                    failureResponse('invalid user', null, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }
}
