'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';

const images = [
    { id: 1, title: 'Kebersamaan', bg: 'rgba(198,167,94,0.12)', accent: '#C6A75E' },
    { id: 2, title: 'Silaturahmi', bg: 'rgba(31,77,58,0.1)', accent: '#1F4D3A' },
    { id: 3, title: 'Kehangatan', bg: 'rgba(198,167,94,0.1)', accent: '#C6A75E' },
    { id: 4, title: 'Keberkahan', bg: 'rgba(31,77,58,0.08)', accent: '#1F4D3A' },
];

export function GallerySection() {
    return (
        <SectionWrapper id="gallery" className="pt-28 pb-28">
            <div className="text-center mb-16">
                <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#C6A75E' }}>
                    Galeri
                </p>
                <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-5" style={{ color: '#2C2C2C' }}>
                    Momen Indah
                </h2>
                <div className="divider-gold w-20 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {images.map((image, i) => (
                    <motion.div
                        key={image.id}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 1, 0.5, 1] }}
                        className="group relative rounded-2xl overflow-hidden cursor-pointer"
                        style={{
                            height: 320,
                            border: '1px solid rgba(198,167,94,0.3)',
                            boxShadow: '0 4px 20px rgba(198,167,94,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
                            background: '#FAF8F3',
                            transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                        }}
                        whileHover={{
                            y: -6,
                            boxShadow: '0 16px 48px rgba(198,167,94,0.22), inset 0 1px 0 rgba(255,255,255,0.9)',
                        }}
                    >
                        {/* Hover — gold inner border */}
                        <motion.div
                            className="absolute inset-0 rounded-2xl z-20 pointer-events-none"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            style={{ border: '4px solid rgba(198,167,94,0.35)', boxShadow: 'inset 0 0 20px rgba(198,167,94,0.08)' }}
                        />

                        {/* Image placeholder */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ background: image.bg }}
                            whileHover={{ scale: 1.06 }}
                            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                        >
                            {/* Subtle Islamic star pattern */}
                            <div className="absolute inset-0 pattern-overlay opacity-30" />
                            <span
                                className="font-serif text-3xl z-10"
                                style={{ color: image.accent, opacity: 0.25 }}
                            >
                                ✦
                            </span>
                        </motion.div>

                        {/* Gradient bottom overlay */}
                        <div
                            className="absolute inset-0 z-10"
                            style={{
                                background: 'linear-gradient(to top, rgba(246,241,232,0.95) 0%, transparent 55%)',
                            }}
                        />

                        {/* Text */}
                        <div className="absolute bottom-0 left-0 w-full p-6 z-30">
                            <motion.div
                                initial={{ y: 8 }}
                                whileHover={{ y: 0 }}
                                transition={{ duration: 0.35 }}
                            >
                                <h3
                                    className="font-serif text-lg mb-2"
                                    style={{ color: '#2C2C2C' }}
                                >
                                    {image.title}
                                </h3>
                                <motion.div
                                    className="h-px"
                                    style={{ background: '#C6A75E', opacity: 0.7 }}
                                    initial={{ width: 0 }}
                                    whileHover={{ width: 40 }}
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
