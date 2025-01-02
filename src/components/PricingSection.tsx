import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Sales Data",
      price: "Rs 2,999",
      description: "For professionals focusing on property sales",
      features: [
        "Sales transaction data",
        "Market trends analysis",
        "Property valuation tools",
        "Monthly market reports",
      ],
    },
    {
      name: "Rental Data",
      price: "Rs 2,499",
      description: "Ideal for rental market specialists",
      features: [
        "Rental market data",
        "Tenant demand analysis",
        "Yield calculations",
        "Quarterly market reports",
      ],
    },
    {
      name: "Full Access",
      price: "Rs 4,999",
      description: "Complete access to all data and features",
      features: [
        "All sales & rental data",
        "Advanced analytics",
        "Custom reports",
        "Priority support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your Plan</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Select the perfect plan for your needs. All plans include access to our core features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-3xl font-bold mb-4">{plan.price}<span className="text-base font-normal text-muted-foreground">/month</span></div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Need a custom solution?</p>
          <Button variant="outline">Request Custom Quotation</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;