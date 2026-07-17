'use client';
import { motion } from 'framer-motion';
import { Chrome, MessageCircleQuestion, BookOpenCheck } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: Chrome,
        title: 'Add ExamGhost to Chrome',
        description: 'Install the free extension in seconds. It sits quietly in your browser, ready to be your personal AI tutor whenever you need help understanding something.',
        visual: (
            <div className="relative h-28 flex items-center justify-center">
                <div className="relative z-10 flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#0d1320] rounded-xl border border-white/10 flex items-center justify-center shadow-lg">
                        <Chrome className="w-6 h-6 text-slate-300" />
                    </div>
                    <div className="text-white/30 text-2xl font-bold">+</div>
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30 animate-pulse-glow">
                        <span className="text-white font-black text-sm">EG</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        number: '02',
        icon: MessageCircleQuestion,
        title: 'Ask Your AI Tutor Anything',
        description: 'Stuck on a concept? Just highlight the text you don\'t understand, or type your question. Your AI teacher explains topics in simple, clear language.',
        visual: (
            <div className="relative h-28 flex items-center justify-center">
                <div className="relative z-10 w-52 bg-[#0a0e18] border border-white/8 rounded-xl p-3 shadow-xl">
                    <div className="flex justify-end mb-2">
                        <div className="bg-blue-600/20 border border-blue-500/20 rounded-lg px-2.5 py-1.5 max-w-[85%]">
                            <p className="text-[10px] text-blue-300">Why does the mitochondria produce ATP?</p>
                        </div>
                    </div>
                    <div className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-md inline-block">
                        <span className="text-[10px] text-blue-400 font-semibold">AI Tutor is thinking...</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        number: '03',
        icon: BookOpenCheck,
        title: 'Learn & Test Yourself',
        description: 'Get clear explanations, then reinforce what you learned with AI-generated practice quizzes. Study smarter and actually retain the knowledge.',
        visual: (
            <div className="relative h-28 flex items-center justify-center">
                <div className="relative z-10 w-52 bg-[#0a0e18] border border-emerald-500/20 rounded-xl p-3 shadow-xl">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Concept Explained ✓</span>
                    </div>
                    <div className="space-y-1.5">
                        <div className="h-2 w-full bg-white/10 rounded-full" />
                        <div className="h-2 w-5/6 bg-white/10 rounded-full" />
                        <div className="h-2 w-3/5 bg-emerald-500/30 rounded-full" />
                    </div>
                </div>
            </div>
        )
    }
];

export default function GhostMode() {
    return (
        <section id="how-it-works" className="py-28 bg-[#070b15] relative">
            <div className="absolute inset-0 grid-bg opacity-50" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">How It Works</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                            From confusion to clarity
                            <br />
                            <span className="text-slate-400 font-semibold">in three simple steps</span>
                        </h2>
                        <p className="text-slate-500 text-lg max-w-xl mx-auto">
                            ExamGhost is your AI teacher — it explains topics, answers your questions, and helps you practice so you truly understand what you&apos;re studying.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: idx * 0.12 }}
                            className="relative group"
                        >
                            <div className="bg-[#0d1220] border border-white/6 rounded-2xl p-6 h-full card-glow">
                                <div className="text-[11px] font-black text-blue-500/50 tracking-widest uppercase mb-4">{step.number}</div>
                                {step.visual}
                                <div className="flex items-center gap-2.5 mt-2 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center">
                                        <step.icon className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <h3 className="text-[15px] font-bold text-white">{step.title}</h3>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
