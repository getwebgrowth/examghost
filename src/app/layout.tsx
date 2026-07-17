import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ExamGhost AI - Your Ultimate AI Study Companion & Tutor",
  description: "Master your courses with an intelligent AI tutor that provides step-by-step explanations and seamless study assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased selection:bg-primary/20`}>
        {children}
      </body>
    </html>
  );
}
