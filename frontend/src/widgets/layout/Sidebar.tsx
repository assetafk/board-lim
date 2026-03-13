import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <aside className='sidebar-blur w-64 text-slate-100 px-5 py-6 flex flex-col justify-between'>
            <div>
                <div className='mb-8 text-center'>
                    <p className='text-[10px] font-semibold tracking-[0.35em] uppercase text-sky-300/80'>
                        Board LIM
                    </p>
                    <h2 className='mt-2 text-2xl font-semibold tracking-tight'>
                        Control Surface
                    </h2>
                </div>

                <nav className='space-y-1 text-sm text-center'>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `nav-link ${isActive ? 'nav-link-active' : ''}`
                        }
                    >
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink
                        to='/settings'
                        className={({ isActive }) =>
                            `nav-link ${isActive ? 'nav-link-active' : ''}`
                        }
                    >
                        <span>Settings</span>
                    </NavLink>
                </nav>
            </div>
        </aside>
    );
};