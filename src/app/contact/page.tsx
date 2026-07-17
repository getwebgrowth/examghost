'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, Clock, Bot } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#070b15]">
            <Navbar />
            <div className="pt-28 pb-24 max-w-5xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">Support</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Have a question or need help? Our support team is ready to assist you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">

                    {/* Left: Contact info */}
                    <div className="lg:col-span-2 space-y-4">

                        <div className="bg-[#0c1220] border border-white/6 rounded-2xl p-6">
                            <div className="w-10 h-10 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                                <Mail className="w-5 h-5 text-blue-400" />
                            </div>
                            <h3 className="text-[15px] font-bold text-white mb-2">Email Support</h3>
                            <p className="text-slate-500 text-sm mb-3">For billing, account issues, and general inquiries.</p>
                            <a href="mailto:support@examghost.com" className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors">
                                support@examghost.com
                            </a>
                        </div>

                        <div className="bg-[#0c1220] border border-white/6 rounded-2xl p-6">
                            <div className="w-10 h-10 bg-indigo-600/10 border border-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                                <MessageCircle className="w-5 h-5 text-indigo-400" />
                            </div>
                            <h3 className="text-[15px] font-bold text-white mb-2">Discord Community</h3>
                            <p className="text-slate-500 text-sm mb-4">Quick answers, feature requests, and community support.</p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl font-semibold text-sm transition-all"
                            >
                                Join our Discord
                            </a>
                        </div>

                        <div className="bg-[#0c1220] border border-white/6 rounded-2xl p-6">
                            <div className="w-10 h-10 bg-emerald-600/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                                <Clock className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h3 className="text-[15px] font-bold text-white mb-2">Response Time</h3>
                            <p className="text-slate-500 text-sm">Monday – Friday, 9:00 AM – 6:00 PM EST.</p>
                            <p className="text-slate-500 text-sm mt-1">We reply within <span className="text-white font-semibold">24 hours</span>.</p>
                        </div>

                        {/* About ExamGhost */}
                        <div className="bg-blue-600/8 border border-blue-500/15 rounded-2xl p-5">
                            <div className="flex items-start gap-3">
                                <Bot className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                <p className="text-[13px] text-slate-400 leading-relaxed">
                                    <span className="text-blue-300 font-semibold">ExamGhost</span> is an AI Tutor, AI Quiz Helper, and AI Teacher Chrome extension designed to help students learn and understand subjects better.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact form */}
                    <div className="lg:col-span-3">
                        <div className="bg-[#0c1220] border border-white/6 rounded-2xl p-8">
                            {submitted ? (
                                <div className="text-center py-10">
                                    <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                        <Mail className="w-7 h-7 text-emerald-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                                    <p className="text-slate-400 text-sm">We&apos;ll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-[17px] font-bold text-white mb-6">Send us a message</h2>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Your name"
                                                    value={form.name}
                                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                                    className="w-full bg-[#080c18] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20 transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Email</label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="your@email.com"
                                                    value={form.email}
                                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                                    className="w-full bg-[#080c18] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20 transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Subject</label>
                                            <select
                                                value={form.subject}
                                                onChange={e => setForm({ ...form, subject: e.target.value })}
                                                className="w-full bg-[#080c18] border border-white/8 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20 transition-all"
                                            >
                                                <option value="">Select a topic...</option>
                                                <option value="billing">Billing & Subscription</option>
                                                <option value="account">Account Issues</option>
                                                <option value="technical">Technical Support</option>
                                                <option value="feature">Feature Request</option>
                                                <option value="general">General Question</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Message</label>
                                            <textarea
                                                required
                                                rows={5}
                                                placeholder="Describe your question or issue..."
                                                value={form.message}
                                                onChange={e => setForm({ ...form, message: e.target.value })}
                                                className="w-full bg-[#080c18] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-[14px] rounded-xl transition-all shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-0.5"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
