'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Map, CalendarPlus, MessageCircle } from 'lucide-react';

const TARGET_DATE = new Date('2026-03-18T17:00:00+07:00').getTime();

export function EventDetails() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const diff = TARGET_DATE - Date.now();
            if (diff > 0) {
                setTimeLeft({
                    days: Math.floor(diff / 86400000),
                    hours: Math.floor((diff % 86400000) / 3600000),
                    minutes: Math.floor((diff % 3600000) / 60000),
                    seconds: Math.floor((diff % 60000) / 1000),
                });
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const blocks = [
        { label: 'Hari', value: timeLeft.days },
        { label: 'Jam', value: timeLeft.hours },
        { label: 'Menit', value: timeLeft.minutes },
        { label: 'Detik', value: timeLeft.seconds },
    ];

    return (
        <SectionWrapper
            id="details"
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
                {/* Section header */}
                <div className="text-center mb-10 md:mb-20">
                    <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#C6A75E' }}>
                        Informasi Acara
                    </p>
                    <h2
                        className="font-serif text-4xl md:text-5xl tracking-tight mb-5"
                        style={{ color: '#2C2C2C' }}
                    >
                        Event Details
                    </h2>
                    <div className="divider-gold w-20 mx-auto" />
                </div>

                {/* Shimmer divider sweep effect */}
                <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
                    <div className="divider-gold w-full absolute" />
                    <motion.div
                        className="absolute top-0 w-1/3 h-full"
                        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent)' }}
                        animate={{ x: ['-100%', '400%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Countdown */}
                    <Card variant="elevated" className="flex flex-col items-center p-6 md:p-10 text-center">
                        <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: '#C6A75E' }}>Hitung Mundur</p>
                        <h3 className="font-serif text-2xl mb-5 md:mb-10" style={{ color: '#2C2C2C' }}>
                            Menuju 18 Maret 2026
                        </h3>

                        <div className="flex gap-3 sm:gap-5 justify-center w-full mb-5 md:mb-10">
                            {blocks.map((block, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div
                                        className="relative flex items-center justify-center rounded-xl mb-3 overflow-hidden w-16 h-20 sm:w-20 sm:h-24"
                                        style={{
                                            background: 'rgba(198,167,94,0.07)',
                                            border: '1px solid rgba(198,167,94,0.3)',
                                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
                                        }}
                                    >
                                        <AnimatePresence mode="popLayout">
                                            <motion.span
                                                key={block.value}
                                                initial={{ y: 18, opacity: 0, scale: 0.85 }}
                                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                                exit={{ y: -18, opacity: 0, scale: 0.85 }}
                                                transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                                                className="font-serif text-3xl sm:text-5xl absolute"
                                                style={{ color: '#2C2C2C' }}
                                            >
                                                {block.value.toString().padStart(2, '0')}
                                            </motion.span>
                                        </AnimatePresence>
                                    </div>
                                    <span className="text-[10px] uppercase tracking-widest" style={{ color: '#C6A75E' }}>
                                        {block.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <Button variant="outline" className="gap-2 border-[#1F4D3A] text-[#1F4D3A] w-full max-w-xs">
                            <CalendarPlus className="w-4 h-4" /> Add to Calendar
                        </Button>
                    </Card>

                    {/* Location */}
                    <Card variant="elevated" className="flex flex-col items-center p-6 md:p-10 text-center">
                        <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: '#C6A75E' }}>Tempat Acara</p>
                        <h3 className="font-serif text-2xl mb-2" style={{ color: '#2C2C2C' }}>
                            Indekos Pojok D&apos;Wiga
                        </h3>
                        <p className="text-sm mb-6 max-w-xs leading-relaxed" style={{ color: '#888888' }}>
                            Rabu, 18 Maret 2026 &middot; 17:00 WIB
                        </p>

                        {/* Real Google Maps embed */}
                        <div
                            className="w-full rounded-xl mb-6 overflow-hidden"
                            style={{
                                height: '220px',
                                border: '1px solid rgba(198,167,94,0.3)',
                            }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426.5032934587493!2d112.6270166554503!3d-7.931498610201894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629924f28746b%3A0x7de554264e93226!2sIndekos%20Pojok%20D&#39;Wiga!5e0!3m2!1sid!2sid!4v1772627393614!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Indekos Pojok D'Wiga"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                            <Button
                                variant="primary"
                                className="gap-2 flex-1 max-w-[180px]"
                                onClick={() => window.open('https://maps.app.goo.gl/ZVtAv8tfLyre1wc66', '_blank')}
                            >
                                <Map className="w-4 h-4" /> Buka Peta
                            </Button>
                            <Button
                                variant="outline"
                                className="gap-2 flex-1 max-w-[180px]"
                                style={{ borderColor: '#1F4D3A', color: '#1F4D3A' }}
                            >
                                <MessageCircle className="w-4 h-4" /> Konfirmasi WA
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </SectionWrapper>
    );
}
