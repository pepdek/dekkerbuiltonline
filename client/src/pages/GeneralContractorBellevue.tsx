import { Link } from 'wouter';
import { CheckCircle2, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatsCounter from '@/components/StatsCounter';

export default function GeneralContractorBellevue() {
  const serviceAreas = [
    'Bellevue',
    'Kirkland',
    'Redmond',
    'Mercer Island',
    'Seattle',
    'Sammamish',
    'Issaquah',
    'Snoqualmie',
  ];

  const services = [
    {
      title: 'Kitchen Remodeling',
      description: 'Custom kitchens designed and built to your vision.',
      link: '/kitchen-remodel',
    },
    {
      title: 'Bathroom Remodeling',
      description: 'Spa-like bathrooms with premium finishes.',
      link: '/bathroom-remodeling',
    },
    {
      title: 'Whole Home Remodels',
      description: 'Top-to-bottom transformations managed seamlessly.',
      link: '/full-home-remodel',
    },
    {
      title: 'ADU Construction',
      description: 'Accessory dwelling units that maximize property value.',
      link: '/adu-construction',
    },
    {
      title: 'Basement Remodeling',
      description: 'Turn unfinished space into functional living areas.',
      link: '/basement-remodeling',
    },
    {
      title: 'Decks & Patios',
      description: 'Outdoor living spaces built to last.',
      link: '/deck-patio',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#F6F8F3] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#b68a3c] font-bold text-sm tracking-wide mb-4">BELLEVUE & EASTSIDE</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A2E] mb-6">
            General Contractor in Bellevue, WA
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mb-6">
            Renovision Design & Build is Bellevue's trusted design-build contractor for custom homes, kitchen remodels, bathroom renovations, and whole-home transformations. Serving Bellevue, Kirkland, Redmond, and the greater Eastside with in-house crews, transparent pricing, and exceptional craftsmanship.
          </p>
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="w-5 h-5 text-[#b68a3c]" />
            <p>1400 112th Ave NE, Bellevue, WA 98004</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsCounter
        stats={[
          { value: '20+', label: 'Years of Experience' },
          { value: '156+', label: 'Satisfied Clients' },
          { value: '37+', label: 'Projects Completed' },
        ]}
      />

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A2E] mb-12">
            Why Choose Renovision for Your Bellevue Home
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-start gap-4 mb-8">
                <CheckCircle2 className="w-6 h-6 text-[#b68a3c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A2E] mb-2">
                    Local Bellevue Expertise
                  </h3>
                  <p className="text-gray-600">
                    Deep roots in Bellevue and the Eastside. We understand local zoning, building codes, and the unique character of Bellevue neighborhoods.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <CheckCircle2 className="w-6 h-6 text-[#b68a3c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A2E] mb-2">
                    Design-Build Model
                  </h3>
                  <p className="text-gray-600">
                    One firm, one team, one vision. Our integrated approach eliminates miscommunication and change orders that result from hiring separate architects and contractors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#b68a3c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A2E] mb-2">
                    In-House Crews
                  </h3>
                  <p className="text-gray-600">
                    All trades—carpenters, electricians, plumbers, tile setters—are employed directly by Renovision. No subcontractor handoffs or shifting responsibility.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-8">
                <CheckCircle2 className="w-6 h-6 text-[#b68a3c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A2E] mb-2">
                    AI 3D Visualization
                  </h3>
                  <p className="text-gray-600">
                    See your project before construction begins. Photorealistic renderings let you approve the design and make changes without surprises.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <CheckCircle2 className="w-6 h-6 text-[#b68a3c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A2E] mb-2">
                    Fixed-Price Transparency
                  </h3>
                  <p className="text-gray-600">
                    You know the cost upfront. No hidden charges, no creeping change orders. We manage the complexity so you do not have to.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#b68a3c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A2E] mb-2">
                    Licensed & Bonded
                  </h3>
                  <p className="text-gray-600">
                    Fully licensed and bonded in Washington State. BBB Accredited. Multi-year workmanship warranty on every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#F6F8F3] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A2E] mb-12">
            Services We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.link}>
                <Card className="p-6 bg-white border-0 shadow-sm hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <h3 className="text-xl font-bold text-[#1E3A2E] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <span className="text-[#b68a3c] font-bold hover:text-[#1E3A2E] transition-colors">
                    Learn more →
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A2E] mb-12">
            Service Areas
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Renovision Design & Build serves Bellevue and the greater Seattle Eastside. We work throughout the following areas:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="p-6 bg-[#F6F8F3] border-0 shadow-sm text-center">
                <p className="font-bold text-[#1E3A2E]">{area}</p>
              </Card>
            ))}
          </div>

          <p className="text-gray-600 mt-8">
            Don't see your area listed? Contact us—we may be able to accommodate your project.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#1E3A2E] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8">
                Schedule a free consultation to discuss your Bellevue home project. We'll walk your space, understand your vision, and provide a transparent estimate.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">PHONE</p>
                  <a href="tel:+14252766501" className="text-2xl font-bold text-[#b68a3c] hover:text-white transition-colors">
                    (425) 276-6501
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">EMAIL</p>
                  <a href="mailto:office@renovisiondesignandbuild.com" className="text-lg font-bold hover:text-[#b68a3c] transition-colors break-all">
                    office@renovisiondesignandbuild.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">HOURS</p>
                  <p className="font-bold">Mon–Fri, 8am–5pm</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">
                Office Location
              </h3>
              <a
                href="https://maps.app.goo.gl/sAw9VHhjcitFRKrMA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b68a3c] transition-colors"
              >
                <p className="font-bold mb-2">Renovision Design & Build</p>
                <p className="text-gray-300 mb-4">
                  1400 112th Ave NE<br />
                  Bellevue, WA 98004<br />
                  United States
                </p>
              </a>
              <a
                href="https://online-booking.workiz.com/?ac=222496cf11c27d57caa0355901711c2872bdf8a41b9fe61368e9de0fed98cc44"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-block"
              >
                Request Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
