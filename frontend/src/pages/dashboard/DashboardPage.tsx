import { useEffect, useState } from 'react';
import { useAuthStore } from '@/features/auth/model/authStore';
import { ModalPortal } from '@/widgets/layout/ModalPortal';
import { AppLayout } from '@/widgets/layout/AppLayout';

export const DashboardPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const user = useAuthStore((s) => s.user);

    useEffect(() => {
        console.log('DashboardPage mounted');
    }, []);

    return (
        <AppLayout>
            <section className='space-y-6 fade-in-up'>
                <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-4'>
                    <div>
                        <p className='badge-pill mb-3'>Overview</p>
                        <h1 className='text-2xl md:text-3xl font-semibold'>
                            Welcome, {user?.email ?? 'guest'}
                        </h1>
                        <p className='mt-2 text-sm text-slate-400 max-w-xl'>
                            This is your control board. Track activity, projects and system
                            status in one place.
                        </p>
                    </div>
                    <button
                        onClick={() => setModalOpen(true)}
                        className='btn-primary'
                    >
                        Open quick action
                    </button>
                </div>

                <div className='card-grid'>
                    <div className='dashboard-card'>
                        <p className='text-xs font-semibold tracking-[0.18em] uppercase text-slate-400'>
                            Active Projects
                        </p>
                        <p className='mt-3 text-3xl font-semibold'>3</p>
                        <p className='mt-2 text-sm text-slate-400'>
                            You're currently monitoring three live initiatives.
                        </p>
                    </div>
                    <div className='dashboard-card'>
                        <p className='text-xs font-semibold tracking-[0.18em] uppercase text-slate-400'>
                            Recent Activity
                        </p>
                        <p className='mt-3 text-sm text-slate-300'>
                            • New member invited to Board LIM workspace.
                        </p>
                        <p className='mt-1 text-sm text-slate-300'>
                            • Access token refreshed 12 minutes ago.
                        </p>
                    </div>
                    <div className='dashboard-card'>
                        <p className='text-xs font-semibold tracking-[0.18em] uppercase text-slate-400'>
                            System Status
                        </p>
                        <p className='mt-3 text-sm text-emerald-400'>
                            All systems operational.
                        </p>
                        <p className='mt-2 text-xs text-slate-500'>
                            Last check: a few seconds ago.
                        </p>
                    </div>
                </div>

                {modalOpen && (
                    <ModalPortal>
                        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
                            <div className='glass-panel w-full max-w-md'>
                                <h2 className='text-xl font-semibold mb-2'>
                                    Quick action
                                </h2>
                                <p className='text-sm text-slate-300'>
                                    This is a placeholder modal rendered through a portal.
                                </p>
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className='mt-4 btn-primary'
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </ModalPortal>
                )}
            </section>
        </AppLayout>
    );
};