import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function ADUConstruction() {
  return (
    <ServicePageTemplate
      title="ADU Construction"
      subtitle="Backyard cottages & suites built to local ADU rules."
      description="Renovision Design & Build designs and constructs Accessory Dwelling Units (ADUs) throughout Seattle, Bellevue, Kirkland, Redmond, and the greater Eastside. We handle permitting, design, and construction—navigating local zoning codes and building requirements so you do not have to."
      timeline="5–8 months"
      investmentRange="$220k – $420k"
      scope="Design + build"
      keyBenefits={[
        {
          title: 'Zoning & permitting expertise',
          description: 'We navigate local ADU codes and requirements',
        },
        {
          title: 'AI 3D design visualization',
          description: 'See your ADU before construction begins',
        },
        {
          title: 'In-house construction',
          description: 'All trades managed by Renovision',
        },
      ]}
      whyChooseTitle="Why Seattle Homeowners Choose Renovision for ADU Construction"
      whyChooseIntro="ADU construction is complex. Local zoning varies by city, permitting is strict, and construction requires coordination across multiple trades. Our design-build expertise ensures your ADU is designed correctly, permitted efficiently, and built to code—maximizing your property value."
      whyChooseFeatures={[
        {
          title: 'Zoning & Code Expertise',
          description: 'ADU regulations differ by city and neighborhood. We understand Seattle, Bellevue, Kirkland, and Eastside requirements. We design ADUs that comply with setbacks, height limits, parking, and utility requirements.',
        },
        {
          title: 'Efficient Permitting',
          description: 'We manage the entire permitting process, from initial design review to final inspections. Our relationships with local building departments expedite approvals.',
        },
        {
          title: 'Value Maximization',
          description: 'A well-designed ADU increases property value and generates rental income. We design for both aesthetics and functionality.',
        },
        {
          title: 'Single Point of Contact',
          description: 'From design through construction, you have one firm managing the entire project. No coordination headaches.',
        },
      ]}
      services={[
        {
          title: 'Detached ADUs',
          description: 'Standalone cottages with full kitchen, bathroom, and living space.',
        },
        {
          title: 'Attached ADUs',
          description: 'Units attached to the primary residence or garage.',
        },
        {
          title: 'Garage conversions',
          description: 'Convert existing garages into ADUs with proper egress and utilities.',
        },
        {
          title: 'Basement ADUs',
          description: 'Finish basement spaces into legal ADUs with egress windows.',
        },
        {
          title: 'Accessory structures',
          description: 'Guest houses and backyard studios.',
        },
        {
          title: 'Utility coordination',
          description: 'Electrical, plumbing, and HVAC for independent living.',
        },
        {
          title: 'Parking solutions',
          description: 'Design parking to meet local requirements.',
        },
        {
          title: 'Zoning compliance',
          description: 'Design that meets setbacks, height limits, and local codes.',
        },
      ]}
      whatIncluded={[
        'Zoning analysis & compliance design',
        'Architectural design & 3D renderings',
        'Full permitting & inspections',
        'Foundation & structural work',
        'Electrical & plumbing systems',
        'HVAC & ventilation',
        'Interior finishes',
        'Exterior finishes & landscaping',
      ]}
      processSteps={[
        {
          title: 'Site Assessment & Zoning Review',
          description: 'We evaluate your property, review local ADU codes, and determine feasibility. We discuss options and constraints.',
        },
        {
          title: 'Design & Permitting Strategy',
          description: 'Our design team creates a compliant design and develops a permitting strategy. We handle all applications and submissions.',
        },
        {
          title: 'Permits & Approvals',
          description: 'We manage the permitting process, respond to city comments, and obtain all required approvals.',
        },
        {
          title: 'Construction & Inspections',
          description: 'Our crew builds to code. We coordinate all inspections and ensure compliance throughout construction.',
        },
      ]}
      faqs={[
        {
          question: 'Are ADUs legal in Seattle and the Eastside?',
          answer: 'Yes. Seattle and most Eastside cities now allow ADUs. Regulations vary by city and neighborhood. We assess your property and advise on feasibility.',
        },
        {
          question: 'How long does ADU construction take?',
          answer: 'Most ADUs take 5–8 months from design through completion. Permitting typically takes 2–3 months. We provide a detailed timeline.',
        },
        {
          question: 'What is the cost of an ADU?',
          answer: 'ADU costs range from $220k–$420k depending on size, finishes, and site conditions. We provide a fixed-price proposal upfront.',
        },
        {
          question: 'Can I rent out my ADU?',
          answer: 'Yes, if designed and permitted as a rental unit. Local regulations vary. We ensure your ADU is designed and permitted for your intended use.',
        },
        {
          question: 'Will an ADU increase my property value?',
          answer: 'Yes. A well-designed ADU increases property value and generates rental income. It also provides flexibility for family, guests, or income.',
        },
      ]}
    />
  );
}
