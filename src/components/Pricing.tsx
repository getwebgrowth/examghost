'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

const plans = [
    {
        name: 'Free',
        tagline: 'Perfect for getting started',
        price: '$0',
        period: '/month',
        cta: 'Start for Free',
        ctaStyle: 'bg-white/5 hover:bg-white/10 border border-white/10 text-white',
        highlighted: false,
        features: [
            { text: '10 AI-explained questions / day', included: true },
            { text: 'All question types', included: true },
            { text: 'Unlimited self-practice', included: true },
            { text: 'Skill tracking', included: false },
            { text: 'Priority AI models', included: false },
            { text: 'Personalized study plans', included: false },
        ]
    },
    {
        name: 'Basic',
        tagline: 'Best for students',
        price: '$9',
        period: '/month',
        cta: 'Get Started',
        ctaStyle: 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]',
        highlighted: true,
        badge: 'Most Popular',
        features: [
            { text: 'Unlimited AI explanations', included: true },
            { text: 'All question types', included: true },
            { text: 'Unlimited self-practice', included: true },
            { text: 'Full skill tracking', included: true },
            { text: 'Priority AI models', included: true },
            { text: 'Personalized study plans', included: false },
        ]
    },
    {
        name: 'Pro',
        tagline: 'For power learners',
        price: '$19',
        period: '/month',
        cta: 'Go Pro',
        ctaStyle: 'bg-white/5 hover:bg-white/10 border border-white/10 text-white',
        highlighted: false,
        features: [
            { text: 'Everything in Basic', included: true },
            { text: 'All question types', included: true },
            { text: 'Unlimited self-practice', included: true },
            { text: 'Full skill tracking', included: true },
            { text: 'Priority AI models', included: true },
            { text: 'Personalized study plans', included: true },
        ]
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-28 bg-[#070b15] relative">
            <div className="glow-orb w-[600px] h-[400px] bg-blue-600/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute inset-0 grid-bg opacity-30" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">Pricing</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Simple, transparent pricing
                        </h2>
                        <p className="text-slate-500 text-lg max-w-xl mx-auto">
                            Start for free, upgrade when you want more from your AI Tutor. No hidden fees, cancel anytime.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto items-start">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative rounded-2xl p-6 ${
                                plan.highlighted
                                    ? 'bg-[#0d1628] border-2 border-blue-500/40 shadow-[0_0_60px_rgba(59,130,246,0.12)] md:-mt-4 md:-mb-4'
                                    : 'bg-[#0c1220] border border-white/6'
                            }`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-[11px] font-bold rounded-full tracking-wider uppercase shadow-lg shadow-blue-600/30">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="mb-5">
                                <div className={`text-[13px] font-bold uppercase tracking-wider mb-0.5 ${plan.highlighted ? 'text-blue-400' : 'text-slate-400'}`}>
                                    {plan.name}
                                </div>
                                <div className="text-[12px] text-slate-600 mb-4">{plan.tagline}</div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-white">{plan.price}</span>
                                    <span className="text-slate-500 text-sm">{plan.period}</span>
                                </div>
                            </div>

                            <div className="h-px bg-white/5 mb-5" />

                            <ul className="space-y-3 mb-7">
                                {plan.features.map(({ text, included }, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[13px]">
                                        {included
                                            ? <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                            : <X className="w-4 h-4 text-white/15 shrink-0" />
                                        }
                                        <span className={included ? 'text-slate-300' : 'text-slate-600'}>{text}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-2.5 px-4 rounded-xl font-bold text-[14px] transition-all ${plan.ctaStyle}`}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-20 text-center bg-gradient-to-br from-[#0d1628] to-[#0c1220] border border-blue-500/15 rounded-2xl p-10 relative overflow-hidden"
                >
                    <div className="glow-orb w-[400px] h-[200px] bg-blue-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2">Start learning smarter today</h3>
                        <p className="text-slate-500 text-sm mb-7">Join students who use ExamGhost as their personal AI Tutor, Quiz Helper, and AI Teacher.</p>
                        <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-0.5">
                            ✦ Start for Free
                        </button>
                        <p className="text-[12px] text-slate-600 mt-4">No credit card required · Cancel anytime · 7-day money-back guarantee</p>
                        <p className="text-[11px] text-slate-500 mt-6 max-w-lg mx-auto leading-relaxed border-t border-white/5 pt-4">
                            All plans are powered by Google Gemini Flash. You can also bring your own Gemini API key for custom rate limits. ExamGhost is an independent tool and is not officially affiliated with Google or Gemini.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
