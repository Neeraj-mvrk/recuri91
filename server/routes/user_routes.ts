import {Application, Request, Response } from 'express';
import { UserController } from '../modules/users/user.controller';
import { verifyCreateUser,verifyLoginUser} from "../middleware/validation";
export class UserRoutes {
   private user_controller: UserController = new UserController();   
   public route(app: Application) {
      app.post('/api/user/register',verifyCreateUser,(req: Request, res: Response) => {
         this.user_controller.create_user(req, res);
      });
      app.post('/api/user/login',verifyLoginUser,(req: Request, res: Response) => {
         this.user_controller.get_user(req, res);
      });
   }
}