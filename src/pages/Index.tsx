import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ChatButton from "@/components/ChatButton";
import TargetAudience from "@/components/TargetAudience";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <TargetAudience />
        <PricingSection />
        <AboutSection />
        <ContactSection />
      </main>
      <ChatButton />
    </div>
  );
};

export default Index;