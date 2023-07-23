import { Request, Response, NextFunction } from "express";
export const sayHiFromMiddleWare = (req: Request, res: Response, next: NextFunction) => {
    //send 300 status code
    res.statusCode = 267;
    console.log('Hi from middleware to new config')
    next()

}