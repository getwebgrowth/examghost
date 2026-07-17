'use client';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Sparkles, ShieldCheck, Clock, Globe } from 'lucide-react';

const bentoCards = [
    {
        id: 1,
        size: 'col-span-1 md:col-span-2',
        icon: Target,
        iconBg: 'bg-amber-500/10 border-amber-500/20',
        iconColor: 'text-amber-400',
        title: 'Subject Skills Breakdown',
        desc: 'AI identifies 5–10 key concepts per session and tracks mastery over time.',
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
        title: '< 2s Response',
        desc: 'Answers and explanations delivered in under 2 seconds. Never lose your study flow.',
        visual: (
            <div className="mt-6 flex items-center justify-center">
                <div className="relative w-20 h-20">
                    <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                        <circle cx="40" cy="40" r="32" strokeWidth="8" className="stroke-white/5 fill-none" />
                        <circle cx="40" cy="40" r="32" strokeWidth="8" strokeDasharray="200.96" strokeDashoffset="30" strokeLinecap="round" className="stroke-blue-500 fill-none" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[15px] font-black text-white">1.4s</span>
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
        desc: 'Zero data logging. Your academic activity is never stored or shared.',
        visual: null,
    },
    {
        id: 4,
        size: 'col-span-1 md:col-span-2',
        icon: Globe,
        iconBg: 'bg-violet-500/10 border-violet-500/20',
        iconColor: 'text-violet-400',
        title: 'Works Everywhere',
        desc: 'Canvas, Blackboard, Coursera, Google Classroom, Khan Academy and any learning platform.',
        visual: (
            <div className="mt-5 flex flex-wrap gap-2">
                {['Canvas', 'Blackboard', 'Coursera', 'Khan Academy', 'Google Classroom', 'Moodle'].map(name => (
                    <span key={name} className="px-2.5 py-1 bg-white/4 border border-white/8 rounded-full text-[11px] text-slate-400 font-medium">{name}</span>
                ))}
            </div>
        ),
    },
    {
        id: 5,
        size: 'col-span-1',
        icon: TrendingUp,
        iconBg: 'bg-indigo-500/10 border-indigo-500/20',
        iconColor: 'text-indigo-400',
        title: 'Grade Improvement',
        desc: 'Students report an average grade improvement within 30 days.',
        visual: (
            <div className="mt-5">
                <div className="flex items-end gap-1 h-12">
                    {[30, 45, 40, 60, 55, 75, 90].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i === 6 ? '#3b82f6' : `rgba(59,130,246,${0.1 + i * 0.1})` }} />
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: 6,
        size: 'col-span-1',
        icon: Sparkles,
        iconBg: 'bg-sky-500/10 border-sky-500/20',
        iconColor: 'text-sky-400',
        title: 'Instant AI Analysis',
        desc: 'Comprehensive feedback after every question so you understand the why, not just the what.',
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
                            Advanced insights, built for students
                        </h2>
                        <p className="text-slate-500 text-lg max-w-xl mx-auto">
                            Everything you need to go from confused to confident, powered by AI.
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
                                <card.icon className={`w-4.5 h-4.5 ${card.iconColor}`} />
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
