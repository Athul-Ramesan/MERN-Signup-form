import { NextFunction, Request, Response } from "express";
import { userSchema } from "../utils/userValidation";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import { IUser } from "../types/IUser";

export const signupUser = async (req: Request, res: Response, next: NextFunction): Promise< void> => {

    const parsedData = userSchema.safeParse(req.body)
    console.log("🚀 ~ signupUser ~ parsedData:", parsedData)
    try {
        if (!parsedData.success) {
             res.status(400).json({ errors: parsedData.error.errors })
        }
        const {
            name,
            email,
            password,
            phone,
            dob,
            description,
            financialInfo,
            employmentStatus,
            address
        }  = parsedData.data as IUser

        const emailExists = await User.findOne({ email });
        const phoneExists = await User.findOne({ phone });
        if (emailExists || phoneExists) {
             res.status(400).json({ message: "Email or Phone already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            phone,
            dob,
            password: hashedPassword,
            description,
            financialInfo,
            address,
            employmentStatus
        });
        console.log(req.body)
        console.log("inside signup controller")
         res.status(201).json({ message: "User registered successfully", user });
    } catch (error: any) {
        next(error)
    }
}