import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export const AuthLayout = ({ children }: Props) => {
    return (
        <div className='h-screen flex items-center justify-center bg-gray-100'>
            <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>

                <h1 className='text-2xl font-bold mb-6 text-center'>
                    Welcome Back!
                </h1>
                {children}
            </div>
        </div>
    );
                
};