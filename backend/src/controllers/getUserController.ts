import { Request, Response } from "express";
import User from "../models/user.model";


export const getUser = async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  };