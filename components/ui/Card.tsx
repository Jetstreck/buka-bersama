import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass' | 'elevated';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-2xl transition-all duration-500',
                    variant === 'default' && 'card-luxury p-8',
                    variant === 'glass' && 'card-luxury p-8 bg-white/60',
                    variant === 'elevated' && [
                        'card-luxury p-8',
                        'hover:shadow-[0_12px_48px_rgba(198,167,94,0.18),inset_0_1px_0_rgba(255,255,255,0.9)]',
                        'hover:-translate-y-1',
                    ],
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = 'Card';

export { Card };
