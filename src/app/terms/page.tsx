import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Terms of Service | ExamGhost",
    description: "Terms of Service for ExamGhost — AI Tutor, AI Quiz Helper and AI Teacher Chrome Extension.",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#070b15]">
            <Navbar />
            <div className="pt-28 pb-24 max-w-3xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="mb-12">
                    <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">Legal</p>
                    <h1 className="text-4xl font-extrabold text-white mb-4">Terms of Service</h1>
                    <p className="text-slate-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

                <div className="space-y-10 text-slate-400 text-[15px] leading-relaxed">

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">1. About ExamGhost</h2>
                        <p>ExamGhost is an AI-powered tutoring tool provided as a Chrome browser extension. It serves as an AI Tutor, AI Quiz Helper, and AI Teacher — helping students learn and understand academic subjects through explanations, guided practice, and personalized learning support. ExamGhost is a learning aid, not an exam-taking tool.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">2. Acceptance of Terms</h2>
                        <p>By installing or using ExamGhost, you confirm that you are at least 13 years old and that you agree to these Terms of Service. If you do not agree, please uninstall the extension and do not use our service.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">3. Permitted Use</h2>
                        <p className="mb-3">ExamGhost is designed and intended solely as a personal learning and study tool. You agree to use ExamGhost only to:</p>
                        <ul className="space-y-2 list-disc list-inside ml-2">
                            <li>Get explanations of academic topics and concepts</li>
                            <li>Practice and test your own understanding with self-generated quizzes</li>
                            <li>Track your personal learning progress</li>
                            <li>Ask questions about subjects you are studying</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">4. Prohibited Use</h2>
                        <p className="mb-3">You agree that you will <span className="text-white font-semibold">NOT</span> use ExamGhost to:</p>
                        <ul className="space-y-2 list-disc list-inside ml-2">
                            <li>Cheat on or circumvent any academic assessment, exam, or test</li>
                            <li>Violate your school or university&apos;s academic integrity policy</li>
                            <li>Submit AI-generated content as your own original work without proper disclosure</li>
                            <li>Share your account with others</li>
                        </ul>
                        <p className="mt-3 p-3 bg-blue-600/8 border border-blue-500/15 rounded-xl text-[13px]">
                            <span className="text-blue-300 font-semibold">Note:</span> ExamGhost is a tutoring and learning tool. Like a calculator or a textbook, you are responsible for using it in accordance with your institution&apos;s rules.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">5. Subscriptions and Payments</h2>
                        <p className="mb-3">ExamGhost offers both free and paid subscription plans:</p>
                        <ul className="space-y-2 list-disc list-inside ml-2">
                            <li>The free plan is available with no payment required.</li>
                            <li>Paid plans are billed on a monthly or annual basis.</li>
                            <li>You may cancel your subscription at any time from your account settings.</li>
                            <li>All paid plans include a 7-day money-back guarantee.</li>
                            <li>Refunds after the 7-day period are at our discretion.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">6. Intellectual Property</h2>
                        <p>All content, features, and technology within ExamGhost are owned by us and protected by intellectual property laws. You may not copy, modify, or redistribute any part of our service without written permission.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">7. Disclaimer of Warranties</h2>
                        <p>ExamGhost is provided &quot;as is&quot; without warranties of any kind. We do not guarantee specific academic outcomes, grades, or results. AI explanations are for educational guidance only and may occasionally contain errors — always verify important information with your course materials.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">8. Limitation of Liability</h2>
                        <p>To the maximum extent permitted by law, ExamGhost shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service. Our total liability to you shall not exceed the amount you paid us in the last 3 months.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">9. Termination</h2>
                        <p>We reserve the right to suspend or terminate your account if you violate these Terms of Service, particularly the prohibited use section. You may also terminate your account at any time by contacting us.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">10. Contact Us</h2>
                        <p>Questions about these terms? Email us at <a href="mailto:legal@examghost.com" className="text-blue-400 hover:text-blue-300 underline">legal@examghost.com</a> or visit our <a href="/contact" className="text-blue-400 hover:text-blue-300 underline">Contact page</a>.</p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}
