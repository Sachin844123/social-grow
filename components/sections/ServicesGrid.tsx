'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, BarChart3, Globe, PenTool, Shield, Zap } from 'lucide-react';

const services = [
    {
        title: 'Brand Architecture',
        desc: 'Comprehensive visual identity and voice development.',
        icon: Shield
    },
    {
        title: 'Content Engineering',
        desc: 'Data-backed content strategies optimized for retention.',
        icon: PenTool
    },
    {
        title: 'Growth Hacking',
        desc: 'Aggressive algorithmic exploitation for rapid scale.',
        icon: Zap
    },
    {
        title: 'Global Distribution',
        desc: 'Cross-platform syndication and localization.',
        icon: Globe
    },
    {
        title: 'Analytics & Insights',
        desc: 'Deep-dive reporting on audience sentiment and ROI.',
        icon: BarChart3
    },
    {
        title: 'Crisis Management',
        desc: 'Proactive reputation defense and narrative control.',
        icon: Shield
    },
];

export function ServicesGrid() {
    return (
        <section className="py-24 bg-deep">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <TiltCard key={i} service={service} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TiltCard({ service, index }: { service: any, index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
    const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative h-64 perspective-1000"
            onMouseMove={onMouseMove}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
            style={{ perspective: 1000 }}
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="h-full w-full bg-charcoal/50 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-teal-400/50 transition-colors group cursor-pointer shadow-xl relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col h-full justify-between" style={{ transform: "translateZ(20px)" }}>
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-teal-400 group-hover:bg-teal-400 group-hover:text-black transition-colors">
                        <service.icon size={24} />
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="text-teal-400" size={20} />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
