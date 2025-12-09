'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Founder } from "@/components/sections/Founder";
import { Timeline } from "@/components/sections/Timeline";
import { Testimonials } from "@/components/sections/Testimonials";
import { motion } from "framer-motion";

export function AboutClient() {
    return (
        <main className="min-h-screen bg-deep flex flex-col">
            <Navbar />

            <div className="pt-32 pb-12 px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                >
                    We Are <span className="text-gradient-platinum">Social Grow</span>.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto"
                >
                    Architecting the future of influence.
                </motion.p>
            </div>

            <Founder />
            <Timeline />
            <Testimonials />
            <Footer />
        </main>
    );
}
