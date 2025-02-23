import { Request, Response } from "express";
import User from "../models/user.model";


export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        
        const user = await User.findById(req.params.id);
        console.log("🚀 ~ getUser ~ user:", user)
        if (!user) {
            res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error:any) {
        console.log("🚀 ~ getUser ~ error:", error.message)
        res.status(400).json({message: "something error happened in the database"})
    }
};