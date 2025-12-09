'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

export function VideoReel() {
    const [isPlaying, setIsPlaying] = React.useState(false);

    return (
        <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black">
            {/* Overlay */}
            <div className={`absolute inset-0 z-10 transition-opacity duration-1000 ${isPlaying ? 'bg-black/80' : 'bg-black/40'}`} />

            <div className="absolute inset-0 flex items-center justify-center z-20">
                {!isPlaying ? (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                            Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">Impact</span>
                        </h3>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsPlaying(true)}
                            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group mx-auto cursor-pointer"
                        >
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2 group-hover:border-l-teal-400 transition-colors" />
                        </motion.button>
                        <p className="mt-4 text-sm text-gray-400 uppercase tracking-widest">Watch Showreel</p>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl relative border border-white/10 mx-4"
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=0&controls=0&loop=1&playlist=ScMzIvxBSi4"
                            title="Showreel"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                        <button
                            onClick={() => setIsPlaying(false)}
                            className="absolute top-4 right-4 text-white hover:text-teal-400 transition-colors bg-black/50 p-2 rounded-full backdrop-blur-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Video Placeholder (simulated) */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-pulse opacity-50"></div>
            </div>
        </section>
    );
}
