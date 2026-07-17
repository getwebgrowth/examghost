'use client';
import React, { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';
import { FaChrome } from 'react-icons/fa';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0d16]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <a href="/" className="flex items-center gap-2.5 group">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                        <Bot className="w-4.5 h-4.5 text-white" />
                    </div>
                    <span className="font-bold text-[17px] tracking-tight text-white">ExamGhost</span>
                </a>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-7">
                    {[
                        { label: 'How It Works', href: '#how-it-works' },
                        { label: 'Features', href: '#features' },
                        { label: 'Pricing', href: '#pricing' },
                        { label: 'FAQ', href: '#faq' },
                    ].map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            className="text-[14px] font-medium text-slate-400 hover:text-white transition-colors"
                        >
                            {label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/25 active:scale-95"
                >
                    <FaChrome className="w-3.5 h-3.5" />
                    <span>Add to Chrome</span>
                </a>
            </div>
        </nav>
    );
}
