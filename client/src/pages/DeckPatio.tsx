import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function DeckPatio() {
  return (
    <ServicePageTemplate
      title="Custom Deck & Patio Construction in Bellevue & Pierce County"
      subtitle="Build your outdoor living space. Premium materials, expert design, and year-round durability."
      description="Renovision Design & Build specializes in custom deck and patio construction throughout Bellevue, Tacoma, Gig Harbor, Lakewood, Puyallup, and the greater Puget Sound region. From composite decking and hardscaping to pergolas and outdoor kitchens, we create outdoor living spaces that extend your home. In-house crews, transparent pricing, no subcontractors."
      timeline="8–14 weeks"
      investmentRange="$30k – $80k+"
      scope="Design + build"
      keyBenefits={[
        {
          title: 'Premium Outdoor Materials',
          description: 'Composite decking, natural stone, pavers, and weather-resistant finishes',
        },
        {
          title: 'Expert Design & Layout',
          description: 'Multi-level decks, integrated seating, and functional outdoor spaces',
        },
        {
          title: 'Year-Round Durability',
          description: 'Built to withstand Pacific Northwest weather and seasonal changes',
        },
      ]}
      whyChooseTitle="Why Homeowners Choose Renovision for Deck & Patio Construction"
      whyChooseIntro="Your outdoor space should be an extension of your home—beautiful, functional, and built to last. Our design-build approach creates custom decks and patios that maximize your property and provide year-round enjoyment."
      whyChooseFeatures={[
        {
          title: 'Expert Outdoor Design & Layout',
          description: 'We design decks and patios that flow with your home\'s architecture and landscape. Multi-level designs, integrated seating, and functional zones maximize usability.',
        },
        {
          title: 'Premium Material Selection',
          description: 'Composite decking, natural stone, pavers, and weather-resistant finishes. We source durable materials built for the Pacific Northwest climate.',
        },
        {
          title: 'Structural Expertise & Code Compliance',
          description: 'Proper footings, framing, and drainage ensure your deck or patio lasts decades. We build to code and engineer for snow load and weather.',
        },
        {
          title: 'Fixed-Price Outdoor Construction',
          description: 'You know the cost upfront. No hidden charges for materials or labor—all included in the proposal.',
        },
      ]}
      services={[
        {
          title: 'Composite Deck Construction',
          description: 'Low-maintenance composite decking in various colors and finishes.',
        },
        {
          title: 'Hardwood Deck Building',
          description: 'Premium cedar, redwood, or pressure-treated lumber with custom finishes.',
        },
        {
          title: 'Multi-Level Deck Design',
          description: 'Tiered decks with integrated stairs, railings, and seating areas.',
        },
        {
          title: 'Patio & Hardscaping',
          description: 'Natural stone, pavers, and permeable surfaces for drainage.',
        },
        {
          title: 'Pergolas & Shade Structures',
          description: 'Custom pergolas, arbors, and shade sails for outdoor comfort.',
        },
        {
          title: 'Outdoor Kitchen & Bar',
          description: 'Built-in grills, countertops, and bar seating for entertaining.',
        },
        {
          title: 'Deck Lighting & Ambiance',
          description: 'LED lighting, string lights, and landscape lighting design.',
        },
        {
          title: 'Deck Repairs & Restoration',
          description: 'Refinishing, staining, and repairs to existing decks.',
        },
      ]}
      whatIncluded={[
        'Outdoor space design and 3D renderings',
        'Site preparation and grading',
        'Foundation and structural engineering',
        'Deck or patio construction',
        'Railing and safety features',
        'Stairs and transitions',
        'Drainage and grading',
        'Finishing and staining (if applicable)',
        'Permits and inspections',
        'Final walkthrough and documentation',
      ]}
      processSteps={[
        {
          title: 'Outdoor Space Assessment & Design',
          description: 'We evaluate your yard—sunlight, views, drainage, and usage patterns. We design an outdoor space that complements your home and lifestyle.',
        },
        {
          title: 'Material Selection & Planning',
          description: 'You select decking materials, colors, and finishes. We plan structural details, drainage, and safety features.',
        },
        {
          title: 'Site Preparation & Construction',
          description: 'We prepare the site, install foundations, and build your deck or patio. Our crews ensure proper drainage and structural integrity.',
        },
        {
          title: 'Finishing & Final Inspection',
          description: 'We apply stain or sealant, install railings and lighting, and conduct final inspections. Your outdoor space is ready to enjoy.',
        },
      ]}
      faqs={[
        {
          question: 'How long does deck or patio construction take?',
          answer: 'Deck and patio projects typically take 8–14 weeks from design approval to completion. The timeline depends on size, complexity, and weather.',
        },
        {
          question: 'What is the average cost of a deck or patio?',
          answer: 'Deck and patio costs typically range from $30,000 to $80,000+, depending on size, materials, and features. We provide a fixed-price proposal upfront.',
        },
        {
          question: 'Should I choose composite or hardwood decking?',
          answer: 'Composite decking is low-maintenance and durable. Hardwood offers natural beauty but requires periodic staining. We discuss pros and cons based on your preferences.',
        },
        {
          question: 'Do you handle permits and inspections?',
          answer: 'Yes. All permitting, inspections, and code compliance are included in our scope. We manage the entire process with local authorities.',
        },
        {
          question: 'Can you add lighting to my deck or patio?',
          answer: 'Yes. We design deck lighting, landscape lighting, and string lights to create ambiance and functionality for evening use.',
        },
        {
          question: 'What is the ROI on a deck or patio?',
          answer: 'A deck or patio typically returns 50–80% of its cost at resale. More importantly, you gain outdoor living space immediately.',
        },
      ]}
    />
  );
}
