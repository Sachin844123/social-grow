'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import confetti from 'canvas-confetti';

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Trigger confetti
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    if (isSuccess) {
        return (
            <div className="text-center py-24">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-teal-500/50"
                >
                    <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </motion.div>
                <h2 className="text-3xl font-bold text-white mb-4">Message Received.</h2>
                <p className="text-gray-400 text-lg">We'll be in touch shortly to architect your ascent.</p>
                <button onClick={() => setIsSuccess(false)} className="mt-8 text-teal-400 hover:text-white transition-colors underline">Send another message</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 rounded-2xl max-w-2xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Name</label>
                    <input required type="text" className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-teal-400 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                    <input required type="email" className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-teal-400 transition-colors" placeholder="john@example.com" />
                </div>
            </div>

            <div className="mb-8">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                <select className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-teal-400 transition-colors [&>option]:bg-charcoal [&>option]:text-white">
                    <option>Brand Management Inquiry</option>
                    <option>Partnership Proposal</option>
                    <option>Press / Media</option>
                    <option>Other</option>
                </select>
            </div>

            <div className="mb-12">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                <textarea required rows={4} className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-teal-400 transition-colors resize-none" placeholder="Tell us about your goals..." />
            </div>

            <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
                Initiate Sequence
            </Button>
        </form>
    );
}
