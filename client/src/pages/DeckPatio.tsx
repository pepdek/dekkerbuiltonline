import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function DeckPatio() {
  return (
    <ServicePageTemplate
      title="Decks & Patio"
      subtitle="Cedar decks, patios, and outdoor rooms for the NW."
      description="Renovision Design & Build builds custom decks and patios that extend your living space and enhance your property. From pressure-treated and composite decks to stone patios and outdoor kitchens, we design and build outdoor spaces built to last in the Pacific Northwest climate."
      timeline="3–6 weeks"
      investmentRange="$25k – $90k"
      scope="Design + build"
      keyBenefits={[
        {
          title: 'Weather-resistant materials',
          description: 'Built for Pacific Northwest rain and moisture',
        },
        {
          title: 'Code-compliant construction',
          description: 'Proper footings, railings, and structural integrity',
        },
        {
          title: 'In-house crews',
          description: 'All construction managed by Renovision',
        },
      ]}
      whyChooseTitle="Why Seattle Homeowners Choose Renovision for Decks & Patios"
      whyChooseIntro="A well-built deck or patio becomes an extension of your home. Poor construction leads to rot, settling, and safety issues. Our design-build approach ensures your outdoor space is built correctly and lasts for decades."
      whyChooseFeatures={[
        {
          title: 'Pacific Northwest Expertise',
          description: 'We understand local weather, soil conditions, and moisture challenges. We build decks and patios that withstand rain, freeze-thaw cycles, and ground movement.',
        },
        {
          title: 'Proper Foundation & Footings',
          description: 'Frost-protected footings prevent settling and heaving. We build to code and beyond, ensuring long-term stability.',
        },
        {
          title: 'Material Selection',
          description: 'We guide you through pressure-treated lumber, composite, cedar, and stone options. Each has pros and cons—we help you choose what fits your budget and maintenance preferences.',
        },
        {
          title: 'Integrated Design',
          description: 'We design decks and patios that complement your home\'s architecture and flow naturally from your interior spaces.',
        },
      ]}
      services={[
        {
          title: 'Pressure-treated decks',
          description: 'Durable, affordable, and low-maintenance.',
        },
        {
          title: 'Composite decks',
          description: 'Wood-plastic blend with minimal maintenance.',
        },
        {
          title: 'Cedar decks',
          description: 'Natural beauty with proper sealing and maintenance.',
        },
        {
          title: 'Stone patios',
          description: 'Pavers, flagstone, or natural stone.',
        },
        {
          title: 'Outdoor kitchens',
          description: 'Grills, countertops, and built-in seating.',
        },
        {
          title: 'Fire pits & fireplaces',
          description: 'Outdoor gathering spaces.',
        },
        {
          title: 'Pergolas & shade structures',
          description: 'Architectural elements for sun control.',
        },
        {
          title: 'Railings & stairs',
          description: 'Code-compliant and attractive.',
        },
      ]}
      whatIncluded={[
        'Site assessment & grading',
        'Frost-protected footings',
        'Structural framing',
        'Decking or patio surface',
        'Railings & stairs',
        'Proper drainage',
        'Sealing & finishing',
        'Permits & inspections',
      ]}
      processSteps={[
        {
          title: 'Site Assessment',
          description: 'We evaluate your yard, soil conditions, drainage, and sun exposure. We discuss your vision and budget.',
        },
        {
          title: 'Design & Planning',
          description: 'Our design team creates a plan showing layout, materials, and finishes. We show you renderings of the finished space.',
        },
        {
          title: 'Permits & Preparation',
          description: 'We obtain all required permits. We prepare the site with proper grading and drainage.',
        },
        {
          title: 'Build & Finishing',
          description: 'Our crew builds the structure, installs the surface, railings, and stairs. Final sealing and finishing.',
        },
      ]}
      faqs={[
        {
          question: 'How long does a deck or patio take to build?',
          answer: 'Most decks take 3–6 weeks. Patios may take 2–4 weeks. We provide a detailed timeline based on your project size.',
        },
        {
          question: 'What is the best material for a deck in the Pacific Northwest?',
          answer: 'It depends on your budget and maintenance preferences. Pressure-treated lumber is affordable and durable. Composite requires less maintenance. Cedar is beautiful but needs regular sealing. We help you choose.',
        },
        {
          question: 'Do I need a permit for a deck?',
          answer: 'Yes, most decks require permits. We handle all permitting and inspections.',
        },
        {
          question: 'How often should I seal my deck?',
          answer: 'Pressure-treated decks should be sealed every 2–3 years. Cedar should be sealed annually. Composite requires minimal maintenance. We advise on your specific material.',
        },
        {
          question: 'Can you build a patio on a slope?',
          answer: 'Yes. We assess your slope and design a patio with proper drainage and retaining walls if needed.',
        },
      ]}
    />
  );
}
