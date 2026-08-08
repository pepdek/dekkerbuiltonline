import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function WholeHomeRemodel() {
  return (
    <ServicePageTemplate
      title="Complete Whole Home Remodeling in Bellevue & Pierce County"
      subtitle="Transform your entire home from top to bottom. Comprehensive renovation with seamless design integration."
      description="Renovision Design & Build specializes in complete whole-home remodeling throughout Bellevue, Tacoma, Gig Harbor, Lakewood, Puyallup, and the greater Puget Sound region. From structural upgrades to interior finishes, we manage every phase of your home transformation. In-house crews, transparent pricing, no subcontractors."
      timeline="16–24 weeks"
      investmentRange="$150k – $500k+"
      scope="Design + build"
      keyBenefits={[
        {
          title: 'Comprehensive Home Transformation',
          description: 'Structural upgrades, systems replacement, and complete interior redesign',
        },
        {
          title: 'Single Point of Accountability',
          description: 'One firm manages all phases—no coordination issues between contractors',
        },
        {
          title: 'Integrated Project Management',
          description: 'Seamless workflow from design through final walkthrough',
        },
      ]}
      whyChooseTitle="Why Homeowners Choose Renovision for Whole Home Remodeling"
      whyChooseIntro="A whole-home remodel is a major undertaking that requires exceptional project management, clear communication, and accountability. Our design-build approach ensures your entire home is transformed cohesively, with one team responsible for every detail."
      whyChooseFeatures={[
        {
          title: 'Comprehensive Project Management',
          description: 'Whole-home remodels involve multiple trades, permits, and inspections. We coordinate every phase—structural, mechanical, electrical, plumbing, and finishes—to ensure seamless execution and no delays.',
        },
        {
          title: 'Integrated Design Vision',
          description: 'Rather than piecemeal updates, we design your entire home with cohesive flow, consistent finishes, and unified aesthetics. Your new kitchen connects seamlessly to your remodeled living spaces.',
        },
        {
          title: 'Systems Upgrades & Modernization',
          description: 'We upgrade electrical, plumbing, HVAC, and insulation to current standards. Your home is not just beautiful—it is efficient, safe, and future-proof.',
        },
        {
          title: 'Fixed-Price Whole Home Remodeling',
          description: 'You know the total investment upfront. No hidden costs for structural surprises or system upgrades—all included in the proposal.',
        },
      ]}
      services={[
        {
          title: 'Structural Assessment & Upgrades',
          description: 'Foundation evaluation, load-bearing wall modifications, and structural reinforcement.',
        },
        {
          title: 'Systems Modernization',
          description: 'Electrical panel upgrades, plumbing replacement, HVAC installation, and insulation improvements.',
        },
        {
          title: 'Kitchen & Bathroom Renovation',
          description: 'Complete redesign of all kitchens and bathrooms with premium finishes.',
        },
        {
          title: 'Open-Concept Conversion',
          description: 'Wall removal, beam installation, and seamless flow between living spaces.',
        },
        {
          title: 'Flooring Throughout',
          description: 'Consistent flooring design across all spaces—hardwood, tile, or luxury vinyl.',
        },
        {
          title: 'Interior Finishes & Paint',
          description: 'Drywall, paint, trim, and custom finishes throughout the home.',
        },
        {
          title: 'Lighting & Electrical Design',
          description: 'Comprehensive lighting plan with recessed, ambient, and task lighting.',
        },
        {
          title: 'Exterior Updates',
          description: 'Roofing, siding, windows, doors, and landscaping (if included in scope).',
        },
      ]}
      whatIncluded={[
        'Comprehensive 3D home design and renderings',
        'Structural engineering and assessment',
        'Electrical system design and upgrade',
        'Plumbing system design and upgrade',
        'HVAC design and installation',
        'Insulation and weatherproofing',
        'All permits and inspections',
        'Kitchen and bathroom renovation',
        'Flooring installation throughout',
        'Interior painting and finishes',
        'Lighting and electrical fixtures',
        'Final walkthrough and documentation',
      ]}
      processSteps={[
        {
          title: 'Comprehensive Home Assessment & Design',
          description: 'We conduct a detailed assessment of your home—structure, systems, and condition. We discuss your vision for the entire space and create a comprehensive 3D design showing all phases.',
        },
        {
          title: 'Structural & Systems Planning',
          description: 'Our engineers evaluate structural needs, electrical capacity, plumbing requirements, and HVAC design. We plan all upgrades to modern standards and building codes.',
        },
        {
          title: 'Phased Construction & Coordination',
          description: 'We manage all trades in coordinated phases—structural first, then systems, then finishes. Weekly updates keep you informed of progress.',
        },
        {
          title: 'Final Inspection & Handoff',
          description: 'After all phases complete, we conduct final inspections, address punch-list items, and provide full documentation. Your home is completely transformed and ready to enjoy.',
        },
      ]}
      faqs={[
        {
          question: 'How long does a whole-home remodel take?',
          answer: 'Whole-home remodels typically take 16–24 weeks depending on the scope, size, and complexity. We provide a detailed timeline upfront and manage each phase to stay on schedule.',
        },
        {
          question: 'What is the average cost of a whole-home remodel?',
          answer: 'Whole-home remodels typically range from $150,000 to $500,000+, depending on the home size, scope, and finishes. We provide a fixed-price proposal upfront so you know the total investment.',
        },
        {
          question: 'Can we live in the home during the remodel?',
          answer: 'For major whole-home remodels, we recommend temporary relocation. However, we can discuss phasing the project to minimize disruption if you prefer to stay.',
        },
        {
          question: 'Do you handle all permits and inspections?',
          answer: 'Yes. All permitting, inspections, and code compliance are included in our scope. We manage the entire process with city authorities.',
        },
        {
          question: 'What if structural issues are discovered during construction?',
          answer: 'We conduct a thorough assessment upfront to anticipate structural needs. If unexpected issues arise, we discuss options and provide cost adjustments transparently.',
        },
        {
          question: 'Can you upgrade systems during the remodel?',
          answer: 'Yes. Whole-home remodels are the perfect time to upgrade electrical, plumbing, HVAC, and insulation to modern standards. We include system assessments in our initial proposal.',
        },
      ]}
    />
  );
}
