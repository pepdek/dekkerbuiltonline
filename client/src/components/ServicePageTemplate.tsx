import { Link } from 'wouter';
import { CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationForm from '@/components/ConsultationForm';
import StatsCounter from '@/components/StatsCounter';

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
  investmentRange: string;
  scope: string;
  keyBenefits: Array<{
    icon?: string;
    title: string;
    description: string;
  }>;
  whyChooseTitle: string;
  whyChooseIntro: string;
  whyChooseFeatures: Array<{
    title: string;
    description: string;
  }>;
  services: Array<{
    title: string;
    description: string;
  }>;
  whatIncluded: string[];
  processSteps: Array<{
    title: string;
    description: string;
  }>;
  relatedProjects?: Array<{
    title: string;
    image: string;
    link: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  timeline,
  investmentRange,
  scope,
  keyBenefits,
  whyChooseTitle,
  whyChooseIntro,
  whyChooseFeatures,
  services,
  whatIncluded,
  processSteps,
  relatedProjects = [],
  faqs = [],
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#F6F8F3] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#b68a3c] font-bold text-sm tracking-wide mb-4">SERVICE</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A2E] mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl">
            {subtitle}
          </p>
          <p className="text-gray-700 mb-8 max-w-3xl leading-relaxed">
            {description}
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#b68a3c] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-[#1E3A2E]">{benefit.title}</p>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+15599050994"
              className="btn-primary text-center"
            >
              (559) 905-0994
            </a>
            <a
              href="https://online-booking.workiz.com/?ac=222496cf11c27d57caa0355901711c2872bdf8a41b9fe61368e9de0fed98cc44"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsCounter
        stats={[
          { value: timeline, label: 'TYPICAL TIMELINE' },
          { value: investmentRange, label: 'INVESTMENT RANGE' },
          { value: scope, label: 'SCOPE' },
        ]}
      />

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A2E] mb-4">
            {whyChooseTitle}
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl leading-relaxed">
            {whyChooseIntro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#F6F8F3] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A2E] mb-12">
            {title} Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-sm">
                <h3 className="text-xl font-bold text-[#1E3A2E] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A2E] mb-12">
            What's Included
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatIncluded.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#b68a3c] mt-1 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="bg-[#F6F8F3] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1E3A2E] mb-12">
            Our {title} Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#b68a3c] rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A2E] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#1E3A2E] mb-12">
              Featured {title} Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {relatedProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg">
                  <div className="h-64 bg-gray-200 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#1E3A2E] mb-3">
                      {project.title}
                    </h3>
                    <Link href={project.link}>
                      <span className="text-[#b68a3c] font-bold hover:text-[#1E3A2E] transition-colors cursor-pointer">
                        View Project →
                      </span>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/project-gallery">
                <span className="btn-primary cursor-pointer">
                  View All Projects
                </span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="bg-[#F6F8F3] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#1E3A2E] mb-12">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <summary className="font-bold text-[#1E3A2E] cursor-pointer hover:text-[#b68a3c] transition-colors">
                    {faq.question}
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-[#1E3A2E] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation. We will walk your space, discuss your vision, and show you what your finished project looks like in 3D.
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
