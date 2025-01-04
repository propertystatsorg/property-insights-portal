import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const PLANS = [
  "Sales Data",
  "Rental Data",
  "Short-term rental data",
  "Full access",
  "I don't know yet"
] as const;

interface PlanSelectionProps {
  selectedPlans: string[];
  onPlanChange: (plan: string, checked: boolean) => void;
}

const PlanSelection = ({ selectedPlans, onPlanChange }: PlanSelectionProps) => {
  return (
    <div className="space-y-2">
      <Label>Select Plans</Label>
      <div className="flex flex-col space-y-2">
        {PLANS.map((plan) => (
          <div key={plan} className="flex items-center space-x-2">
            <Checkbox 
              id={plan}
              checked={selectedPlans.includes(plan)}
              onCheckedChange={(checked) => onPlanChange(plan, checked as boolean)}
            />
            <Label htmlFor={plan}>{plan}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanSelection;