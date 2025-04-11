import { z } from 'zod';

export const UserSchema = z.object({
    id: z.string().uuid(),
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    registeredAt: z.date().optional(),
    lastLogin: z.date().optional(),
    role: z.enum(['admin', 'user']).default('user'),
    isActive: z.boolean().default(true),
});