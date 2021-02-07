import { Request, Response, NextFunction, response } from 'express';
import { insufficientParameters, failureResponse } from '../modules/common/service';

export const verifyCreateUser = async (req: Request, res: Response ,next:NextFunction) => {
    try {
      if(req.method=='PUT'&& !req.body.id){
        insufficientParameters(res);
      }
        if(req.body.email && req.body.firstName&& req.body.lastName &&
            req.body.mobile){
              next();
            }else{
          insufficientParameters(res);
        }   
    } catch (error) {
        next(error)
    }      
    }

export const verifyGetUser = async (req: Request, res: Response ,next:NextFunction) => {
        try {
            if(req.params.id){
                  next();
                }else{
              insufficientParameters(res);;
            }   
        } catch (error) {
            next(error)
        }      
        }