import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function KitchenRemodel() {
  return (
    <ServicePageTemplate
      title="Kitchen Remodeling"
      subtitle="Imagine your new kitchen. Explore it in 3D before the first hammer swings."
      description="Renovision Design & Build provides custom kitchen remodeling throughout Seattle, Bellevue, Kirkland, Redmond, and the greater Eastside. Our in-house team manages design, permits, and construction from start to finish. We do not use subcontractors or handoffs, ensuring one firm, one point of contact, and one price."
      timeline="8–12 weeks"
      investmentRange="$50k – $130k+"
      scope="Design + build"
      keyBenefits={[
        {
          title: 'In-house crews',
          description: 'All trades employed directly by Renovision',
        },
        {
          title: 'AI 3D design visualization',
          description: 'See your kitchen before construction begins',
        },
        {
          title: 'Licensed & insured',
          description: 'BBB Accredited, serving Greater Seattle & Puget Sound',
        },
      ]}
      whyChooseTitle="Why Seattle Homeowners Choose Renovision Design & Build"
      whyChooseIntro="Homeowners investing $50,000–$130,000 in a kitchen remodel seek more than the lowest bid. They want a firm that can realize their vision, manage permits, and deliver the project without unexpected change orders that often result from hiring separate architects and general contractors. The design-build model provides this integrated approach."
      whyChooseFeatures={[
        {
          title: 'AI 3D Design Visualization',
          description: 'Before any materials are ordered or construction begins, you approve a photorealistic 3D rendering of your new kitchen. You can adjust the layout, select countertop materials, or reposition the island. All before work starts. While most contractors provide only a floor plan, we ensure you see the complete vision.',
        },
        {
          title: 'In-House Crews Only',
          description: 'All tradespeople on your project are employed directly by Renovision, including carpenters, tile setters, electricians, and plumbers. If an issue arises, there is no shifting of responsibility. We are fully accountable for every aspect of your project.',
        },
        {
          title: 'Full-Cycle Design-Build',
          description: 'When your architect and general contractor are separate companies, design revisions often require multiple change orders. With design-build, revisions are managed seamlessly. You benefit from one contract, one schedule, and one team from concept to completion.',
        },
        {
          title: 'Transparent Pricing',
          description: 'You see the full number before we start — no creeping change orders. Our fixed-price proposals include all labor, materials, and permits.',
        },
      ]}
      services={[
        {
          title: 'Full gut remodels',
          description: 'New layout, new framing, new everything. Best ROI on $80,000+ projects in Bellevue and Eastside markets.',
        },
        {
          title: 'Open-concept conversions',
          description: 'Wall removal, structural beam installation, full layout redesign.',
        },
        {
          title: 'Cabinet replacement and refacing',
          description: 'Update the look without moving walls.',
        },
        {
          title: 'Custom cabinetry',
          description: 'Full inset, semi-custom, and flat-panel designs; all wood, soft-close.',
        },
        {
          title: 'Countertop installation',
          description: 'Quartz, quartzite, marble, leathered granite, butcher block.',
        },
        {
          title: 'Kitchen island additions',
          description: 'Design, permit, and construction included.',
        },
        {
          title: 'Appliance integration',
          description: 'Built-in refrigerators, integrated dishwashers, range hood ventilation.',
        },
        {
          title: 'Lighting redesign',
          description: 'Recessed, under-cabinet LED, statement pendants over island.',
        },
      ]}
      whatIncluded={[
        'Custom cabinetry & islands',
        'Stone & quartz countertops',
        'Lighting & electrical',
        'Plumbing fixtures',
        'Appliance integration',
        'Flooring & tile work',
        'Backsplash installation',
        'Permits & project management',
      ]}
      processSteps={[
        {
          title: 'Free Design Consultation',
          description: 'We walk your kitchen, ask how you use it, and discuss what is working and what is not. You tell us your priorities; we tell you what is realistic at your budget. No pressure, no upsell.',
        },
        {
          title: 'AI 3D Design',
          description: 'Our design team produces photorealistic renders of your proposed kitchen. Cabinet layout, countertop material, fixture finishes, lighting. All visible before construction begins. Revisions are included in the design phase.',
        },
        {
          title: 'Proposal & Permits',
          description: 'We give you a clear, itemized kitchen remodel estimate for materials, labor, and permits, so you understand all costs upfront. After approval, we handle all required permits.',
        },
        {
          title: 'Build & Walkthrough',
          description: 'A dedicated lead and our own crew manage the build. Weekly updates keep you informed. Final walkthrough, punch-list, and workmanship warranty.',
        },
      ]}
      relatedProjects={[
        {
          title: 'Full Kitchen Remodel In A Century-Old Seattle Home',
          image: '/manus-storage/kitchen-project_59bb9660.webp',
          link: '/project/century-old-home-kitchen-remodel-seattle',
        },
      ]}
      faqs={[
        {
          question: 'How long does a kitchen remodel take in Seattle?',
          answer: 'Most kitchen remodels take 8–12 weeks from start to finish. The timeline depends on the scope (full gut vs. refresh), permit processing time, and material lead times. We provide a detailed schedule upfront.',
        },
        {
          question: 'Can we live in our home during a kitchen remodel?',
          answer: 'Yes. We set up a temporary kitchen in an adjacent space, manage dust containment, and coordinate work hours to minimize disruption. Many of our clients stay in their homes throughout the project.',
        },
        {
          question: 'What is the return on a kitchen remodel in the Seattle market?',
          answer: 'A well-executed kitchen remodel typically returns 50–70% of its cost at resale, depending on the scope and market conditions. More importantly, you enjoy the improved space for years before any resale.',
        },
        {
          question: 'Why choose a design-build firm over a separate architect and general contractor?',
          answer: 'Design-build eliminates communication gaps, reduces change orders, and ensures accountability. One team, one vision, one price. You avoid the coordination headaches and cost overruns that often result from hiring separate firms.',
        },
      ]}
    />
  );
}
