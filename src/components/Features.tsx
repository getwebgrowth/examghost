'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Brain, Globe, MessageSquare, BarChart3 } from 'lucide-react';

export default function Features() {
    return (
        <section id="features" className="py-28 bg-[#070b15] relative overflow-hidden">
            <div className="glow-orb w-[500px] h-[500px] bg-blue-600/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-28">

                {/* Feature 1: Content Supports */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-4">Any Content</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                            Understands any question,<br/>
                            <span className="text-slate-400">on any page</span>
                        </h2>
                        <p className="text-slate-400 text-[16px] leading-relaxed mb-8">
                            ExamGhost works across multiple choice, short answer, fill-in-the-blank, and complex essay prompts. Handles math, science, history, and 50+ languages automatically.
                        </p>
                        <ul className="space-y-3.5">
                            {[
                                'Multiple Choice & True/False',
                                'Math & Science equations',
                                'Short Answer & Essay support',
                                '50+ Languages supported',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300 text-[14px] font-medium">
                                    <CheckCircle2 className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right side graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full" />
                        <div className="relative bg-[#0d1220] border border-white/8 rounded-2xl p-6 shadow-2xl">
                            {/* Question card */}
                            <div className="bg-[#080c18] rounded-xl p-4 mb-4 border border-white/5">
                                <div className="text-[10px] font-bold text-blue-500/60 uppercase tracking-widest mb-2">Question 4 of 12</div>
                                <div className="h-3 w-3/4 bg-white/10 rounded-full mb-2" />
                                <div className="h-3 w-full bg-white/10 rounded-full mb-5" />
                                <div className="space-y-2">
                                    {['bg-blue-500/10 border-blue-500/30', 'bg-white/3 border-white/5', 'bg-white/3 border-white/5'].map((style, i) => (
                                        <div key={i} className={`flex items-center gap-3 p-2.5 rounded-lg border ${style}`}>
                                            <div className={`w-3.5 h-3.5 rounded-full border ${i === 0 ? 'border-blue-500 bg-blue-500' : 'border-white/20'}`} />
                                            <div className={`h-2 rounded-full ${i === 0 ? 'bg-blue-400/50 w-32' : 'bg-white/15 w-24'}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* AI explanation */}
                            <div className="bg-blue-600/8 border border-blue-500/15 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <Brain className="w-4 h-4 text-blue-400" />
                                    <span className="text-[12px] font-bold text-blue-300">AI Explanation</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-blue-400/20 rounded-full" />
                                    <div className="h-2 w-5/6 bg-blue-400/20 rounded-full" />
                                    <div className="h-2 w-4/6 bg-emerald-400/30 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Feature 2: Skills Tracking */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left side graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute inset-0 bg-indigo-600/8 blur-[80px] rounded-full" />
                        <div className="relative bg-[#0d1220] border border-white/8 rounded-2xl p-6 shadow-2xl">
                            <div className="text-[12px] font-bold text-white mb-5 flex items-center gap-2">
                                <BarChart3 className="w-4 h-4 text-indigo-400" />
                                Your Learning Progress
                            </div>
                            <div className="space-y-4">
                                {[
                                    { label: 'Algebra', pct: 87, color: 'bg-blue-500' },
                                    { label: 'Cell Biology', pct: 72, color: 'bg-indigo-500' },
                                    { label: 'World History', pct: 65, color: 'bg-violet-500' },
                                    { label: 'Chemical Bonds', pct: 45, color: 'bg-amber-500' },
                                ].map(({ label, pct, color }, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between mb-1.5">
                                            <span className="text-[13px] text-slate-300 font-medium">{label}</span>
                                            <span className="text-[13px] text-slate-500 font-mono">{pct}%</span>
                                        </div>
                                        <div className="progress-bar">
                                            <div className={`progress-bar-fill ${color}`} style={{ width: `${pct}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5 p-3 bg-blue-600/8 border border-blue-500/15 rounded-xl">
                                <div className="flex items-start gap-2">
                                    <MessageSquare className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                                    <p className="text-[11px] text-slate-400 leading-relaxed">
                                        <span className="text-blue-300 font-semibold">Tip:</span> You&apos;re strongest in Algebra. Focus on Chemical Bonds next to balance your skills.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="order-1 lg:order-2"
                    >
                        <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Track & Master</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                            See exactly where<br/>
                            <span className="text-slate-400">you need to improve</span>
                        </h2>
                        <p className="text-slate-400 text-[16px] leading-relaxed mb-8">
                            ExamGhost tracks your performance across subjects and skills. Get personalized recommendations on what to study next so you always make progress.
                        </p>
                        <div className="space-y-5">
                            {[
                                { icon: Zap, title: 'Instant Performance Insights', desc: 'Know your strengths and gaps after every study session.', color: 'text-amber-400' },
                                { icon: Globe, title: 'Works on Any Platform', desc: 'Canvas, Blackboard, Coursera, Khan Academy — everywhere.', color: 'text-emerald-400' },
                            ].map(({ icon: Icon, title, desc, color }, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shrink-0 mt-0.5">
                                        <Icon className={`w-4 h-4 ${color}`} />
                                    </div>
                                    <div>
                                        <h4 className="text-[14px] font-bold text-white mb-1">{title}</h4>
                                        <p className="text-[13px] text-slate-500 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
