'use client';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Brain, GraduationCap } from 'lucide-react';
import { useAuth } from './AuthContext';

export default function Hero() {
    const { openAuth } = useAuth();

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
                        AI Tutor · AI Quiz Helper · AI Teacher — Learning Platform
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
                    <span className="text-slate-300 font-extrabold">That Teaches You to Learn</span>
                </motion.h1>

                {/* Subheading — crystal clear: AI tutor, not exam tool */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
                >
                    ExamGhost is an AI Tutor and study platform. Ask any study question, get clear step-by-step
                    explanations, and practice with AI-generated quizzes — so you actually <em>understand</em> the subject.
                </motion.p>

                {/* Key value propositions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    {[
                        { icon: Brain, text: 'AI Tutor' },
                        { icon: BookOpen, text: 'AI Quiz Helper' },
                        { icon: GraduationCap, text: 'AI Teacher' },
                    ].map(({ icon: Icon, text }, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/4 border border-white/8 rounded-full text-[13px] text-slate-300 font-semibold">
                            <Icon className="w-3.5 h-3.5 text-blue-400" />
                            {text}
                        </div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
                >
                    <button
                        onClick={() => openAuth('register')}
                        className="flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-[16px] rounded-xl transition-all shadow-[0_0_40px_rgba(59,130,246,0.35)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                    >
                        <Sparkles className="w-5 h-5 text-blue-200" />
                        Register Now — It&apos;s Free
                    </button>
                    <a
                        href="#how-it-works"
                        className="px-8 py-4 text-[15px] font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all hover:bg-white/5 w-full sm:w-auto justify-center flex items-center"
                    >
                        See how it works →
                    </a>
                </motion.div>

                {/* Powered by Gemini and BYOK disclaimer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="text-[12px] text-slate-500 mb-8 max-w-md mx-auto leading-relaxed"
                >
                    Powered by <span className="text-blue-400 font-semibold">Gemini Flash</span>. 
                    Bring your own Gemini API key or use built-in usage credits. 
                    <span className="block mt-1 text-[11px] text-slate-600">ExamGhost is an independent study assistant and is not affiliated with Google or Gemini.</span>
                </motion.div>

                {/* Social proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[13px] text-slate-500"
                >
                    <div className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">50+ academic subjects supported</span>
                    </div>
                </motion.div>

                {/* Hero UI Preview — AI Tutor Teaching Interface */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-16 relative max-w-4xl mx-auto"
                >
                    <div className="absolute inset-x-10 bottom-0 h-40 bg-blue-600/20 blur-[60px] rounded-full" />

                    <div className="relative bg-[#0d1320] rounded-2xl border border-white/8 shadow-2xl overflow-hidden">
                        {/* Browser chrome */}
                        <div className="bg-[#0a0d18] border-b border-white/5 px-4 py-3 flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#27c840]" />
                            </div>
                            <div className="flex-1 max-w-xs mx-auto h-6 bg-white/5 rounded-md flex items-center justify-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                                <span className="text-[11px] text-white/30 font-medium">My Study Notes</span>
                            </div>
                            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center ml-auto">
                                <Brain className="w-3.5 h-3.5 text-white" />
                            </div>
                        </div>

                        {/* AI Tutor Interface */}
                        <div className="p-5 relative flex gap-5">
                            {/* Left: Study notes + practice quiz */}
                            <div className="flex-1 min-w-0">
                                <div className="bg-[#080c18] rounded-xl p-4 border border-white/5 mb-3">
                                    <div className="flex items-center gap-2 mb-3">
                                        <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Study Topic</span>
                                    </div>
                                    <div className="text-[14px] font-semibold text-white mb-2">Photosynthesis — Light Reactions</div>
                                    <div className="space-y-1.5">
                                        <div className="h-2 w-full bg-white/8 rounded-full" />
                                        <div className="h-2 w-5/6 bg-white/8 rounded-full" />
                                        <div className="h-2 w-4/5 bg-white/8 rounded-full" />
                                    </div>
                                </div>
                                {/* Practice quiz */}
                                <div className="bg-[#080c18] rounded-xl p-4 border border-white/5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-violet-400" />
                                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Self-Practice Quiz</span>
                                    </div>
                                    <div className="text-[12px] text-slate-300 mb-3">What is the primary role of chlorophyll in plants?</div>
                                    <div className="space-y-2">
                                        {['To absorb sunlight and convert it into energy', 'To store water in the leaves', 'To produce seeds for reproduction'].map((opt, i) => (
                                            <div key={i} className={`flex items-center gap-2.5 p-2 rounded-lg border text-[11px] ${i === 0 ? 'border-blue-500/30 bg-blue-500/8 text-blue-300' : 'border-white/5 bg-white/2 text-slate-500'}`}>
                                                <div className={`w-3 h-3 rounded-full border shrink-0 ${i === 0 ? 'border-blue-500' : 'border-white/15'}`} />
                                                {opt}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: AI Tutor Chat */}
                            <div className="w-64 flex-shrink-0 bg-[#080c18] border border-blue-500/20 rounded-xl overflow-hidden shadow-xl shadow-blue-500/10">
                                {/* Header */}
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-blue-600/8">
                                    <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center shrink-0">
                                        <Brain className="w-3.5 h-3.5 text-white" />
                                    </div>
                                    <span className="text-[12px] font-bold text-white">AI Tutor</span>
                                    <div className="ml-auto flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-[10px] text-emerald-400 font-medium">Online</span>
                                    </div>
                                </div>
                                {/* Chat */}
                                <div className="p-3 space-y-3">
                                    {/* Student question */}
                                    <div className="flex justify-end">
                                        <div className="bg-blue-600/20 border border-blue-500/20 rounded-xl rounded-tr-sm px-3 py-2 max-w-[90%]">
                                            <p className="text-[11px] text-blue-200 leading-relaxed">Can you teach me how light reactions work?</p>
                                        </div>
                                    </div>
                                    {/* AI Tutor explanation */}
                                    <div className="flex gap-2">
                                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                            <Brain className="w-3 h-3 text-white" />
                                        </div>
                                        <div className="bg-white/5 border border-white/8 rounded-xl rounded-tl-sm px-3 py-2 flex-1">
                                            <p className="text-[11px] text-slate-300 leading-relaxed mb-2">
                                                Of course! Light reactions happen inside the <span className="text-blue-400 font-semibold">thylakoid membrane</span>:
                                            </p>
                                            <div className="space-y-1.5">
                                                {[
                                                    '① Chlorophyll captures sunlight',
                                                    '② Water splits → releases O₂',
                                                    '③ Energy stored as ATP & NADPH',
                                                ].map((step, i) => (
                                                    <div key={i} className="text-[10px] text-slate-400 flex items-start gap-1.5">
                                                        <span className="text-blue-400 font-bold shrink-0">{step[0]}</span>
                                                        <span>{step.slice(1)}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Typing */}
                                    <div className="flex gap-2 items-center">
                                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                                            <Brain className="w-3 h-3 text-white" />
                                        </div>
                                        <div className="bg-white/5 border border-white/8 rounded-xl px-3 py-2 flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
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
