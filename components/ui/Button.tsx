import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    // Base
                    'inline-flex items-center justify-center gap-2 rounded-[999px] px-8 py-3.5',
                    'font-sans font-medium text-sm tracking-[0.1em] transition-all duration-300',
                    'cursor-pointer select-none',
                    // Primary — champagne gold gradient
                    variant === 'primary' && [
                        'text-white',
                        'hover:scale-[1.03] hover:shadow-[0_6px_28px_rgba(198,167,94,0.45)]',
                        'active:scale-[0.98]',
                    ],
                    // Outline — translucent emerald border
                    variant === 'outline' && [
                        'border border-[#1F4D3A] text-[#1F4D3A]',
                        'hover:bg-[#1F4D3A]/6 hover:scale-[1.02]',
                    ],
                    // Ghost
                    variant === 'ghost' && [
                        'text-[#C6A75E] hover:bg-[#C6A75E]/10 hover:scale-[1.02]',
                    ],
                    className
                )}
                style={{
                    ...(variant === 'primary'
                        ? {
                            background:
                                'linear-gradient(135deg, #B08C42 0%, #C6A75E 45%, #D4BA72 100%)',
                        }
                        : {}),
                }}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button };
