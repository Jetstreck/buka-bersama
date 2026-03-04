'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function ClosingSection() {
    return (
        <SectionWrapper
            id="rsvp"
            className="pt-20 pb-28"
        >
            <div
                className="w-full rounded-3xl px-8 md:px-16 py-16"
                style={{
                    background: 'rgba(250,248,243,0.85)',
                    border: '1px solid rgba(198,167,94,0.28)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9), 0 4px 40px rgba(198,167,94,0.08)',
                }}
            >
                {/* Gold divider with shimmer */}
                <div className="relative w-full max-w-2xl mx-auto overflow-hidden mb-20">
                    <div className="divider-gold w-full" />
                    <motion.div
                        className="absolute top-0 w-1/4 h-full"
                        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.9), transparent)' }}
                        animate={{ x: ['-100%', '400%'] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
                    />
                </div>

                <div className="text-center mb-16 px-4">
                    <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#C6A75E' }}>
                        Konfirmasi Kehadiran
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6" style={{ color: '#2C2C2C' }}>
                        Kehadiran Anda Merupakan
                        <br className="hidden md:block" /> Kehormatan Bagi Kami
                    </h2>
                    <p className="font-light text-base max-w-md mx-auto leading-relaxed" style={{ color: '#888888' }}>
                        Mohon konfirmasi kehadiran Anda sebelum tanggal 15 Maret 2026.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full max-w-lg mx-auto"
                >
                    <Card variant="elevated" className="p-10 md:p-12 relative overflow-hidden">
                        {/* Corner ornaments */}
                        {(['tl', 'tr', 'bl', 'br'] as const).map((c) => (
                            <div
                                key={c}
                                className="absolute m-5 pointer-events-none"
                                style={{
                                    width: 18, height: 18,
                                    top: c[0] === 't' ? 0 : 'auto',
                                    bottom: c[0] === 'b' ? 0 : 'auto',
                                    left: c[1] === 'l' ? 0 : 'auto',
                                    right: c[1] === 'r' ? 0 : 'auto',
                                    borderTop: c[0] === 't' ? '1.5px solid rgba(198,167,94,0.6)' : 'none',
                                    borderBottom: c[0] === 'b' ? '1.5px solid rgba(198,167,94,0.6)' : 'none',
                                    borderLeft: c[1] === 'l' ? '1.5px solid rgba(198,167,94,0.6)' : 'none',
                                    borderRight: c[1] === 'r' ? '1.5px solid rgba(198,167,94,0.6)' : 'none',
                                }}
                            />
                        ))}

                        <h3
                            className="font-serif text-2xl text-center mb-8 tracking-tight"
                            style={{ color: '#2C2C2C' }}
                        >
                            RSVP Online
                        </h3>

                        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            {/* Name */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="name" className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#888888' }}>
                                    Nama Lengkap
                                </label>
                                <input
                                    id="name" type="text"
                                    placeholder="Masukkan nama Anda"
                                    className="w-full rounded-xl px-4 py-3 text-sm transition-all duration-300"
                                    style={{
                                        background: 'rgba(198,167,94,0.06)',
                                        border: '1px solid rgba(198,167,94,0.3)',
                                        color: '#2C2C2C',
                                        outline: 'none',
                                    }}
                                    onFocus={(e) => { e.target.style.borderColor = '#C6A75E'; e.target.style.boxShadow = '0 0 0 3px rgba(198,167,94,0.12)'; }}
                                    onBlur={(e) => { e.target.style.borderColor = 'rgba(198,167,94,0.3)'; e.target.style.boxShadow = 'none'; }}
                                />
                            </div>

                            {/* Attendance */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="attendance" className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#888888' }}>
                                    Jumlah Kehadiran
                                </label>
                                <select
                                    id="attendance"
                                    className="w-full rounded-xl px-4 py-3 text-sm appearance-none transition-all duration-300"
                                    style={{
                                        background: 'rgba(198,167,94,0.06)',
                                        border: '1px solid rgba(198,167,94,0.3)',
                                        color: '#2C2C2C',
                                        outline: 'none',
                                    }}
                                >
                                    <option value="1">1 Orang</option>
                                    <option value="2">2 Orang</option>
                                    <option value="3">3 Orang</option>
                                    <option value="0">Maaf, Tidak Bisa Hadir</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="message" className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: '#888888' }}>
                                    Pesan &amp; Doa (Opsional)
                                </label>
                                <textarea
                                    id="message" rows={3}
                                    placeholder="Tuliskan doa dan ucapan Anda..."
                                    className="w-full rounded-xl px-4 py-3 text-sm resize-none transition-all duration-300"
                                    style={{
                                        background: 'rgba(198,167,94,0.06)',
                                        border: '1px solid rgba(198,167,94,0.3)',
                                        color: '#2C2C2C',
                                        outline: 'none',
                                    }}
                                    onFocus={(e) => { e.target.style.borderColor = '#C6A75E'; e.target.style.boxShadow = '0 0 0 3px rgba(198,167,94,0.12)'; }}
                                    onBlur={(e) => { e.target.style.borderColor = 'rgba(198,167,94,0.3)'; e.target.style.boxShadow = 'none'; }}
                                />
                            </div>

                            <Button type="submit" variant="primary" className="mt-3 w-full py-4 text-base">
                                Kirim Konfirmasi
                            </Button>
                        </form>
                    </Card>
                </motion.div>

                {/* Footer closing */}
                <div className="mt-24 text-center px-4">
                    <div className="divider-gold w-16 mx-auto mb-8" />
                    <p className="font-serif text-xl italic mb-3" style={{ color: '#2C2C2C' }}>
                        Barakallahu lana wa lakum
                    </p>
                    <p className="font-sans text-xs tracking-[0.2em] uppercase" style={{ color: '#C6A75E' }}>
                        Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
