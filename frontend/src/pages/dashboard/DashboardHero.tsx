import type { FC, MouseEvent } from 'react';
import { useState } from 'react';
import { DashboardScene3D } from './DashboardScene3D';

type DashboardHeroProps = {
    userEmail?: string | null;
    onOpenQuickAction: () => void;
};

export const DashboardHero: FC<DashboardHeroProps> = ({
    userEmail,
    onOpenQuickAction,
}) => {
    const displayName = userEmail ?? 'guest';
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const mappedX = (x - 0.5) * 2;
        const mappedY = (y - 0.5) * -2;
        setMouse({ x: mappedX, y: mappedY });
    };

    return (
        <section
            className='dashboard-hero-shell space-y-8 md:space-y-0 md:flex md:items-center md:justify-between gap-10'
            onMouseMove={handleMouseMove}
        >
            <div className='max-w-xl space-y-3 text-center md:text-left mx-auto md:mx-0'>
                <p className='text-[11px] font-semibold tracking-[0.32em] uppercase text-slate-400 fade-in-up hero-stagger-1'>
                    Board LIM · Live boards console
                </p>
                <h1 className='hero-title font-semibold fade-in-up hero-stagger-2'>
                    Huge signal for every board,{' '}
                    <span className='text-sky-300/90'>{displayName}</span>.
                </h1>
                <p className='mt-3 hero-subtitle text-slate-400 max-w-lg fade-in-up hero-stagger-3'>
                    Calm, opinionated overview for projects, people and systems — a single
                    control surface where every signal is sharp and the noise disappears.
                </p>

                <div className='pt-4 flex flex-wrap items-center gap-3 fade-in-up hero-stagger-4'>
                    <button
                        onClick={onOpenQuickAction}
                        className='btn-primary btn-primary-glass'
                    >
                        Open quick action
                    </button>
                    <button className='btn-glass text-xs md:text-sm'>
                        Invite your team
                    </button>
                    <span className='text-[11px] text-slate-500'>
                        Realtime boards · Low‑noise metrics
                    </span>
                </div>
            </div>

            <div className='mt-8 md:mt-0 w-full max-w-md mx-auto md:mx-0 hidden md:block'>
                <div className='dashboard-hero-orbit'>
                    <div className='dashboard-hero-orbit-inner'>
                        <DashboardScene3D mouse={mouse} />
                    </div>
                </div>
            </div>
        </section>
    );
}

