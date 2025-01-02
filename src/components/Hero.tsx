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
        <div className="relative w-full max-w-[1200px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-background to-background/0 rounded-lg z-10" />
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-[675px] object-cover"
          >
            <source 
              src="https://player.vimeo.com/external/517090081.hd.mp4?s=50c2c0e6b52686c8d233c2c318c7dde8b0bc2431&profile_id=175&oauth2_token_id=57447761" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;