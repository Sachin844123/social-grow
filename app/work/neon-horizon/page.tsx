'use client';

import * as React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { name: 'Jan', followers: 4000 },
    { name: 'Feb', followers: 15000 },
    { name: 'Mar', followers: 45000 },
    { name: 'Apr', followers: 90000 },
    { name: 'May', followers: 140000 },
    { name: 'Jun', followers: 230000 },
    { name: 'Jul', followers: 350000 },
];

export default function CaseStudyPage() {
    return (
        <main className="min-h-screen bg-deep flex flex-col">
            <Navbar />

            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-deep z-0" />
                <div className="container relative z-10 px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-teal-400 font-mono mb-4 block">CASE STUDY: 042</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Neon Horizon</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            From 4k to 350k followers in 7 months. Visual storytelling meets algorithmic precision.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-charcoal/30">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold text-white mb-8">Audience Velocity</h2>
                            <div className="h-[400px] w-full p-6 bg-black/40 rounded-2xl border border-white/5 shadow-2xl">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={data}>
                                        <defs>
                                            <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#20C997" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#20C997" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                                        <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#181818', border: '1px solid #333', borderRadius: '8px' }}
                                            itemStyle={{ color: '#fff' }}
                                        />
                                        <Area type="monotone" dataKey="followers" stroke="#20C997" strokeWidth={3} fillOpacity={1} fill="url(#colorFollowers)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 space-y-8">
                            <StatCard label="Engagement Rate" value="12.4%" delta="+8.2%" />
                            <StatCard label="Total Impressions" value="45M+" delta="+2400%" />
                            <StatCard label="Conversion Value" value="$840k" delta="+350%" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function StatCard({ label, value, delta }: { label: string, value: string, delta: string }) {
    return (
        <div className="p-8 bg-white/5 rounded-2xl border border-white/5 hover:border-teal-500/30 transition-colors">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">{label}</p>
            <div className="flex items-end gap-4">
                <span className="text-4xl md:text-5xl font-bold text-white">{value}</span>
                <span className="text-teal-400 font-mono mb-1">{delta}</span>
            </div>
        </div>
    );
}
