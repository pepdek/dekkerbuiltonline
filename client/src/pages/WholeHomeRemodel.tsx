import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function WholeHomeRemodel() {
  return (
    <ServicePageTemplate
      title="Whole Home Remodel"
      subtitle="A top-to-bottom transformation, managed end to end."
      description="Renovision Design & Build transforms entire homes—from kitchen and bathrooms to flooring, electrical, and structural changes. Our in-house team coordinates every trade under one roof, ensuring a seamless, single-schedule project with one point of contact and one price."
      timeline="3–6 months"
      investmentRange="$200k+"
      scope="Design + build"
      keyBenefits={[
        {
          title: 'In-house crews',
          description: 'All trades managed by Renovision—no subcontractor handoffs',
        },
        {
          title: 'AI 3D design visualization',
          description: 'See your entire home transformed before construction',
        },
        {
          title: 'Single schedule & point of contact',
          description: 'No coordination headaches between separate contractors',
        },
      ]}
      whyChooseTitle="Why Seattle Homeowners Choose Renovision for Whole Home Remodels"
      whyChooseIntro="A whole-home remodel is complex. Multiple trades, long timelines, and coordination challenges often lead to cost overruns and delays. Our design-build model eliminates these risks by managing every aspect under one team, one schedule, and one contract."
      whyChooseFeatures={[
        {
          title: 'Integrated Design & Execution',
          description: 'Our design team works with your crew leads to ensure every detail—from electrical placement to plumbing runs—is coordinated before construction begins. No surprises, no change orders.',
        },
        {
          title: 'Efficient Project Management',
          description: 'One schedule. One point of contact. All trades coordinated daily. You avoid the chaos of managing separate contractors and conflicting timelines.',
        },
        {
          title: 'Structural & Systems Expertise',
          description: 'Whole-home projects often involve structural changes, electrical upgrades, and HVAC modifications. Our in-house team has the expertise to handle it all safely and to code.',
        },
        {
          title: 'Fixed-Price Accountability',
          description: 'You know the cost upfront. We manage the complexity so you do not have to.',
        },
      ]}
      services={[
        {
          title: 'Kitchen remodels',
          description: 'Full gut, layout changes, custom cabinetry, appliance integration.',
        },
        {
          title: 'Bathroom remodels',
          description: 'Master suites, powder rooms, tile work, plumbing upgrades.',
        },
        {
          title: 'Flooring throughout',
          description: 'Hardwood, LVP, tile—coordinated across the entire home.',
        },
        {
          title: 'Electrical upgrades',
          description: 'New circuits, outlets, lighting, smart home integration.',
        },
        {
          title: 'HVAC systems',
          description: 'New furnace, AC, ductwork, zone control.',
        },
        {
          title: 'Structural changes',
          description: 'Wall removal, beam installation, layout reconfiguration.',
        },
        {
          title: 'Exterior updates',
          description: 'Siding, roofing, windows, doors, decks.',
        },
        {
          title: 'Interior finishes',
          description: 'Drywall, paint, trim, doors, hardware.',
        },
      ]}
      whatIncluded={[
        'Kitchen & bathroom remodels',
        'Flooring throughout',
        'Electrical & lighting upgrades',
        'Plumbing updates',
        'HVAC systems',
        'Structural modifications',
        'Interior & exterior finishes',
        'Permits & project management',
      ]}
      processSteps={[
        {
          title: 'Comprehensive Consultation',
          description: 'We walk your entire home, discuss your vision, and identify priorities. We assess structural, electrical, plumbing, and HVAC needs.',
        },
        {
          title: 'Master Plan & 3D Design',
          description: 'Our design team creates a comprehensive plan covering all rooms and systems. You approve the design and phasing before construction.',
        },
        {
          title: 'Detailed Proposal & Permits',
          description: 'Clear breakdown of all costs, timelines, and phases. We handle all permits and inspections.',
        },
        {
          title: 'Coordinated Build & Management',
          description: 'All trades work on one schedule. Weekly updates, daily coordination, and one point of contact throughout.',
        },
      ]}
      faqs={[
        {
          question: 'How long does a whole-home remodel take?',
          answer: 'Most whole-home remodels take 3–6 months, depending on scope and complexity. We provide a detailed timeline and phasing plan upfront.',
        },
        {
          question: 'Can we live in our home during a whole-home remodel?',
          answer: 'It depends on the scope. For partial remodels, we can often set up temporary spaces. For extensive remodels, temporary housing may be necessary. We discuss this during the consultation.',
        },
        {
          question: 'How do you manage multiple trades on one schedule?',
          answer: 'Detailed planning and daily coordination. Our project manager ensures trades are sequenced efficiently and communicate daily. This prevents delays and conflicts.',
        },
        {
          question: 'What if we want to add or change something during the project?',
          answer: 'Changes are possible but managed carefully. We discuss the impact on timeline and cost upfront. Our design-build model minimizes surprises by planning thoroughly before work begins.',
        },
      ]}
    />
  );
}
