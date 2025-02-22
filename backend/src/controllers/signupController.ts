import { NextFunction, Request, Response } from "express";

export const signupController = async(req:Request, res: Response, next: NextFunction)=>{
    console.log(req.body)
    console.log("inside signup controller")
    res.status(201).json({message: "created"})
}