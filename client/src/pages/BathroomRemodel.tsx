import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function BathroomRemodel() {
  return (
    <ServicePageTemplate
      title="Luxury Bathroom Remodeling in Bellevue & Pierce County"
      subtitle="Create your personal spa retreat. Premium fixtures, waterproofing, and design excellence."
      description="Renovision Design & Build specializes in luxury bathroom remodeling throughout Bellevue, Tacoma, Gig Harbor, Lakewood, Puyallup, and the greater Puget Sound region. From master bath suites to powder rooms, we handle custom tile work, premium fixtures, heated floors, and spa-like finishes. In-house crews, transparent pricing, no subcontractors."
      timeline="6–10 weeks"
      investmentRange="$25k – $75k+"
      scope="Design + build"
      keyBenefits={[
        {
          title: 'Spa-Like Finishes & Premium Fixtures',
          description: 'Heated floors, rainfall showerheads, soaking tubs, and luxury tile selections',
        },
        {
          title: 'Expert Waterproofing & Moisture Control',
          description: 'Professional waterproofing systems to prevent future water damage',
        },
        {
          title: 'Custom Tile & Fixture Design',
          description: 'Subway tile, mosaic patterns, natural stone, and designer hardware',
        },
      ]}
      whyChooseTitle="Why Homeowners Choose Renovision for Bathroom Renovations"
      whyChooseIntro="A bathroom remodel is a personal investment in daily comfort and home value. You want a contractor who understands luxury finishes, manages moisture control, and delivers a spa-like retreat. Our design-build approach ensures every detail is perfect."
      whyChooseFeatures={[
        {
          title: 'Expert Waterproofing & Moisture Management',
          description: 'Bathrooms fail when moisture control is overlooked. We use professional-grade waterproofing membranes, proper ventilation design, and drainage systems to prevent mold and water damage for years to come.',
        },
        {
          title: 'Custom Tile & Fixture Selection',
          description: 'From subway tile to natural stone, mosaic patterns to marble, we source premium materials and install them with precision. Every tile is set perfectly, every grout line is clean.',
        },
        {
          title: 'Spa-Like Amenities & Comfort',
          description: 'Heated bathroom floors, rainfall showerheads, soaking tubs, heated towel racks, and steam showers. We integrate luxury features that transform your daily routine.',
        },
        {
          title: 'Fixed-Price Bathroom Remodeling',
          description: 'You know the cost upfront. No hidden charges, no creeping change orders. Our proposals include all labor, materials, permits, and inspections.',
        },
      ]}
      services={[
        {
          title: 'Master Bath Suite Remodels',
          description: 'Complete redesign with dual vanities, spa shower, soaking tub, and heated floors.',
        },
        {
          title: 'Shower & Tub Enclosure Installation',
          description: 'Frameless glass enclosures, custom tile surrounds, rainfall showerheads, and body jets.',
        },
        {
          title: 'Custom Vanity & Cabinetry',
          description: 'Floating vanities, custom storage, soft-close drawers, and premium hardware.',
        },
        {
          title: 'Tile Work & Waterproofing',
          description: 'Subway tile, mosaic patterns, natural stone, and professional waterproofing membranes.',
        },
        {
          title: 'Luxury Fixture Installation',
          description: 'High-end faucets, heated towel racks, ventilation fans, and lighting design.',
        },
        {
          title: 'Heated Floor Installation',
          description: 'Radiant floor heating for comfort and luxury in bathrooms and entryways.',
        },
        {
          title: 'Powder Room Remodels',
          description: 'Compact, high-impact designs for guest bathrooms with premium finishes.',
        },
        {
          title: 'Bathroom Lighting & Ventilation',
          description: 'Proper ventilation design, LED lighting, and moisture-resistant fixtures.',
        },
      ]}
      whatIncluded={[
        'Detailed 3D bathroom design and renderings',
        'Structural assessment and modifications (if needed)',
        'Professional waterproofing and moisture barriers',
        'Permits and inspections',
        'Plumbing design and installation',
        'Electrical design and installation',
        'Custom tile fabrication and installation',
        'Vanity and cabinetry installation',
        'Fixture installation (faucets, towel racks, etc.)',
        'Lighting and ventilation',
        'Heated floor installation (if included)',
        'Final walkthrough and punch list',
      ]}
      processSteps={[
        {
          title: 'Bathroom Design & 3D Visualization',
          description: 'We meet at your home to understand your vision—spa-like retreat or functional family bathroom. We measure the space and discuss fixture preferences. Within 2 weeks, you receive a photorealistic 3D rendering for approval.',
        },
        {
          title: 'Fixture & Material Selection',
          description: 'You select tile styles, vanity designs, faucet finishes, lighting, and luxury amenities from our curated vendors. We provide samples and design guidance.',
        },
        {
          title: 'Waterproofing & Installation',
          description: 'Our crews install professional waterproofing membranes, plumbing, electrical, and tile work. Proper moisture control is our priority to prevent future problems.',
        },
        {
          title: 'Final Inspection & Styling',
          description: 'After all trades complete their work, we conduct a final inspection, address any punch-list items, and ensure your new bathroom is spa-ready. You receive full documentation and warranty information.',
        },
      ]}
      faqs={[
        {
          question: 'How long does a bathroom remodel take?',
          answer: 'Most bathroom remodels take 6–10 weeks from design approval to final walkthrough. The timeline depends on the scope (powder room vs. master bath), permit processing, and material lead times.',
        },
        {
          question: 'What is the average cost of a bathroom remodel?',
          answer: 'Bathroom remodels typically range from $25,000 to $75,000+, depending on materials, fixtures, and finishes. We provide a fixed-price proposal upfront so you know the total investment before work begins.',
        },
        {
          question: 'How do you prevent water damage and mold?',
          answer: 'We use professional-grade waterproofing membranes, proper drainage systems, and ventilation design. Moisture control is built into every bathroom remodel to prevent future problems.',
        },
        {
          question: 'Can you install heated floors?',
          answer: 'Yes. Radiant floor heating is a popular luxury feature. We can install it under tile or stone for comfort and warmth.',
        },
        {
          question: 'Do you handle permits and inspections?',
          answer: 'Yes. All permitting, inspections, and code compliance are included in our scope. We manage the entire process so you do not have to coordinate with the city.',
        },
        {
          question: 'What if I want to change the design during construction?',
          answer: 'Design changes are addressed quickly with our integrated design-build model. We discuss the change, provide a cost adjustment if needed, and implement it without delays.',
        },
      ]}
    />
  );
}
