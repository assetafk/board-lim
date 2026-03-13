import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export const AuthLayout = ({ children }: Props) => {
    return (
        <div className='min-h-screen flex items-center justify-center app-shell px-4 py-10 hero-shell'>
            <div className='w-full max-w-5xl grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center fade-in-up'>
                <div className='space-y-4'>
                    <p className='text-[11px] font-semibold tracking-[0.35em] uppercase text-sky-300/80'>
                        Board LIM · SaaS console
                    </p>
                    <h1 className='hero-title font-semibold'>
                        Your boards. Sharper, faster, never cluttered.
                    </h1>
                    <p className='hero-subtitle text-slate-400 max-w-md'>
                        Premium workspace to run projects, people and performance in one
                        focused control panel — without the noise of a typical dashboard.
                    </p>
                    <div className='hidden md:flex items-center gap-3 text-xs text-slate-400 pt-2'>
                        <span className='badge-pill'>Secure access</span>
                        <span>SSO ready</span>
                        <span>Real‑time updates</span>
                    </div>
                </div>

                <div className='glass-panel w-full max-w-md mx-auto'>
                    <div className='mb-6 text-center'>
                        <h2 className='text-2xl md:text-3xl font-semibold'>
                            Sign in to your workspace
                        </h2>
                        <p className='mt-2 text-sm text-slate-400'>
                            Use your work email to access your Board LIM console.
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};