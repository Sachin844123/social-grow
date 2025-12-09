'use client';

import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Features() {
    return (
        <section className="py-32 bg-deep relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Architecture of <span className="text-gradient-platinum">Influence</span>.
                    </h2>
                    <p className="text-gray-400 text-lg">
                        We don't just manage accounts. We build digital empires using proprietary data models and cinematic storytelling.
                    </p>
                </div>

                <div className="space-y-32">
                    <FeatureCard
                        title="Algorithmic Dominance"
                        description="Our proprietary content models predict viral trends before they peak. We structure your content to exploit platform retention algorithms."
                        number="01"
                        align="left"
                    />
                    <FeatureCard
                        title="Cinematic Production"
                        description="High-fidelity visual storytelling. Our post-production team turns raw footage into thumb-stopping, premium assets."
                        number="02"
                        align="right"
                    />
                    <FeatureCard
                        title="Monetization Ecosystems"
                        description="Convert attention into equity. We build sustainable revenue pipelines through brand partnerships and digital product funnels."
                        number="03"
                        align="left"
                    />
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ title, description, number, align }: { title: string, description: string, number: string, align: 'left' | 'right' }) {
    const isRight = align === 'right';

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col md:flex-row items-center gap-12 ${isRight ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="flex-1">
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl blur opacity-30"></div>
                    <div className="relative h-[400px] w-full bg-charcoal rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center group">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/80 z-10"></div>
                        {/* Abstract Visual Placeholder */}
                        <div className={`w-32 h-32 rounded-full blur-[60px] ${isRight ? 'bg-teal-500/20' : 'bg-purple-500/20'} group-hover:scale-110 transition-transform duration-700`}></div>
                        <span className="relative z-20 text-9xl font-bold text-white/5 select-none">{number}</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-teal-400">0{number}</span>
                    <div className="h-[1px] w-12 bg-gray-800"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">{title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
                <button className="text-sm font-medium text-white hover:text-teal-400 transition-colors uppercase tracking-widest flex items-center gap-2">
                    Explore Capability
                    <span className="text-lg">→</span>
                </button>
            </div>
        </motion.div>
    );
}
