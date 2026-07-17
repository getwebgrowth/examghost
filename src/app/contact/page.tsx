import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, Clock } from "lucide-react";

export const metadata = {
    title: "Contact Us | ExamGhost",
    description: "Get in touch with the ExamGhost support team.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-24 max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 text-center">Contact Us</h1>
                <p className="text-lg text-slate-600 text-center mb-16 max-w-2xl mx-auto">
                    Need help with your account or have questions about our AI Study Companion? Our support team is here for you.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Email Support</h3>
                        <p className="text-slate-600 mb-6">For billing, account issues, and general inquiries.</p>
                        <a href="mailto:support@examghost.com" className="font-bold text-blue-600 hover:text-blue-700">support@examghost.com</a>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-[#5865F2]/10 text-[#5865F2] rounded-full flex items-center justify-center mb-6">
                            <MessageCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Discord Community</h3>
                        <p className="text-slate-600 mb-6">For technical support, feature requests, and quick answers.</p>
                        <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl font-bold transition-all">
                            Join our Discord
                        </a>
                    </div>
                </div>

                <div className="mt-16 bg-blue-50 rounded-2xl p-8 flex items-start gap-4">
                    <Clock className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2">Support Hours</h4>
                        <p className="text-slate-600">Our team operates Monday - Friday, 9:00 AM to 6:00 PM EST. We aim to respond to all inquiries within 24 hours.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
