import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export const AuthLayout = ({ children }: Props) => {
    return (
        <div className='h-screen flex items-center justify-center app-shell px-4'>
            <div className='glass-panel w-full max-w-md fade-in-up'>
                <div className='mb-6 text-center'>
                    <p className='text-[10px] font-semibold tracking-[0.35em] uppercase text-sky-300/80'>
                        Board LIM
                    </p>
                    <h1 className='mt-3 text-2xl md:text-3xl font-semibold'>
                        Sign in to your workspace
                    </h1>
                    <p className='mt-2 text-sm text-slate-400'>
                        Enter your credentials to access your board.
                    </p>
                </div>
                {children}
            </div>
        </div>
    );
};