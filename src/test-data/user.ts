import { User } from "@/model/user.model";

export const users: User[] = [
    {
        id: "123e4567-e89b-12d3-a456-426614174000",
        username: "testuser",
        email: "user@username.com",
        password: "password123",
        firstName: "Test",
        lastName: "User",
        registeredAt: new Date("2023-01-01"),
        lastLogin: new Date("2023-01-02"),
        role: 'admin',
        isActive: true,
    },
    {
        id: "123e4567-e89b-12d3-a456-426614174001",
        username: "testuser2",
        email: "user2@username.com",
        password: "password123",
        firstName: "Test",
        lastName: "User2",
        registeredAt: new Date("2023-01-01"),
        lastLogin: new Date("2023-01-02"),
        role: 'user',
        isActive: true,
    }
]
