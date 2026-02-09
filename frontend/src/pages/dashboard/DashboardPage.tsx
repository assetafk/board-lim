import React, { useEffect } from 'react';
import { useAuthStore } from '@/features/auth/model/authStore';
import { Layout } from '@/widgets/layout/Layout';
import { ModalPortal } from '@/widgets/layout/ModalPortal';

export const DashboardPage = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const user = useAuthStore((s) => s.user);

    useEffect (() => {
        console.log('DashboardPage mounted');
    }, []);

    return (
        <Layout>
            <div>
                <h1 className='text-2xl font-bold'>Dashboard</h1>

                <button
                    onClick={() => setModalOpen (true)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Open Modal
                </button>
                {modalOpen && (
                    <ModalPortal>
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="bg-white p-4 rounded">
                                <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                                <p>This is a portal modal!.</p>
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Close Modal
                                </button>
                            </div>
                        </div>
                    </ModalPortal>)}
                <p>Welcome, {user?.email}!</p>
            </div>
        </Layout>
            
            
    );
};