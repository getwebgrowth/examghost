import Link from 'next/link';
import { Bot } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#070b15] grid-bg flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Bot className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-[80px] font-black text-white/5 leading-none mb-2">404</div>
                <h2 className="text-2xl font-bold text-white mb-3">Page not found</h2>
                <p className="text-slate-400 text-sm mb-8">
                    The page you are looking for does not exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/20"
                >
                    Back to home
                </Link>
            </div>
        </div>
    );
}
