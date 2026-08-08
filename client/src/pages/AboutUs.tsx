import { Link } from 'wouter';
import { CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#F6F8F3] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#b68a3c] font-bold text-sm tracking-wide mb-4">ABOUT US</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A2E] mb-6">
            About Renovision Design & Build - Tacoma's Premier Design-Build Contractor
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Affordable luxury, built to last. We combine thoughtful design, transparent communication, and meticulous execution to deliver exceptional spaces that elevate everyday living.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-[#1E3A2E] mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Renovision Design & Build was founded on a simple principle: homeowners deserve better. Too often, they are caught between separate architects and general contractors, each with conflicting timelines and incentives. The result? Miscommunication, change orders, and projects that run over budget and schedule.
              </p>
              <p>
                We chose a different path. Design-build means one firm, one team, one vision. Our in-house architects, engineers, and construction crews work together from day one. Design decisions are made with construction efficiency in mind. Changes are managed seamlessly. You have one point of contact and one price.
              </p>
              <p>
                For over two decades, homeowners across Seattle and the Eastside have trusted us to deliver exceptional spaces—from intimate kitchen remodels to full ground-up renovations. We take pride in every detail, from the first consultation to the final walkthrough.
              </p>
              <p>
                Renovision is more than a contractor. We are your partner in bringing your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-[#F6F8F3] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A2E] mb-12 text-center">
            Why Choose Renovision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle2 className="w-6 h-6 text-[#b68a3c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A2E] mb-2">
                    Design-Build Expertise
                  </h3>
                  <p className="text-gray-600">
                    One firm, one team, one vision. Our in-house architects and construction crews work together seamlessly from design through completion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <CheckCircle2 className="w-6 h-6 text-[#b68a3c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A2E] mb-2">
                    In-House Crews
                  </h3>
                  <p className="text-gray-600">
                    All trades—carpenters, electricians, plumbers, tile setters—are employed directly by Renovision. No subcontractor handoffs, no shifting responsibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#b68a3c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A2E] mb-2">
                    AI 3D Design Visualization
                  </h3>
                  <p className="text-gray-600">
                    See your project before construction begins. Photorealistic renderings let you approve the design and make changes before any work starts.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-6">
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

              <div className="flex items-start gap-4 mb-6">
                <CheckCircle2 className="w-6 h-6 text-[#b68a3c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A2E] mb-2">
                    Workmanship Warranty
                  </h3>
                  <p className="text-gray-600">
                    Every project is backed by our multi-year workmanship warranty. We stand behind our work.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#b68a3c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A2E] mb-2">
                    Local Expertise
                  </h3>
                  <p className="text-gray-600">
                    Deep roots in Seattle and the Eastside. We understand local codes, zoning, and building requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A2E] mb-12 text-center">
            Credentials & Recognition
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-0 shadow-sm text-center">
              <p className="text-4xl font-bold text-[#b68a3c] mb-2">73%</p>
              <p className="font-bold text-[#1E3A2E] mb-2">Licensed & Bonded</p>
              <p className="text-sm text-gray-600">
                Fully licensed and bonded in Washington State
              </p>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-sm text-center">
              <p className="text-4xl font-bold text-[#b68a3c] mb-2">BBB</p>
              <p className="font-bold text-[#1E3A2E] mb-2">Accredited Business</p>
              <p className="text-sm text-gray-600">
                Better Business Bureau Accredited
              </p>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-sm text-center">
              <p className="text-4xl font-bold text-[#b68a3c] mb-2">20+</p>
              <p className="font-bold text-[#1E3A2E] mb-2">Years of Experience</p>
              <p className="text-sm text-gray-600">
                Over two decades of design-build expertise
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#F6F8F3] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A2E] mb-12 text-center">
            Our Team
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
              Our team is composed of experienced architects, engineers, project managers, and skilled tradespeople. Each member is committed to delivering exceptional results and maintaining the highest standards of craftsmanship.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We invest in our people through ongoing training and professional development. This ensures we stay current with the latest building codes, materials, and design trends—and deliver the best possible results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1E3A2E] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to work with us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project and see how we can help bring your vision to life.
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
