import { Request, Response } from 'express';
import { User } from './user.model';
export declare class UserController {
    private user_service;
    create_user(req: Request, res: Response): void;
    get_user(req: Request, res: Response): void;
    check(req: Request, res: Response, data: User): void;
}
