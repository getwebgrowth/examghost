'use client';
import { Bot, Mail } from 'lucide-react';
import { FaChrome } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#060a12] border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

                    {/* Brand */}
                    <div className="md:col-span-1">
                        <a href="/" className="flex items-center gap-2.5 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                                <Bot className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-bold text-[17px] text-white tracking-tight">ExamGhost</span>
                        </a>
                        <p className="text-slate-500 text-[13px] leading-relaxed mb-5">
                            Your AI-powered tutor and study companion — available everywhere you learn.
                        </p>
                        <a
                            href="https://chromewebstore.google.com/"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/20"
                        >
                            <FaChrome className="w-3.5 h-3.5" />
                            Add to Chrome
                        </a>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-4">Product</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'How It Works', href: '#how-it-works' },
                                { label: 'Features', href: '#features' },
                                { label: 'Pricing', href: '#pricing' },
                                { label: 'FAQ', href: '#faq' },
                            ].map(({ label, href }) => (
                                <li key={label}>
                                    <a href={href} className="text-[13px] text-slate-500 hover:text-slate-200 transition-colors font-medium">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Privacy Policy', href: '/privacy' },
                                { label: 'Terms of Service', href: '/terms' },
                                { label: 'Contact Us', href: '/contact' },
                            ].map(({ label, href }) => (
                                <li key={label}>
                                    <a href={href} className="text-[13px] text-slate-500 hover:text-slate-200 transition-colors font-medium">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-4">Connect</h4>
                        <a
                            href="mailto:support@examghost.com"
                            className="flex items-center gap-2 text-[13px] text-slate-500 hover:text-slate-200 transition-colors font-medium"
                        >
                            <Mail className="w-3.5 h-3.5" />
                            support@examghost.com
                        </a>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="border-t border-white/5 pt-6 pb-6 text-center">
                    <p className="text-[11px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Disclaimer: ExamGhost is an independent AI Tutor, AI Quiz Helper, and AI Teacher extension powered by Google Gemini Flash. Google, Gemini, Canvas, Blackboard, Coursera, Khan Academy, and Moodle are trademarks of their respective owners. ExamGhost is not officially associated with or endorsed by these platforms. Users can also bring their own Gemini API key for custom usage.
                    </p>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[12px] text-slate-600">
                        © {new Date().getFullYear()} ExamGhost. All rights reserved.
                    </p>
                    <p className="text-[12px] text-slate-600">
                        Built to help students learn smarter 🎓
                    </p>
                </div>
            </div>
        </footer>
    );
}
