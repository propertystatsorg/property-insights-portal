import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Checkbox } from "@/components/ui/checkbox";

interface ExpressInterestDialogProps {
  children: React.ReactNode;
  planName?: string;
}

const PLANS = [
  "Sales Data",
  "Rental Data",
  "Short-term rental data",
  "Full access",
  "I don't know yet"
] as const;

const ExpressInterestDialog = ({ children, planName }: ExpressInterestDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    profession: "",
    selectedPlans: planName ? [planName] : [],
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.functions.invoke('handle-interest', {
        body: {
          ...formData,
          planName: formData.selectedPlans.join(", "),
        },
      });

      if (error) throw error;

      toast({
        title: "Interest Expressed Successfully",
        description: "We'll get back to you shortly with more information.",
      });
      
      setOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        profession: "",
        selectedPlans: [],
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your interest. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlanChange = (plan: string, checked: boolean) => {
    setFormData((prev) => {
      if (checked) {
        // If "I don't know yet" is selected, clear other selections
        if (plan === "I don't know yet") {
          return { ...prev, selectedPlans: ["I don't know yet"] };
        }
        // If another plan is selected, remove "I don't know yet" if present
        const newPlans = prev.selectedPlans.filter(p => p !== "I don't know yet");
        return { ...prev, selectedPlans: [...newPlans, plan] };
      } else {
        return { ...prev, selectedPlans: prev.selectedPlans.filter(p => p !== plan) };
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Express Interest {planName ? `in ${planName}` : ""}</DialogTitle>
          <DialogDescription>
            Fill out this form and we'll get back to you with more information.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label>Select Plans</Label>
            <div className="flex flex-col space-y-2">
              {PLANS.map((plan) => (
                <div key={plan} className="flex items-center space-x-2">
                  <Checkbox 
                    id={plan}
                    checked={formData.selectedPlans.includes(plan)}
                    onCheckedChange={(checked) => handlePlanChange(plan, checked as boolean)}
                  />
                  <Label htmlFor={plan}>{plan}</Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="profession">Profession</Label>
            <Input
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ExpressInterestDialog;