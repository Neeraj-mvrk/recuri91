import express from 'express';
import { UserController } from '../modules/users/user.controller';
import { verifyCreateUser,verifyLoginUser} from "../middleware/validation";
const router = express.Router();    
const userController = new UserController();

router.post('/register', verifyCreateUser,userController.create_user);
router.post('/login', verifyLoginUser,userController.get_user);

export default router;