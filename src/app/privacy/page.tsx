import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Privacy Policy | ExamGhost",
    description: "Privacy Policy for ExamGhost — AI Tutor, AI Quiz Helper and AI Teacher Chrome Extension.",
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#070b15]">
            <Navbar />
            <div className="pt-28 pb-24 max-w-3xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="mb-12">
                    <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">Legal</p>
                    <h1 className="text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
                    <p className="text-slate-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

                <div className="space-y-10 text-slate-400 text-[15px] leading-relaxed">

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">1. Who We Are</h2>
                        <p>ExamGhost (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) provides an AI Tutor Chrome extension that helps students learn and understand subjects through AI-powered explanations, guided teaching, and self-practice quizzes. This Privacy Policy explains how we collect, use, and protect your information when you use our service.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">2. What Information We Collect</h2>
                        <p className="mb-3">We collect the minimum information needed to provide our tutoring service:</p>
                        <ul className="space-y-2 list-disc list-inside text-slate-400 ml-2">
                            <li><span className="text-slate-300 font-medium">Account information:</span> Email address and name when you register.</li>
                            <li><span className="text-slate-300 font-medium">Usage data:</span> Which subjects you study and how you interact with the extension, to improve our AI tutoring quality.</li>
                            <li><span className="text-slate-300 font-medium">Payment information:</span> Processed securely by our payment provider. We never store your card details.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">3. What We Do NOT Collect</h2>
                        <p className="mb-3">We want to be transparent:</p>
                        <ul className="space-y-2 list-disc list-inside text-slate-400 ml-2">
                            <li>We do <span className="text-white font-semibold">not</span> log or store your individual study questions or conversations.</li>
                            <li>We do <span className="text-white font-semibold">not</span> share your data with your educational institution.</li>
                            <li>We do <span className="text-white font-semibold">not</span> sell your personal information to any third party.</li>
                            <li>We do <span className="text-white font-semibold">not</span> track your browsing activity outside of the ExamGhost extension interface.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">4. How We Use Your Information</h2>
                        <p className="mb-3">Your data is used only to:</p>
                        <ul className="space-y-2 list-disc list-inside text-slate-400 ml-2">
                            <li>Deliver and improve the AI tutoring and explanation service</li>
                            <li>Show you your personal learning progress dashboard</li>
                            <li>Send you important account and billing notifications</li>
                            <li>Improve the quality and accuracy of our AI explanations</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">5. Data Security</h2>
                        <p>We use industry-standard AES-256 encryption and secure HTTPS connections to protect your data. All data is stored on secure servers. We regularly review our security practices to ensure your information stays safe.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">6. Cookies</h2>
                        <p>We use essential cookies only — to keep you logged in and remember your preferences. We do not use advertising or tracking cookies.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">7. Your Rights</h2>
                        <p>You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at <a href="mailto:privacy@examghost.com" className="text-blue-400 hover:text-blue-300 underline">privacy@examghost.com</a>.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">8. Changes to This Policy</h2>
                        <p>We may update this policy from time to time. We will notify you of significant changes by email or by posting a notice on our website. Continued use of ExamGhost after changes means you accept the updated policy.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">9. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@examghost.com" className="text-blue-400 hover:text-blue-300 underline">privacy@examghost.com</a> or visit our <a href="/contact" className="text-blue-400 hover:text-blue-300 underline">Contact page</a>.</p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}
