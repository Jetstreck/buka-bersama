'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';

const agenda = [
    { time: '17.30', event: 'Kedatangan', desc: 'Registrasi & penerimaan tamu' },
    { time: '17.45', event: 'Tausiyah', desc: 'Ceramah singkat Ramadhan' },
    { time: '18.05', event: 'Buka Puasa', desc: 'Berbuka bersama dengan khusyuk' },
    { time: '18.30', event: 'Sholat Maghrib', desc: 'Sholat berjamaah' },
    { time: '19.00', event: 'Ramah Tamah', desc: 'Makan malam & silaturahmi' },
];

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1, y: 0,
        transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
    },
};

export function AgendaSection() {
    return (
        <SectionWrapper
            id="agenda"
            className="pt-20 pb-20"
        >
            <div
                className="w-full rounded-3xl px-5 md:px-14 py-10 md:py-16"
                style={{
                    background: 'rgba(250,248,243,0.85)',
                    border: '1px solid rgba(198,167,94,0.28)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9), 0 4px 40px rgba(198,167,94,0.08)',
                }}
            >
                <div className="text-center mb-10 md:mb-20">
                    <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#C6A75E' }}>
                        Timeline
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-5" style={{ color: '#2C2C2C' }}>
                        Rangkaian Acara
                    </h2>
                    <div className="divider-gold w-20 mx-auto" />
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    className="relative max-w-5xl mx-auto w-full"
                >
                    {/* Horizontal connector line — Desktop */}
                    <div
                        className="hidden md:block absolute z-0"
                        style={{
                            top: '36px',
                            left: '10%', right: '10%',
                            height: '1px',
                            background: 'linear-gradient(to right, transparent, rgba(198,167,94,0.5), transparent)',
                        }}
                    />

                    {/* Vertical line — Mobile */}
                    <div
                        className="md:hidden absolute z-0"
                        style={{
                            top: 0, bottom: 0, left: 22,
                            width: 1,
                            background: 'linear-gradient(to bottom, transparent, rgba(198,167,94,0.4), transparent)',
                        }}
                    />

                    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10">
                        {agenda.map((entry, i) => (
                            <motion.div
                                key={i}
                                variants={item}
                                className="flex flex-row md:flex-col items-start md:items-center group"
                            >
                                {/* Dot */}
                                <div
                                    className="flex-shrink-0 w-11 h-11 md:mb-5 rounded-full flex items-center justify-center relative transition-all duration-300"
                                    style={{
                                        background: '#FAF8F3',
                                        border: '1px solid rgba(198,167,94,0.45)',
                                        boxShadow: '0 0 0 4px rgba(198,167,94,0.08)',
                                    }}
                                >
                                    <motion.div
                                        className="w-3 h-3 rounded-full"
                                        style={{ background: '#C6A75E' }}
                                        whileHover={{ scale: 1.5 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    {/* Ping */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{ border: '1px solid rgba(198,167,94,0.4)' }}
                                        animate={{ scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                                    />
                                </div>

                                {/* Text */}
                                <div className="ml-5 md:ml-0 md:text-center">
                                    <span
                                        className="font-sans font-semibold text-base block mb-0.5"
                                        style={{ color: '#C6A75E', letterSpacing: '0.04em' }}
                                    >
                                        {entry.time}
                                    </span>
                                    <h3 className="font-serif text-lg mb-1" style={{ color: '#2C2C2C' }}>
                                        {entry.event}
                                    </h3>
                                    <p className="text-xs leading-relaxed max-w-[120px] hidden md:block" style={{ color: '#AAAAAA' }}>
                                        {entry.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
