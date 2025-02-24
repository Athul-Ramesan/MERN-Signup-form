"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    title: zod_1.z.string().max(3, "title must be at most 3 characters"),
    fullName: zod_1.z.string().min(3, "Name must be at least 3 characters"),
    email: zod_1.z.string().email("Invalid email format"),
    mobileNumber: zod_1.z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    dateOfBirth: zod_1.z.string().refine((val) => {
        const date = new Date(val);
        return !isNaN(date.getTime());
    }, "Invalid date format"),
    password: zod_1.z
        .string()
        .min(6, "Password must be at least 6 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/\d/, "Password must contain at least one number"),
    currentAddress: zod_1.z.string().min(3, "Atleast 3 characters needed"),
    addressDuration: zod_1.z.string().min(3, "Atleast 3 characters needed"),
    additionalSavings: zod_1.z.string().min(3, "Atleast 3 characters needed"),
    aboutYourself: zod_1.z.string().min(3, "Atleast 3 characters needed"),
    employmentStatus: zod_1.z.string(),
});
