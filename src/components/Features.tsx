import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, Database, House, MapPin } from "lucide-react";

const features = [
  {
    title: "Comprehensive Real Estate Data",
    description: "Access insights on sales, rentals, and market trends.",
    icon: Database,
  },
  {
    title: "User-Friendly Dashboards",
    description: "Simplify decision-making with interactive KPIs and city/type-specific data.",
    icon: ChartBar,
  },
  {
    title: "AI-Driven Reports",
    description: "Personalized reports to identify opportunities and improve performance.",
    icon: House,
  },
  {
    title: "Custom Data Requests",
    description: "Tailored solutions to match your exact needs.",
    icon: MapPin,
  },
];

const Features = () => {
  return (
    <section id="features" className="container py-6 space-y-8">
      <Card className="p-2 bg-primary/5 border-none">
        <CardContent className="text-center px-4 sm:px-6 md:px-8">
          <p className="text-xl md:text-2xl font-semibold leading-relaxed text-foreground">
            PropertyStats is a cutting-edge platform designed specifically for real estate professionals in Mauritius. Whether you're a seasoned expert or just starting out, our platform offers the tools and insights you need to stay ahead in the dynamic real estate market.
          </p>
        </CardContent>
      </Card>

      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why PropertyStats?</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Powerful features designed for real estate professionals
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-12 w-12 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;