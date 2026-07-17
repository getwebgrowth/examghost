import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GhostMode from "@/components/GhostMode";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <GhostMode />
      <Features />
      <Integrations />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
