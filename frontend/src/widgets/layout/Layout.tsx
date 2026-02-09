import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <div className = 'flex h-screen'>
            <aside className = 'w-64 bg-gray-800 text-white p-4'>
                Sidebar
            </aside>
            <main className="flex-1 p-4">
                {children}
            </main>
        </div>
    );
};