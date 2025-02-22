import { NextFunction, Request, Response } from "express";
import { userSchema } from "../utils/userValidation";

export const signupUser = async (req: Request, res: Response, next: NextFunction) => {

    const parsedData = userSchema.safeParse(req.body)
    console.log("🚀 ~ signupUser ~ parsedData:", parsedData)
    if (!parsedData.success) {
        return res.status(400).json({ errors: parsedData.error.errors })
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
    } = parsedData.data

    const emailExists = await .findOne({ email });
    const phoneExists = await User.findOne({ phone });
    if (emailExists || phoneExists) {
        return res.status(400).json({ message: "Email or Phone already exists" });
    }
    console.log(req.body)
    console.log("inside signup controller")
    res.status(201).json({ message: "created" })
}