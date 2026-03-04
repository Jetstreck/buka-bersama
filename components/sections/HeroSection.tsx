'use client';

import { useRef, useState, MouseEvent } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { CalendarDays, MapPin } from 'lucide-react';

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
    const yMoon = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
    const yText = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    // Mouse tilt
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const spring = { damping: 25, stiffness: 180, mass: 0.5 };
    const rotX = useSpring(tilt.y, spring);
    const rotY = useSpring(tilt.x, spring);

    const onMove = (e: MouseEvent<HTMLDivElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) / r.width * 8;
        const y = (e.clientY - r.top - r.height / 2) / r.height * -8;
        setTilt({ x, y });
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full flex flex-col items-center justify-center overflow-hidden"
            style={{ minHeight: '100svh', background: '#F6F1E8' }}
        >
            {/* Subtle geometric pattern */}
            <div className="absolute inset-0 pattern-overlay opacity-50 pointer-events-none" />

            {/* Soft radial glow — behind hero text */}
            <motion.div
                className="absolute pointer-events-none"
                style={{ top: '15%', left: '50%', x: '-50%', y: yBg }}
            >
                <div
                    style={{
                        width: 700, height: 400,
                        background: 'radial-gradient(ellipse at center, rgba(198,167,94,0.14) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />
            </motion.div>

            {/* Crescent moon parallax */}
            <motion.div
                className="absolute pointer-events-none"
                style={{ top: '8%', right: '8%', y: yMoon, opacity }}
            >
                <motion.div
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <div
                        style={{
                            width: 72, height: 72, borderRadius: '50%',
                            border: '7px solid rgba(198,167,94,0.55)',
                            clipPath: 'circle(50% at 70% 50%)',
                            boxShadow: '0 0 24px rgba(198,167,94,0.35)',
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Floating lanterns */}
            {([
                { t: '15%', l: '5%', w: 16, h: 26, d: 0 },
                { t: '40%', l: '3%', w: 12, h: 20, d: 1.2 },
                { t: '20%', r: '5%', w: 18, h: 28, d: 0.6 },
                { t: '50%', r: '4%', w: 13, h: 21, d: 1.8 },
            ] as { t: string; l?: string; r?: string; w: number; h: number; d: number }[]).map((l, i) => (
                <motion.div
                    key={i}
                    className="absolute pointer-events-none"
                    style={{
                        top: l.t, left: l.l, right: l.r,
                        width: l.w, height: l.h,
                        background: 'linear-gradient(to bottom, rgba(198,167,94,0.4), rgba(198,167,94,0.15))',
                        borderRadius: '4px 4px 40% 40%',
                        filter: 'blur(2px)',
                    }}
                    animate={{ y: [0, -12, 0], rotate: [-4, 4, -4] }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: l.d }}
                />
            ))}

            {/* Mosque silhouette — light version */}
            <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ height: '45vh' }}>
                <svg viewBox="0 0 1200 280" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full" style={{ opacity: 0.06 }}>
                    <path
                        d="M0,280 L0,200 Q80,200 120,240 T240,180 T360,230 T480,100 Q520,50 560,90 Q600,50 640,100 T760,230 T880,180 T1000,240 T1120,200 L1200,200 L1200,280 Z"
                        fill="#1F4D3A"
                    />
                    <path d="M510,140 Q535,70 560,90 Q585,70 610,140 Z" fill="#1F4D3A" />
                    <rect x="540" y="138" width="40" height="142" fill="#1F4D3A" />
                    <rect x="300" y="170" width="12" height="110" fill="#1F4D3A" />
                    <rect x="888" y="170" width="12" height="110" fill="#1F4D3A" />
                </svg>
                {/* Gradient fade at bottom */}
                <div
                    className="absolute bottom-0 left-0 w-full"
                    style={{
                        height: '100%',
                        background: 'linear-gradient(to top, #F6F1E8 20%, transparent 100%)',
                    }}
                />
            </div>

            {/* Main content */}
            <motion.div
                className="relative z-10 flex flex-col items-center px-6 max-w-4xl mx-auto text-center"
                style={{ y: yText, opacity, marginTop: '-8vh' }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                >
                    {/* Eyebrow */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="divider-gold w-10" />
                        <span
                            className="text-xs tracking-[0.3em] uppercase"
                            style={{ color: '#C6A75E' }}
                        >
                            Ramadhan 1447 H
                        </span>
                        <div className="divider-gold w-10" />
                    </div>

                    <h2
                        className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-[-0.01em] mb-6"
                    >
                        <span style={{ color: '#2C2C2C' }}>Ramadhan </span>
                        <span className="text-gold-gradient-animate">Kareem</span>
                    </h2>

                    <p
                        className="font-sans font-light text-lg md:text-xl max-w-xl mx-auto mb-16 leading-relaxed"
                        style={{ color: '#888888' }}
                    >
                        Mari bersilaturahmi dalam keindahan kebersamaan
                        <br className="hidden md:block" /> di bulan penuh berkah ini.
                    </p>
                </motion.div>

                {/* 3D Tilt Card */}
                <motion.div
                    onMouseMove={onMove}
                    onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                    style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d', perspective: '1000px' }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full max-w-md"
                >
                    <Card variant="glass" className="w-full px-10 py-10 flex flex-col gap-6 items-center relative overflow-hidden">
                        {/* Shimmer sweep */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none"
                            style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.55) 50%, transparent 60%)' }}
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
                        />

                        <div className="flex flex-col items-center gap-2 w-full" style={{ transform: 'translateZ(20px)' }}>
                            <CalendarDays className="w-7 h-7 mb-1" style={{ color: '#C6A75E' }} />
                            <h3 className="font-serif text-2xl" style={{ color: '#2C2C2C' }}>Rabu, 18 Maret 2026</h3>
                            <p className="text-sm" style={{ color: '#888888' }}>17:00 WIB – Selesai</p>
                        </div>

                        <div className="divider-gold w-full" />

                        <div className="flex flex-col items-center gap-2 w-full" style={{ transform: 'translateZ(20px)' }}>
                            <MapPin className="w-7 h-7 mb-1" style={{ color: '#C6A75E' }} />
                            <h3 className="font-serif text-2xl" style={{ color: '#2C2C2C' }}>Indekos Pojok D&apos;Wiga</h3>
                            <p className="text-sm" style={{ color: '#888888' }}>Lihat di Google Maps</p>
                        </div>

                        <div
                            className="w-full pt-5 text-center"
                            style={{ borderTop: '1px solid rgba(198,167,94,0.25)', transform: 'translateZ(20px)' }}
                        >
                            <p className="text-xs tracking-[0.25em] uppercase font-medium mb-1" style={{ color: '#C6A75E' }}>
                                Dresscode
                            </p>
                            <p className="font-serif text-base" style={{ color: '#2C2C2C' }}>
                                Modest Elegant · White &amp; Emerald
                            </p>
                        </div>
                    </Card>
                </motion.div>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 1 }}
            >
                <span className="text-[10px] tracking-[0.35em] uppercase" style={{ color: 'rgba(198,167,94,0.7)' }}>
                    Scroll
                </span>
                <motion.div
                    className="w-px h-12"
                    style={{ background: 'linear-gradient(to bottom, rgba(198,167,94,0.6), transparent)' }}
                    animate={{ scaleY: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
            </motion.div>
        </section>
    );
}
