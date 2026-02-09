import { create } from 'zustand';
import { storage } from '@/shared/lib/storage';
import { authApi } from '../api/authApi';

type User = {
    id: string;
    email: string;
};

type AuthState = {
    user: User | null;
    isAuth: boolean;

    login: (email:string, password: string) => Promise<void>;
    logout: () => void;
    checkAuth: () => Promise <void>;
};

export const useAuthStore = create <AuthState>((set)=>({
    user: null,
    isAuth: false,

    login: async (email, password) => {
        const data = await authApi.login(email, password);

        storage.setToken(data.access_token);

        set({
            user: data.user,
            isAuth: true,
        })
    },
    
    logout: () => {
        storage.removeToken();

        set({
            user: null,
            isAuth: false,
        })
    },

    checkAuth: async () => {
        try {
            const data = await authApi.me();
            set({
                user: data.user,
                isAuth: true,
            })
        } catch {
            storage.removeToken();
            set({
                user: null,
                isAuth: false,
            })
        }
    }
}));