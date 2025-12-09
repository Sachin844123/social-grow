'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Nebula Effect */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0A0A0A] to-[#0A0A0A] opacity-80" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
            </div>

            <div className="container relative z-10 px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-widest text-transparent uppercase bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 border border-white/10 rounded-full backdrop-blur-sm">
                        The Authority in Digital Growth
                    </span>
                </motion.div>

                <motion.h1
                    className="max-w-4xl mx-auto mb-8 text-4xl font-bold tracking-tight md:text-7xl lg:text-8xl text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    We Define The <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Spotlight
                    </span>.
                </motion.h1>

                <motion.p
                    className="max-w-2xl mx-auto mb-10 text-lg text-gray-400 md:text-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Social Grow engineers hyper-growth for the world's most exclusive brands and influencers. Data-driven. Architecturally precise. Unapologetically premium.
                </motion.p>

                <motion.div
                    className="flex flex-col items-center justify-center gap-6 md:flex-row"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <Button size="lg" className="min-w-[200px] relative text-lg py-6">
                            Start Your Action
                        </Button>
                    </div>
                    <Button variant="ghost" size="lg" className="min-w-[200px] text-gray-400 hover:text-white border border-white/10 hover:border-white/30">
                        View Case Studies
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
            </motion.div>
        </section>
    );
}
