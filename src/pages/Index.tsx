import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomesSection from "@/components/HomesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HomesSection />
      <HowItWorksSection />
      <PricingSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
