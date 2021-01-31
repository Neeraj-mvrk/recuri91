import { Request, Response, NextFunction, response } from 'express';
import { insufficientParameters, failureResponse } from '../modules/common/service';

export const verifyCreateUser = async (req: Request, res: Response ,next:NextFunction) => {
    try {
        console.log(req.body,'::::::::::::::::');
        if(req.body.username && req.body.firstName&& req.body.lastName &&
            req.body.mobile && req.body.password &&req.body.isActive){
              next();
            }else{
          insufficientParameters(res);;
        }   
    } catch (error) {
        next(error)
    }      
    }

export const verifyLoginUser = async (req: Request, res: Response ,next:NextFunction) => {
        try {
            console.log(req.query,'::::::::::::::::');
            if(req.body.username && req.body.password){
                  next();
                }else{
              insufficientParameters(res);;
            }   
        } catch (error) {
            next(error)
        }      
        }