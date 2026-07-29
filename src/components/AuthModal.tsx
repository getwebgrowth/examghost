'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useAuth } from './AuthContext';

export default function AuthModal() {
    const { isOpen, tab, openAuth, closeAuth } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [agree, setAgree] = useState(false);
    
    // Status states
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [loadingStep, setLoadingStep] = useState(0);
    const [submittedEmail, setSubmittedEmail] = useState('');

    useEffect(() => {
        if (!isOpen) {
            // Reset form on close
            const timer = setTimeout(() => {
                setStatus('idle');
                setLoadingStep(0);
                setEmail('');
                setPassword('');
                setName('');
                setAgree(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Handle steps animation
    useEffect(() => {
        if (status === 'loading') {
            const steps = [
                'Securing credentials...',
                'Verifying verification system...',
                'Provisioning sandbox database...',
                'Finalizing early access authorization...'
            ];
            
            if (loadingStep < steps.length) {
                const timer = setTimeout(() => {
                    setLoadingStep(prev => prev + 1);
                }, 800);
                return () => clearTimeout(timer);
            } else {
                setStatus('success');
            }
        }
    }, [status, loadingStep]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (tab === 'register' && !agree) return;
        setSubmittedEmail(email || 'your email');
        setStatus('loading');
        setLoadingStep(0);
    };

    const handleSocialClick = (platform: string) => {
        setSubmittedEmail(`${platform.toLowerCase()}user@example.com`);
        setStatus('loading');
        setLoadingStep(0);
    };

    const steps = [
        'Securing credentials...',
        'Verifying verification system...',
        'Provisioning sandbox database...',
        'Finalizing early access authorization...'
    ];

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeAuth}
                    className="absolute inset-0 bg-black/60 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    transition={{ type: 'spring', duration: 0.4 }}
                    className="relative w-full max-w-md bg-[#0b101d] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)] z-10"
                >
                    {/* Decorative gradient overlay */}
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
                    
                    {/* Close Button */}
                    <button
                        onClick={closeAuth}
                        className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors z-20"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Idle Form State */}
                    {status === 'idle' && (
                        <div className="p-6 sm:p-8">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                                    <Sparkles className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-bold text-lg text-white">ExamGhost Account</span>
                            </div>

                            {/* Tabs */}
                            <div className="flex bg-white/5 p-1 rounded-xl mb-6">
                                <button
                                    onClick={() => openAuth('register')}
                                    className={`flex-1 py-2 text-xs sm:text-[13px] font-bold rounded-lg transition-all ${
                                        tab === 'register' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                                    }`}
                                >
                                    Create Account
                                </button>
                                <button
                                    onClick={() => openAuth('login')}
                                    className={`flex-1 py-2 text-xs sm:text-[13px] font-bold rounded-lg transition-all ${
                                        tab === 'login' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                                    }`}
                                >
                                    Sign In
                                </button>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">
                                {tab === 'register' ? 'Join ExamGhost' : 'Welcome back'}
                            </h3>
                            <p className="text-slate-400 text-[13px] mb-6">
                                {tab === 'register' 
                                    ? 'Create an account to start practicing and customizing your AI learning experience.' 
                                    : 'Sign in to access your custom AI models, notes, and quiz history.'}
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {tab === 'register' && (
                                    <div>
                                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                            <input
                                                type="text"
                                                required
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                                placeholder="Alex Mercer"
                                                className="w-full bg-white/3 hover:bg-white/5 focus:bg-white/5 border border-white/8 hover:border-white/12 focus:border-blue-500 rounded-xl py-3 pl-10 pr-4 text-[13px] text-white placeholder-slate-500 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            placeholder="alex@example.com"
                                            className="w-full bg-white/3 hover:bg-white/5 focus:bg-white/5 border border-white/8 hover:border-white/12 focus:border-blue-500 rounded-xl py-3 pl-10 pr-4 text-[13px] text-white placeholder-slate-500 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input
                                            type="password"
                                            required
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full bg-white/3 hover:bg-white/5 focus:bg-white/5 border border-white/8 hover:border-white/12 focus:border-blue-500 rounded-xl py-3 pl-10 pr-4 text-[13px] text-white placeholder-slate-500 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                {tab === 'register' && (
                                    <label className="flex items-start gap-3 cursor-pointer group mt-2 select-none">
                                        <input
                                            type="checkbox"
                                            required
                                            checked={agree}
                                            onChange={e => setAgree(e.target.checked)}
                                            className="mt-0.5 rounded border-white/10 bg-white/5 text-blue-600 focus:ring-0 focus:ring-offset-0 focus:outline-none"
                                        />
                                        <span className="text-[12px] text-slate-400 group-hover:text-slate-300 transition-colors leading-snug">
                                            I agree to the Terms of Service and Privacy Policy
                                        </span>
                                    </label>
                                )}

                                <button
                                    type="submit"
                                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-[14px] rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] mt-2"
                                >
                                    {tab === 'register' ? 'Create Free Account' : 'Sign In'}
                                </button>
                            </form>

                            {/* Divider */}
                            <div className="flex items-center gap-3 my-6">
                                <div className="h-px bg-white/5 flex-1" />
                                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Or continue with</span>
                                <div className="h-px bg-white/5 flex-1" />
                            </div>

                            {/* Socials */}
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => handleSocialClick('Google')}
                                    className="flex items-center justify-center gap-2 py-3 bg-white/3 hover:bg-white/6 border border-white/8 hover:border-white/12 rounded-xl text-[13px] font-semibold text-slate-300 hover:text-white transition-all active:scale-[0.98]"
                                >
                                    <FaGoogle className="w-3.5 h-3.5 text-red-400" />
                                    Google
                                </button>
                                <button
                                    onClick={() => handleSocialClick('GitHub')}
                                    className="flex items-center justify-center gap-2 py-3 bg-white/3 hover:bg-white/6 border border-white/8 hover:border-white/12 rounded-xl text-[13px] font-semibold text-slate-300 hover:text-white transition-all active:scale-[0.98]"
                                >
                                    <FaGithub className="w-3.5 h-3.5 text-slate-300" />
                                    GitHub
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Loading State */}
                    {status === 'loading' && (
                        <div className="p-8 text-center min-h-[380px] flex flex-col items-center justify-center">
                            <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-6" />
                            <h3 className="text-lg font-bold text-white mb-2">Setting up your profile</h3>
                            <div className="h-4 overflow-hidden relative w-48 mx-auto mb-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={loadingStep}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-[12px] text-slate-400 absolute inset-x-0 font-medium"
                                    >
                                        {steps[loadingStep] || 'Finalizing...'}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <div className="w-full max-w-[200px] h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(loadingStep / steps.length) * 100}%` }}
                                    transition={{ duration: 0.8 }}
                                    className="h-full bg-blue-600 rounded-full"
                                />
                            </div>
                        </div>
                    )}

                    {/* Success State */}
                    {status === 'success' && (
                        <div className="p-8 text-center">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: 'spring', damping: 15 }}
                                className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                            >
                                <CheckCircle2 className="w-7 h-7" />
                            </motion.div>

                            <h3 className="text-2xl font-bold text-white mb-3">Early Access Approved!</h3>
                            <div className="space-y-4 mb-8">
                                <p className="text-slate-300 text-[14px] leading-relaxed">
                                    Thank you for registering! ExamGhost accounts are currently being rolled out in private batches.
                                </p>
                                <p className="text-slate-400 text-[13px] leading-relaxed bg-white/3 border border-white/5 rounded-xl p-3.5 break-all">
                                    We have reserved your spot for <span className="text-blue-400 font-semibold">{submittedEmail}</span>. An activation link will be dispatched shortly.
                                </p>
                            </div>

                            <button
                                onClick={closeAuth}
                                className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-[14px] rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
                            >
                                Done
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
