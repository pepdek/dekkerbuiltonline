import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationFormV2 from '@/components/ConsultationFormV2';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#F6F8F3] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#b68a3c] font-bold text-sm tracking-wide mb-4">GET IN TOUCH</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A2E] mb-6">
            Contact Renovision Design & Build - Schedule Your Free Consultation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Ready to start your renovation or construction project? Contact our team to schedule a free consultation. We'll discuss your vision, assess your project, and provide a transparent proposal with no hidden costs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ConsultationFormV2 />
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-12">
              {/* Call */}
              <div>
                <h3 className="text-sm font-bold text-[#b68a3c] tracking-wide mb-4">CALL</h3>
                <a
                  href="tel:+15599050994"
                  className="text-2xl font-bold text-[#1E3A2E] hover:text-[#b68a3c] transition-colors"
                >
                  (559) 905-0994
                </a>
                <p className="text-sm text-gray-600 mt-2">Mon-Fri, 8am-5pm</p>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-sm font-bold text-[#b68a3c] tracking-wide mb-4">EMAIL</h3>
                <a
                  href="mailto:office@renovisiondesignandbuild.com"
                  className="text-lg font-bold text-[#1E3A2E] hover:text-[#b68a3c] transition-colors break-all"
                >
                  office@renovisiondesignandbuild.com
                </a>
                <p className="text-sm text-gray-600 mt-2">Mon-Fri, 8am-5pm</p>
              </div>

              {/* Service Area */}
              <div>
                <h3 className="text-sm font-bold text-[#b68a3c] tracking-wide mb-4">SERVICE AREA</h3>
                <p className="font-bold text-[#1E3A2E] mb-2">Greater Seattle & Eastside</p>
                <p className="text-sm text-gray-600">15+ Cities & Neighbourhoods</p>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-sm font-bold text-[#b68a3c] tracking-wide mb-4">OFFICE</h3>
                <a
                  href="https://maps.app.goo.gl/sAw9VHhjcitFRKrMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E3A2E] hover:text-[#b68a3c] transition-colors"
                >
                  <p className="font-bold mb-1">1400 112th Ave NE</p>
                  <p>Tacoma, WA 98004</p>
                  <p>United States</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
