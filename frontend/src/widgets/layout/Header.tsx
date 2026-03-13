import { useAuthStore } from '@/features/auth/model/authStore';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const logout = useAuthStore((s) => s.logout);
    const user = useAuthStore((s) => s.user);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoutClick = async () => {
        await logout();
        navigate('/');
    };

    return (
        <header className='header-blur h-16 flex items-center justify-between px-6'>
            <div className='flex flex-col gap-0.5'>
                <span className='badge-pill'>Control Surface</span>
                <p className='text-sm text-slate-200'>
                    Signals from every board,{user?.email ? ` ${user.email}` : ' guest'}.
                </p>
            </div>
            {user ? (
                <button
                    onClick={handleLogoutClick}
                    className='px-4 py-2 rounded-full bg-red-500/90 hover:bg-red-500 text-white text-sm font-medium transition-colors'
                >
                    Logout
                </button>
            ) : (
                <button
                    onClick={handleLoginClick}
                    className='btn-glass text-xs md:text-sm'
                >
                    Login
                </button>
            )}
        </header>
    );
};