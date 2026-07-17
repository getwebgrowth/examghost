'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, BookOpen, Brain, Lightbulb, MessageSquare, BarChart3 } from 'lucide-react';

export default function Features() {
    return (
        <section id="features" className="py-28 bg-[#070b15] relative overflow-hidden">
            <div className="glow-orb w-[500px] h-[500px] bg-blue-600/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-28">

                {/* ===== FEATURE 1: AI Tutor explains any topic ===== */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-4">AI Tutor · AI Teacher</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                            Ask any topic,<br />
                            <span className="text-slate-400">get a clear explanation</span>
                        </h2>
                        <p className="text-slate-400 text-[16px] leading-relaxed mb-8">
                            ExamGhost works like a personal teacher who is always available. Whether you are learning maths, science, history, or any other subject — just ask and get a clear, simple explanation tailored to your level.
                        </p>
                        <ul className="space-y-3.5">
                            {[
                                'Step-by-step explanations for any concept',
                                'Covers Math, Science, History, Literature & more',
                                'Supports 50+ languages for global learners',
                                'Simple language — no confusing jargon',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300 text-[14px] font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Visual: AI teacher explaining a concept */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full" />
                        <div className="relative bg-[#0d1220] border border-white/8 rounded-2xl p-6 shadow-2xl">
                            {/* Topic header */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <Brain className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <div className="text-[12px] font-bold text-white">AI Tutor</div>
                                    <div className="text-[10px] text-emerald-400 font-medium">● Teaching now</div>
                                </div>
                            </div>
                            {/* Student question */}
                            <div className="bg-[#080c18] rounded-xl p-3 border border-white/5 mb-3">
                                <div className="text-[11px] text-slate-500 uppercase tracking-wider font-bold mb-1.5 flex items-center gap-1.5">
                                    <MessageSquare className="w-3 h-3" /> Student asked
                                </div>
                                <p className="text-[13px] text-slate-300 font-medium">&ldquo;Can you explain Newton&apos;s Second Law in simple words?&rdquo;</p>
                            </div>
                            {/* AI teacher response */}
                            <div className="bg-blue-600/8 border border-blue-500/15 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                                    <span className="text-[11px] font-bold text-blue-300 uppercase tracking-wider">AI Explanation</span>
                                </div>
                                <p className="text-[12px] text-slate-300 leading-relaxed mb-3">
                                    <span className="text-blue-400 font-bold">Force = Mass × Acceleration.</span> Simply put: the harder you push something, the faster it moves. A heavier object needs more force to speed up.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Example given ✓', 'Formula shown ✓', 'Simple language ✓'].map(t => (
                                        <span key={t} className="px-2 py-0.5 bg-blue-500/15 text-blue-300 text-[10px] rounded-md font-semibold">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ===== FEATURE 2: AI Quiz Helper ===== */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Visual: Practice quiz + skill tracking */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute inset-0 bg-indigo-600/8 blur-[80px] rounded-full" />
                        <div className="relative bg-[#0d1220] border border-white/8 rounded-2xl p-6 shadow-2xl">
                            {/* Quiz header */}
                            <div className="text-[12px] font-bold text-white mb-1 flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-indigo-400" />
                                Self-Practice Quiz — Biology
                            </div>
                            <div className="text-[10px] text-slate-500 mb-5 font-medium">Practice to test your own understanding</div>
                            {/* Sample question */}
                            <div className="bg-[#080c18] rounded-xl p-4 border border-white/5 mb-4">
                                <div className="text-[12px] text-slate-300 font-semibold mb-3">What organelle is responsible for photosynthesis in plant cells?</div>
                                <div className="space-y-2">
                                    {[
                                        { text: 'Mitochondria', correct: false },
                                        { text: 'Chloroplast', correct: true },
                                        { text: 'Ribosome', correct: false },
                                    ].map(({ text, correct }, i) => (
                                        <div key={i} className={`flex items-center gap-2.5 p-2 rounded-lg border text-[12px] ${correct ? 'border-emerald-500/30 bg-emerald-500/8 text-emerald-300' : 'border-white/5 bg-white/2 text-slate-500'}`}>
                                            <div className={`w-3.5 h-3.5 rounded-full border shrink-0 ${correct ? 'border-emerald-500 bg-emerald-500' : 'border-white/15'}`} />
                                            {text}
                                            {correct && <span className="ml-auto text-[10px] text-emerald-400 font-bold">Correct ✓</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* AI explanation after quiz */}
                            <div className="bg-blue-600/8 border border-blue-500/15 rounded-xl p-3">
                                <div className="text-[10px] text-blue-400 font-bold uppercase tracking-wider mb-1.5">Why this is correct</div>
                                <p className="text-[11px] text-slate-400 leading-relaxed">Chloroplasts contain chlorophyll which captures sunlight to produce glucose — the process of photosynthesis.</p>
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
                        <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">AI Quiz Helper</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                            Practice quizzes that<br />
                            <span className="text-slate-400">teach you, not just test you</span>
                        </h2>
                        <p className="text-slate-400 text-[16px] leading-relaxed mb-8">
                            ExamGhost creates practice quizzes from any topic you are studying. After each question, it explains <em>why</em> the answer is correct — so you build real understanding, not just guesswork.
                        </p>
                        <ul className="space-y-3.5">
                            {[
                                'AI generates practice questions on your topic',
                                'Explains the reasoning behind every answer',
                                'Tracks which concepts you have mastered',
                                'Personalized — focuses on your weak areas',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300 text-[14px] font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* ===== FEATURE 3: Skill tracking ===== */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-emerald-500 text-sm font-semibold tracking-widest uppercase mb-4">Learning Progress</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                            Know exactly what<br />
                            <span className="text-slate-400">you have learned</span>
                        </h2>
                        <p className="text-slate-400 text-[16px] leading-relaxed mb-8">
                            See your learning progress grow over time. ExamGhost tracks your understanding across topics and tells you exactly what to review next so you study efficiently.
                        </p>
                        <div className="space-y-5">
                            {[
                                { icon: BarChart3, title: 'Visual Progress Dashboard', desc: 'See your mastery level for each subject you have studied.', color: 'text-blue-400' },
                                { icon: Lightbulb, title: 'Smart Study Suggestions', desc: 'AI tells you what to review based on where your gaps are.', color: 'text-amber-400' },
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

                    {/* Progress visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-emerald-600/8 blur-[80px] rounded-full" />
                        <div className="relative bg-[#0d1220] border border-white/8 rounded-2xl p-6 shadow-2xl">
                            <div className="text-[12px] font-bold text-white mb-5 flex items-center gap-2">
                                <BarChart3 className="w-4 h-4 text-emerald-400" />
                                My Learning Progress
                            </div>
                            <div className="space-y-4">
                                {[
                                    { label: 'Algebra', pct: 87, color: 'bg-blue-500', tag: 'Strong' },
                                    { label: 'Cell Biology', pct: 72, color: 'bg-indigo-500', tag: 'Good' },
                                    { label: 'World History', pct: 65, color: 'bg-violet-500', tag: 'Good' },
                                    { label: 'Chemical Bonds', pct: 40, color: 'bg-amber-500', tag: 'Review' },
                                ].map(({ label, pct, color, tag }, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between mb-1.5">
                                            <span className="text-[13px] text-slate-300 font-medium">{label}</span>
                                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${pct >= 70 ? 'text-emerald-400 bg-emerald-500/10' : 'text-amber-400 bg-amber-500/10'}`}>{tag}</span>
                                        </div>
                                        <div className="progress-bar">
                                            <div className={`progress-bar-fill ${color}`} style={{ width: `${pct}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5 p-3 bg-blue-600/8 border border-blue-500/15 rounded-xl">
                                <div className="flex items-start gap-2">
                                    <Lightbulb className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                                    <p className="text-[11px] text-slate-400 leading-relaxed">
                                        <span className="text-white font-semibold">AI Suggestion:</span> Great progress in Algebra! Focus on Chemical Bonds next to fill your knowledge gap.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
