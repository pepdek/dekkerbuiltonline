import { Link } from 'wouter';
import { CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ProjectDetailProps {
  title: string;
  category: string;
  year: string;
  location: string;
  description: string;
  heroImage: string;
  challenge: string;
  solution: string;
  scope: string[];
  results: string[];
  beforeAfterImages?: Array<{
    before: string;
    after: string;
    caption: string;
  }>;
  relatedProjects?: Array<{
    title: string;
    image: string;
    link: string;
  }>;
}

export default function ProjectDetailTemplate({
  title,
  category,
  year,
  location,
  description,
  heroImage,
  challenge,
  solution,
  scope,
  results,
  beforeAfterImages = [],
  relatedProjects = [],
}: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="h-96 bg-gray-200 overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Project Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A2E] mb-6">
                {title}
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>

              {/* Challenge Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                  The Challenge
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {challenge}
                </p>
              </div>

              {/* Solution Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                  Our Solution
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {solution}
                </p>

                {scope.length > 0 && (
                  <div>
                    <h3 className="font-bold text-[#1E3A2E] mb-4">Scope of Work</h3>
                    <ul className="space-y-2">
                      {scope.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#b68a3c] mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Results Section */}
              {results.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                    Results
                  </h2>
                  <ul className="space-y-3">
                    {results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#b68a3c] mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-8 bg-[#F6F8F3] border-0 shadow-sm sticky top-24">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-600 font-bold mb-1">CATEGORY</p>
                    <p className="text-lg font-bold text-[#1E3A2E] capitalize">
                      {category}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 font-bold mb-1">YEAR</p>
                    <p className="text-lg font-bold text-[#1E3A2E]">
                      {year}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 font-bold mb-1">LOCATION</p>
                    <p className="text-lg font-bold text-[#1E3A2E]">
                      {location}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#EEEEEE]">
                    <p className="text-sm text-gray-600 mb-4">
                      Interested in a similar project?
                    </p>
                    <a
                      href="https://online-booking.workiz.com/?ac=222496cf11c27d57caa0355901711c2872bdf8a41b9fe61368e9de0fed98cc44"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-center block"
                    >
                      Request Consultation
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      {beforeAfterImages.length > 0 && (
        <section className="bg-[#F6F8F3] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#1E3A2E] mb-12 text-center">
              Before & After
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {beforeAfterImages.map((pair, index) => (
                <div key={index}>
                  <Card className="overflow-hidden border-0 shadow-lg mb-4">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        <img
                          src={pair.before}
                          alt="Before"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        <img
                          src={pair.after}
                          alt="After"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </Card>
                  <p className="text-center text-gray-600 text-sm">
                    <span className="font-bold">Before</span> & <span className="font-bold">After</span>: {pair.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#1E3A2E] mb-12">
              Related Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {relatedProjects.map((project, index) => (
                <Link key={index} href={project.link}>
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#1E3A2E] mb-2">
                        {project.title}
                      </h3>
                      <span className="text-[#b68a3c] font-bold hover:text-[#1E3A2E] transition-colors">
                        View Project →
                      </span>
                    </div>
                  </Card>
                </Link>
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

      {/* CTA Section */}
      <section className="bg-[#1E3A2E] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your vision and explore options.
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
