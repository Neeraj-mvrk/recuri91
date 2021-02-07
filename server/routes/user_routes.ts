import {Application, Request, Response } from 'express';
import { UserController } from '../modules/users/user.controller';
import { verifyCreateUser,verifyGetUser} from "../middleware/validation";
export class UserRoutes {
   private user_controller: UserController = new UserController();   
   public route(app: Application) {
      app.post('/api/user/register',verifyCreateUser,(req: Request, res: Response) => {
         this.user_controller.create_user(req, res);
      });
      app.get('/api/user/:id',verifyGetUser,(req: Request, res: Response) => {
         this.user_controller.get_user(req, res);
      });
      app.put('/api/user/update',verifyCreateUser,(req: Request, res: Response) => {
         this.user_controller.update_user(req, res);
      });
      app.delete('/api/user/:id',verifyGetUser,(req: Request, res: Response) => {
         this.user_controller.delete_user(req, res);
      });
   }
}