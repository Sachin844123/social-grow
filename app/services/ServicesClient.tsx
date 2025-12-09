'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PricingTable } from "@/components/sections/PricingTable";
import { motion } from "framer-motion";

export function ServicesClient() {
    return (
        <main className="min-h-screen bg-deep flex flex-col">
            <Navbar />

            <div className="pt-32 pb-16 px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                >
                    The <span className="text-teal-400">Architecture</span> of Growth.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="max-w-2xl mx-auto text-xl text-gray-400"
                >
                    A full-spectrum suite of tools designed to elevate your brand from noise to signal.
                </motion.p>
            </div>

            <ServicesGrid />
            <PricingTable />
            <Footer />
        </main>
    );
}
