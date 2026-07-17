import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Terms of Service | ExamGhost",
    description: "Terms of Service for ExamGhost AI Study Companion.",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-24 max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Terms of Service</h1>
                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
                    
                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p className="mb-4">By accessing or using ExamGhost, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
                    
                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Use of Service</h2>
                    <p className="mb-4">ExamGhost is an AI study companion designed to assist with learning and comprehension. You agree to use the service in accordance with your educational institution's academic integrity policies.</p>
                    
                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Subscriptions and Payments</h2>
                    <p className="mb-4">Premium features require a subscription. Subscriptions are billed on a recurring basis. You may cancel your subscription at any time.</p>
                    
                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Limitation of Liability</h2>
                    <p className="mb-4">ExamGhost provides educational assistance "as is." We do not guarantee specific academic outcomes or grades. We are not liable for any disciplinary actions taken by educational institutions resulting from improper use of our tools.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
