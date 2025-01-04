import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ExpressInterestDialog from "./ExpressInterestDialog";

const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="container py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Transforming Real Estate Insights in Mauritius
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Unlock the power of data with AI-driven insights tailored for real estate professionals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="gap-2" onClick={scrollToPricing}>
            Explore Plans
            <ArrowRight className="h-4 w-4" />
          </Button>
          <ExpressInterestDialog>
            <Button size="lg" variant="outline">
              Express Interest
            </Button>
          </ExpressInterestDialog>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="relative w-full max-w-[1200px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-background/0 rounded-lg z-10" />
          <img 
            src="/lovable-uploads/77f45369-6279-4e62-bdf1-eb2580acf14f.png"
            alt="Aerial view of Mauritius coastline showing pristine turquoise waters and lush green mountains"
            className="w-full h-[675px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;