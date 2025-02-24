import { z } from "zod"

export const userSchema = z.object({
    title: z.string().max(3, "title must be at most 3 characters"),
    fullName: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email format"),
    mobileNumber: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    dateOfBirth: z.string().refine((val) => {
        const date = new Date(val);
        return !isNaN(date.getTime());
    }, "Invalid date format"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/\d/, "Password must contain at least one number"),
    currentAddress: z.string().min(3, "Atleast 3 characters needed"),
    addressDuration: z.string().min(3, "Atleast 3 characters needed"),
    additionalSavings: z.string().min(3, "Atleast 3 characters needed"),
    aboutYourself: z.string().min(3, "Atleast 3 characters needed"),
    employmentStatus: z.string(),
})
