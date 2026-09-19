export interface NavItem {
  label: string;
  href: string;
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  ctaText: string;
  status?: string;
  badge?: string;
  features?: string[];
  metrics?: { label: string; value: string }[];
}

export interface ClientWorkItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  image: string;
  ctaText: string;
  summary: string;
  deliverables: string[];
  techStack: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Products', href: '#products' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Careers', href: '#careers' },
];

export const HERO_CONTENT = {
  eyebrow: 'SOFTWARE PRODUCTS. DIGITAL SOLUTIONS.',
  headline: 'We build software\nfor businesses.',
  supporting: 'Quniverze builds and operates software products, while helping businesses turn ideas into useful digital products.',
  primaryCta: 'Explore our products',
  secondaryCta: 'Start a project',
  imageBadge: {
    lines: ['Ideas', 'Systems', 'Growth'],
    footerTag: 'A MORE USEFUL\nDIGITAL TOMORROW'
  },
  lowerStrip: {
    products: {
      label: 'BUILDING',
      sublabel: 'Our products',
      items: [
        { name: 'NivaOps', icon: 'nivaops' },
        { name: 'Quniverze CRM', icon: 'crm' }
      ]
    },
    clients: {
      label: 'BUILDING FOR',
      sublabel: 'Our clients',
      items: [
        { name: 'Boven', icon: 'boven' },
        { name: 'IGCC', icon: 'igcc' },
        { name: 'StayB', icon: 'stayb' }
      ]
    }
  }
};

export const PRODUCTS_CONTENT = {
  eyebrow: 'OUR PRODUCTS',
  heading: 'Software we build and own.',
  viewAllText: 'View all products →',
  products: [
    {
      id: 'nivaops',
      name: 'NivaOps',
      tagline: 'The operating system for modern rental properties.',
      description: 'Property management, simplified for a better guest experience.',
      ctaText: 'Visit NivaOps →',
      status: 'Live & Operating',
      features: [
        'Centralized multi-property calendar synchronization',
        'Automated guest messaging and check-in workflows',
        'Real-time occupancy and RevPAR analytics'
      ],
      metrics: [
        { label: 'Active Properties', value: '1,400+' },
        { label: 'Guest Check-ins', value: '85k+' },
        { label: 'Uptime', value: '99.98%' }
      ]
    },
    {
      id: 'quniverze-crm',
      name: 'Quniverze CRM',
      tagline: 'A sales and project operating system for modern businesses.',
      description: 'Built internally. Now evolving into a product for other teams.',
      ctaText: 'Learn more →',
      status: 'Internal Evolution / Early Access',
      features: [
        'Integrated deal pipeline and revenue velocity tracking',
        'Unified client context with automated activity logging',
        'Built-in project milestone and deliverable alignment'
      ],
      metrics: [
        { label: 'Pipeline Velocity', value: '+34%' },
        { label: 'Internal Users', value: 'Active' },
        { label: 'Public Release', value: 'Q4 2026' }
      ]
    }
  ]
};

export const CLIENT_WORK_CONTENT = {
  eyebrow: 'CLIENT WORK',
  heading: 'Digital products we’ve built for businesses.',
  viewAllText: 'View all work →',
  items: [
    {
      id: 'boven-frontier',
      title: 'Boven Frontier',
      category: 'Website / Digital Experience',
      tagline: 'For those who move forward.',
      image: '/images/boven-mountain.jpg',
      ctaText: 'View project →',
      summary: 'A high-performance digital commerce and brand experience built for a rugged outdoor apparel and expedition gear brand.',
      deliverables: ['Digital Flagship Store', 'Interactive Storytelling', 'Mobile Commerce Architecture'],
      techStack: ['Next.js', 'Tailwind CSS', 'Shopify Storefront API', 'Framer Motion']
    },
    {
      id: 'igcc',
      title: 'IGCC',
      category: 'Digital Experience',
      tagline: 'Building Stronger Together',
      image: '/images/igcc-architecture.jpg',
      ctaText: 'View project →',
      summary: 'A contemporary corporate web platform and stakeholder portal for an international construction and infrastructure group.',
      deliverables: ['Corporate Web Platform', 'Investor Relations Portal', 'Project Showcase CMS'],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Headless CMS']
    },
    {
      id: 'stayb',
      title: 'StayB',
      category: 'Website / Digital Platform',
      tagline: 'More than a stay. A place to belong.',
      image: '/images/stayb-interior.jpg',
      ctaText: 'View project →',
      summary: 'An end-to-end direct booking engine and guest concierge experience for luxury serviced residences and boutique stays.',
      deliverables: ['Direct Booking Engine', 'Guest Concierge App', 'Property Management Integration'],
      techStack: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL']
    }
  ]
};

export const PROCESS_CONTENT = {
  eyebrow: 'HOW WE WORK',
  heading: 'Understand. Design. Build. Improve.',
  statement: "We don't just deliver websites. We build digital systems that businesses can actually use.",
  steps: [
    {
      number: '01',
      title: 'Understand',
      description: 'We listen, learn and define the real problem.'
    },
    {
      number: '02',
      title: 'Design',
      description: 'We create thoughtful, practical solutions.'
    },
    {
      number: '03',
      title: 'Build',
      description: 'We develop with quality and long-term value in mind.'
    },
    {
      number: '04',
      title: 'Improve',
      description: 'We iterate, support and help you grow.'
    }
  ]
};

export const ABOUT_CONTENT = {
  eyebrow: 'OUR PHILOSOPHY',
  heading: 'The dual nature of Quniverze.',
  statement: 'We build our own products from problems we understand, and we work with businesses that need thoughtful digital solutions.',
  principles: [
    {
      title: 'Product Owners First',
      description: 'Operating our own software means we understand the real weight of uptime, user retention, and long-term maintainability.'
    },
    {
      title: 'Selective Partnerships',
      description: 'We take on a limited number of client engagements where we can make a decisive, measurable technical and business impact.'
    }
  ]
};

export const CTA_CONTENT = {
  headline: 'Have something worth building?',
  subtext: 'Tell us what you’re working on. We’d love to hear about it.',
  primaryBtn: 'Start a conversation →',
  secondaryBtn: 'Learn more',
  image: '/images/cta-summit.jpg',
  tagline: {
    lines: ['Better ideas', 'Brighter businesses', 'A more useful tomorrow.'],
    divider: '—'
  }
};

export const FOOTER_CONTENT = {
  brand: 'Quniverze',
  tagline: 'Products. Services. Real impact.',
  copyright: '© 2026 Quniverze. All rights reserved.',
  links: [
    { label: 'Products', href: '#products' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Careers', href: '#careers' }
  ],
  socials: [
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'X', href: 'https://x.com' },
    { name: 'Instagram', href: 'https://instagram.com' }
  ]
};
