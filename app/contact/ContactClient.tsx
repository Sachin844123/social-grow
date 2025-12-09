'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { motion } from "framer-motion";

export function ContactClient() {
    return (
        <main className="min-h-screen bg-deep flex flex-col">
            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-24">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        Make <span className="text-teal-400">Contact</span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400"
                    >
                        Ready to define your legacy? The spotlight is waiting.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <ContactForm />
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
