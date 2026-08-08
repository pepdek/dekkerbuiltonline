import { useState } from 'react';
import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Full Kitchen Remodel In A Century-Old Seattle Home',
      category: 'kitchen',
      image: '/manus-storage/kitchen-project_59bb9660.webp',
      link: '/project/century-old-home-kitchen-remodel-seattle',
      year: '2026',
    },
    {
      id: 2,
      title: 'Bedroom-To-Bathroom Conversion In Loyal Heights, Seattle',
      category: 'bathroom',
      image: '/manus-storage/bathroom-project_aa53c9f7.webp',
      link: '/project/loyal-heights-bedroom-to-bathroom-conversion',
      year: '2025',
    },
    {
      id: 3,
      title: 'Modern Kitchen & Dining Room Open Concept',
      category: 'kitchen',
      image: '/manus-storage/kitchen-project_59bb9660.webp',
      link: '/project/modern-kitchen-dining-open-concept',
      year: '2025',
    },
    {
      id: 4,
      title: 'Master Bathroom Spa Retreat',
      category: 'bathroom',
      image: '/manus-storage/bathroom-project_aa53c9f7.webp',
      link: '/project/master-bathroom-spa-retreat',
      year: '2025',
    },
    {
      id: 5,
      title: 'ADU Backyard Cottage Construction',
      category: 'adu',
      image: '/manus-storage/adu-project_4659c0e7.webp',
      link: '/project/adu-backyard-cottage',
      year: '2024',
    },
    {
      id: 6,
      title: 'Whole Home Renovation Seattle',
      category: 'whole-home',
      image: '/manus-storage/hero-full-home_dbf9b716.jpg',
      link: '/project/whole-home-renovation-seattle',
      year: '2024',
    },
  ];

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Kitchen', value: 'kitchen' },
    { label: 'Bathroom', value: 'bathroom' },
    { label: 'ADU', value: 'adu' },
    { label: 'Whole Home', value: 'whole-home' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#F6F8F3] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#b68a3c] font-bold text-sm tracking-wide mb-4">PORTFOLIO</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A2E] mb-6">
            Our Work
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A selection of recent projects showcasing our design-build expertise across kitchens, bathrooms, whole-home remodels, and more.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-[#EEEEEE]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter.value
                    ? 'bg-[#1E3A2E] text-white'
                    : 'bg-[#F6F8F3] text-[#1E3A2E] hover:bg-[#E8ECEB]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link key={project.id} href={project.link}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="h-64 bg-gray-200 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[#b68a3c] text-sm font-bold mb-2">
                      {project.year}
                    </p>
                    <h3 className="text-xl font-bold text-[#1E3A2E] mb-3">
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

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
