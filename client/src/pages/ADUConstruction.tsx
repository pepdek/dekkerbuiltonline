import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function ADUConstruction() {
  return (
    <ServicePageTemplate
      title="ADU Construction & Accessory Dwelling Unit Design in Tacoma & Pierce County"
      subtitle="Build an ADU to maximize property value and rental income. Expert permitting and design-build construction."
      description="Renovision Design & Build specializes in ADU construction throughout Tacoma, Tacoma, Gig Harbor, Lakewood, Puyallup, and the greater Puget Sound region. From site assessment and design to permitting and construction, we handle every phase of your accessory dwelling unit project. In-house crews, transparent pricing, no subcontractors."
      timeline="20–28 weeks"
      investmentRange="$120k – $300k+"
      scope="Design + build"
      keyBenefits={[
        {
          title: 'Expert ADU Permitting & Compliance',
          description: 'Navigate local zoning, setback requirements, and building codes with confidence',
        },
        {
          title: 'Site-Optimized Design',
          description: 'Maximize usable space and rental potential with expert layout planning',
        },
        {
          title: 'End-to-End Construction Management',
          description: 'From foundation to final inspection, we manage all phases in-house',
        },
      ]}
      whyChooseTitle="Why Homeowners Choose Renovision for ADU Construction"
      whyChooseIntro="ADU construction is complex. Local zoning varies, permitting is strict, and design must maximize both space and rental potential. Our design-build approach handles permitting, design, and construction seamlessly—turning your property into an income-generating asset."
      whyChooseFeatures={[
        {
          title: 'ADU Permitting & Zoning Expertise',
          description: 'We navigate local zoning codes, setback requirements, parking regulations, and building standards. Our experience with local authorities ensures smooth permitting and faster approvals.',
        },
        {
          title: 'Site-Optimized ADU Design',
          description: 'We assess your property—size, slope, utilities, setbacks—and design an ADU that maximizes usable space and rental potential. Every square foot counts.',
        },
        {
          title: 'End-to-End Construction Management',
          description: 'Foundation, framing, electrical, plumbing, finishes—all managed by our in-house team. No subcontractor handoffs, no coordination delays.',
        },
        {
          title: 'Fixed-Price ADU Construction',
          description: 'You know the cost upfront. No hidden charges for site prep or utility connections—all included in the proposal.',
        },
      ]}
      services={[
        {
          title: 'ADU Site Assessment & Planning',
          description: 'Evaluate your property for ADU feasibility, zoning compliance, and optimal placement.',
        },
        {
          title: 'Detached ADU Construction',
          description: 'Standalone structures with separate utilities, parking, and entry.',
        },
        {
          title: 'Attached ADU Construction',
          description: 'ADUs attached to your primary residence, sharing some utilities.',
        },
        {
          title: 'ADU Permitting & Approvals',
          description: 'Handle all zoning, building permits, and city approvals.',
        },
        {
          title: 'Utility Connection & Infrastructure',
          description: 'Electrical, plumbing, gas, and water connections to your ADU.',
        },
        {
          title: 'ADU Interior Design & Finishes',
          description: 'Efficient layouts with kitchen, bathroom, bedroom, and living space.',
        },
        {
          title: 'Parking & Landscaping',
          description: 'Parking solutions and landscape design to complement your property.',
        },
        {
          title: 'Rental-Ready Finishes',
          description: 'Durable, low-maintenance finishes optimized for rental properties.',
        },
      ]}
      whatIncluded={[
        'ADU site assessment and feasibility study',
        'Zoning and permitting analysis',
        'Detailed 3D ADU design and renderings',
        'All building permits and city approvals',
        'Foundation and structural work',
        'Electrical system design and installation',
        'Plumbing design and installation',
        'HVAC installation',
        'Interior finishes and appliances',
        'Parking and landscaping',
        'Final inspection and documentation',
      ]}
      processSteps={[
        {
          title: 'ADU Site Assessment & Feasibility',
          description: 'We evaluate your property—size, topography, utilities, setbacks, and zoning. We determine ADU feasibility and optimal placement for maximum rental potential.',
        },
        {
          title: 'Design & Permitting Strategy',
          description: 'Our design team creates an ADU design that maximizes space and complies with local codes. We prepare all permitting documents and submit to the city.',
        },
        {
          title: 'Utility & Infrastructure Planning',
          description: 'We plan electrical, plumbing, gas, and water connections. We coordinate with utility companies for service upgrades if needed.',
        },
        {
          title: 'Construction & Rental-Ready Finishes',
          description: 'Our crews build your ADU with durable, low-maintenance finishes. Upon completion, your ADU is ready for tenants.',
        },
      ]}
      faqs={[
        {
          question: 'How long does ADU construction take?',
          answer: 'ADU construction typically takes 20–28 weeks from design approval to completion. This includes permitting time, which varies by city.',
        },
        {
          question: 'What is the average cost of an ADU?',
          answer: 'ADU construction typically costs $120,000 to $300,000+, depending on size, site conditions, and finishes. We provide a fixed-price proposal upfront.',
        },
        {
          question: 'Is my property eligible for an ADU?',
          answer: 'Most properties can support an ADU, but zoning and setback requirements vary. We conduct a free feasibility assessment to determine eligibility.',
        },
        {
          question: 'Can I rent out my ADU?',
          answer: 'Yes. ADUs are excellent for rental income or housing family members. We design ADUs with rental potential in mind—efficient layouts, durable finishes, and separate utilities.',
        },
        {
          question: 'Do you handle all permits and approvals?',
          answer: 'Yes. We manage all zoning analysis, building permits, and city approvals. We handle the entire permitting process.',
        },
        {
          question: 'What if my property has challenging site conditions?',
          answer: 'Challenging sites—steep slopes, limited utilities, tight setbacks—require expert design. We specialize in optimizing difficult properties for ADU construction.',
        },
      ]}
    />
  );
}
