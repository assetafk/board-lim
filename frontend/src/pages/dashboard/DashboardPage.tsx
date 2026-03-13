import { useEffect, useState } from 'react';
import { useAuthStore } from '@/features/auth/model/authStore';
import { ModalPortal } from '@/widgets/layout/ModalPortal';
import { AppLayout } from '@/widgets/layout/AppLayout';
import { CursorGlow } from '@/widgets/effects/CursorGlow';
import { DashboardHero } from './DashboardHero';

export const DashboardPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const user = useAuthStore((s) => s.user);

    useEffect(() => {
        console.log('DashboardPage mounted');
    }, []);

    return (
        <AppLayout>
            <CursorGlow />
            <section className='fade-in-up dashboard-hero-background'>
                <div className='max-w-5xl mx-auto px-3 sm:px-4 md:px-6 py-10 space-y-10'>
                    <DashboardHero
                        userEmail={user?.email ?? null}
                        onOpenQuickAction={() => setModalOpen(true)}
                    />

                    <div className='grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start'>
                        <div className='space-y-4'>
                            <div className='dashboard-card dashboard-card-muted'>
                                <p className='text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-400'>
                                    Overview
                                </p>
                                <p className='mt-3 text-2xl font-semibold'>
                                    3 active boards
                                </p>
                                <p className='mt-2 text-sm text-slate-400'>
                                    You're currently monitoring three live initiatives across your
                                    workspace.
                                </p>
                                <div className='mt-4 flex items-center justify-between text-xs text-slate-500'>
                                    <span>Updated 5 minutes ago</span>
                                    <button className='btn-ghost'>
                                        View projects
                                    </button>
                                </div>
                            </div>

                            <div className='dashboard-card dashboard-card-muted'>
                                <p className='text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-400'>
                                    Recent activity
                                </p>
                                <ul className='mt-3 space-y-1.5 text-sm text-slate-300'>
                                    <li>• New member invited to Board LIM workspace.</li>
                                    <li>• Access token refreshed 12 minutes ago.</li>
                                    <li>• System checks passed for all boards.</li>
                                </ul>
                                <div className='mt-4 flex items-center justify-between text-xs text-slate-500'>
                                    <span>Activity log is synced</span>
                                    <button className='btn-ghost'>
                                        View activity
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='dashboard-card dashboard-card-subtle'>
                            <p className='text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-400'>
                                System status
                            </p>
                            <p className='mt-3 text-sm text-emerald-400'>
                                All systems operational.
                            </p>
                            <p className='mt-2 text-xs text-slate-500'>
                                Last check: a few seconds ago. Next automated check runs in
                                30 seconds.
                            </p>
                            <div className='mt-4 flex items-center justify-between text-xs text-slate-500'>
                                <span>Latency · Error rate · Uptime</span>
                                <button className='btn-ghost'>
                                    View status page
                                </button>
                            </div>
                        </div>
                    </div>

                    <section className='analytics-section space-y-6'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[11px] font-semibold tracking-[0.26em] uppercase text-slate-500'>
                                    Analytics
                                </p>
                                <p className='mt-1 text-sm text-slate-400'>
                                    Pulse of your boards and teams over the last week.
                                </p>
                            </div>
                            <button className='btn-ghost text-[11px] px-3 py-1'>
                                Export snapshot
                            </button>
                        </div>

                        <div className='analytics-grid'>
                            <div className='analytics-card'>
                                <div className='flex items-center justify-between mb-4'>
                                    <p className='text-xs font-medium text-slate-300'>
                                        Weekly pulse for Mar 13
                                    </p>
                                    <button className='btn-ghost text-[11px] px-2 py-0.5'>
                                        Listen · 1.0x
                                    </button>
                                </div>
                                <div className='space-y-4 text-sm text-slate-300'>
                                    <div>
                                        <p className='text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-500 mb-1'>
                                            UI refresh
                                        </p>
                                        <ul className='list-disc list-inside space-y-1 text-slate-400'>
                                            <li>Implementation is mostly complete on core boards.</li>
                                            <li>Risk of slip if remaining design decisions drift.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className='text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-500 mb-1'>
                                            Tokyo launch
                                        </p>
                                        <ul className='list-disc list-inside space-y-1 text-slate-400'>
                                            <li>Localization is complete for all customer flows.</li>
                                            <li>Everything else on track for early September.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='analytics-card'>
                                <p className='text-xs font-medium text-slate-300 mb-4'>
                                    Cycle time by agent
                                </p>
                                <div className='analytics-chart'>
                                    <div className='analytics-column analytics-column-blue' />
                                    <div className='analytics-column analytics-column-orange' />
                                    <div className='analytics-column analytics-column-slate' />
                                </div>
                                <div className='mt-3 flex justify-between text-[11px] text-slate-500'>
                                    <span>Cursor</span>
                                    <span>Codex</span>
                                    <span>No agent</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='contact-section'>
                        <div className='contact-card'>
                            <div className='space-y-2'>
                                <p className='text-[11px] font-semibold tracking-[0.26em] uppercase text-slate-500'>
                                    Contact
                                </p>
                                <h2 className='text-base font-semibold text-slate-100'>
                                    Need a custom board or integration?
                                </h2>
                                <p className='text-sm text-slate-400 max-w-xl'>
                                    Reach out if you want to extend this console, connect more
                                    systems or explore a tailored version for your team.
                                </p>
                            </div>
                            <div className='grid gap-3 text-sm text-slate-300 md:grid-cols-3 mt-4 md:mt-0'>
                                <div>
                                    <p className='text-[11px] uppercase tracking-[0.18em] text-slate-500'>
                                        Email
                                    </p>
                                    <p className='mt-1'>asekenti@gmail.com</p>
                                </div>
                                <div>
                                    <p className='text-[11px] uppercase tracking-[0.18em] text-slate-500'>
                                        Phone
                                    </p>
                                    <p className='mt-1'>+7 747 262 98 26</p>
                                </div>
                                <div>
                                    <p className='text-[11px] uppercase tracking-[0.18em] text-slate-500'>
                                        GitHub
                                    </p>
                                    <p className='mt-1'>github.com/assetafk</p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500'>
                            <div className='flex flex-wrap items-center gap-2'>
                                <span className='badge-pill'>Built with React</span>
                                <span className='badge-pill'>Three.js</span>
                                <span className='badge-pill'>Board LIM · 2026</span>
                            </div>
                            <p>Design & implementation by Asset.</p>
                        </div>
                    </section>

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
                </div>
            </section>
        </AppLayout>
    );
};