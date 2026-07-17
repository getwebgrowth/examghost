import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Privacy Policy | ExamGhost",
    description: "Privacy Policy for ExamGhost AI Study Companion.",
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-24 max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
                    
                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Information We Collect</h2>
                    <p className="mb-4">We collect information to provide better services to our users. This includes basic account information such as email addresses and usage data necessary to operate our AI tutor functionality.</p>
                    
                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. How We Use Your Information</h2>
                    <p className="mb-4">We use your information solely to deliver our study companion services, improve our AI models, and communicate important updates. We do not sell your personal data to third parties.</p>
                    
                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Data Security</h2>
                    <p className="mb-4">We implement industry-standard security measures, including AES-256 encryption, to protect your data. Your educational queries are processed securely without tying them to your personal identity in our logs.</p>
                    
                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Contact Us</h2>
                    <p className="mb-4">If you have any questions about this Privacy Policy, please visit our <a href="/contact" className="text-blue-600 hover:underline">Contact page</a>.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
