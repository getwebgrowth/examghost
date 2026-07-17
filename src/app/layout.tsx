import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ExamGhost — AI Tutor Chrome Extension | Study Smarter",
  description: "ExamGhost is an AI-powered Chrome extension that acts as your personal tutor on any webpage. Get instant step-by-step explanations, skill tracking, and personalized study guidance. Free to start.",
  keywords: "AI tutor, Chrome extension, study assistant, AI quiz helper, exam preparation, homework help, AI teacher",
  openGraph: {
    title: "ExamGhost — AI Tutor Chrome Extension",
    description: "Your personal AI tutor on every webpage. Instant explanations, skill tracking, and study guidance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ExamGhost — AI Tutor Chrome Extension",
    description: "Your personal AI tutor on every webpage. Instant explanations, skill tracking, and study guidance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#070b15] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
