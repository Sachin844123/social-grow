'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

const milestones = [
    { year: '2020', title: 'Start', desc: 'Social Grow was forged in the chaos of global lockdowns.' },
    { year: '2021', title: 'First Million', desc: 'Managed our first account to reach 1M+ followers organic.' },
    { year: '2022', title: 'Global Expansion', desc: 'Opened operations in London and New York.' },
    { year: '2023', title: 'The Algorithm', desc: 'Launched proprietary content prediction AI.' },
    { year: '2024', title: 'Market Dominance', desc: '$50M+ in client revenue generated.' },
    { year: '2025', title: 'Evolution', desc: 'Expanding into VR/AR Brand Experiences.' },
];

export function Timeline() {
    return (
        <section className="py-24 bg-charcoal/30">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-16 text-center">Our Trajectory</h2>

                <div className="relative">
                    {/* Horizontal Line */}
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent -translate-y-1/2 hidden md:block" />

                    <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
                        {milestones.map((item, i) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="flex flex-col items-center text-center md:flex-1 group"
                            >
                                <div className="w-4 h-4 rounded-full bg-deep border-2 border-gray-600 group-hover:border-teal-400 group-hover:scale-125 transition-all duration-300 md:mb-8 shadow-[0_0_10px_rgba(32,201,151,0)] group-hover:shadow-[0_0_15px_rgba(32,201,151,0.5)] z-20 relative bg-black" />

                                <div className="md:absolute md:top-1/2 md:pt-12 w-full px-2">
                                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-900 absolute -top-4 left-1/2 -translate-x-1/2 -z-10 select-none group-hover:from-teal-900 group-hover:to-transparent transition-colors duration-500">{item.year}</span>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.year} — {item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
