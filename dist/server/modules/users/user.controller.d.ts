import { Request, Response } from 'express';
export declare class UserController {
    private user_service;
    create_user(req: Request, res: Response): void;
    get_user(req: Request, res: Response): void;
    update_user(req: Request, res: Response): void;
    delete_user(req: Request, res: Response): void;
}
