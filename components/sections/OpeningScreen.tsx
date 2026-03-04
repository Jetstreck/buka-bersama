'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

interface OpeningScreenProps {
    onOpen: () => void;
}

export function OpeningScreen({ onOpen }: OpeningScreenProps) {
    const [phase, setPhase] = useState<'idle' | 'opening' | 'done'>('idle');

    const handleOpen = () => {
        setPhase('opening');
        setTimeout(() => onOpen(), 2000);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex flex-col items-center justify-start overflow-hidden select-none"
            style={{ background: '#F6F1E8' }}
        >
            {/* ── Islamic geometric background pattern ── */}
            <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04 }}>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="geom" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                            {/* 8-pointed star base */}
                            <polygon
                                points="40,4 48,28 72,28 52,44 60,68 40,54 20,68 28,44 8,28 32,28"
                                fill="none" stroke="#C6A75E" strokeWidth="0.8"
                            />
                            {/* Diamond */}
                            <polygon points="40,14 54,40 40,66 26,40" fill="none" stroke="#C6A75E" strokeWidth="0.5" />
                            {/* Center circle */}
                            <circle cx="40" cy="40" r="7" fill="none" stroke="#C6A75E" strokeWidth="0.6" />
                            {/* Corner dots */}
                            <circle cx="0" cy="0" r="1.5" fill="#C6A75E" />
                            <circle cx="80" cy="0" r="1.5" fill="#C6A75E" />
                            <circle cx="0" cy="80" r="1.5" fill="#C6A75E" />
                            <circle cx="80" cy="80" r="1.5" fill="#C6A75E" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#geom)" />
                </svg>
            </div>

            {/* ── Soft radial glow ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 70% 55% at 50% 48%, rgba(198,167,94,0.1) 0%, transparent 70%)',
                }}
            />

            {/* ── Golden light flash during opening ── */}
            <AnimatePresence>
                {phase === 'opening' && (
                    <motion.div
                        key="light"
                        className="absolute inset-0 pointer-events-none z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.65, 0] }}
                        transition={{ duration: 1.8, times: [0, 0.5, 1], ease: 'easeInOut' }}
                        style={{
                            background:
                                'radial-gradient(ellipse 50% 60% at 50% 55%, rgba(255,240,180,0.95) 0%, rgba(198,167,94,0.4) 40%, transparent 70%)',
                        }}
                    />
                )}
            </AnimatePresence>

            {/* ── Main content wrapper (zoom out on open) ── */}
            <motion.div
                className="relative z-10 w-full flex flex-col items-center"
                animate={
                    phase === 'opening'
                        ? { scale: 1.05, opacity: 0 }
                        : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
            >
                {/* ─────────────────────────────────────────
            TOP TEXT HIERARCHY
        ───────────────────────────────────────── */}
                <div className="flex flex-col items-center text-center mt-10 md:mt-14 px-6">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="flex items-center gap-3 mb-5"
                    >
                        <div className="h-px w-10" style={{ background: 'rgba(198,167,94,0.6)' }} />
                        <span
                            className="text-[10px] md:text-xs tracking-[0.35em] uppercase font-medium"
                            style={{ color: '#C6A75E' }}
                        >
                            You Are Invited
                        </span>
                        <div className="h-px w-10" style={{ background: 'rgba(198,167,94,0.6)' }} />
                    </motion.div>

                    {/* Main headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                        className="font-serif font-bold leading-[1.05] tracking-[-0.01em]"
                        style={{
                            fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
                            background: 'linear-gradient(135deg, #8A6D32 0%, #C6A75E 40%, #E8D49A 60%, #C6A75E 80%, #8A6D32 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            backgroundSize: '200% auto',
                            paddingBottom: '0.15em',
                            lineHeight: '1.2',
                        }}
                    >
                        Undangan Buka Bersama
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="font-sans font-light mt-3 tracking-[0.18em]"
                        style={{ fontSize: 'clamp(0.75rem, 2vw, 1rem)', color: '#888888' }}
                    >
                        Ramadhan 1447 H
                    </motion.p>
                </div>

                {/* ─────────────────────────────────────────
            MOSQUE GATE SVG
        ───────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
                    className="relative mt-8 md:mt-10 mx-auto"
                    style={{ width: 'min(380px, 90vw)' }}
                >
                    {/* Warm glow behind gate */}
                    <div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                            top: '10%', left: '10%', right: '10%', bottom: '5%',
                            background: 'radial-gradient(ellipse at center, rgba(255,240,180,0.35) 0%, transparent 70%)',
                            filter: 'blur(18px)',
                        }}
                    />

                    {/* Gate SVG */}
                    <svg
                        viewBox="0 0 380 480"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-auto drop-shadow-[0_8px_30px_rgba(198,167,94,0.18)]"
                    >
                        <defs>
                            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#8A6D32" />
                                <stop offset="40%" stopColor="#C6A75E" />
                                <stop offset="60%" stopColor="#E8D49A" />
                                <stop offset="100%" stopColor="#8A6D32" />
                            </linearGradient>
                            <linearGradient id="doorGradL" x1="100%" y1="0%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="#EDE5D4" />
                                <stop offset="100%" stopColor="#F6F1E8" />
                            </linearGradient>
                            <linearGradient id="doorGradR" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#EDE5D4" />
                                <stop offset="100%" stopColor="#F6F1E8" />
                            </linearGradient>
                            <linearGradient id="glowInside" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="rgba(255,240,180,0.5)" />
                                <stop offset="100%" stopColor="rgba(198,167,94,0.1)" />
                            </linearGradient>
                        </defs>

                        {/* ── Outer arch frame ── */}
                        {/* Main pillars */}
                        <rect x="30" y="160" width="38" height="310" rx="2" fill="url(#goldGrad)" opacity="0.9" />
                        <rect x="312" y="160" width="38" height="310" rx="2" fill="url(#goldGrad)" opacity="0.9" />

                        {/* Base platform */}
                        <rect x="28" y="460" width="324" height="12" rx="3" fill="url(#goldGrad)" opacity="0.85" />

                        {/* Outer arch path */}
                        <path
                            d="M30,250 Q30,90 190,60 Q350,90 350,250"
                            fill="none"
                            stroke="url(#goldGrad)"
                            strokeWidth="3"
                        />

                        {/* Inner arch (frame) */}
                        <path
                            d="M55,260 Q55,115 190,88 Q325,115 325,260"
                            fill="none"
                            stroke="url(#goldGrad)"
                            strokeWidth="1.5"
                            opacity="0.7"
                        />

                        {/* ── Decorative Arch Keystone ── */}
                        {/* Top Finial */}
                        <ellipse cx="190" cy="56" rx="12" ry="16" fill="none" stroke="url(#goldGrad)" strokeWidth="2" />
                        <line x1="190" y1="40" x2="190" y2="32" stroke="url(#goldGrad)" strokeWidth="2" />
                        <circle cx="190" cy="28" r="5" fill="url(#goldGrad)" />

                        {/* 8-pointed star at keystone */}
                        <g transform="translate(190, 70)">
                            {[0, 45, 90, 135].map((angle, i) => (
                                <line
                                    key={i}
                                    x1="0" y1="-10" x2="0" y2="10"
                                    stroke="url(#goldGrad)"
                                    strokeWidth="1.5"
                                    transform={`rotate(${angle})`}
                                    opacity="0.8"
                                />
                            ))}
                            <circle cx="0" cy="0" r="4" fill="none" stroke="url(#goldGrad)" strokeWidth="1.2" />
                        </g>

                        {/* Muqarnas-style decorative border at arch apex */}
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => {
                            const angle = -85 + i * 12;
                            const rad = angle * Math.PI / 180;
                            const r1 = 143, r2 = 134;
                            const cx = 190 + r1 * Math.cos(rad);
                            const cy = 165 + r1 * Math.sin(rad);
                            const dx = 5 * Math.cos(rad);
                            const dy = 5 * Math.sin(rad);
                            return (
                                <rect
                                    key={i}
                                    x={cx - 4} y={cy - 4 + (r2 - r1) * Math.sin(rad)}
                                    width="8" height="6" rx="1"
                                    fill="url(#goldGrad)"
                                    opacity="0.5"
                                    transform={`rotate(${angle + 90}, ${cx}, ${cy})`}
                                />
                            );
                        })}

                        {/* Side column capitals */}
                        {/* Left */}
                        <rect x="26" y="148" width="42" height="14" rx="3" fill="url(#goldGrad)" opacity="0.8" />
                        <rect x="22" y="155" width="50" height="6" rx="2" fill="url(#goldGrad)" opacity="0.6" />
                        {/* Right */}
                        <rect x="312" y="148" width="42" height="14" rx="3" fill="url(#goldGrad)" opacity="0.8" />
                        <rect x="308" y="155" width="50" height="6" rx="2" fill="url(#goldGrad)" opacity="0.6" />

                        {/* Horizontal ornamental band */}
                        <line x1="30" y1="200" x2="68" y2="200" stroke="url(#goldGrad)" strokeWidth="1.2" opacity="0.5" />
                        <line x1="312" y1="200" x2="350" y2="200" stroke="url(#goldGrad)" strokeWidth="1.2" opacity="0.5" />
                        <line x1="30" y1="220" x2="65" y2="220" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.4" />
                        <line x1="315" y1="220" x2="350" y2="220" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.4" />

                        {/* Warm interior glow (inside the arch) */}
                        <path
                            d="M68,460 L68,260 Q68,104 190,80 Q312,104 312,260 L312,460 Z"
                            fill="url(#glowInside)"
                            opacity="0.5"
                        />

                        {/* ══════════════════════════════
                LEFT DOOR PANEL
            ══════════════════════════════ */}
                        <motion.g
                            animate={phase === 'opening' ? { translateX: -145 } : { translateX: 0 }}
                            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1], delay: 0.1 }}
                        >
                            {/* Door panel fill */}
                            <path
                                d="M72,460 L72,264 Q72,120 188,96 L188,460 Z"
                                fill="url(#doorGradL)"
                                stroke="url(#goldGrad)"
                                strokeWidth="1.2"
                            />

                            {/* Door panel inset frame */}
                            <path
                                d="M82,450 L82,270 Q82,138 186,116 L186,450 Z"
                                fill="none"
                                stroke="url(#goldGrad)"
                                strokeWidth="0.8"
                                opacity="0.5"
                            />
                            <path
                                d="M92,440 L92,276 Q92,154 185,135 L185,440 Z"
                                fill="none"
                                stroke="url(#goldGrad)"
                                strokeWidth="0.5"
                                opacity="0.35"
                            />

                            {/* Geometric panel decoration — upper */}
                            <g opacity="0.55">
                                {/* Small arch inset at top of door */}
                                <path
                                    d="M105,300 Q105,215 150,200 L150,300 Z"
                                    fill="none"
                                    stroke="url(#goldGrad)"
                                    strokeWidth="0.8"
                                />
                                {/* Diamond pattern */}
                                <polygon points="130,230 148,250 130,270 112,250" fill="none" stroke="url(#goldGrad)" strokeWidth="0.7" />
                                {/* Center dot */}
                                <circle cx="130" cy="250" r="2.5" fill="url(#goldGrad)" />

                                {/* Horizontal rail lines */}
                                <line x1="88" y1="310" x2="183" y2="310" stroke="url(#goldGrad)" strokeWidth="0.8" />
                                <line x1="88" y1="318" x2="183" y2="318" stroke="url(#goldGrad)" strokeWidth="0.4" opacity="0.6" />

                                {/* Lower panel diamond */}
                                <polygon points="130,360 155,385 130,410 105,385" fill="none" stroke="url(#goldGrad)" strokeWidth="0.7" />
                                <circle cx="130" cy="385" r="2.5" fill="url(#goldGrad)" />

                                {/* Small decorative squares */}
                                <rect x="96" y="328" width="8" height="8" rx="1" fill="none" stroke="url(#goldGrad)" strokeWidth="0.6" transform="rotate(45,100,332)" />
                                <rect x="163" y="328" width="8" height="8" rx="1" fill="none" stroke="url(#goldGrad)" strokeWidth="0.6" transform="rotate(45,167,332)" />
                            </g>

                            {/* Door knob / handle */}
                            <circle cx="178" cy="382" r="4.5" fill="url(#goldGrad)" opacity="0.9" />
                            <circle cx="178" cy="382" r="2.5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
                        </motion.g>

                        {/* ══════════════════════════════
                RIGHT DOOR PANEL
            ══════════════════════════════ */}
                        <motion.g
                            animate={phase === 'opening' ? { translateX: 145 } : { translateX: 0 }}
                            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1], delay: 0.1 }}
                        >
                            {/* Door panel fill */}
                            <path
                                d="M192,460 L192,96 Q308,120 308,264 L308,460 Z"
                                fill="url(#doorGradR)"
                                stroke="url(#goldGrad)"
                                strokeWidth="1.2"
                            />

                            {/* Door panel inset frame */}
                            <path
                                d="M194,450 Q298,138 298,270 L298,450 Z"
                                fill="none"
                                stroke="url(#goldGrad)"
                                strokeWidth="0.8"
                                opacity="0.5"
                            />
                            <path
                                d="M195,440 Q288,154 288,276 L288,440 Z"
                                fill="none"
                                stroke="url(#goldGrad)"
                                strokeWidth="0.5"
                                opacity="0.35"
                            />

                            {/* Geometric panel decoration — upper */}
                            <g opacity="0.55">
                                {/* Small arch inset */}
                                <path
                                    d="M230,300 Q230,215 275,200 L275,300 Z"
                                    fill="none"
                                    stroke="url(#goldGrad)"
                                    strokeWidth="0.8"
                                />
                                {/* Diamond */}
                                <polygon points="250,230 268,250 250,270 232,250" fill="none" stroke="url(#goldGrad)" strokeWidth="0.7" />
                                <circle cx="250" cy="250" r="2.5" fill="url(#goldGrad)" />

                                {/* Rails */}
                                <line x1="197" y1="310" x2="292" y2="310" stroke="url(#goldGrad)" strokeWidth="0.8" />
                                <line x1="197" y1="318" x2="292" y2="318" stroke="url(#goldGrad)" strokeWidth="0.4" opacity="0.6" />

                                {/* Lower diamond */}
                                <polygon points="250,360 275,385 250,410 225,385" fill="none" stroke="url(#goldGrad)" strokeWidth="0.7" />
                                <circle cx="250" cy="385" r="2.5" fill="url(#goldGrad)" />

                                {/* Corner squares */}
                                <rect x="205" y="328" width="8" height="8" rx="1" fill="none" stroke="url(#goldGrad)" strokeWidth="0.6" transform="rotate(45,209,332)" />
                                <rect x="272" y="328" width="8" height="8" rx="1" fill="none" stroke="url(#goldGrad)" strokeWidth="0.6" transform="rotate(45,276,332)" />
                            </g>

                            {/* Door knob */}
                            <circle cx="202" cy="382" r="4.5" fill="url(#goldGrad)" opacity="0.9" />
                            <circle cx="202" cy="382" r="2.5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
                        </motion.g>

                        {/* ── Center split line (hidden behind doors, reveals when open) ── */}
                        <line x1="190" y1="96" x2="190" y2="460" stroke="url(#goldGrad)" strokeWidth="0.6" opacity="0.3" />
                    </svg>
                </motion.div>

                {/* ─────────────────────────────────────────
            GUEST NAME + BUTTON
        ───────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="flex flex-col items-center text-center mt-7 mb-10 px-6 gap-6"
                >
                    {/* Guest Name card */}
                    <div
                        className="px-10 py-4 rounded-2xl text-center"
                        style={{
                            background: 'rgba(198,167,94,0.07)',
                            border: '1px solid rgba(198,167,94,0.3)',
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
                        }}
                    >
                        <p
                            className="text-[10px] tracking-[0.28em] uppercase mb-1.5"
                            style={{ color: '#C6A75E' }}
                        >
                            Kepada Yth.
                        </p>
                        <p
                            className="font-serif text-xl md:text-2xl italic"
                            style={{ color: '#2C2C2C' }}
                        >
                            Anggota KBR Club
                        </p>
                    </div>

                    {/* CTA Button */}
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Button
                            variant="primary"
                            onClick={handleOpen}
                            className="px-12 py-4 text-[13px] tracking-[0.12em]"
                            disabled={phase !== 'idle'}
                        >
                            {phase === 'idle' ? 'Buka Undangan' : 'Membuka…'}
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
