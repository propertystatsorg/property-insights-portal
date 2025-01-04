import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import PlanSelection from "./PlanSelection";
import ContactForm from "./ContactForm";

interface ExpressInterestDialogProps {
  children: React.ReactNode;
  planName?: string;
}

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
        if (plan === "I don't know yet") {
          return { ...prev, selectedPlans: ["I don't know yet"] };
        }
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
          <PlanSelection 
            selectedPlans={formData.selectedPlans}
            onPlanChange={handlePlanChange}
          />
          <ContactForm 
            formData={formData}
            onChange={handleChange}
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ExpressInterestDialog;