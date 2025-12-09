'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

export function Founder() {
  return (
    <section className="py-24 bg-deep relative overflow-hidden">
      {/* Radial Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-700/20 to-gray-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group">
              <div className="absolute inset-0 bg-gray-800 animate-pulse" />
              {/* <Image src="/founder.jpg" fill alt="Founder" className="object-cover" /> */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-mono">
                [Founder Image Placeholder]
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Visionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Architecture</span>.
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              "We don't chase trends. We analyze the underlying data currents that drive human attention. Social Grow isn't just an agency; it's a precision instrument for digital dominance."
            </p>
            <div className="space-y-1">
              <p className="text-lg font-bold text-white">Alexander V.</p>
              <p className="text-sm text-teal-400 uppercase tracking-widest">Founder & Principal</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
