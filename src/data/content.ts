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
  category: string;
  businessType: string;
  tagline: string;
  contribution: string;
  description: string;
  image: string;
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
  { label: 'About', href: '#about' },
  { label: 'Careers', href: '#careers' },
];

export const BRAND_IDENTITY = {
  name: 'Quniverze',
  tagline: 'Products. Services. Real impact.',
  headline: 'We build software for businesses.',
  supporting: 'Quniverze builds and operates software products, while helping businesses turn ideas into useful digital products.',
  heroCtaPrimary: 'Explore our products',
  heroCtaSecondary: 'Start a project',
  bannerStatement: 'Software for businesses that move forward.',
};

export const HERO_CONTENT = {
  eyebrow: 'QUNIVERZE — PRODUCTS & SERVICES',
  headline: 'We build software\nfor businesses.',
  supporting: 'Quniverze builds and operates software products, while helping businesses turn ideas into useful digital products.',
  primaryCta: 'Explore our products',
  secondaryCta: 'Start a project',
  image: '/images/hero-architecture.jpg',
  lowerStrip: {
    products: {
      label: 'BUILDING / Our products',
      sublabel: 'Software we build, own and operate'
    },
    clients: {
      label: 'BUILDING FOR / Selective clients',
      sublabel: 'Selective engineering partnerships'
    }
  }
};

export const BUSINESS_MODEL = {
  eyebrow: 'BUSINESS MODEL',
  heading: 'Two primary business activities. One engineering standard.',
  learningLoop: "We don't just build software for other people. We build software ourselves. We operate it. We learn from it. Then we apply that operational discipline to selected client work.",
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
      description: 'NivaOps is software built and operated by Quniverze for modern rental property operators.',
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
      status: 'Internal Platform → SaaS',
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
  statement: 'StayB is a real accommodation business that runs its operations on NivaOps and connects with guests through a bespoke website delivered by Quniverze.',
  stats: [
    { label: 'Operations Engine', value: 'NivaOps' },
    { label: 'Units Under Management', value: '18+' },
    { label: 'Digital Turnover', value: '100%' },
    { label: 'Relationship', value: 'Active Customer' }
  ],
  image: '/images/stayb-interior.jpg'
};

export const SELECTIVE_WORK_CONTENT = {
  eyebrow: 'SELECTIVE WORK',
  heading: 'Digital products built for businesses.',
  viewAllText: 'Explore all work →',
  items: [
    {
      id: 'boven-frontier',
      title: 'Boven Frontier',
      category: 'Website / Digital Experience',
      businessType: 'Manufacturing, distribution, wholesale and international trade',
      tagline: 'For those who move forward.',
      contribution: 'Digital product / website',
      description: 'A robust international commercial platform and brand architecture designed for consumer hygiene, manufacturing, and wholesale distribution channels.',
      image: '/images/boven-mountain.jpg',
      scope: ['International Flagship Storefront', 'Wholesale Product Architecture', 'Multi-region Brand Experience'],
      techStack: ['Next.js', 'Tailwind CSS', 'Shopify Storefront API']
    },
    {
      id: 'igcc',
      title: 'IGCC',
      category: 'Card Automation System',
      businessType: 'Card automation system',
      tagline: 'Building Stronger Together',
      contribution: 'Card automation system & verification platform',
      description: 'An automated certificate card generation pipeline and verification database for international gemstone authentications.',
      image: '/images/igcc-architecture.jpg',
      scope: ['Card Automation Pipeline', 'Secure Verification Engine', 'Corporate Stakeholder Portal'],
      techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL']
    },
    {
      id: 'stayb',
      title: 'StayB',
      category: 'Accommodation Business / Platform',
      businessType: 'Accommodation business',
      tagline: 'More than a stay. A place to belong.',
      contribution: 'Website by Quniverze. NivaOps customer.',
      description: 'A direct booking engine and guest experience platform tightly integrated with the NivaOps operating system.',
      image: '/images/stayb-interior.jpg',
      scope: ['Direct Booking Engine', 'Guest Concierge Interface', 'NivaOps PMS Integration'],
      techStack: ['React', 'Tailwind CSS', 'PostgreSQL', 'NivaOps API'],
      isCustomerProof: true
    }
  ]
};

export const PROCESS_CONTENT = {
  eyebrow: 'HOW WE WORK',
  heading: 'Understand. Design. Build. Improve.',
  subheading: 'We do not just deliver websites. We build digital systems that businesses can actually use.',
  steps: [
    {
      number: '01',
      title: 'Understand',
      triplet: ['Business.', 'Users.', 'Constraints.'],
      description: 'We define the real problem before writing a line of code.'
    },
    {
      number: '02',
      title: 'Design',
      triplet: ['Architecture.', 'Interface.', 'Flows.'],
      description: 'We create thoughtful, practical architectures without unnecessary decoration.'
    },
    {
      number: '03',
      title: 'Build',
      triplet: ['Clean code.', 'Real tests.', 'No shortcuts.'],
      description: 'We engineer with long-term reliability and operational stability as non-negotiables.'
    },
    {
      number: '04',
      title: 'Improve',
      triplet: ['Production feedback.', 'Iteration.', 'Longevity.'],
      description: 'We stay accountable to real-world performance, user feedback, and uptime.'
    }
  ]
};

export const ABOUT_CONTENT = {
  eyebrow: 'ABOUT QUNIVERZE',
  statement: 'We build our own products from problems we understand, and we work with businesses that need thoughtful digital solutions.',
  principles: [
    {
      title: 'Product Owners First',
      description: 'Operating our own software means we know what happens after launch. We design for maintenance, observability, and uptime.'
    },
    {
      title: 'Selective Partnerships',
      description: 'We choose a limited number of engagements where software can create meaningful, measurable business impact.'
    },
    {
      title: 'Real Impact',
      description: 'Software that moves businesses forward in the real world — no vanity features or fabricated claims.'
    }
  ]
};

export const CAREERS_CONTENT = {
  eyebrow: 'CAREERS',
  title: 'Small team. High standards.',
  description: 'We look for engineers and designers who care about craft, systems, and longevity. We build software for businesses that rely on it daily.',
  ctaText: 'Inquire about roles →'
};

export const CTA_CONTENT = {
  headline: 'Have something worth building?',
  subtext: "Tell us about your business, the problem you're solving, or the product you want to build.",
  primaryBtn: 'Start a project →',
  secondaryBtn: 'Explore our products',
  image: '/images/cta-summit.jpg',
  tagline: {
    lines: ['Products.', 'Services.', 'Real impact.'],
    divider: '—'
  }
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
      title: 'COMPANY',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'How We Work', href: '#process' }
      ]
    },
    {
      title: 'CONNECT',
      links: [
        { label: 'Start a project', href: '#contact' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
        { label: 'X (Twitter)', href: 'https://x.com' }
      ]
    }
  ]
};
