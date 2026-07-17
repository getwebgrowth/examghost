'use client';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Sparkles, ShieldCheck, Clock, Brain, MessageSquare, GraduationCap } from 'lucide-react';

const bentoCards = [
    {
        id: 1,
        size: 'col-span-1 md:col-span-2',
        icon: Target,
        iconBg: 'bg-amber-500/10 border-amber-500/20',
        iconColor: 'text-amber-400',
        title: 'Tracks What You Have Learned',
        desc: 'ExamGhost identifies the key concepts in each study session and monitors your understanding over time, so you always know what to review.',
        visual: (
            <div className="mt-6 space-y-3">
                {[
                    { label: 'Photosynthesis', pct: 88, bar: 'bg-blue-500' },
                    { label: 'Cell Division', pct: 61, bar: 'bg-indigo-500' },
                    { label: 'DNA Structure', pct: 44, bar: 'bg-violet-500' },
                ].map(({ label, pct, bar }) => (
                    <div key={label} className="flex items-center gap-3">
                        <span className="text-[12px] text-slate-400 font-medium w-28 shrink-0">{label}</span>
                        <div className="flex-1 progress-bar">
                            <div className={`progress-bar-fill ${bar}`} style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-[11px] font-mono text-slate-500 w-8 text-right">{pct}%</span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        id: 2,
        size: 'col-span-1',
        icon: Clock,
        iconBg: 'bg-blue-500/10 border-blue-500/20',
        iconColor: 'text-blue-400',
        title: 'Instant Explanations',
        desc: 'Get a clear answer to your study question in under 2 seconds. Your learning flow stays uninterrupted.',
        visual: (
            <div className="mt-6 flex items-center justify-center">
                <div className="relative w-20 h-20">
                    <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                        <circle cx="40" cy="40" r="32" strokeWidth="8" className="stroke-white/5 fill-none" />
                        <circle cx="40" cy="40" r="32" strokeWidth="8" strokeDasharray="200.96" strokeDashoffset="30" strokeLinecap="round" className="stroke-blue-500 fill-none" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[14px] font-black text-white">&lt; 2s</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 3,
        size: 'col-span-1',
        icon: ShieldCheck,
        iconBg: 'bg-emerald-500/10 border-emerald-500/20',
        iconColor: 'text-emerald-400',
        title: 'Privacy First',
        desc: 'Zero data logging. Your study activity is never stored or shared with anyone.',
        visual: null,
    },
    {
        id: 4,
        size: 'col-span-1 md:col-span-2',
        icon: Brain,
        iconBg: 'bg-blue-500/10 border-blue-500/20',
        iconColor: 'text-blue-400',
        title: 'AI That Teaches, Not Just Answers',
        desc: 'ExamGhost explains the reasoning behind every topic so you truly understand the material and can apply it yourself.',
        visual: (
            <div className="mt-5 flex gap-3">
                <div className="flex-1 bg-[#080c18] rounded-xl p-3 border border-white/5">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <MessageSquare className="w-3 h-3" /> Student
                    </div>
                    <div className="text-[12px] text-slate-300">&ldquo;Why does DNA use thymine instead of uracil?&rdquo;</div>
                </div>
                <div className="flex-1 bg-blue-600/8 border border-blue-500/15 rounded-xl p-3">
                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Brain className="w-3 h-3" /> AI Tutor
                    </div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">Thymine is more stable than uracil because it has an extra methyl group, protecting DNA from mutations over time.</div>
                </div>
            </div>
        ),
    },
    {
        id: 5,
        size: 'col-span-1',
        icon: TrendingUp,
        iconBg: 'bg-indigo-500/10 border-indigo-500/20',
        iconColor: 'text-indigo-400',
        title: 'Grades Improve',
        desc: 'Students who study with their AI tutor report better test confidence and higher grades.',
        visual: (
            <div className="mt-5">
                <div className="flex items-end gap-1 h-12">
                    {[30, 45, 40, 60, 55, 75, 90].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i === 6 ? '#3b82f6' : `rgba(59,130,246,${0.1 + i * 0.1})` }} />
                    ))}
                </div>
                <div className="text-[10px] text-slate-600 mt-1 text-center">Learning progress over 7 weeks</div>
            </div>
        ),
    },
    {
        id: 6,
        size: 'col-span-1',
        icon: GraduationCap,
        iconBg: 'bg-sky-500/10 border-sky-500/20',
        iconColor: 'text-sky-400',
        title: 'Works for All Learners',
        desc: 'Whether you are in high school, university, or self-studying — ExamGhost adapts its teaching style to you.',
        visual: null,
    },
    {
        id: 7,
        size: 'col-span-1',
        icon: Sparkles,
        iconBg: 'bg-violet-500/10 border-violet-500/20',
        iconColor: 'text-violet-400',
        title: 'Practice Quiz Generator',
        desc: 'Generate unlimited self-practice quizzes on any topic you are studying to test your own understanding.',
        visual: null,
    },
];

export default function Integrations() {
    return (
        <section className="py-28 bg-[#060a12] relative">
            <div className="glow-orb w-[600px] h-[400px] bg-indigo-600/8 top-0 left-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">Why ExamGhost</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Built for students who want to<br/>
                            <span className="gradient-text">actually understand</span>
                        </h2>
                        <p className="text-slate-500 text-lg max-w-xl mx-auto">
                            ExamGhost is your AI Tutor, AI Quiz Helper, and AI Teacher — all in one Chrome extension. Free to start.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {bentoCards.map((card, idx) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: idx * 0.07 }}
                            className={`${card.size} bg-[#0c1220] border border-white/6 rounded-2xl p-6 card-glow`}
                        >
                            <div className={`w-9 h-9 rounded-xl border ${card.iconBg} flex items-center justify-center mb-4`}>
                                <card.icon className={`w-4 h-4 ${card.iconColor}`} />
                            </div>
                            <h3 className="text-[15px] font-bold text-white mb-2">{card.title}</h3>
                            <p className="text-[13px] text-slate-500 leading-relaxed">{card.desc}</p>
                            {card.visual}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
