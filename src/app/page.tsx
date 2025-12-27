import dynamic from "next/dynamic";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import HowItWorks from "@/components/HowItWorks";
import SimpleTestimonial from "@/components/SimpleTestimonial";
import Pricing from "@/components/Pricing";
import ToolsBanner from "@/components/ToolsBanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

// Lazy load non-critical components
const StickyCTA = dynamic(() => import("@/components/StickyCTA"));
const ExitIntentPopup = dynamic(() => import("@/components/ExitIntentPopup"));

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <AnnouncementBanner />
      <Navigation />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <SimpleTestimonial />
      <Pricing />
      <ToolsBanner />
      <FAQ />
      <Footer />
      <StickyCTA />
      <ExitIntentPopup />
    </main>
  );
}
