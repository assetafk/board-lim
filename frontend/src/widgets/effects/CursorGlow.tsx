import type { FC, MouseEvent } from 'react';
import { useEffect, useState } from 'react';

type CursorGlowProps = {
    enabled?: boolean;
};

export const CursorGlow: FC<CursorGlowProps> = ({ enabled = true }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!enabled) return;

        const handleMove = (event: MouseEvent | MouseEvent | any) => {
            setPosition({ x: event.clientX, y: event.clientY });
            setVisible(true);
        };

        const handleLeave = () => {
            setVisible(false);
        };

        window.addEventListener('mousemove', handleMove as any);
        window.addEventListener('mouseleave', handleLeave);

        return () => {
            window.removeEventListener('mousemove', handleMove as any);
            window.removeEventListener('mouseleave', handleLeave);
        };
    }, [enabled]);

    if (!enabled) return null;

    return (
        <div
            className='cursor-glow'
            style={{
                opacity: visible ? 1 : 0,
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}
        />
    );
};

