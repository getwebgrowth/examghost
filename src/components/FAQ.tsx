'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: 'What exactly does ExamGhost do?',
        a: 'ExamGhost is an AI-powered Chrome extension that acts as your personal tutor while you study. When you highlight text or ask a question on any webpage, it instantly provides clear, step-by-step explanations to help you understand the material — not just memorize answers.'
    },
    {
        q: 'What types of questions can ExamGhost help with?',
        a: 'ExamGhost supports multiple choice, true/false, short answer, fill-in-the-blank, and complex multi-part questions. It handles Math, Science, History, Literature, and 50+ languages — making it a universal study companion.'
    },
    {
        q: 'Is ExamGhost allowed by educational institutions?',
        a: 'ExamGhost is a legitimate AI study tool similar to tutoring services. It helps students understand and learn material rather than providing cheating tools. Like a calculator or a textbook, how it\'s used determines its academic appropriateness. We encourage responsible use for learning and genuine comprehension.'
    },
    {
        q: 'How does skill tracking work?',
        a: 'After each study session, ExamGhost analyzes your performance and identifies 5–10 key concepts you studied. It tracks your mastery over time, showing you exactly where you\'re improving and which areas need more focus. This helps you study efficiently instead of revisiting what you already know.'
    },
    {
        q: 'What platforms does ExamGhost work on?',
        a: 'ExamGhost works on any webpage in Chrome, including Canvas, Blackboard, Coursera, Khan Academy, Google Classroom, Moodle, and any online learning portal. If you can view it in Chrome, ExamGhost can help you understand it.'
    },
    {
        q: 'Can I cancel my subscription anytime?',
        a: 'Absolutely. You can cancel at any time with no questions asked. Your access continues until the end of your current billing period. All paid plans also include a 7-day money-back guarantee.'
    },
    {
        q: 'Is my data private and secure?',
        a: 'Yes. We take privacy extremely seriously. ExamGhost does not log, store, or share your academic activity or personal data. Your sessions are processed securely and never tied to your identity.'
    },
    {
        q: 'Does ExamGhost work in my language?',
        a: 'Yes! ExamGhost supports 50+ languages. Whether you\'re studying in English, Spanish, French, German, Mandarin, or any other major language, our AI can understand and explain content accurately.'
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
                        <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">Support</p>
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
                                className="w-full px-6 py-4.5 flex items-center justify-between text-left gap-4 focus:outline-none"
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

                {/* Contact prompt */}
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
