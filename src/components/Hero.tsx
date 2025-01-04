import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";
import ExpressInterestDialog from "./ExpressInterestDialog";
import { Card, CardContent } from "./ui/card";

const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="container py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Transforming Real Estate in Mauritius
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
      
      <Card className="max-w-[800px] mx-auto bg-primary/5 border-none">
        <CardContent className="flex items-start gap-4 p-6">
          <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
          <div className="space-y-2">
            <p className="text-lg md:text-xl italic text-foreground">
              "Without big data, you are blind and deaf and in the middle of a freeway."
            </p>
            <p className="text-sm text-muted-foreground font-medium">
              — Geoffrey Moore
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Hero;