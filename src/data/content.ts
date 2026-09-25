export interface NavItem {
  label: string;
  href: string;
}

export interface ProductItem {
  id: string;
  name: string;
  positioning: string;
  description: string;
  ctaText: string;
  status: string;
  capabilities: string[];
}

export interface ClientWorkItem {
  id: string;
  title: string;
  businessType: string;
  contribution: string;
  description: string;
  scope: string[];
  techStack: string[];
  isCustomerProof?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  triplet: string[];
  description: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Products', href: '#products' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const BRAND_IDENTITY = {
  name: 'Quniverze',
  tagline: 'Products. Services. Real impact.',
  headline: 'We build software for businesses.',
  supporting: 'Quniverze builds and operates software products and works selectively with businesses that need thoughtful digital products.',
  heroCtaPrimary: 'Explore our products',
  heroCtaSecondary: 'Work with us',
  bannerStatement: 'Software for businesses that move forward.',
};

export const BUSINESS_MODEL = {
  eyebrow: 'WHAT WE DO',
  heading: 'Two primary business activities. One engineering standard.',
  learningLoop: "We don't just build software for other people. We build software ourselves. We operate it. We learn from it. Then we apply that operational experience to selected client work.",
  columns: [
    {
      title: 'PRODUCTS',
      tagline: 'We build and operate software ourselves.',
      description: 'Proprietary software products conceived, developed, deployed, and actively maintained by Quniverze for real-world operating environments.'
    },
    {
      title: 'SELECTIVE WORK',
      tagline: 'We build thoughtful digital products for selected businesses.',
      description: 'Direct partnerships with focused companies that require robust digital products, critical business systems, or custom platforms.'
    }
  ]
};

export const PRODUCTS_CONTENT = {
  eyebrow: 'PRODUCTS',
  heading: 'Software owned and operated by Quniverze.',
  subheading: 'Products we run in the real world every day.',
  items: [
    {
      id: 'nivaops',
      name: 'NivaOps',
      positioning: 'Property operations software.',
      description: 'NivaOps is software built and operated by Quniverze for modern rental-property operators.',
      ctaText: 'Explore NivaOps',
      status: 'Owned & Operated',
      capabilities: [
        'Central multi-unit calendar & reservation orchestration',
        'Automated guest communication & digital access workflows',
        'Direct property status, maintenance & occupancy management'
      ]
    },
    {
      id: 'quniverze-crm',
      name: 'Quniverze CRM',
      positioning: 'Lead management software.',
      description: 'A sales and project operating system built internally and currently evolving into a product for other teams.',
      ctaText: 'Learn more',
      status: 'Internal Evolution',
      capabilities: [
        'Structured lead tracking & inquiry qualification stages',
        'Automated activity logging and interaction timelines',
        'Integrated project deliverable & milestone alignment'
      ]
    }
  ]
};

export const CUSTOMER_PROOF_CONTENT = {
  eyebrow: 'BUILT. OPERATED. USED.',
  heading: 'Software in the real world.',
  client: 'StayB',
  businessType: 'Accommodation business',
  relationship: 'Website by Quniverze. NivaOps customer.',
  statement: 'Quniverze builds NivaOps. StayB is a real accommodation business that runs its operations on NivaOps and connects with guests through a bespoke website delivered by Quniverze.',
  stats: [
    { label: 'Operations Engine', value: 'NivaOps' },
    { label: 'Digital Presence', value: 'StayB Platform' },
    { label: 'Relationship', value: 'Active Customer' }
  ]
};

export const SELECTIVE_WORK_CONTENT = {
  eyebrow: 'SELECTIVE WORK',
  heading: 'Digital products built for selected businesses.',
  items: [
    {
      id: 'boven-frontier',
      title: 'Boven Frontier',
      businessType: 'Manufacturing & distribution / consumer hygiene / wholesale / international trade',
      contribution: 'Digital product / website',
      description: 'A robust international commercial platform and brand architecture designed for consumer hygiene and wholesale distribution channels.',
      scope: ['International Flagship Storefront', 'Wholesale Product Architecture', 'Multi-region Brand Experience'],
      techStack: ['Next.js', 'Tailwind CSS', 'Shopify Storefront API']
    },
    {
      id: 'igcc',
      title: 'IGCC',
      businessType: 'International Gemology Certification Center',
      contribution: 'Card automation system',
      description: 'An automated certificate card generation pipeline and verification database for international gemstone authentications.',
      scope: ['Card Automation Pipeline', 'Secure Verification Engine', 'Corporate Stakeholder Portal'],
      techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL']
    },
    {
      id: 'stayb',
      title: 'StayB',
      businessType: 'Accommodation business',
      contribution: 'StayB website + NivaOps customer',
      description: 'A direct booking engine and guest experience platform tightly integrated with the NivaOps operating system.',
      scope: ['Direct Booking Engine', 'Guest Concierge Interface', 'NivaOps PMS Integration'],
      techStack: ['React', 'Tailwind CSS', 'PostgreSQL', 'NivaOps API'],
      isCustomerProof: true
    }
  ]
};

export const PROCESS_CONTENT = {
  eyebrow: 'HOW WE WORK',
  heading: 'Understand. Design. Build. Improve.',
  subheading: 'The 01 → 04 system guides every product and client engagement.',
  steps: [
    {
      number: '01',
      title: 'UNDERSTAND',
      triplet: ['Business.', 'Users.', 'Constraints.'],
      description: 'We define the real problem before writing a line of code.'
    },
    {
      number: '02',
      title: 'DESIGN',
      triplet: ['Structure.', 'Experience.', 'Clarity.'],
      description: 'We create thoughtful, practical architectures without unnecessary decoration.'
    },
    {
      number: '03',
      title: 'BUILD',
      triplet: ['Reliable.', 'Maintainable.', 'Production-ready.'],
      description: 'We engineer with long-term reliability and operational stability as non-negotiables.'
    },
    {
      number: '04',
      title: 'IMPROVE',
      triplet: ['Measure.', 'Learn.', 'Iterate.'],
      description: 'We stay accountable to real-world performance, user feedback, and uptime.'
    }
  ]
};

export const BRAND_VALUES = {
  eyebrow: 'WHY QUNIVERZE',
  heading: 'Product Owners First.',
  statement: 'We understand uptime, retention and long-term maintainability.',
  description: 'Quniverze does not only deliver software. We build products. We operate products. We maintain products. We improve products. This operating discipline shapes our approach to selective client work.',
  values: [
    {
      title: 'Product Owners First',
      detail: 'Operating our own software means we know what happens after launch. We design for maintenance, observability, and uptime.'
    },
    {
      title: 'Selective Partnerships',
      detail: 'We choose a limited number of engagements where software can create meaningful, measurable business impact.'
    },
    {
      title: 'Real Impact',
      detail: 'Software that moves businesses forward in the real world — no vanity features or fabricated claims.'
    }
  ]
};

export const ABOUT_CONTENT = {
  eyebrow: 'ABOUT',
  heading: 'What is Quniverze?',
  body: 'Quniverze is a software company that builds and operates its own products while working selectively with businesses that need thoughtful digital products.',
  principles: [
    {
      label: 'Owned Software',
      text: 'Proprietary platforms built from problems we understand firsthand.'
    },
    {
      label: 'Delivered Systems',
      text: 'Selected client partnerships engineered with the same rigor as our own products.'
    },
    {
      label: 'Accountable Engineering',
      text: 'Long-term operational support, not hit-and-run deliverables.'
    }
  ]
};

export const CONTACT_CONTENT = {
  eyebrow: 'CONTACT',
  heading: 'NEED SOFTWARE?',
  subtext: "Tell us what you're building. If there is a meaningful problem to solve, let's talk.",
  ctaText: 'Start a conversation'
};

export const FOOTER_CONTENT = {
  brand: 'Quniverze',
  tagline: 'Products. Services. Real impact.',
  copyright: '© 2026 Quniverze. All rights reserved.',
  columns: [
    {
      title: 'PRODUCTS',
      links: [
        { label: 'NivaOps', href: '#products' },
        { label: 'Quniverze CRM', href: '#products' }
      ]
    },
    {
      title: 'SELECTIVE WORK',
      links: [
        { label: 'Boven Frontier', href: '#work' },
        { label: 'IGCC', href: '#work' },
        { label: 'StayB', href: '#work' }
      ]
    },
    {
      title: 'PROCESS',
      links: [
        { label: '01 Understand', href: '#process' },
        { label: '02 Design', href: '#process' },
        { label: '03 Build', href: '#process' },
        { label: '04 Improve', href: '#process' }
      ]
    },
    {
      title: 'CONTACT',
      links: [
        { label: 'Start a conversation', href: '#contact' },
        { label: 'About Quniverze', href: '#about' }
      ]
    }
  ]
};
