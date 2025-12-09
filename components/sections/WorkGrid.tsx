'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const projects = [
    { id: 1, title: 'Neon Horizon', category: 'Growth Strategy', image: 'bg-purple-900', size: 'large' },
    { id: 2, title: 'Velvet Rope', category: 'Brand Identity', image: 'bg-teal-900', size: 'small' },
    { id: 3, title: 'Urban Pulse', category: 'Content Production', image: 'bg-blue-900', size: 'small' },
    { id: 4, title: 'Cyber Aesthetics', category: 'Visual Direction', image: 'bg-gray-800', size: 'large' },
    { id: 5, title: 'Infinite Loop', category: 'Retention System', image: 'bg-indigo-900', size: 'small' },
];

export function WorkGrid() {
    return (
        <section className="py-24 bg-deep">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative group overflow-hidden rounded-2xl cursor-pointer ${project.size === 'large' ? 'md:row-span-2' : ''
                                }`}
                        >
                            <div className={`absolute inset-0 ${project.image} transition-transform duration-700 group-hover:scale-110`} />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-16 h-16 rounded-full bg-platinum flex items-center justify-center shadow-[0_0_20px_rgba(192,192,192,0.5)] transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                    <Play className="text-black ml-1" fill="currentColor" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                                <p className="text-teal-400 text-sm font-medium uppercase tracking-widest mb-2">{project.category}</p>
                                <h3 className="text-2xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
