'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';

const images = [
    { id: 1, src: '/images/1.png', title: 'Kebersamaan' },
    { id: 2, src: '/images/4.png', title: 'Silaturahmi' },
    { id: 3, src: '/images/3.png', title: 'Kehangatan' },
    { id: 4, src: '/images/2.png', title: 'Keberkahan' },
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
                            height: 'clamp(220px, 55vw, 320px)',
                            border: '1px solid rgba(198,167,94,0.3)',
                            boxShadow: '0 4px 20px rgba(198,167,94,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
                            background: '#FAF8F3',
                        }}
                        whileHover={{
                            y: -6,
                            boxShadow: '0 16px 48px rgba(198,167,94,0.22), inset 0 1px 0 rgba(255,255,255,0.9)',
                        }}
                    >
                        {/* Gold inner border on hover */}
                        <motion.div
                            className="absolute inset-0 rounded-2xl z-20 pointer-events-none"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            style={{ border: '4px solid rgba(198,167,94,0.35)', boxShadow: 'inset 0 0 20px rgba(198,167,94,0.08)' }}
                        />

                        {/* Real photo with zoom on hover */}
                        <motion.div
                            className="absolute inset-0"
                            whileHover={{ scale: 1.06 }}
                            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <Image
                                src={image.src}
                                alt={image.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                        </motion.div>

                        {/* Gradient overlay — bottom fade */}
                        <div
                            className="absolute inset-0 z-10"
                            style={{
                                background: 'linear-gradient(to top, rgba(44,44,44,0.72) 0%, transparent 55%)',
                            }}
                        />

                        {/* Title text */}
                        <div className="absolute bottom-0 left-0 w-full p-6 z-30">
                            <motion.div
                                initial={{ y: 8 }}
                                whileHover={{ y: 0 }}
                                transition={{ duration: 0.35 }}
                            >
                                <h3
                                    className="font-serif text-lg mb-2"
                                    style={{ color: '#F6F1E8' }}
                                >
                                    {image.title}
                                </h3>
                                <motion.div
                                    className="h-px"
                                    style={{ background: '#C6A75E', opacity: 0.85 }}
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
