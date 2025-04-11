'use client';

import { User } from "@/model/user.model";
import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContext {
    isAuthenticated: boolean;
    login: (user: User) => void;
    logout: () => void;
    user: User | null;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    // TODO: Hook up to supabase when implemented
    const login = async (user: User) => {
        setUser(user);
        setIsAuthenticated(true);
    }

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return ctx;
}