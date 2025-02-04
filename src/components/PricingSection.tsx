import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import ExpressInterestDialog from "./ExpressInterestDialog";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const getPrice = (monthlyPrice: number) => {
    if (billingCycle === "yearly") {
      return monthlyPrice === 5000 ? 4000 : 10000;
    }
    return monthlyPrice;
  };

  const plans = [
    {
      name: "Sales Data",
      monthlyPrice: 5000,
      description: "For real estate professionals",
      features: [
        "Sales transaction data",
        "Market trends analysis",
        "Property valuation tools",
        "Monthly market reports",
      ],
    },
    {
      name: "Rental Data",
      monthlyPrice: 5000,
      description: "Ideal for rental market specialists",
      features: [
        "Rental market data",
        "Tenant demand analysis",
        "Yield calculations",
        "Quarterly market reports",
      ],
    },
    {
      name: "Short-Term Rental Data",
      monthlyPrice: 5000,
      description: "Perfect for vacation rental managers",
      features: [
        "Daily rate analytics",
        "Seasonal demand trends",
        "Occupancy rate data",
        "Competitor insights",
      ],
    },
    {
      name: "Full Access",
      monthlyPrice: 13000,
      description: "Complete access to all data and features",
      features: [
        "All sales & rental data",
        "Short-term rental insights",
        "Advanced analytics",
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
          <div className="flex justify-center mt-6">
            <ToggleGroup type="single" value={billingCycle} onValueChange={(value) => value && setBillingCycle(value as "monthly" | "yearly")}>
              <ToggleGroupItem value="monthly" className="px-4">Monthly</ToggleGroupItem>
              <ToggleGroupItem value="yearly" className="px-4">Annual</ToggleGroupItem>
            </ToggleGroup>
          </div>
          {billingCycle === "yearly" && (
            <p className="text-sm text-primary">Save up to 23% with annual billing!</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-3xl font-bold mb-4">
                  Rs {getPrice(plan.monthlyPrice).toLocaleString()}
                  <span className="text-base font-normal text-muted-foreground">/{billingCycle === "monthly" ? "month" : "month, billed annually"}</span>
                </div>
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
                <ExpressInterestDialog planName={plan.name}>
                  <Button className="w-full">Express Interest</Button>
                </ExpressInterestDialog>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Need a custom solution?</p>
          <ExpressInterestDialog>
            <Button variant="outline">Request Custom Quotation</Button>
          </ExpressInterestDialog>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;