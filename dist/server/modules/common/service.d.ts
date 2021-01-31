import { Response } from 'express';
export declare function successResponse(message: string, DATA: any, res: Response): void;
export declare function failureResponse(message: string, DATA: any, res: Response): void;
export declare function insufficientParameters(res: Response): void;
export declare function mongoError(err: any, res: Response): void;
