import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function BasementRemodel() {
  return (
    <ServicePageTemplate
      title="Basement Remodeling"
      subtitle="Turn unfinished square footage into living space."
      description="Renovision Design & Build transforms basements into functional, comfortable living spaces. From moisture control and egress windows to electrical, plumbing, and finishes, we handle every detail to create a space you will actually use."
      timeline="6–10 weeks"
      investmentRange="$60k – $140k"
      scope="Design + build"
      keyBenefits={[
        {
          title: 'Moisture & egress expertise',
          description: 'Proper waterproofing and egress windows prevent problems',
        },
        {
          title: 'Code compliance',
          description: 'We ensure all electrical, plumbing, and egress meet code',
        },
        {
          title: 'In-house crews',
          description: 'All trades managed by Renovision',
        },
      ]}
      whyChooseTitle="Why Seattle Homeowners Choose Renovision for Basement Remodels"
      whyChooseIntro="Basements are tricky. Moisture control, egress windows, electrical codes, and plumbing coordination require expertise. A poorly executed basement remodel leads to mold, code violations, and wasted money. Our design-build approach ensures your basement is built right."
      whyChooseFeatures={[
        {
          title: 'Moisture Management',
          description: 'Seattle basements face moisture challenges. We assess your foundation, install proper drainage and waterproofing, and ensure long-term dryness.',
        },
        {
          title: 'Egress Windows & Safety',
          description: 'Bedrooms require egress windows for emergency exit. We design and install compliant egress solutions that are both safe and attractive.',
        },
        {
          title: 'Electrical & Plumbing Coordination',
          description: 'Basement electrical and plumbing require careful planning. Our in-house crews coordinate everything to code.',
        },
        {
          title: 'Functional Design',
          description: 'We design basements for actual use—media rooms, home gyms, guest suites, or recreation spaces. Not wasted square footage.',
        },
      ]}
      services={[
        {
          title: 'Waterproofing & drainage',
          description: 'Interior and exterior waterproofing, sump pump installation, drainage systems.',
        },
        {
          title: 'Egress windows',
          description: 'Compliant egress windows for bedrooms and emergency exit.',
        },
        {
          title: 'Framing & drywall',
          description: 'Proper framing with moisture-resistant materials.',
        },
        {
          title: 'Electrical systems',
          description: 'New circuits, outlets, lighting, and code-compliant installation.',
        },
        {
          title: 'Plumbing',
          description: 'Bathrooms, wet bars, and utility sinks.',
        },
        {
          title: 'Flooring',
          description: 'Tile, LVP, or finished concrete.',
        },
        {
          title: 'HVAC & ventilation',
          description: 'Proper heating, cooling, and air quality.',
        },
        {
          title: 'Finishing touches',
          description: 'Paint, trim, doors, and fixtures.',
        },
      ]}
      whatIncluded={[
        'Waterproofing & drainage assessment',
        'Egress window installation',
        'Framing & drywall',
        'Electrical systems & lighting',
        'Plumbing (if applicable)',
        'Flooring installation',
        'HVAC & ventilation',
        'Interior finishes & trim',
      ]}
      processSteps={[
        {
          title: 'Basement Assessment',
          description: 'We inspect your basement for moisture, drainage, and structural issues. We discuss your vision and assess feasibility.',
        },
        {
          title: 'Design & Planning',
          description: 'Our design team creates a plan addressing moisture, egress, electrical, and plumbing. We show you 3D renderings of the finished space.',
        },
        {
          title: 'Permits & Preparation',
          description: 'We obtain all required permits. We prepare the space with waterproofing and drainage before framing begins.',
        },
        {
          title: 'Build & Finishing',
          description: 'Our crew frames, installs electrical and plumbing, finishes flooring and walls. Final walkthrough and warranty.',
        },
      ]}
      faqs={[
        {
          question: 'How long does a basement remodel take?',
          answer: 'Most basement remodels take 6–10 weeks. Larger projects or those requiring significant waterproofing may take longer. We provide a detailed timeline.',
        },
        {
          question: 'How much does basement waterproofing cost?',
          answer: 'Waterproofing costs vary based on your basement\'s condition. We assess and provide a detailed estimate. Proper waterproofing is an investment that protects your entire project.',
        },
        {
          question: 'Do I need an egress window?',
          answer: 'If you plan to use the basement as a bedroom or sleeping area, yes. Building code requires egress windows for emergency exit. We design compliant solutions.',
        },
        {
          question: 'Can I add a bathroom to my basement?',
          answer: 'Yes. We handle all plumbing, including rough-in and finishing. We ensure proper drainage and code compliance.',
        },
        {
          question: 'What is the ROI on a basement remodel?',
          answer: 'A basement remodel typically returns 50–70% of its cost at resale. More importantly, you gain functional living space immediately.',
        },
      ]}
    />
  );
}
