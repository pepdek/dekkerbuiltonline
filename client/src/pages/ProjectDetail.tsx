import { useRoute } from 'wouter';
import ProjectDetailTemplate from '@/components/ProjectDetailTemplate';
import NotFound from '@/pages/NotFound';

export default function ProjectDetail() {
  const [match, params] = useRoute('/project/:slug');

  if (!match) {
    return <NotFound />;
  }

  const slug = params?.slug as string;

  // Project data mapped by slug
  const projects: Record<string, any> = {
    'century-old-home-kitchen-remodel-seattle': {
      title: 'Full Kitchen Remodel In A Century-Old Seattle Home',
      category: 'Kitchen Remodel',
      year: '2026',
      location: 'Seattle, WA',
      description: 'This century-old Seattle home needed a modern kitchen that honored its historic character while providing contemporary functionality. Our design-build team created a stunning kitchen that blends period details with today\'s conveniences.',
      heroImage: '/manus-storage/kitchen-project_59bb9660.webp',
      challenge: 'The original kitchen was cramped, outdated, and disconnected from the dining area. The homeowners wanted to preserve the home\'s historic charm while creating a modern, open-concept kitchen suitable for entertaining. Structural limitations and the need to maintain the home\'s architectural integrity added complexity.',
      solution: 'We designed a layout that removed a non-load-bearing wall to create an open concept while preserving key architectural elements. Custom cabinetry was designed to complement the home\'s period details. We installed modern appliances, quartz countertops, and LED lighting that blends seamlessly with the historic aesthetic.',
      scope: [
        'Wall removal and structural modifications',
        'Custom cabinetry design and installation',
        'Quartz countertop installation',
        'Modern appliance integration',
        'LED lighting and electrical upgrades',
        'Hardwood flooring',
        'Backsplash tile work',
        'Permits and inspections',
      ],
      results: [
        'Open-concept kitchen that flows naturally into dining area',
        'Increased functionality and storage with custom cabinetry',
        'Modern conveniences in a historic home setting',
        'Completed on schedule and within budget',
        'Homeowners thrilled with the transformation',
      ],
      beforeAfterImages: [
        {
          before: '/manus-storage/kitchen-project_59bb9660.webp',
          after: '/manus-storage/kitchen-project_59bb9660.webp',
          caption: 'Kitchen transformation',
        },
      ],
      relatedProjects: [
        {
          title: 'Modern Kitchen & Dining Room Open Concept',
          image: '/manus-storage/kitchen-project_59bb9660.webp',
          link: '/project/modern-kitchen-dining-open-concept',
        },
        {
          title: 'Full Home Renovation Seattle',
          image: '/manus-storage/hero-full-home_dbf9b716.jpg',
          link: '/project/whole-home-renovation-seattle',
        },
      ],
    },
    'loyal-heights-bedroom-to-bathroom-conversion': {
      title: 'Bedroom-To-Bathroom Conversion In Loyal Heights, Seattle',
      category: 'Bathroom Remodel',
      year: '2025',
      location: 'Seattle, WA',
      description: 'This Loyal Heights home needed an additional bathroom to serve the master bedroom suite. Our team converted an adjacent bedroom into a luxurious spa-like bathroom with proper egress, ventilation, and high-end finishes.',
      heroImage: '/manus-storage/bathroom-project_aa53c9f7.webp',
      challenge: 'The homeowners wanted to add a master bathroom but space was limited. Converting an adjacent bedroom was the ideal solution, but it required careful planning for plumbing, electrical, ventilation, and egress compliance. The new bathroom needed to feel spacious and luxurious despite the room\'s constraints.',
      solution: 'We designed a spa-like bathroom with a walk-in shower, soaking tub, and dual vanity. Proper ventilation and egress windows ensure code compliance and comfort. High-end tile work, heated floors, and premium fixtures create a resort-like atmosphere.',
      scope: [
        'Bedroom conversion to bathroom',
        'Plumbing installation and relocation',
        'Electrical upgrades and lighting design',
        'Tile work and waterproofing',
        'Dual vanity installation',
        'Walk-in shower construction',
        'Soaking tub installation',
        'Heated floor system',
        'Ventilation and exhaust installation',
      ],
      results: [
        'Luxurious master bathroom that feels spacious and resort-like',
        'Proper code compliance with egress and ventilation',
        'Increased home value and functionality',
        'Homeowners enjoy daily spa-like experience',
        'Completed on schedule',
      ],
      beforeAfterImages: [
        {
          before: '/manus-storage/bathroom-project_aa53c9f7.webp',
          after: '/manus-storage/bathroom-project_aa53c9f7.webp',
          caption: 'Bedroom to bathroom conversion',
        },
      ],
      relatedProjects: [
        {
          title: 'Master Bathroom Spa Retreat',
          image: '/manus-storage/bathroom-project_aa53c9f7.webp',
          link: '/project/master-bathroom-spa-retreat',
        },
        {
          title: 'Whole Home Renovation Seattle',
          image: '/manus-storage/hero-full-home_dbf9b716.jpg',
          link: '/project/whole-home-renovation-seattle',
        },
      ],
    },
    'modern-kitchen-dining-open-concept': {
      title: 'Modern Kitchen & Dining Room Open Concept',
      category: 'Kitchen Remodel',
      year: '2025',
      location: 'Bellevue, WA',
      description: 'This Bellevue home received a complete kitchen and dining room transformation, creating a seamless open-concept space perfect for entertaining and family gatherings.',
      heroImage: '/manus-storage/kitchen-project_59bb9660.webp',
      challenge: 'The original kitchen and dining areas were separated by walls, creating a cramped, disconnected space. The homeowners wanted a modern, open-concept layout that would be ideal for entertaining while maintaining a sophisticated aesthetic.',
      solution: 'We removed walls to create an open-concept space, installed a large island with seating, and designed modern cabinetry with clean lines. High-end appliances, waterfall island countertops, and statement lighting create a sophisticated entertaining space.',
      scope: [
        'Wall removal and structural modifications',
        'Open-concept kitchen design',
        'Custom island with waterfall countertops',
        'Premium appliance package',
        'Quartz countertops throughout',
        'Custom lighting design',
        'Flooring throughout space',
        'Permits and inspections',
      ],
      results: [
        'Seamless open-concept entertaining space',
        'Modern, sophisticated aesthetic',
        'Improved functionality and flow',
        'Perfect for family gatherings and entertaining',
        'Significantly increased home value',
      ],
    },
    'master-bathroom-spa-retreat': {
      title: 'Master Bathroom Spa Retreat',
      category: 'Bathroom Remodel',
      year: '2025',
      location: 'Kirkland, WA',
      description: 'This Kirkland master bathroom was transformed into a luxurious spa retreat with a soaking tub, walk-in shower, heated floors, and premium finishes.',
      heroImage: '/manus-storage/bathroom-project_aa53c9f7.webp',
      challenge: 'The homeowners wanted to create a spa-like retreat within their master bathroom. The space needed to accommodate a soaking tub, large walk-in shower, and luxurious finishes while maintaining proper ventilation and lighting.',
      solution: 'We designed a spa-like layout with a freestanding soaking tub positioned to capture natural light, a large walk-in shower with rainfall showerhead, heated floors, and premium tile work. Layered lighting creates ambiance, and high-end fixtures complete the resort aesthetic.',
      scope: [
        'Bathroom layout redesign',
        'Freestanding soaking tub installation',
        'Large walk-in shower construction',
        'Premium tile work and waterproofing',
        'Heated floor system',
        'Dual vanity with premium fixtures',
        'Layered lighting design',
        'Ventilation upgrades',
      ],
      results: [
        'Luxurious spa-like retreat in the home',
        'Daily relaxation and wellness space',
        'Premium finishes and high-end fixtures',
        'Significantly increased home value',
        'Homeowners love their new sanctuary',
      ],
    },
    'adu-backyard-cottage': {
      title: 'ADU Backyard Cottage Construction',
      category: 'ADU',
      year: '2024',
      location: 'Redmond, WA',
      description: 'This Redmond property received a new detached ADU cottage, providing additional living space, rental income potential, and flexibility for the homeowners.',
      heroImage: '/manus-storage/adu-project_4659c0e7.webp',
      challenge: 'The homeowners wanted to add an ADU to their property to generate rental income and provide flexibility for family. The project required navigating Redmond\'s ADU zoning requirements, designing for setbacks and height limits, and ensuring proper utilities.',
      solution: 'We designed a beautiful detached cottage that complies with all local ADU requirements. The design includes a full kitchen, bathroom, bedroom, and living area. Proper electrical, plumbing, and HVAC systems provide independent living.',
      scope: [
        'Zoning analysis and compliance design',
        'Architectural design and permitting',
        'Foundation and structural work',
        'Electrical systems installation',
        'Plumbing and HVAC',
        'Interior finishes',
        'Exterior finishes and landscaping',
        'All required inspections',
      ],
      results: [
        'Beautiful, code-compliant ADU cottage',
        'Rental income generation',
        'Increased property value',
        'Flexible living options for family',
        'Completed on schedule',
      ],
    },
    'whole-home-renovation-seattle': {
      title: 'Whole Home Renovation Seattle',
      category: 'Whole Home',
      year: '2024',
      location: 'Seattle, WA',
      description: 'This Seattle home received a comprehensive top-to-bottom renovation, including kitchen, bathrooms, flooring, electrical, and structural modifications.',
      heroImage: '/manus-storage/hero-full-home_dbf9b716.jpg',
      challenge: 'The homeowners wanted to completely modernize their aging Seattle home while preserving its character. The project involved coordinating multiple trades across the entire home, managing a complex timeline, and maintaining quality throughout.',
      solution: 'Our design-build team created a comprehensive plan addressing all systems and spaces. We managed all trades on one schedule, ensuring seamless coordination and quality execution from start to finish.',
      scope: [
        'Kitchen remodel',
        'Bathroom remodels (2)',
        'Flooring throughout',
        'Electrical system upgrades',
        'HVAC system replacement',
        'Plumbing updates',
        'Interior finishes',
        'Exterior improvements',
      ],
      results: [
        'Completely modernized home with character preserved',
        'All systems updated to current standards',
        'Seamless coordination across all trades',
        'Completed on schedule and budget',
        'Homeowners thrilled with transformation',
      ],
    },
  };

  const project = projects[slug];

  if (!project) {
    return <NotFound />;
  }

  return <ProjectDetailTemplate {...project} />;
}
