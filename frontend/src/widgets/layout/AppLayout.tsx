import { Sidebar } from './sidebar';
import { Header } from './Header';
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export const AppLayout = ({ children }: Props) => {
    return (
        <div className='flex h-screen app-shell'>
            <Sidebar />
            <div className='flex-1 flex flex-col'>
                <Header />
                <main className='flex-1 px-6 py-5 overflow-y-auto'>
                    {children}
                </main>
            </div>
        </div>
    );
};