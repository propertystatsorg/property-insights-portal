import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
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
          <Button size="lg" className="gap-2">
            Explore Plans
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Express Interest
          </Button>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="relative w-full max-w-[1200px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-background to-background/0 rounded-lg" />
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Real Estate Analytics Dashboard"
            className="aspect-video rounded-lg border bg-muted object-cover w-full shadow-xl"
            width={1200}
            height={675}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;