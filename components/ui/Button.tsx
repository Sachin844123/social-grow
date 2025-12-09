'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
// import { Loader2 } from 'lucide-react';

interface ButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {

        const variants = {
            primary: "platinum-gradient text-deep hover:shadow-[0_0_20px_rgba(32,201,151,0.4)] border border-transparent",
            ghost: "bg-transparent text-polar hover:text-teal-400 border border-transparent",
            outline: "bg-transparent border border-platinum/20 text-polar hover:border-teal-400 hover:text-teal-400"
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg"
        };

        return (
            <motion.button
                ref={ref as any}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={isLoading}
                {...props}
            >
                {isLoading && <span className="mr-2 h-4 w-4 animate-spin border-2 border-current border-t-transparent rounded-full" />}
                {children as React.ReactNode}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
