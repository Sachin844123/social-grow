'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const tiers = [
    {
        name: "Ascent",
        price: "$5,000",
        desc: "For rising talent seeking professional management.",
        features: [true, true, true, false, false, false],
        cta: "Start Ascent"
    },
    {
        name: "Apex",
        price: "$12,000",
        desc: "For established brands scaling aggressively.",
        features: [true, true, true, true, true, false],
        cta: "Join Apex",
        highlight: true
    },
    {
        name: "Ultimate",
        price: "Custom",
        desc: "Elite, full-spectrum digital dominance.",
        features: [true, true, true, true, true, true],
        cta: "Contact Us",
        isUltimate: true
    }
];

const featureList = [
    "Social Strategy Roadmap",
    "Daily Content Posting",
    "Monthly Performance Report",
    "Dedicated Account Manager",
    "24/7 Crisis Support",
    "Brand Partnership Negotiation"
];

export function PricingTable() {
    return (
        <section className="py-24 bg-charcoal/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Investment Tiers</h2>
                    <p className="text-gray-400"> Transparent pricing for tangible growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative rounded-2xl p-8 flex flex-col ${tier.isUltimate
                                    ? 'border border-platinum bg-black/80 shadow-[0_0_40px_rgba(192,192,192,0.1)]'
                                    : 'border border-white/10 bg-charcoal/50 glassy'
                                }`}
                        >
                            {tier.isUltimate && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-platinum text-black text-xs font-bold uppercase tracking-widest rounded-full">
                                    Exclusive
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-xl font-bold mb-2 ${tier.isUltimate ? 'text-gradient-platinum' : 'text-white'}`}>{tier.name}</h3>
                                <div className="text-3xl font-bold text-white mb-2">{tier.price}<span className="text-sm font-normal text-gray-400 ml-1">/mo</span></div>
                                <p className="text-sm text-gray-400">{tier.desc}</p>
                            </div>

                            <div className="flex-1 space-y-4 mb-8">
                                {featureList.map((feature, idx) => (
                                    <div key={feature} className="flex items-center gap-3">
                                        {tier.features[idx] ? (
                                            <div className={`p-1 rounded-full ${tier.isUltimate ? 'bg-platinum text-black' : 'bg-teal-500/10 text-teal-400'}`}>
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                        ) : (
                                            <div className="p-1 rounded-full bg-white/5 text-gray-600">
                                                <X size={12} strokeWidth={3} />
                                            </div>
                                        )}
                                        <span className={`text-sm ${tier.features[idx] ? 'text-gray-200' : 'text-gray-600'}`}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                variant={tier.isUltimate ? 'primary' : 'outline'}
                                className="w-full"
                            >
                                {tier.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
