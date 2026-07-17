'use client';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Brain, Star } from 'lucide-react';
import { FaChrome } from 'react-icons/fa';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#070b15] grid-bg">

            {/* Ambient glow orbs */}
            <div className="glow-orb w-[700px] h-[500px] bg-blue-600/20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/3" />
            <div className="glow-orb w-[400px] h-[400px] bg-indigo-600/10 bottom-0 right-0 translate-x-1/4" />
            <div className="glow-orb w-[300px] h-[300px] bg-violet-600/10 bottom-0 left-0 -translate-x-1/4" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16">

                {/* Top badge */}
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[13px] font-semibold">
                        <Sparkles className="w-3.5 h-3.5" />
                        AI-Powered Study Assistant — Chrome Extension
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-[72px] font-black tracking-tight text-white leading-[1.08] mb-6"
                >
                    Your Personal{' '}
                    <span className="gradient-text">AI Tutor</span>
                    <br />
                    <span className="text-slate-300 font-extrabold">Everywhere You Study</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
                >
                    ExamGhost is a Chrome extension that acts as your AI tutor — giving you instant explanations,
                    step-by-step guidance, and quiz help directly on any webpage.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
                >
                    <a
                        href="#"
                        className="flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-[16px] rounded-xl transition-all shadow-[0_0_40px_rgba(59,130,246,0.35)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                    >
                        <FaChrome className="w-5 h-5" />
                        Add to Chrome — Free
                    </a>
                    <a
                        href="#how-it-works"
                        className="px-8 py-4 text-[15px] font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all hover:bg-white/5 w-full sm:w-auto justify-center flex items-center"
                    >
                        See how it works →
                    </a>
                </motion.div>

                {/* Social proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[13px] text-slate-500"
                >
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            {['bg-blue-400', 'bg-indigo-400', 'bg-violet-400', 'bg-sky-400'].map((c, i) => (
                                <div key={i} className={`w-7 h-7 rounded-full border-2 border-[#070b15] ${c}`} />
                            ))}
                        </div>
                        <span className="font-medium">50,000+ students</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                        <span className="font-medium">4.9 rating</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">50+ subjects covered</span>
                    </div>
                </motion.div>

                {/* Hero UI Preview Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-16 relative max-w-4xl mx-auto"
                >
                    {/* Glow behind card */}
                    <div className="absolute inset-x-10 bottom-0 h-40 bg-blue-600/20 blur-[60px] rounded-full" />

                    <div className="relative bg-[#0d1320] rounded-2xl border border-white/8 shadow-2xl overflow-hidden">
                        {/* Fake browser chrome */}
                        <div className="bg-[#0a0d18] border-b border-white/5 px-4 py-3 flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#27c840]" />
                            </div>
                            <div className="flex-1 max-w-xs mx-auto h-6 bg-white/5 rounded-md flex items-center justify-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                                <div className="h-2 w-32 bg-white/20 rounded-sm" />
                            </div>
                            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center ml-auto">
                                <Brain className="w-3.5 h-3.5 text-white" />
                            </div>
                        </div>

                        {/* Content area */}
                        <div className="p-6 relative">
                            <div className="flex gap-4">
                                {/* Main content */}
                                <div className="flex-1 space-y-3">
                                    <div className="h-3 w-3/4 bg-white/10 rounded-full" />
                                    <div className="h-3 w-full bg-white/10 rounded-full" />
                                    <div className="h-3 w-5/6 bg-white/10 rounded-full" />
                                    <div className="mt-6 space-y-2">
                                        {['A', 'B', 'C', 'D'].map((opt, i) => (
                                            <div
                                                key={opt}
                                                className={`flex items-center gap-3 p-3 rounded-lg border ${i === 2 ? 'border-blue-500/40 bg-blue-500/10' : 'border-white/5 bg-white/3'}`}
                                            >
                                                <div className={`w-4 h-4 rounded-full border ${i === 2 ? 'border-blue-500 bg-blue-500' : 'border-white/20'} flex items-center justify-center`}>
                                                    {i === 2 && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                                                </div>
                                                <div className={`h-2 rounded-full ${i === 2 ? 'bg-blue-400/60 w-28' : 'bg-white/15 w-24'}`} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* ExamGhost AI Panel */}
                                <div className="w-64 bg-[#080c18] border border-blue-500/20 rounded-xl p-4 shadow-xl shadow-blue-500/10 flex-shrink-0">
                                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                                        <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
                                            <Brain className="w-3.5 h-3.5 text-white" />
                                        </div>
                                        <span className="text-[12px] font-bold text-white">ExamGhost AI</span>
                                        <div className="ml-auto flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            <span className="text-[10px] text-emerald-400 font-medium">Live</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2.5 text-[11px] text-slate-400">
                                        <div className="h-2 w-full bg-white/8 rounded-full" />
                                        <div className="h-2 w-5/6 bg-white/8 rounded-full" />
                                        <div className="h-2 w-4/5 bg-white/8 rounded-full" />
                                        <div className="mt-3 p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                            <div className="text-[11px] font-semibold text-blue-400 mb-1.5">✓ Answer: Option C</div>
                                            <div className="h-1.5 w-full bg-white/10 rounded-full mb-1" />
                                            <div className="h-1.5 w-3/4 bg-white/10 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
