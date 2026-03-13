import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <aside className='w-64 bg-gray-800 text-white p-4'>
            <h2 className='text-xl font-bold'>My App</h2>
            <NavLink
            to = '/'
            className = {({ isActive }) =>
            isActive ? 'font-bold text-blue-400' : 'text-gray-300'}
            >
                Dashboard
                </NavLink>
                <NavLink
                to='/settings'
                className={({ isActive }) =>
                isActive ? 'font-bold text-blue-400' : 'text-gray-300'}
                >
                    Settings
                    </NavLink>
        </aside>
    );
};