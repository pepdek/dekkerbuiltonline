import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  project: string;
}

interface ReviewsSectionProps {
  reviews?: Review[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const defaultReviews: Review[] = [
    {
      name: 'Sarah Johnson',
      location: 'Bellevue, WA',
      rating: 5,
      text: 'Renovision transformed our kitchen into the space of our dreams. The design-build process was seamless, and the team was professional and attentive throughout. We couldn\'t be happier with the result.',
      project: 'Kitchen Remodel',
    },
    {
      name: 'Michael Chen',
      location: 'Kirkland, WA',
      rating: 5,
      text: 'Working with Renovision for our whole-home remodel was the best decision we made. One point of contact, transparent pricing, and exceptional craftsmanship. Highly recommend!',
      project: 'Whole Home Renovation',
    },
    {
      name: 'Jennifer Martinez',
      location: 'Redmond, WA',
      rating: 5,
      text: 'The bathroom remodel exceeded our expectations. The team handled every detail with care, and the finished product is absolutely stunning. Thank you, Renovision!',
      project: 'Bathroom Remodel',
    },
    {
      name: 'David Thompson',
      location: 'Seattle, WA',
      rating: 5,
      text: 'Our ADU project was completed on time and within budget. The design-build approach eliminated so much confusion compared to hiring separate contractors. Excellent work!',
      project: 'ADU Construction',
    },
  ];

  const displayReviews = reviews || defaultReviews;

  return (
    <section className="py-20 bg-[#F6F8F3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1E3A2E] mb-4 text-center">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Hear from homeowners who have transformed their spaces with Renovision Design & Build.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayReviews.map((review, index) => (
            <Card
              key={index}
              className="p-8 bg-white border-0 shadow-sm hover:shadow-lg transition-shadow stagger-item"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#b68a3c] text-[#b68a3c]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-[#EEEEEE] pt-4">
                <p className="font-bold text-[#1E3A2E]">{review.name}</p>
                <p className="text-sm text-gray-600">{review.location}</p>
                <p className="text-sm text-[#b68a3c] font-semibold mt-2">
                  {review.project}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to join our satisfied clients? Let's bring your vision to life.
          </p>
          <a
            href="https://online-booking.workiz.com/?ac=222496cf11c27d57caa0355901711c2872bdf8a41b9fe61368e9de0fed98cc44"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Schedule Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
