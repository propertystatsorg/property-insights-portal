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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ExpressInterestDialogProps {
  children: React.ReactNode;
  planName?: string;
}

const PLANS = [
  "Basic Plan",
  "Pro Plan",
  "Enterprise Plan",
  "I don't know yet"
] as const;

const ExpressInterestDialog = ({ children, planName }: ExpressInterestDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    profession: "",
    selectedPlan: planName || "I don't know yet",
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
          planName: formData.selectedPlan,
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
        selectedPlan: "I don't know yet",
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

  const handlePlanChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedPlan: value,
    }));
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
            <Label>Select Plan</Label>
            <RadioGroup
              defaultValue={formData.selectedPlan}
              onValueChange={handlePlanChange}
              className="flex flex-col space-y-2"
            >
              {PLANS.map((plan) => (
                <div key={plan} className="flex items-center space-x-2">
                  <RadioGroupItem value={plan} id={plan} />
                  <Label htmlFor={plan}>{plan}</Label>
                </div>
              ))}
            </RadioGroup>
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