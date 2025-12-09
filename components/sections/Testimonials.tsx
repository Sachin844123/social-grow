'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        handle: "@sarah.eats",
        role: "Lifestyle Influencer",
        quote: "Social Grow didn't just manage my account; they rebuilt my entire content strategy. My engagement tripled in 3 weeks.",
        followers: "1.2M",
        image: "bg-gray-700"
    },
    {
        id: 2,
        name: "Marcus Thorne",
        handle: "@thorne_fitness",
        role: "Fitness Coach",
        quote: "The level of data granularity they provide is insane. We know exactly what to post and when to the minute.",
        followers: "850k",
        image: "bg-gray-800"
    },
    {
        id: 3,
        name: "Elena V.",
        handle: "@elena_designs",
        role: "Creative Director",
        quote: "Aesthetics were my priority. Social Grow understood the assignment perfectly. Premium, polished, and on-brand.",
        followers: "2.5M",
        image: "bg-gray-900"
    }
];

export function Testimonials() {
    const [current, setCurrent] = React.useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-24 bg-deep overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-16 text-center">Voices of <span className="text-teal-400">Authority</span>.</h2>

                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-charcoal/50 backdrop-blur-md border border-white/5 rounded-2xl p-8 md:p-12 relative"
                        >
                            <div className="absolute top-6 left-6 text-gray-700">
                                <Quote size={40} className="opacity-20" />
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="relative shrink-0">
                                    <div className={`w-24 h-24 rounded-full ${testimonials[current].image} border-2 border-platinum p-1`}>
                                        <div className="w-full h-full rounded-full bg-gray-500 overflow-hidden" />
                                    </div>
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-teal-500 text-black text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                                        {testimonials[current].followers}
                                    </div>
                                </div>

                                <div className="text-center md:text-left">
                                    <p className="text-xl md:text-2xl text-gray-200 italic mb-6 leading-relaxed">"{testimonials[current].quote}"</p>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">{testimonials[current].name}</h4>
                                        <p className="text-sm text-teal-400">{testimonials[current].handle}</p>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{testimonials[current].role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center gap-4 mt-8">
                        <button onClick={prev} className="p-2 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors">
                            <ArrowLeft size={20} />
                        </button>
                        <button onClick={next} className="p-2 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
