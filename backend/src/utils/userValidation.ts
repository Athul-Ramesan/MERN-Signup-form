import { z } from "zod"

export const userSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email format"),
    phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    dob: z.string().refine((val) => {
        const date = new Date(val);
        return !isNaN(date.getTime());
    }, "Invalid date format"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/\d/, "Password must contain at least one number"),
    address: z.string().min(3,"Atleast 3 characters needed"),
    description: z.string(),
    employmentStatus: z.string(),
    financialInfo: z.string()
})
