'use client';

import { motion } from 'framer-motion';
import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export function SectionWrapper({
    children,
    className,
    id,
    delay = 0,
    ...rest
}: SectionWrapperProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay,
            }}
            className={cn(
                'relative w-full py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col',
                className
            )}
            {...(rest as object)}
        >
            {children}
        </motion.section>
    );
}
