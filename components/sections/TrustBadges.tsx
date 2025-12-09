'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

const brands = [
    { name: 'Instagram', icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
    { name: 'X', icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg> },
    { name: 'YouTube', icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg> },
    { name: 'LinkedIn', icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
];

export function TrustBadges() {
    return (
        <section className="py-12 border-y border-white/5 bg-charcoal/30 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">Trusted by Elite Creators on</p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-70">
                    {brands.map((brand, i) => (
                        <motion.div
                            key={brand.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.1,
                                filter: "drop-shadow(0 0 8px rgba(192,192,192,0.3))",
                                color: "#F0F0F0"
                            }}
                            className="text-gray-500 transition-colors duration-300 cursor-pointer"
                        >
                            <brand.icon className="h-8 w-8 md:h-10 md:w-10" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
