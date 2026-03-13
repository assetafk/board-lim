import { useAuthStore } from '@/features/auth/model/authStore';

export const Header = () => {
    const logout = useAuthStore((s) => s.logout);
    const user = useAuthStore((s) => s.user);

    return (
        <header className='header-blur h-16 flex items-center justify-between px-6'>
            <div className='flex flex-col gap-0.5'>
                <span className='badge-pill'>Dashboard</span>
                <p className='text-sm text-slate-200'>
                    Welcome back{user?.email ? `, ${user.email}` : ''}.
                </p>
            </div>
            <button
                onClick={logout}
                className='px-4 py-2 rounded-full bg-red-500/90 hover:bg-red-500 text-white text-sm font-medium transition-colors'
            >
                Logout
            </button>
        </header>
    );   
};