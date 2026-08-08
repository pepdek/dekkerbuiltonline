import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ConsultationFormV2() {
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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.transactionalConsent && !formData.marketingConsent) {
      newErrors.consent = 'Please consent to at least one communication method';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
      // Clear error for this field when user starts typing
      if (errors[name]) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    }
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked,
    }));
    // Clear consent error if at least one is checked
    if (checked && errors.consent) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.consent;
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - in production, this would call your backend
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true });
        }, 1500);
      });

      if (response) {
        setSubmitSuccess(true);
        toast.success('Consultation request submitted! We will contact you soon.');

        // Reset form after 2 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            zipcode: '',
            message: '',
            transactionalConsent: false,
            marketingConsent: false,
          });
          setSubmitSuccess(false);
        }, 2000);
      }
    } catch (error) {
      toast.error('Failed to submit consultation request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-[#1E3A2E]">
          Thank you!
        </h3>
        <p className="text-gray-600">
          Your consultation request has been submitted. We'll contact you within one business day.
        </p>
      </div>
    );
  }

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
          className={`mt-2 border-[#EEEEEE] focus:border-[#b68a3c] focus:ring-[#b68a3c] ${
            errors.name ? 'border-red-500' : ''
          }`}
        />
        {errors.name && (
          <div className="mt-1 flex items-center gap-2 text-sm text-red-600">
            <AlertCircle className="h-4 w-4" />
            {errors.name}
          </div>
        )}
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
          className={`mt-2 border-[#EEEEEE] focus:border-[#b68a3c] focus:ring-[#b68a3c] ${
            errors.email ? 'border-red-500' : ''
          }`}
        />
        {errors.email && (
          <div className="mt-1 flex items-center gap-2 text-sm text-red-600">
            <AlertCircle className="h-4 w-4" />
            {errors.email}
          </div>
        )}
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
          placeholder="(425) 123-4567"
          value={formData.phone}
          onChange={handleChange}
          className={`mt-2 border-[#EEEEEE] focus:border-[#b68a3c] focus:ring-[#b68a3c] ${
            errors.phone ? 'border-red-500' : ''
          }`}
        />
        {errors.phone && (
          <div className="mt-1 flex items-center gap-2 text-sm text-red-600">
            <AlertCircle className="h-4 w-4" />
            {errors.phone}
          </div>
        )}
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

      {errors.consent && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {errors.consent}
        </div>
      )}

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
