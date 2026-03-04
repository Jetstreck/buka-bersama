'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';

const PARTICLES = [
    { top: '18%', left: '12%', dur: 4, delay: 0 },
    { top: '35%', left: '38%', dur: 5, delay: 0.7 },
    { top: '60%', left: '65%', dur: 3.5, delay: 1.3 },
    { top: '80%', left: '25%', dur: 4.5, delay: 0.4 },
    { top: '10%', left: '75%', dur: 3, delay: 1.8 },
    { top: '45%', left: '88%', dur: 5, delay: 0.9 },
    { top: '70%', left: '50%', dur: 4, delay: 2.2 },
    { top: '25%', left: '55%', dur: 3.5, delay: 0.2 },
    { top: '55%', left: '8%', dur: 4, delay: 1.5 },
    { top: '90%', left: '80%', dur: 3, delay: 0.6 },
];

export function QuoteSection() {
    return (
        <SectionWrapper
            id="quote"
            className="pt-28 pb-28 flex items-center justify-center min-h-[55vh] relative overflow-hidden"
        >
            {/* Soft background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(198,167,94,0.1) 0%, transparent 70%)',
                }}
            />
            <div className="absolute inset-0 pattern-overlay opacity-30 pointer-events-none" />

            {/* Floating gold particles */}
            <div className="absolute inset-0 pointer-events-none">
                {PARTICLES.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{ top: p.top, left: p.left, width: 3, height: 3, background: 'rgba(198,167,94,0.5)' }}
                        animate={{ y: [0, -30, 0], opacity: [0, 0.7, 0], scale: [0, 1.4, 0] }}
                        transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                className="relative z-10 text-center max-w-3xl px-6"
            >
                {/* Calligraphy SVG accent */}
                <div className="flex items-center justify-center mb-8">
                    <svg viewBox="0 0 360 100" className="w-72 max-w-full h-24 opacity-60">
                        <path d="M30,75 Q90,35 180,60 T330,40" fill="none" stroke="#C6A75E" strokeWidth="2" strokeLinecap="round" />
                        <path d="M60,60 Q120,20 180,50 T300,25" fill="none" stroke="#C6A75E" strokeWidth="3.5" strokeLinecap="round" />
                        <circle cx="180" cy="80" r="3.5" fill="#C6A75E" />
                        <circle cx="240" cy="30" r="3" fill="#C6A75E" opacity="0.7" />
                        <circle cx="120" cy="45" r="2.5" fill="#C6A75E" opacity="0.6" />
                        <text x="180" y="98" textAnchor="middle" fill="#C6A75E" fontSize="9" letterSpacing="0.22em" opacity="0.5" fontFamily="serif" fontStyle="italic">
                            RAMADHAN KAREEM
                        </text>
                    </svg>
                </div>

                {/* Eyebrow */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="divider-gold w-8" />
                    <span className="text-xs tracking-[0.3em] uppercase" style={{ color: '#C6A75E' }}>Hadist Pilihan</span>
                    <div className="divider-gold w-8" />
                </div>

                {/* Quote */}
                <blockquote
                    className="font-serif text-2xl md:text-3xl leading-[1.55] italic mb-6 px-6 md:px-10"
                    style={{
                        color: '#2C2C2C',
                        borderLeft: '2px solid rgba(198,167,94,0.4)',
                        borderRight: '2px solid rgba(198,167,94,0.4)',
                    }}
                >
                    &quot;Barangsiapa yang berpuasa Ramadhan karena iman dan mengharap pahala, maka diampuni dosa-dosanya yang telah lalu.&quot;
                </blockquote>

                <p
                    className="font-sans text-sm tracking-[0.2em] uppercase"
                    style={{ color: '#C6A75E' }}
                >
                    — HR. Bukhari &amp; Muslim —
                </p>
            </motion.div>
        </SectionWrapper>
    );
}
