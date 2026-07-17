'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: 'What exactly is ExamGhost?',
        a: 'ExamGhost is an AI Tutor, AI Quiz Helper, and AI Teacher — all built into one Chrome extension. It helps you understand topics you are studying by giving you clear explanations, answering your questions in simple language, and creating practice quizzes so you can test your own knowledge.'
    },
    {
        q: 'Does ExamGhost help with cheating or exams?',
        a: 'No — ExamGhost is a learning and tutoring tool, not a cheating tool. It is designed to help you understand subjects better through explanations and self-practice. Think of it like having a personal tutor available 24/7 who explains concepts to you and creates practice exercises — it helps you learn, not cheat.'
    },
    {
        q: 'How is ExamGhost different from a search engine?',
        a: 'Search engines give you links and raw information. ExamGhost acts as your personal AI teacher — it explains topics in simple language at your level, answers follow-up questions like a real tutor, and creates personalized practice quizzes to help you retain what you have learned.'
    },
    {
        q: 'What subjects can ExamGhost help me study?',
        a: 'ExamGhost covers a wide range of subjects including Mathematics, Science (Physics, Chemistry, Biology), History, Literature, Economics, Computer Science, and many more. It also supports 50+ languages, making it a great study companion for learners worldwide.'
    },
    {
        q: 'How do the AI-generated practice quizzes work?',
        a: 'Simply tell ExamGhost what topic you are studying and it will generate practice questions at your level. After you answer each question, it explains why the correct answer is right — so you learn the concept, not just the answer. All quizzes are for self-practice only.'
    },
    {
        q: 'Does ExamGhost track my learning progress?',
        a: 'Yes! ExamGhost tracks which topics you have studied and how well you understand each one. It shows you a visual progress dashboard and suggests what to review next based on your current knowledge gaps — helping you study efficiently and intelligently.'
    },
    {
        q: 'Is my personal data safe?',
        a: 'Absolutely. ExamGhost takes your privacy very seriously. We do not log, store, or share your study sessions or personal information. Everything is processed securely and your data is never tied to your identity.'
    },
    {
        q: 'Can I cancel my subscription anytime?',
        a: 'Yes. You can cancel at any time, no questions asked. Your access continues until the end of your current billing period. All paid plans also come with a 7-day money-back guarantee so you can try it risk-free.'
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-28 bg-[#060a12] relative">
            <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Frequently asked questions
                        </h2>
                        <p className="text-slate-500 text-lg">
                            Everything you need to know about ExamGhost.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                                openIndex === idx
                                    ? 'border-blue-500/25 bg-[#0d1628]'
                                    : 'border-white/5 bg-[#0c1220] hover:border-white/10'
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left gap-4 focus:outline-none"
                            >
                                <span className={`text-[14px] font-semibold transition-colors ${openIndex === idx ? 'text-white' : 'text-slate-300'}`}>
                                    {faq.q}
                                </span>
                                <ChevronDown className={`w-4 h-4 shrink-0 transition-all duration-300 ${openIndex === idx ? 'rotate-180 text-blue-400' : 'text-slate-500'}`} />
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                                    >
                                        <div className="px-6 pb-5 text-[14px] text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 text-center text-[14px] text-slate-500">
                    Still have questions?{' '}
                    <a href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-2 transition-colors">
                        Contact our support team →
                    </a>
                </div>
            </div>
        </section>
    );
}
