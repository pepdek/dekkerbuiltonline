import { Link } from 'wouter';
import { CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Additions',
      description: 'Expand your footprint without losing your home\'s character.',
      timeline: '3–6 mos',
      price: '$150k+',
      link: '/additions',
    },
    {
      number: '02',
      title: 'Accessory Dwelling Units',
      description: 'Backyard cottages & suites built to local ADU rules.',
      timeline: '5–8 mos',
      price: '$220k–$420k',
      link: '/adu-construction',
    },
    {
      number: '03',
      title: 'Kitchen Remodels',
      description: 'The heart of the home, reworked for how you live.',
      timeline: '8–12 wks',
      price: '$85k–$220k',
      link: '/kitchen-remodel',
    },
    {
      number: '04',
      title: 'Basement Remodels',
      description: 'Turn unfinished square footage into living space.',
      timeline: '6–10 wks',
      price: '$60k–$140k',
      link: '/basement-remodeling',
    },
    {
      number: '05',
      title: 'Bathroom Remodels',
      description: 'Spa-calm bathrooms with tile, stone, and warm light.',
      timeline: '5–8 wks',
      price: '$35k–$95k',
      link: '/bathroom-remodeling',
    },
    {
      number: '06',
      title: 'Design Services',
      description: 'Architectural design and interior selections in-house.',
      timeline: 'Varies',
      price: 'From $6k',
      link: '/design-services',
    },
    {
      number: '07',
      title: 'Whole Home Renovations',
      description: 'A top-to-bottom transformation, managed end to end.',
      timeline: '3–6 mos',
      price: '$200k+',
      link: '/full-home-remodel',
    },
    {
      number: '08',
      title: 'Decks & Outdoors',
      description: 'Cedar decks, patios, and outdoor rooms for the NW.',
      timeline: '3–6 wks',
      price: '$25k–$90k',
      link: '/deck-patio',
    },
  ];

  const processSteps = [
    {
      title: 'Consultation',
      description: 'We review goals, budget, and feasibility — free and honest.',
    },
    {
      title: 'Design & proposal',
      description: 'Drawings, selections, and a fixed-price proposal.',
    },
    {
      title: 'Build',
      description: 'A dedicated lead and our own crew, weekly updates.',
    },
    {
      title: 'Walkthrough',
      description: 'Punch-list, final clean, and a workmanship warranty.',
    },
    {
      title: 'On-schedule promise',
      description: 'A written timeline up front, with weekly progress updates.',
    },
    {
      title: 'Fixed-price proposals',
      description: 'You see the full number before we start — no creeping change orders.',
    },
    {
      title: 'Workmanship warranty',
      description: 'Every project backed by our multi-year warranty and one point of contact.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#F6F8F3] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#b68a3c] font-bold text-sm tracking-wide mb-4">WHAT WE BUILD</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A2E] mb-6">
            Home Remodeling & Construction Services in Tacoma & Pierce County
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Renovision Design & Build offers comprehensive remodeling and construction services throughout the Puget Sound region. From custom kitchens and luxury bathrooms to whole-home renovations and new construction, every project is managed by our in-house team with transparent pricing and exceptional craftsmanship.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {services.map((service, index) => (
              <Link key={index} href={service.link}>
                <div className="cursor-pointer border-b border-[#EEEEEE] pb-6 hover:bg-[#F6F8F3] p-6 -mx-6 transition-colors">
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <span className="text-[#b68a3c] font-bold text-2xl">{service.number}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-[#1E3A2E] mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="text-sm text-gray-500 mb-1">TIMELINE</p>
                      <p className="font-bold text-[#1E3A2E] mb-4">{service.timeline}</p>
                      <p className="text-sm text-gray-500 mb-1">FROM</p>
                      <p className="font-bold text-[#b68a3c]">{service.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#F6F8F3] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A2E] mb-12 text-center">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#b68a3c] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E3A2E] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1E3A2E] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Not sure where to start? We'll help you scope it.
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project and explore options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+15599050994"
              className="btn-gold"
            >
              (559) 905-0994
            </a>
            <a
              href="https://online-booking.workiz.com/?ac=222496cf11c27d57caa0355901711c2872bdf8a41b9fe61368e9de0fed98cc44"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
