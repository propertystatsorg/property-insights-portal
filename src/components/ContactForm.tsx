import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    profession: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactForm = ({ formData, onChange }: ContactFormProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={onChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="profession">Profession</Label>
        <Input
          id="profession"
          name="profession"
          value={formData.profession}
          onChange={onChange}
          required
        />
      </div>
    </>
  );
};

export default ContactForm;