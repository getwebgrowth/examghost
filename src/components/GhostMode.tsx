'use client';
import { motion } from 'framer-motion';
import { Chrome, ScanText, BookCheck } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: Chrome,
        title: 'Install the Extension',
        description: 'Add ExamGhost to Chrome in seconds. It runs quietly in the background, always ready when you need it.',
        color: 'blue',
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
        icon: ScanText,
        title: 'Highlight or Ask Anything',
        description: 'Highlight any text on any webpage or type your question. ExamGhost understands the full context instantly.',
        color: 'indigo',
        visual: (
            <div className="relative h-28 flex items-center justify-center">
                <div className="relative z-10 w-48 space-y-1.5">
                    {[100, 85, 70].map((w, i) => (
                        <div key={i} className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                            <div
                                className="absolute inset-y-0 left-0 bg-blue-500/30 rounded-full"
                                style={{ width: `${w}%` }}
                            />
                            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
                        </div>
                    ))}
                    <div className="mt-2 px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-md inline-block">
                        <span className="text-[10px] text-blue-400 font-semibold">Analyzing context...</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        number: '03',
        icon: BookCheck,
        title: 'Get Instant Explanations',
        description: 'Receive clear, step-by-step explanations and guidance in under 2 seconds. Study smarter, not harder.',
        color: 'emerald',
        visual: (
            <div className="relative h-28 flex items-center justify-center">
                <div className="relative z-10 w-52 bg-[#0a0e18] border border-emerald-500/20 rounded-xl p-3 shadow-xl shadow-emerald-500/5">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Answer Ready</span>
                    </div>
                    <div className="space-y-1.5">
                        <div className="h-2 w-full bg-white/10 rounded-full" />
                        <div className="h-2 w-4/5 bg-white/10 rounded-full" />
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
                            From question to mastery<br/>
                            <span className="text-slate-400 font-semibold">in three simple steps</span>
                        </h2>
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
                            {/* Connector line */}
                            {idx < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/3 left-full w-6 border-t border-dashed border-white/10 z-10 -mr-6" />
                            )}

                            <div className="bg-[#0d1220] border border-white/6 rounded-2xl p-6 h-full card-glow">
                                {/* Step number */}
                                <div className="text-[11px] font-black text-blue-500/50 tracking-widest uppercase mb-4">{step.number}</div>

                                {/* Visual */}
                                {step.visual}

                                {/* Icon + Title */}
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
