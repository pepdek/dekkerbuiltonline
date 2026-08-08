import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function KitchenRemodel() {
  return (
    <ServicePageTemplate
      title="Custom Kitchen Remodeling in Tacoma & Pierce County"
      subtitle="Transform your kitchen into a culinary masterpiece. Visualize every detail in 3D before construction begins."
      description="Renovision Design & Build specializes in luxury kitchen remodeling throughout Tacoma, Tacoma, Gig Harbor, Lakewood, Puyallup, and the greater Puget Sound region. Our integrated design-build approach handles everything—from custom cabinetry and premium countertops to appliance integration and lighting design. In-house crews, transparent pricing, no subcontractors."
      timeline="8–12 weeks"
      investmentRange="$50k – $130k+"
      scope="Design + build"
      keyBenefits={[
        {
          title: 'Custom Cabinetry & Layout Design',
          description: 'Full inset, semi-custom, and flat-panel designs tailored to your space',
        },
        {
          title: 'AI 3D Visualization & Approval',
          description: 'See your complete kitchen design before any construction begins',
        },
        {
          title: 'Premium Materials & Finishes',
          description: 'Quartz, marble, granite countertops and high-end appliance integration',
        },
      ]}
      whyChooseTitle="Why Homeowners Choose Renovision for Kitchen Remodeling"
      whyChooseIntro="A kitchen remodel is one of the highest-value home investments. You deserve a contractor who understands design, manages permits, and delivers without surprises. Our design-build model integrates architecture, permitting, and construction into one seamless process."
      whyChooseFeatures={[
        {
          title: 'Photorealistic 3D Kitchen Design',
          description: 'Before ordering materials or framing walls, you approve a photorealistic rendering of your new kitchen. Adjust layouts, select countertop colors, reposition the island, and visualize lighting. Most contractors show floor plans; we show your complete vision.',
        },
        {
          title: 'In-House Kitchen Specialists',
          description: 'All carpenters, tile setters, electricians, and plumbers are Renovision employees. No subcontractor handoffs. One team, one accountability, one point of contact from design approval to final walkthrough.',
        },
        {
          title: 'Integrated Design-Build Process',
          description: 'When architects and general contractors are separate, design changes trigger change orders. With design-build, revisions are seamless. One contract, one schedule, one firm responsible for every detail.',
        },
        {
          title: 'Fixed-Price Kitchen Remodeling',
          description: 'You see the final number before we start. No hidden costs, no creeping change orders. Our proposals include all labor, materials, permits, and inspections.',
        },
      ]}
      services={[
        {
          title: 'Full Kitchen Gut Remodels',
          description: 'Complete layout redesign with new framing, plumbing, electrical, and finishes. Best ROI for $80,000+ projects.',
        },
        {
          title: 'Open-Concept Kitchen Conversions',
          description: 'Wall removal, structural beam installation, and seamless flow into dining and living areas.',
        },
        {
          title: 'Custom Cabinetry Installation',
          description: 'Full inset, semi-custom, and flat-panel designs with soft-close hinges and premium hardware.',
        },
        {
          title: 'Premium Countertop Selection & Installation',
          description: 'Quartz, quartzite, marble, leathered granite, butcher block, and waterfall edges.',
        },
        {
          title: 'Kitchen Island Design & Build',
          description: 'Functional islands with seating, storage, and integrated appliances. Design, permit, and construction included.',
        },
        {
          title: 'Appliance Integration & Ventilation',
          description: 'Built-in refrigerators, integrated dishwashers, professional range hoods, and ventilation systems.',
        },
        {
          title: 'Lighting Design & Installation',
          description: 'Recessed LED, under-cabinet lighting, statement pendants, and task lighting for every zone.',
        },
        {
          title: 'Backsplash & Tile Work',
          description: 'Custom tile patterns, subway tile, mosaic designs, and premium grout finishes.',
        },
      ]}
      whatIncluded={[
        'Detailed 3D kitchen design and renderings',
        'Structural engineering (if walls are removed)',
        'Electrical and plumbing design',
        'Permits and inspections',
        'Cabinet fabrication and installation',
        'Countertop fabrication and installation',
        'Tile and backsplash installation',
        'Appliance delivery and integration',
        'Lighting installation',
        'Flooring (if included in scope)',
        'Final walkthrough and punch list',
      ]}
      processSteps={[
        {
          title: 'Kitchen Design & 3D Visualization',
          description: 'We meet at your home to understand your vision, measure the space, and discuss layout preferences. Within 2 weeks, you receive a photorealistic 3D rendering. You approve the design before we move forward.',
        },
        {
          title: 'Permitting & Material Selection',
          description: 'We handle all permitting with local authorities. You select countertop colors, cabinet styles, appliances, and tile finishes from our curated vendors.',
        },
        {
          title: 'Construction & In-House Installation',
          description: 'Our in-house crews begin demolition and framing. Carpenters, electricians, plumbers, and tile setters work in coordinated phases. You receive weekly progress updates.',
        },
        {
          title: 'Final Inspection & Styling',
          description: 'After all trades complete their work, we conduct a final inspection, address any punch-list items, and style your new kitchen. You receive full documentation and warranty information.',
        },
      ]}
      faqs={[
        {
          question: 'How long does a kitchen remodel take?',
          answer: 'Most kitchen remodels take 8–12 weeks from design approval to final walkthrough. The timeline depends on the scope (full remodel vs. cabinet replacement), permit processing time, and material lead times.',
        },
        {
          question: 'What is the average cost of a kitchen remodel?',
          answer: 'Kitchen remodels typically range from $50,000 to $130,000+, depending on materials, layout complexity, and finishes. We provide a fixed-price proposal upfront so you know the total investment before work begins.',
        },
        {
          question: 'Can you work with my existing layout?',
          answer: 'Yes. We offer cabinet replacement, countertop upgrades, and appliance integration without moving walls. However, open-concept conversions and layout redesigns are also available if you want a fresh configuration.',
        },
        {
          question: 'Do you handle permits and inspections?',
          answer: 'Yes. All permitting, inspections, and code compliance are included in our scope. We manage the entire process so you do not have to coordinate with the city.',
        },
        {
          question: 'What if I want to change the design during construction?',
          answer: 'Design changes are addressed quickly with our integrated design-build model. We discuss the change, provide a cost adjustment if needed, and implement it without the delays typical of separate architect-contractor relationships.',
        },
        {
          question: 'Do you offer financing options?',
          answer: 'We can recommend financing partners. Many homeowners use home equity lines of credit or personal loans. Contact us to discuss options.',
        },
      ]}
    />
  );
}
