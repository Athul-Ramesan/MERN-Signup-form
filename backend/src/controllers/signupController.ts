import { NextFunction, Request, Response } from "express";
import { userSchema } from "../utils/userValidation";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import { IUser } from "../types/IUser";

export const signupUser = async (req: Request, res: Response, next: NextFunction): Promise< void> => {
    console.log(req.body, "req.bodyyy")
    const parsedData = userSchema.safeParse(req.body)
    console.log("🚀 ~ signupUser ~ parsedData:", parsedData)
    try {
        if (!parsedData.success) {
            console.log(parsedData.error.errors,"errors in parsing")
             res.status(400).json({ errors: parsedData.error.errors })
        }
        const {
            title,
            fullName,
            email,
            password,
            mobileNumber,
            dateOfBirth,
            description,
            financialInfo,
            employmentStatus,
            currentAddress
        }  = parsedData.data as IUser

        const emailExists = await User.findOne({ email });
        const mobileNumberExists = await User.findOne({ mobileNumber });
        if (emailExists || mobileNumberExists) {
             res.status(400).json({ message: "Email or mobileNumber already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            title,
            fullName,
            email,
            mobileNumber,
            dateOfBirth,
            password: hashedPassword,
            description,
            financialInfo,
            currentAddress,
            employmentStatus
        });
        console.log(req.body)
        console.log("inside signup controller")
         res.status(201).json({ message: "User registered successfully", user });
    } catch (error: any) {
        console.log("🚀 ~ signupUser ~ error:", error.message)
        res.status(400).json({message: "something error happened while creating"})
    }
}