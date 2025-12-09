'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { motion } from "framer-motion";

export function WorkClient() {
    return (
        <main className="min-h-screen bg-deep flex flex-col">
            <Navbar />

            <div className="pt-32 pb-12 px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight"
                >
                    Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Impact</span>.
                </motion.h1>
            </div>

            <WorkGrid />
            <Footer />
        </main>
    );
}
