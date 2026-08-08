import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function BathroomRemodel() {
  return (
    <ServicePageTemplate
      title="Bathroom Remodeling"
      subtitle="Spa-calm bathrooms with tile, stone, and warm light."
      description="Renovision Design & Build specializes in bathroom remodeling throughout Seattle, Bellevue, Kirkland, Redmond, and the greater Eastside. From master suite overhauls to powder room refreshes, our in-house team handles every detail—plumbing, tile, electrical, and fixtures—under one roof."
      timeline="5–8 weeks"
      investmentRange="$35k – $95k"
      scope="Design + build"
      keyBenefits={[
        {
          title: 'In-house crews',
          description: 'Plumbers, electricians, and tile setters all employed by Renovision',
        },
        {
          title: 'AI 3D design visualization',
          description: 'Preview your bathroom before the first tile is laid',
        },
        {
          title: 'Licensed & insured',
          description: 'BBB Accredited, serving Greater Seattle & Puget Sound',
        },
      ]}
      whyChooseTitle="Why Seattle Homeowners Choose Renovision for Bathroom Remodels"
      whyChooseIntro="A bathroom remodel is an investment in daily comfort and home value. Homeowners want a contractor who understands tile work, plumbing coordination, and moisture management—and who won't disappear mid-project. Our design-build approach ensures seamless execution and accountability."
      whyChooseFeatures={[
        {
          title: 'Moisture Management Expertise',
          description: 'Proper waterproofing and ventilation prevent costly mold and water damage. Our crews follow industry best practices for tile installation, substrate preparation, and exhaust ventilation.',
        },
        {
          title: 'Coordinated Trades',
          description: 'Plumbing, electrical, and tile work must align perfectly. With one in-house team, there is no miscommunication or finger-pointing. We coordinate every trade seamlessly.',
        },
        {
          title: 'Material Selection Support',
          description: 'We guide you through tile, stone, fixtures, and finishes. Our in-house design team ensures your selections work together aesthetically and functionally.',
        },
        {
          title: 'Fixed-Price Transparency',
          description: 'You know the cost upfront. No hidden charges for plumbing relocations or electrical upgrades—they are all included in the proposal.',
        },
      ]}
      services={[
        {
          title: 'Master bathroom suites',
          description: 'Dual vanities, walk-in showers, soaking tubs, heated floors.',
        },
        {
          title: 'Wet rooms & curbless showers',
          description: 'Accessible, spa-like designs with proper drainage and waterproofing.',
        },
        {
          title: 'Powder room refreshes',
          description: 'Quick, high-impact updates for guest bathrooms.',
        },
        {
          title: 'Tile & stone work',
          description: 'Subway, hexagon, large-format, natural stone—expertly installed.',
        },
        {
          title: 'Plumbing relocations',
          description: 'Move sinks, add heated towel racks, install pot fillers.',
        },
        {
          title: 'Lighting & exhaust',
          description: 'Recessed lighting, vanity sconces, proper ventilation.',
        },
        {
          title: 'Fixture upgrades',
          description: 'Faucets, showerheads, towel bars, mirrors.',
        },
        {
          title: 'Flooring options',
          description: 'Tile, heated tile, luxury vinyl, or natural stone.',
        },
      ]}
      whatIncluded={[
        'Tile & stone installation',
        'Plumbing fixtures & relocations',
        'Electrical & lighting',
        'Vanities & cabinetry',
        'Mirrors & accessories',
        'Exhaust ventilation',
        'Waterproofing & substrate prep',
        'Permits & project management',
      ]}
      processSteps={[
        {
          title: 'Free Design Consultation',
          description: 'We assess your current bathroom, discuss your needs (storage, lighting, accessibility), and explore design options. We explain what is realistic at your budget.',
        },
        {
          title: 'AI 3D Design',
          description: 'Our design team creates photorealistic renders showing tile layouts, fixture placement, lighting, and finishes. You approve the design before any work begins.',
        },
        {
          title: 'Proposal & Permits',
          description: 'Clear, itemized estimate covering all materials, labor, and permits. We handle all required building permits and inspections.',
        },
        {
          title: 'Build & Walkthrough',
          description: 'Our crew manages demolition, plumbing, electrical, tile, and finishing. Weekly updates keep you informed. Final walkthrough and warranty.',
        },
      ]}
      relatedProjects={[
        {
          title: 'Bedroom-To-Bathroom Conversion In Loyal Heights, Seattle',
          image: '/manus-storage/bathroom-project_aa53c9f7.webp',
          link: '/project/loyal-heights-bedroom-to-bathroom-conversion',
        },
      ]}
      faqs={[
        {
          question: 'How long does a bathroom remodel take?',
          answer: 'Most bathroom remodels take 5–8 weeks. Larger master baths may take 8–10 weeks. We provide a detailed timeline upfront.',
        },
        {
          question: 'Can we use our bathroom during the remodel?',
          answer: 'Typically, no. We recommend using a guest bathroom or nearby facility. We work efficiently to minimize disruption.',
        },
        {
          question: 'What is the return on a bathroom remodel?',
          answer: 'A bathroom remodel typically returns 50–70% of its cost at resale. More importantly, you enjoy the improved space daily.',
        },
        {
          question: 'How do you prevent mold and water damage?',
          answer: 'Proper waterproofing, substrate preparation, and exhaust ventilation are critical. Our crews follow industry best practices and building codes to ensure long-term durability.',
        },
      ]}
    />
  );
}
