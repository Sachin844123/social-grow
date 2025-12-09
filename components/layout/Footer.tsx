'use client';

import * as React from 'react';
import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 border-t border-white/5 bg-deep">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                            SOCIAL GROW<span className="text-teal-400">.</span>
                        </Link>
                        <p className="mt-2 text-sm text-gray-500 max-w-xs">
                            Defining the spotlight for the world's most influential voices.
                        </p>
                    </div>

                    <div className="flex space-x-8 mb-8 md:mb-0">
                        {['Instagram', 'X (Twitter)', 'LinkedIn', 'YouTube'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-gray-500 hover:text-white transition-colors"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/5">
                    <p className="text-xs text-gray-600">
                        © {currentYear} Social Grow. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="text-xs text-gray-600 hover:text-gray-400">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-gray-600 hover:text-gray-400">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
