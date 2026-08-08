import { Link } from 'wouter';
import { Star, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationForm from '@/components/ConsultationForm';
import StatsCounter from '@/components/StatsCounter';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24 md:py-32"
        style={{
          backgroundImage: 'url(/manus-storage/hero-full-home_dbf9b716.jpg)',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-[#b68a3c] font-bold text-sm tracking-wide mb-4">
                CUSTOM HOMES · REMODELS · EXCEPTIONAL RESULTS
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Bellevue Home Remodeling by a Design-Build Contractor
              </h1>
              <p className="text-lg text-gray-100 mb-6">
                Luxury renovations, one in-house team, start to finish. From AI 3D concept to final walkthrough.
              </p>
              <p className="text-base text-gray-200 mb-8">
                Renovision Design & Build is Bellevue's full-service home remodeling contractor, serving the Seattle Eastside with custom kitchen remodels, bathroom renovations, whole-home remodels, and ADU construction. We design it, permit it, and build it. With one in-house crew, one point of contact, and one price.
              </p>

              {/* Key Benefits */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#b68a3c]" />
                  <span className="text-white font-medium">Design-Build Expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#b68a3c]" />
                  <span className="text-white font-medium">Premium Craftsmanship</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#b68a3c]" />
                  <span className="text-white font-medium">On Time & On Budget</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/project-gallery">
                  <a className="btn-gold text-center">Explore Our Work</a>
                </Link>
              </div>
            </div>

            {/* Right: Consultation Form */}
            <div className="bg-white/95 backdrop-blur p-8 rounded-lg shadow-2xl">
              <h2 className="text-2xl font-bold text-[#1E3A2E] mb-2">
                Schedule Your Consultation
              </h2>
              <p className="text-gray-600 mb-6">
                Let's bring your vision to life.
              </p>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsCounter
        stats={[
          { value: '73%', label: 'Licensed & Bonded' },
          { value: '156+', label: 'Satisfied Clients' },
          { value: '37+', label: 'Projects Completed' },
          { value: '3.6★', label: 'Average Rating' },
        ]}
      />

      {/* Why Choose Section */}
      <section className="bg-[#F6F8F3] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A2E] mb-4 text-center">
            Why Bellevue Homeowners Choose Renovision Design & Build
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            For over two decades, homeowners across the Eastside have trusted us to deliver exceptional spaces that elevate everyday living — combining thoughtful design, transparent communication, and meticulous execution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 bg-white border-0 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-[#b68a3c] mb-4" />
              <h3 className="font-bold text-[#1E3A2E] mb-2">
                Local Eastside Team
              </h3>
              <p className="text-gray-600 text-sm">
                Deep area expertise and community roots
              </p>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-[#b68a3c] mb-4" />
              <h3 className="font-bold text-[#1E3A2E] mb-2">
                Full-Service Design to Build
              </h3>
              <p className="text-gray-600 text-sm">
                From initial consultation to final walkthrough
              </p>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-[#b68a3c] mb-4" />
              <h3 className="font-bold text-[#1E3A2E] mb-2">
                Clear Communication
              </h3>
              <p className="text-gray-600 text-sm">
                Daily jobsite oversight and transparent updates
              </p>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-[#b68a3c] mb-4" />
              <h3 className="font-bold text-[#1E3A2E] mb-2">
                Lasting Results
              </h3>
              <p className="text-gray-600 text-sm">
                Beautiful spaces that stand the test of time
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/about-us">
              <a className="btn-primary">Learn More About Us</a>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A2E] mb-12 text-center">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Whole Home */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src="/manus-storage/hero-full-home_dbf9b716.jpg"
                  alt="Full Home Remodel"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <p className="text-[#b68a3c] text-sm font-bold mb-2">WHOLE HOME</p>
                <h3 className="text-2xl font-bold text-[#1E3A2E] mb-3">
                  Full Home Remodel
                </h3>
                <p className="text-gray-600 mb-6">
                  Multi-room and whole-home renovations run on one schedule with one point of contact. You're not managing five contractors and their conflicting timelines.
                </p>
                <Link href="/full-home-remodel">
                  <a className="text-[#b68a3c] font-bold hover:text-[#1E3A2E] transition-colors">
                    Explore whole home →
                  </a>
                </Link>
              </div>
            </Card>

            {/* Kitchen */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src="/manus-storage/kitchen-project_59bb9660.webp"
                  alt="Kitchen Remodeling"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <p className="text-[#b68a3c] text-sm font-bold mb-2">KITCHEN</p>
                <h3 className="text-2xl font-bold text-[#1E3A2E] mb-3">
                  Kitchen Remodeling
                </h3>
                <p className="text-gray-600 mb-6">
                  From a single-wall refresh to a full gut, we handle cabinetry, countertops, layout changes, and island builds under one crew.
                </p>
                <Link href="/kitchen-remodel">
                  <a className="text-[#b68a3c] font-bold hover:text-[#1E3A2E] transition-colors">
                    Explore kitchens →
                  </a>
                </Link>
              </div>
            </Card>

            {/* Bathroom */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src="/manus-storage/bathroom-project_aa53c9f7.webp"
                  alt="Bathroom Remodeling"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <p className="text-[#b68a3c] text-sm font-bold mb-2">BATHROOM</p>
                <h3 className="text-2xl font-bold text-[#1E3A2E] mb-3">
                  Bathroom Remodeling
                </h3>
                <p className="text-gray-600 mb-6">
                  Master suites, wet rooms, curbless showers, dual-vanity layouts. Plumbing, tile, and electrical run through the same in-house team from demo to final walkthrough.
                </p>
                <Link href="/bathroom-remodeling">
                  <span className="text-[#b68a3c] font-bold hover:text-[#1E3A2E] transition-colors cursor-pointer">
                    Explore bathrooms →
                  </span>
                </Link>
              </div>
            </Card>

            {/* ADU */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src="/manus-storage/adu-project_4659c0e7.webp"
                  alt="ADU Construction"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <p className="text-[#b68a3c] text-sm font-bold mb-2">ADU</p>
                <h3 className="text-2xl font-bold text-[#1E3A2E] mb-3">
                  ADU Construction
                </h3>
                <p className="text-gray-600 mb-6">
                  Accessory Dwelling Units designed and built to maximize your property value and living space.
                </p>
                <Link href="/adu-construction">
                  <span className="text-[#b68a3c] font-bold hover:text-[#1E3A2E] transition-colors cursor-pointer">
                    Explore additions →
                  </span>
                </Link>
              </div>
            </Card>

            {/* Decks & Patio */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-[#F6F8F3]"></div>
              <div className="p-6">
                <p className="text-[#b68a3c] text-sm font-bold mb-2">OUTDOOR</p>
                <h3 className="text-2xl font-bold text-[#1E3A2E] mb-3">
                  Decks & Patio
                </h3>
                <p className="text-gray-600 mb-6">
                  Transform your outdoor living space with custom decks and patios built to last.
                </p>
                <Link href="/deck-patio">
                  <span className="text-[#b68a3c] font-bold hover:text-[#1E3A2E] transition-colors cursor-pointer">
                    Explore decks & patio →
                  </span>
                </Link>
              </div>
            </Card>

            {/* New Construction */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-[#F6F8F3]"></div>
              <div className="p-6">
                <p className="text-[#b68a3c] text-sm font-bold mb-2">BUILD</p>
                <h3 className="text-2xl font-bold text-[#1E3A2E] mb-3">
                  New Construction
                </h3>
                <p className="text-gray-600 mb-6">
                  Custom home building from ground up with our design-build expertise.
                </p>
                <Link href="/new-construction">
                  <span className="text-[#b68a3c] font-bold hover:text-[#1E3A2E] transition-colors cursor-pointer">
                    Explore new construction →
                  </span>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-[#F6F8F3] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A2E] mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img
                  src="/manus-storage/kitchen-project_59bb9660.webp"
                  alt="Full Kitchen Remodel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[#b68a3c] text-sm font-bold mb-2">KITCHEN REMODEL</p>
                <h3 className="text-2xl font-bold text-[#1E3A2E] mb-3">
                  Full Kitchen Remodel In A Century-Old Seattle Home
                </h3>
                <p className="text-gray-600 mb-4">
                  Kitchen design and construction | Full kitchen remodel | 2026
                </p>
                <Link href="/project/century-old-home-kitchen-remodel-seattle">
                  <span className="text-[#b68a3c] font-bold hover:text-[#1E3A2E] transition-colors cursor-pointer">
                    View Project →
                  </span>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img
                  src="/manus-storage/bathroom-project_aa53c9f7.webp"
                  alt="Bedroom to Bathroom Conversion"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[#b68a3c] text-sm font-bold mb-2">BATHROOM REMODEL</p>
                <h3 className="text-2xl font-bold text-[#1E3A2E] mb-3">
                  Bedroom-To-Bathroom Conversion In Loyal Heights, Seattle
                </h3>
                <p className="text-gray-600 mb-4">
                  Bathroom remodeling | Bedroom to bathroom conversion | 2025
                </p>
                <Link href="/project/loyal-heights-bedroom-to-bathroom-conversion">
                  <span className="text-[#b68a3c] font-bold hover:text-[#1E3A2E] transition-colors cursor-pointer">
                    View Project →
                  </span>
                </Link>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/project-gallery">
              <a className="btn-primary">View All Projects</a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1E3A2E] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Dream Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a free design consultation. We will walk your space, discuss your vision, and show you what your finished project looks like in 3D.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+14252766501"
              className="btn-gold"
            >
              (425) 276-6501
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
