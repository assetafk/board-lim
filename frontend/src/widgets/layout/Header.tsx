import React from 'react';
import { useAuthStore } from '@/features/auth/model/authStore';

export const Header = () => {
    const logout = useAuthStore((s) => s.logout);
    const user = useAuthStore((s) => s.user);

    return (
        <header className = 'hh-16 bg-white shadow flex items-center justify-between px-4'>
            <div> Welcome, {user?.email} </div>
            <button
                onClick={logout}
                className = 'px-4 py-2 bg-red-500 text-white rounded'
            >
                Logout
            </button>
        </header>
    );   
};