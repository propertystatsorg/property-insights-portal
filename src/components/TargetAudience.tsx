import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  UserCog,
  Scale,
  Briefcase,
  HardHat,
  Camera,
  Landmark,
  Building,
  GraduationCap,
  Target,
  Brain,
  TrendingUp,
} from "lucide-react";

const audiences = [
  {
    title: "Real Estate Agents & Brokers",
    description: "Access real-time market data, pricing trends, and in-depth analytics to make informed decisions, optimize listings, and close deals faster.",
    icon: Building2,
  },
  {
    title: "Property Developers",
    description: "Get valuable insights into market demand, property types, and investment opportunities to identify the most profitable areas for development.",
    icon: Building,
  },
  {
    title: "Property Managers",
    description: "Streamline property management tasks, track rental prices, and stay updated on tenant demands to better serve property owners and tenants.",
    icon: UserCog,
  },
  {
    title: "Valuators & Appraisers",
    description: "Access comprehensive data on property values across Mauritius for accurate and up-to-date assessments.",
    icon: Scale,
  },
  {
    title: "Legal & Financial Experts",
    description: "Stay updated with the latest market trends and property pricing data to provide the best legal, financial, and investment advice.",
    icon: Briefcase,
  },
  {
    title: "Construction Professionals",
    description: "Access detailed market intelligence for project planning, cost management, and industry standards compliance.",
    icon: HardHat,
  },
  {
    title: "Specialized Service Providers",
    description: "Enhance your services and improve client satisfaction with market-driven solutions.",
    icon: Camera,
  },
  {
    title: "Financial Institutions",
    description: "Make informed lending decisions with essential market data for property valuation and risk management.",
    icon: Landmark,
  },
  {
    title: "Government Bodies",
    description: "Support urban planning, policy development, and strategic decision-making with comprehensive market insights.",
    icon: GraduationCap,
  },
];

const TargetAudience = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who is PropertyStats for?</h2>
          <p className="mx-auto max-w-[800px] text-muted-foreground">
            PropertyStats is a cutting-edge platform designed specifically for real estate professionals in Mauritius. Whether you're a seasoned expert or just starting out, our platform offers the tools and insights you need to stay ahead in the dynamic real estate market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <Card key={audience.title} className="border-none shadow-none bg-transparent">
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{audience.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{audience.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-16 bg-primary/5 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <p className="text-muted-foreground">Empowering every real estate professional in Mauritius with essential data</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <p className="text-muted-foreground">Make smarter decisions with comprehensive market insights</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <p className="text-muted-foreground">Increase productivity and drive business growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;