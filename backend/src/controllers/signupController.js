"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupUser = void 0;
const userValidation_1 = require("../utils/userValidation");
const user_model_1 = __importDefault(require("../models/user.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const signupUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body, "req.bodyyy");
    const parsedData = userValidation_1.userSchema.safeParse(req.body);
    console.log("🚀 ~ signupUser ~ parsedData:", parsedData);
    try {
        if (!parsedData.success) {
            console.log(parsedData.error.errors, "errors in parsing");
            res.status(400).json({ errors: parsedData.error.errors });
        }
        const { title, fullName, email, password, mobileNumber, dateOfBirth, description, financialInfo, employmentStatus, currentAddress } = parsedData.data;
        const emailExists = yield user_model_1.default.findOne({ email });
        const mobileNumberExists = yield user_model_1.default.findOne({ mobileNumber });
        if (emailExists || mobileNumberExists) {
            res.status(400).json({ message: "Email or mobileNumber already exists" });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const user = yield user_model_1.default.create({
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
        console.log(req.body);
        console.log("inside signup controller");
        res.status(201).json({ message: "User registered successfully", user });
    }
    catch (error) {
        console.log("🚀 ~ signupUser ~ error:", error.message);
        res.status(400).json({ message: "something error happened while creating" });
    }
});
exports.signupUser = signupUser;
