import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function NewConstruction() {
  return (
    <ServicePageTemplate
      title="New Construction"
      subtitle="Custom homes built to your vision."
      description="Renovision Design & Build designs and constructs custom homes throughout Seattle, Bellevue, Kirkland, Redmond, and the greater Eastside. From ground-up construction to additions, we bring your vision to life with design-build expertise and in-house execution."
      timeline="6–12 months"
      investmentRange="$300k+"
      scope="Design + build"
      keyBenefits={[
        {
          title: 'Design-build expertise',
          description: 'Integrated design and construction from the start',
        },
        {
          title: 'AI 3D visualization',
          description: 'See your home before construction begins',
        },
        {
          title: 'In-house crews',
          description: 'All trades managed by Renovision',
        },
      ]}
      whyChooseTitle="Why Seattle Homeowners Choose Renovision for New Construction"
      whyChooseIntro="Building a new home is a significant investment. You want a partner who understands design, manages construction efficiently, and delivers on time and on budget. Our design-build model ensures seamless execution and accountability."
      whyChooseFeatures={[
        {
          title: 'Integrated Design & Build',
          description: 'Our design team works with construction leads from day one. Design decisions are made with construction efficiency in mind, reducing costs and timelines.',
        },
        {
          title: 'Efficient Project Management',
          description: 'One team, one schedule, one point of contact. We coordinate all trades and manage the project to completion.',
        },
        {
          title: 'Quality & Craftsmanship',
          description: 'All construction is managed by Renovision. We control quality at every stage, from foundation to final walkthrough.',
        },
        {
          title: 'Fixed-Price Accountability',
          description: 'You know the cost upfront. We manage the complexity so you do not have to.',
        },
      ]}
      services={[
        {
          title: 'Ground-up construction',
          description: 'New homes built from foundation to finish.',
        },
        {
          title: 'Custom design',
          description: 'Architectural design tailored to your vision.',
        },
        {
          title: 'Structural engineering',
          description: 'Proper foundation, framing, and structural integrity.',
        },
        {
          title: 'Electrical systems',
          description: 'Modern electrical with smart home integration.',
        },
        {
          title: 'Plumbing & HVAC',
          description: 'Efficient systems designed for comfort.',
        },
        {
          title: 'Interior finishes',
          description: 'Flooring, cabinetry, fixtures, and finishes.',
        },
        {
          title: 'Exterior finishes',
          description: 'Siding, roofing, windows, doors, and landscaping.',
        },
        {
          title: 'Permitting & inspections',
          description: 'Full permitting and code compliance.',
        },
      ]}
      whatIncluded={[
        'Architectural design & 3D renderings',
        'Site preparation & grading',
        'Foundation & structural work',
        'Electrical systems & lighting',
        'Plumbing & HVAC',
        'Interior finishes & cabinetry',
        'Exterior finishes & roofing',
        'Landscaping & site work',
      ]}
      processSteps={[
        {
          title: 'Consultation & Vision',
          description: 'We discuss your vision, budget, and timeline. We assess the site and identify opportunities and constraints.',
        },
        {
          title: 'Design & Planning',
          description: 'Our design team creates architectural plans and 3D renderings. You approve the design before construction.',
        },
        {
          title: 'Permits & Approvals',
          description: 'We handle all permitting, submissions, and approvals. We coordinate with city and county requirements.',
        },
        {
          title: 'Construction & Management',
          description: 'Our crew builds to specifications. We manage all trades, coordinate inspections, and ensure quality throughout.',
        },
      ]}
      faqs={[
        {
          question: 'How long does new construction take?',
          answer: 'Most new homes take 6–12 months from design through completion. Permitting typically takes 2–3 months. We provide a detailed timeline.',
        },
        {
          question: 'What is the cost of new construction?',
          answer: 'Costs vary based on size, finishes, and site conditions. We provide a detailed estimate and fixed-price proposal upfront.',
        },
        {
          question: 'Can I modify the design during construction?',
          answer: 'Design changes are possible but managed carefully. We discuss the impact on timeline and cost. Our design-build model minimizes surprises by planning thoroughly before work begins.',
        },
        {
          question: 'Do you handle permits and inspections?',
          answer: 'Yes. We manage all permitting, submissions, and inspections. We ensure compliance with all codes and requirements.',
        },
        {
          question: 'What warranties do you provide?',
          answer: 'We provide a multi-year workmanship warranty on all construction. We stand behind our work.',
        },
      ]}
    />
  );
}
