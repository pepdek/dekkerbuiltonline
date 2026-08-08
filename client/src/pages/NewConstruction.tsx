import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function NewConstruction() {
  return (
    <ServicePageTemplate
      title="New Home Construction in Tacoma & Pierce County"
      subtitle="Build your dream home from the ground up. Expert design, permitting, and construction management."
      description="Renovision Design & Build specializes in new home construction throughout Tacoma, Tacoma, Gig Harbor, Lakewood, Puyallup, and the greater Puget Sound region. From site selection and design to permitting and final walkthrough, we manage every phase of your new home project. In-house crews, transparent pricing, no subcontractors."
      timeline="24–36 weeks"
      investmentRange="$300k – $1M+"
      scope="Design + build"
      keyBenefits={[
        {
          title: 'Complete Design-Build Control',
          description: 'From concept to completion, one firm manages your entire project',
        },
        {
          title: 'Modern Building Standards',
          description: 'Energy-efficient systems, premium materials, and current building codes',
        },
        {
          title: 'Transparent Project Management',
          description: 'Regular updates, fixed pricing, and accountability throughout construction',
        },
      ]}
      whyChooseTitle="Why Homeowners Choose Renovision for New Home Construction"
      whyChooseIntro="Building a new home is a major investment and life milestone. You want a contractor who understands design, manages complex permitting, coordinates multiple trades, and delivers on time and on budget. Our design-build approach ensures your new home is built right."
      whyChooseFeatures={[
        {
          title: 'Complete Design-Build Process',
          description: 'From initial concept through final walkthrough, one firm manages your entire project. No coordination between separate architects and contractors—just seamless execution.',
        },
        {
          title: 'Modern Building Standards & Energy Efficiency',
          description: 'We build to current codes with energy-efficient systems, premium insulation, and sustainable materials. Your new home is built for comfort and efficiency.',
        },
        {
          title: 'Expert Permitting & Site Management',
          description: 'We navigate local zoning, building permits, and inspections. We manage site logistics, utilities, and construction sequencing.',
        },
        {
          title: 'Fixed-Price New Home Construction',
          description: 'You know the total investment upfront. No hidden costs or surprise change orders—all included in the proposal.',
        },
      ]}
      services={[
        {
          title: 'Site Selection & Assessment',
          description: 'Evaluate properties for buildability, utilities, and zoning compliance.',
        },
        {
          title: 'Architectural Design & Planning',
          description: 'Custom home design tailored to your lifestyle and preferences.',
        },
        {
          title: 'Permitting & Approvals',
          description: 'Handle all zoning, building permits, and city approvals.',
        },
        {
          title: 'Foundation & Structural Work',
          description: 'Professional foundation design and installation.',
        },
        {
          title: 'Framing & Rough-Ins',
          description: 'Structural framing, electrical rough-in, plumbing rough-in, and HVAC.',
        },
        {
          title: 'Interior Finishes & Systems',
          description: 'Drywall, flooring, cabinetry, fixtures, and all interior systems.',
        },
        {
          title: 'Exterior Finishes & Landscaping',
          description: 'Roofing, siding, windows, doors, and landscape design.',
        },
        {
          title: 'Final Inspection & Handoff',
          description: 'Complete inspections, punch list resolution, and warranty documentation.',
        },
      ]}
      whatIncluded={[
        'Architectural design and 3D renderings',
        'Site preparation and grading',
        'Foundation design and construction',
        'Structural framing and engineering',
        'Electrical system design and installation',
        'Plumbing system design and installation',
        'HVAC design and installation',
        'Insulation and weatherproofing',
        'Interior drywall and finishes',
        'Flooring installation',
        'Kitchen and bathroom design and build',
        'Cabinetry and hardware',
        'Roofing and exterior finishes',
        'Windows and doors',
        'Landscaping and site finishing',
        'All permits and inspections',
        'Final walkthrough and documentation',
      ]}
      processSteps={[
        {
          title: 'Site Selection & Design Concept',
          description: 'We help you select a site, assess buildability, and develop your home design. We create 3D renderings showing your vision.',
        },
        {
          title: 'Permitting & Planning',
          description: 'We prepare all architectural and engineering plans. We manage permitting with local authorities and obtain all required approvals.',
        },
        {
          title: 'Foundation & Structural Build',
          description: 'We prepare the site, install the foundation, and begin framing. We coordinate all trades—electrical, plumbing, HVAC—in proper sequence.',
        },
        {
          title: 'Interior & Exterior Finishes',
          description: 'We install interior finishes, flooring, cabinetry, and fixtures. We complete exterior work—roofing, siding, landscaping. Final inspections and handoff.',
        },
      ]}
      faqs={[
        {
          question: 'How long does new home construction take?',
          answer: 'New home construction typically takes 24–36 weeks from design approval to completion. The timeline depends on home size, complexity, and weather conditions.',
        },
        {
          question: 'What is the average cost of new home construction?',
          answer: 'New home construction typically costs $300,000 to $1,000,000+, depending on size, finishes, and site conditions. We provide a fixed-price proposal upfront.',
        },
        {
          question: 'Can I customize the design?',
          answer: 'Yes. We work with you to create a custom design that fits your lifestyle, budget, and preferences. Design changes are managed through our design-build process.',
        },
        {
          question: 'Do you handle all permits and inspections?',
          answer: 'Yes. All permitting, inspections, and code compliance are included in our scope. We manage the entire process with local authorities.',
        },
        {
          question: 'What if I want to make changes during construction?',
          answer: 'Design changes are possible but managed carefully. We discuss the impact on timeline and cost upfront. Our design-build model minimizes surprises by planning thoroughly before work begins.',
        },
        {
          question: 'Do you offer energy-efficient home options?',
          answer: 'Yes. We build all homes to current energy codes. We can also incorporate additional energy-efficient systems—solar, heat pumps, premium insulation—based on your preferences.',
        },
      ]}
    />
  );
}
