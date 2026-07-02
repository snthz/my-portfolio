// ─────────────────────────────────────────────────────────────
// Todo el contenido del portfolio vive en este archivo.
// `profile` y `stack` son compartidos; `content` tiene los textos
// por idioma (en = principal, es = /es/). Edita aquí, no en los componentes.
// ─────────────────────────────────────────────────────────────

export type Lang = 'en' | 'es';

export const profile = {
  name: 'Axl Santos',
  email: 'axlsntz.dev@gmail.com',
  photo: '/me.png',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/axl-santos/' },
    { label: 'Vallen', url: 'https://vallen.app/' },
    { label: 'Fallxn Studio', url: 'https://fallxn.studio/en' },
  ],
};

export const stack = [
  'TypeScript',
  'React',
  'Next.js',
  'Astro',
  'Node.js',
  'Golang',
  'Rust',
  'Php',
  'Tailwind CSS',
  'PostgreSQL',
  'GSAP',
  'AWS',
  'Vercel',
];

export interface Project {
  name: string;
  description: string;
  url: string;
  tags: string[];
  featured?: boolean;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
}

export interface Content {
  greeting: string;
  role: string;
  tagline: string;
  location: string;
  about: string[];
  nav: { about: string; projects: string; experience: string; contact: string };
  sections: {
    about: string;
    projects: string;
    experience: string;
    contact: string;
  };
  cta: string;
  contactBlurb: string;
  gameHint: string;
  game: {
    title: string;
    instructions: string;
    complete: string;
    replay: string;
    disable: string;
    enable: string;
    facts: string[];
  };
  projects: Project[];
  experience: Experience[];
}

export const content: Record<Lang, Content> = {
  // ── English (default) ────────────────────────────────────────
  en: {
    greeting: "Hi, I'm",
    role: 'Full-Stack Developer & Founder',
    tagline:
      'I build digital products and custom software that drive business. Founder of Fallxn Studio and creator of Vallen.',
    location: 'San Pedro Sula, Honduras',
    about: [
      "I'm a full-stack developer with 5+ years of experience building software for clients across Latin America, the US, and Europe. I specialize in taking products from idea to production — from blazing-fast landing pages to complete SaaS platforms.",
      "I currently run Fallxn Studio, my freelance development studio with 15+ delivered projects, and I'm building Vallen, a digital catalog SaaS with WhatsApp integration for entrepreneurs.",
    ],
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    sections: {
      about: 'About me',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    cta: 'Get in touch',
    contactBlurb:
      'Have a project in mind or want to work together? My inbox is always open.',
    gameHint: 'pssst — scroll down, there is a minigame',
    game: {
      title: 'Target practice',
      instructions:
        'Move to aim, click to shoot. Every orb you hit unlocks a fact about me.',
      complete: 'You unlocked my whole profile — nice aim.',
      replay: 'replay',
      disable: 'hide minigame',
      enable: 'show minigame',
      facts: [
        '5+ years shipping software',
        'Founder of Fallxn Studio — 15+ projects delivered',
        'Creator of Vallen, a WhatsApp-commerce SaaS',
        'Clients across LatAm, the US & Europe',
        'Full-stack: from pixel to PostgreSQL',
        'Based in San Pedro Sula, Honduras 🇭🇳',
      ],
    },
    projects: [
      {
        name: 'Vallen',
        description:
          'Free digital product catalog and online store SaaS. Smart catalog, real-time orders via WhatsApp, analytics dashboard, and AI theme generator. Freemium model with active customers.',
        url: 'https://vallen.app/',
        tags: ['SaaS', 'Next.js', 'WhatsApp API', 'Analytics'],
        featured: true,
      },
      {
        name: 'Fallxn Studio',
        description:
          'My software development studio. Websites, custom software, and maintenance for international clients. 15+ projects delivered, average load times under 1.2s.',
        url: 'https://fallxn.studio/en',
        tags: ['Studio', 'Web', 'Custom software'],
        featured: true,
      },
      {
        name: 'Go Aligner',
        description:
          'Go Aligner is a dental aligner company. We built a high-converting landing page for their marketing campaign, focused on performance and user experience.',
        url: 'https://fallxn.studio/en',
        tags: ['Web', 'Landing', 'Conversion'],
      },
      {
        name: 'Assah Photography',
        description:
          'Professional portfolio for a photography studio, focused on performance and imagery.',
        url: 'https://fallxn.studio/en',
        tags: ['Web', 'Portfolio'],
      },
      {
        name: 'Eagles Academy',
        description:
          'Institutional website for a bilingual school: academics, admissions, and contact.',
        url: 'https://fallxn.studio/en',
        tags: ['Web', 'Institutional'],
      },
    ],
    experience: [
      {
        period: 'Jun 2025 — Present',
        role: 'Software Developer',
        company: 'San Services Honduras',
        location: 'San Pedro Sula, Honduras · On-site',
        description:
          'Full-time software development, working with technologies like Adobe ColdFusion and Next.js.',
        tags: ['Adobe ColdFusion', 'Next.js'],
      },
      {
        period: '2024 — Present',
        role: 'Founder & Developer',
        company: 'Vallen',
        location: 'Remote',
        description:
          'I design, build, and operate Vallen, a digital catalog SaaS with WhatsApp integration — the full product: frontend, backend, payments, analytics, and infrastructure.',
        tags: ['SaaS', 'Next.js', 'PostgreSQL', 'WhatsApp API'],
      },
      {
        period: 'Aug 2023 — Present',
        role: 'Founder',
        company: 'Fallxn Studio',
        location: 'San Pedro Sula, Honduras · Remote',
        description:
          'I work independently on a contract basis, partnering with businesses and entrepreneurs to design and develop custom websites tailored to their needs. My focus is on usability, performance, and results that drive business.',
        tags: ['GraphQL', 'API', 'React', 'Next.js', 'Astro'],
      },
      {
        period: 'May 2024 — Jun 2025',
        role: 'Software Engineer',
        company: 'Lumen Energy Solutions',
        location: 'Honduras · On-site',
        description:
          'Built tech-driven solutions for energy data analysis and process automation, using technologies like Next.js, Angular, Go, and IoT.',
        tags: ['Go', 'IoT', 'Next.js', 'Angular'],
      },
      {
        period: 'Sep 2023 — Jan 2025',
        role: 'Full-Stack Developer',
        company: 'Naranja & Media',
        location: 'Remote',
        description:
          'Contributed to both frontend and backend development using technologies like NestJS, Next.js, Firebase, MongoDB, and WebSockets.',
        tags: ['NestJS', 'Next.js', 'Firebase', 'MongoDB', 'WebSockets'],
      },
    ],
  },

  // ── Español (/es/) ───────────────────────────────────────────
  es: {
    greeting: 'Hola, soy',
    role: 'Full-Stack Developer & Founder',
    tagline:
      'Construyo productos digitales y software a medida que impulsan negocios. Fundador de Fallxn Studio y creador de Vallen.',
    location: 'San Pedro Sula, Honduras',
    about: [
      'Soy desarrollador full-stack con más de 5 años de experiencia creando software para clientes en Latinoamérica, Estados Unidos y Europa. Me especializo en llevar productos de la idea a producción: desde landing pages ultrarrápidas hasta plataformas SaaS completas.',
      'Actualmente dirijo Fallxn Studio, mi estudio de desarrollo freelance con más de 15 proyectos entregados, y desarrollo Vallen, un SaaS de catálogos digitales con integración de WhatsApp para emprendedores.',
    ],
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    sections: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    cta: 'Escríbeme',
    contactBlurb:
      '¿Tienes un proyecto en mente o quieres trabajar conmigo? Mi bandeja de entrada siempre está abierta.',
    gameHint: 'pssst — baja, hay un minijuego',
    game: {
      title: 'Práctica de tiro',
      instructions:
        'Mueve para apuntar, haz clic para disparar. Cada orbe que aciertes desbloquea un dato sobre mí.',
      complete: 'Desbloqueaste todo mi perfil — buena puntería.',
      replay: 'reiniciar',
      disable: 'ocultar minijuego',
      enable: 'mostrar minijuego',
      facts: [
        '5+ años lanzando software',
        'Fundador de Fallxn Studio — +15 proyectos entregados',
        'Creador de Vallen, un SaaS de comercio por WhatsApp',
        'Clientes en LatAm, EE. UU. y Europa',
        'Full-stack: del píxel a PostgreSQL',
        'Desde San Pedro Sula, Honduras 🇭🇳',
      ],
    },
    projects: [
      {
        name: 'Vallen',
        description:
          'SaaS de catálogo digital y tienda online gratuita. Catálogo inteligente, pedidos en tiempo real por WhatsApp, dashboard de analíticas y generador de temas con IA. Modelo freemium con clientes activos.',
        url: 'https://vallen.app/',
        tags: ['SaaS', 'Next.js', 'WhatsApp API', 'Analytics'],
        featured: true,
      },
      {
        name: 'Fallxn Studio',
        description:
          'Mi estudio de desarrollo de software. Sitios web, software a medida y mantenimiento para clientes internacionales. +15 proyectos entregados, tiempos de carga promedio menores a 1.2s.',
        url: 'https://fallxn.studio/en',
        tags: ['Estudio', 'Web', 'Software a medida'],
        featured: true,
      },
      {
        name: 'Go Aligner',
        description:
          'Go Aligner es una compañía de alineadores dentales. Construimos una landing page de alta conversión para su campaña de marketing, enfocada en rendimiento y experiencia de usuario.',
        url: 'https://fallxn.studio/en',
        tags: ['Web', 'Landing', 'Conversión'],
      },
      {
        name: 'Assah Photography',
        description:
          'Portfolio profesional para estudio de fotografía, enfocado en rendimiento e imagen.',
        url: 'https://fallxn.studio/en',
        tags: ['Web', 'Portfolio'],
      },
      {
        name: 'Eagles Academy',
        description:
          'Sitio institucional para una escuela bilingüe: información académica, admisiones y contacto.',
        url: 'https://fallxn.studio/en',
        tags: ['Web', 'Institucional'],
      },
    ],
    experience: [
      {
        period: 'Jun 2025 — Presente',
        role: 'Software Developer',
        company: 'San Services Honduras',
        location: 'San Pedro Sula, Honduras · Presencial',
        description:
          'Desarrollo de software a jornada completa, trabajando con tecnologías como Adobe ColdFusion y Next.js.',
        tags: ['Adobe ColdFusion', 'Next.js'],
      },
      {
        period: '2024 — Presente',
        role: 'Founder & Developer',
        company: 'Vallen',
        location: 'Remoto',
        description:
          'Diseño, construyo y opero Vallen, un SaaS de catálogos digitales con integración de WhatsApp: el producto completo, desde frontend y backend hasta pagos, analíticas e infraestructura.',
        tags: ['SaaS', 'Next.js', 'PostgreSQL', 'WhatsApp API'],
      },
      {
        period: 'Ago 2023 — Presente',
        role: 'Founder',
        company: 'Fallxn Studio',
        location: 'San Pedro Sula, Honduras · Remoto',
        description:
          'Trabajo de forma independiente por contrato, colaborando con negocios y emprendedores para diseñar y desarrollar sitios web a medida. Mi enfoque está en la usabilidad, el rendimiento y resultados que impulsan el negocio.',
        tags: ['GraphQL', 'API', 'React', 'Next.js', 'Astro'],
      },
      {
        period: 'May 2024 — Jun 2025',
        role: 'Software Engineer',
        company: 'Lumen Energy Solutions',
        location: 'Honduras · Presencial',
        description:
          'Desarrollo de soluciones tecnológicas para análisis de datos energéticos y automatización de procesos, usando tecnologías como Next.js, Angular, Go e IoT.',
        tags: ['Go', 'IoT', 'Next.js', 'Angular'],
      },
      {
        period: 'Sep 2023 — Ene 2025',
        role: 'Full-Stack Developer',
        company: 'Naranja & Media',
        location: 'Remoto',
        description:
          'Contribuí tanto al frontend como al backend usando tecnologías como NestJS, Next.js, Firebase, MongoDB y WebSockets.',
        tags: ['NestJS', 'Next.js', 'Firebase', 'MongoDB', 'WebSockets'],
      },
    ],
  },
};

export function getLang(locale: string | undefined): Lang {
  return locale === 'es' ? 'es' : 'en';
}
