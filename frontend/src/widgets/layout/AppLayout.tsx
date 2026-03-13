import { Sidebar } from './sidebar';
import { Header } from './Header';

type Props = {
    children: React.ReactNode;
};

export const AppLayout = ({ children }: Props) => {
    return (
        <div className='flex h-screen'>

            <Sidebar />
            <div className='flex-1 flex flex-col'>
                <Header />
                <main className='flex-1 p-4'>{children}
                </main>
            </div>
        </div>
    );
};