import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipcode: '',
    message: '',
    transactionalConsent: false,
    marketingConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.phone) {
        toast.error('Please fill in all required fields');
        setIsSubmitting(false);
        return;
      }

      // Validate at least one consent checkbox
      if (!formData.transactionalConsent && !formData.marketingConsent) {
        toast.error('Please consent to at least one communication method');
        setIsSubmitting(false);
        return;
      }

      // TODO: Integrate with backend API to send consultation request
      // For now, show success message
      toast.success('Consultation request submitted! We will contact you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        zipcode: '',
        message: '',
        transactionalConsent: false,
        marketingConsent: false,
      });
    } catch (error) {
      toast.error('Failed to submit consultation request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <Label htmlFor="name" className="text-sm font-medium text-[#333333]">
          Full name *
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Full name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-2 border-[#EEEEEE] focus:border-[#b68a3c] focus:ring-[#b68a3c]"
        />
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" className="text-sm font-medium text-[#333333]">
          Email address *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-2 border-[#EEEEEE] focus:border-[#b68a3c] focus:ring-[#b68a3c]"
        />
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone" className="text-sm font-medium text-[#333333]">
          Phone number *
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-2 border-[#EEEEEE] focus:border-[#b68a3c] focus:ring-[#b68a3c]"
        />
      </div>

      {/* Zipcode */}
      <div>
        <Label htmlFor="zipcode" className="text-sm font-medium text-[#333333]">
          Zipcode
        </Label>
        <Input
          id="zipcode"
          name="zipcode"
          type="text"
          placeholder="Zipcode"
          value={formData.zipcode}
          onChange={handleChange}
          className="mt-2 border-[#EEEEEE] focus:border-[#b68a3c] focus:ring-[#b68a3c]"
        />
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-sm font-medium text-[#333333]">
          Tell us about your project
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="mt-2 border-[#EEEEEE] focus:border-[#b68a3c] focus:ring-[#b68a3c]"
        />
      </div>

      {/* Transactional Consent */}
      <div className="flex items-start gap-3">
        <Checkbox
          id="transactional"
          checked={formData.transactionalConsent}
          onCheckedChange={(checked) => handleCheckboxChange('transactionalConsent', checked as boolean)}
          className="mt-1"
        />
        <Label htmlFor="transactional" className="text-xs text-gray-600 cursor-pointer">
          I consent to receive transactional text messages from Renovision Design & Build LLC related to services I have requested, such as consultation confirmations, appointment reminders, and project updates. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help.{' '}
          <a href="/privacy-policy" className="text-[#b68a3c] hover:underline">
            Privacy Policy
          </a>
          {' '}and{' '}
          <a href="/terms-and-conditions" className="text-[#b68a3c] hover:underline">
            Terms and Conditions
          </a>
        </Label>
      </div>

      {/* Marketing Consent */}
      <div className="flex items-start gap-3">
        <Checkbox
          id="marketing"
          checked={formData.marketingConsent}
          onCheckedChange={(checked) => handleCheckboxChange('marketingConsent', checked as boolean)}
          className="mt-1"
        />
        <Label htmlFor="marketing" className="text-xs text-gray-600 cursor-pointer">
          I consent to receive occasional marketing or promotional text messages from Renovision Design & Build LLC, such as seasonal offers and new service updates. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. See our{' '}
          <a href="/privacy-policy" className="text-[#b68a3c] hover:underline">
            Privacy Policy
          </a>
          {' '}and{' '}
          <a href="/terms-and-conditions" className="text-[#b68a3c] hover:underline">
            Terms and Conditions
          </a>
        </Label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary"
      >
        {isSubmitting ? 'Submitting...' : 'Request Consultation'}
      </Button>

      {/* Privacy Note */}
      <p className="text-xs text-gray-500 text-center">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
}
