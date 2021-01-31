import { Request, Response, NextFunction } from 'express';
export declare const verifyCreateUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const verifyLoginUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
