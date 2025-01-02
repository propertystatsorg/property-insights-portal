import { Card, CardContent } from "@/components/ui/card";
import { Code2, LineChart, Building2, Brain } from "lucide-react";

const AboutSection = () => {
  const teamValues = [
    {
      icon: Code2,
      title: "Tech Innovation",
      description: "Leveraging cutting-edge technology to deliver accurate insights",
    },
    {
      icon: LineChart,
      title: "Data-Driven",
      description: "Making decisions backed by comprehensive market analysis",
    },
    {
      icon: Building2,
      title: "Real Estate Expertise",
      description: "Deep understanding of the Mauritian property market",
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Using machine learning for predictive analytics",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who We Are</h2>
          <p className="mx-auto max-w-[800px] text-muted-foreground">
            A team of French and Mauritian data and real estate specialists using cutting-edge technology
            like AI, machine learning, and data science to deliver actionable insights for the Mauritian
            real estate market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamValues.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} className="border-none shadow-none bg-transparent">
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <Icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;