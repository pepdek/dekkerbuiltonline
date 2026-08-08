import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function BasementRemodel() {
  return (
    <ServicePageTemplate
      title="Basement Remodeling & Finishing in Bellevue & Pierce County"
      subtitle="Convert unused basement space into functional living areas. Moisture control, egress windows, and premium finishes."
      description="Renovision Design & Build specializes in basement remodeling and finishing throughout Bellevue, Tacoma, Gig Harbor, Lakewood, Puyallup, and the greater Puget Sound region. From moisture control and egress windows to flooring and lighting, we transform basements into valuable living space. In-house crews, transparent pricing, no subcontractors."
      timeline="10–16 weeks"
      investmentRange="$40k – $100k+"
      scope="Design + build"
      keyBenefits={[
        {
          title: 'Professional Moisture Control & Waterproofing',
          description: 'Prevent mold and water damage with expert waterproofing systems',
        },
        {
          title: 'Egress Windows & Safety Compliance',
          description: 'Legal bedrooms with proper emergency egress and ventilation',
        },
        {
          title: 'Functional Layout Design',
          description: 'Maximize usable space with expert design and finishing',
        },
      ]}
      whyChooseTitle="Why Homeowners Choose Renovision for Basement Remodeling"
      whyChooseIntro="Basements are often overlooked potential. A properly finished basement adds significant value and living space. The key is moisture control, proper egress, and expert design. Our design-build approach ensures your basement is beautiful, functional, and protected from water damage."
      whyChooseFeatures={[
        {
          title: 'Expert Moisture Control & Waterproofing',
          description: 'Basements fail when moisture control is ignored. We use professional-grade waterproofing membranes, sump pump systems, and proper grading to prevent water intrusion and mold.',
        },
        {
          title: 'Legal Egress Windows & Bedrooms',
          description: 'If you want legal bedrooms, we install proper egress windows that meet building codes. Your basement is not just finished—it is compliant and safe.',
        },
        {
          title: 'Functional Layout & Lighting Design',
          description: 'Basements lack natural light. We design strategic lighting, paint colors, and layouts to make your basement feel bright and welcoming.',
        },
        {
          title: 'Fixed-Price Basement Finishing',
          description: 'You know the cost upfront. No hidden charges for waterproofing or egress installation—all included in the proposal.',
        },
      ]}
      services={[
        {
          title: 'Basement Waterproofing & Moisture Control',
          description: 'Professional waterproofing membranes, sump pump systems, and drainage solutions.',
        },
        {
          title: 'Egress Window Installation',
          description: 'Legal bedrooms with proper emergency egress windows meeting building codes.',
        },
        {
          title: 'Basement Bedroom Finishing',
          description: 'Drywall, flooring, lighting, and climate control for comfortable bedrooms.',
        },
        {
          title: 'Recreation Room & Media Room Design',
          description: 'Home theater, gaming areas, and entertainment spaces with proper acoustics.',
        },
        {
          title: 'Basement Flooring Solutions',
          description: 'Moisture-resistant options: luxury vinyl, tile, or engineered wood.',
        },
        {
          title: 'Lighting & HVAC Design',
          description: 'Strategic lighting to brighten spaces, plus proper ventilation and temperature control.',
        },
        {
          title: 'Basement Bar & Wet Bar Installation',
          description: 'Custom bars with plumbing, cabinetry, and premium finishes.',
        },
        {
          title: 'Storage & Organization Systems',
          description: 'Built-in shelving, closets, and organization solutions.',
        },
      ]}
      whatIncluded={[
        'Moisture assessment and waterproofing plan',
        'Professional waterproofing membrane installation',
        'Sump pump system (if needed)',
        'Egress window installation (if bedrooms planned)',
        'Drywall and framing',
        'Electrical design and installation',
        'Lighting design and installation',
        'HVAC design and installation',
        'Flooring installation',
        'Paint and finishes',
        'Permits and inspections',
        'Final walkthrough and documentation',
      ]}
      processSteps={[
        {
          title: 'Moisture Assessment & Waterproofing Plan',
          description: 'We assess your basement for moisture issues, foundation cracks, and drainage problems. We develop a comprehensive waterproofing plan before any finishing work begins.',
        },
        {
          title: 'Design & Layout Planning',
          description: 'We discuss your vision—bedrooms, recreation room, media room—and design a layout that maximizes usable space. We plan egress windows, lighting, and HVAC.',
        },
        {
          title: 'Waterproofing & Systems Installation',
          description: 'We install professional waterproofing, sump pump systems, and proper drainage. We ensure your basement is protected before finishing.',
        },
        {
          title: 'Finishing & Final Inspection',
          description: 'Our crews install drywall, flooring, lighting, and finishes. We conduct final inspections and ensure your basement is ready to use.',
        },
      ]}
      faqs={[
        {
          question: 'How long does basement finishing take?',
          answer: 'Basement remodels typically take 10–16 weeks from design approval to completion. The timeline depends on scope, waterproofing needs, and egress window installation.',
        },
        {
          question: 'What is the average cost of basement finishing?',
          answer: 'Basement finishing typically costs $40,000 to $100,000+, depending on size, waterproofing needs, and finishes. We provide a fixed-price proposal upfront.',
        },
        {
          question: 'How do you prevent water damage in basements?',
          answer: 'Professional waterproofing membranes, sump pump systems, proper grading, and drainage are critical. We assess your basement and implement solutions to prevent water intrusion.',
        },
        {
          question: 'Can I create legal bedrooms in my basement?',
          answer: 'Yes, if you install proper egress windows. We ensure all bedrooms meet building codes with emergency egress and proper ventilation.',
        },
        {
          question: 'What flooring is best for basements?',
          answer: 'Moisture-resistant options like luxury vinyl, tile, or engineered wood work best. We avoid standard hardwood in basements due to moisture risk.',
        },
        {
          question: 'How do you brighten a dark basement?',
          answer: 'Strategic lighting design, light paint colors, and egress windows all help. We create a bright, welcoming basement with proper lighting planning.',
        },
      ]}
    />
  );
}
