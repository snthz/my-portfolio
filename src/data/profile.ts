// ─────────────────────────────────────────────────────────────
// Todo el contenido del portfolio vive en este archivo.
// `profile` y `stack` son compartidos; `content` tiene los textos
// por idioma (en = principal, es = /es/). Edita aquí, no en los componentes.
// ─────────────────────────────────────────────────────────────

export type Lang = 'en' | 'es';

export const profile = {
  name: 'Axl Santos',
  fullName: 'Axl Enrique Santos Hernandez',
  email: 'axlsntz.dev@gmail.com',
  website: 'axlsantos.dev',
  github: 'github.com/snthz',
  linkedin: 'linkedin.com/in/axl-santos',
  photo: '/me.jpeg',
  socials: [
    { label: 'GitHub', url: 'https://github.com/snthz' },
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
  /** Screenshot en /public (ej. '/projects/vallen.jpg'). */
  image?: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
}

export interface CvExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Cv {
  title: string;
  download: string;
  back: string;
  summary: string;
  sections: {
    summary: string;
    experience: string;
    education: string;
    skills: string;
    additional: string;
  };
  experience: CvExperience[];
  education: {
    degree: string;
    school: string;
    location: string;
    period: string;
  }[];
  skills: { label: string; items: string }[];
  additional: { label: string; items: string }[];
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
  toolsBlurb: string;
  projectTabs: { work: string; tools: string };
  featured: string;
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
    start: string;
    startHint: string;
    gameOver: string;
    playAgain: string;
    score: string;
    best: string;
    facts: (string | { text: string; flag: string })[];
  };
  projects: Project[];
  tools: Project[];
  experience: Experience[];
  cv: Cv;
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
    toolsBlurb: 'Small apps I built for myself and use every day.',
    projectTabs: { work: 'Work', tools: 'Personal tools' },
    featured: 'featured',
    cta: 'Get in touch',
    contactBlurb:
      'Have a project in mind or want to work together? My inbox is always open.',
    gameHint: 'pssst — scroll down, there is a minigame',
    game: {
      title: 'Space defense',
      instructions:
        'Move with the mouse or arrow keys, click or hold Space to shoot. Blast the ? meteors to unlock facts about me — and dodge the enemy fire.',
      complete: 'You unlocked my whole profile — keep going for a high score.',
      replay: 'replay',
      disable: 'hide minigame',
      enable: 'show minigame',
      start: 'Click to start',
      startHint: 'mouse or arrows to move · click or Space to shoot',
      gameOver: 'Game over',
      playAgain: 'click to play again',
      score: 'score',
      best: 'best',
      facts: [
        '5+ years shipping software',
        'Founder of Fallxn Studio — 15+ projects delivered',
        'Creator of Vallen, a WhatsApp-commerce SaaS',
        'Clients across LatAm, the US & Europe',
        'Full-stack: from pixel to PostgreSQL',
        { text: 'Based in San Pedro Sula, Honduras', flag: '/flags/honduras.svg' },
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
        image: '/projects/vallen.jpg',
      },
      {
        name: 'Fallxn Studio',
        description:
          'My software development studio. Websites, custom software, and maintenance for international clients. 15+ projects delivered, average load times under 1.2s.',
        url: 'https://fallxn.studio/en',
        tags: ['Studio', 'Web', 'Custom software'],
        featured: true,
        image: '/projects/fallxn-studio.jpg',
      },
      {
        name: 'Assah Photography',
        description:
          'Professional portfolio for a maternity and family photographer, focused on performance and imagery.',
        url: 'https://assahphotos.com/',
        tags: ['Web', 'Portfolio'],
        image: '/projects/assah-photos.jpg',
      },
      {
        name: 'ASSAH',
        description:
          'Online store for a Honduran print studio: printed and custom apparel, collections, and nationwide shipping.',
        url: 'https://assah.co/',
        tags: ['E-commerce', 'Web'],
        image: '/projects/assah.jpg',
      },
    ],
    tools: [
      {
        name: 'Opus Piano',
        description:
          'Free course to learn to read music and play the piano, with self-grading exercises, sheet music, and learning paths.',
        url: 'https://opuspiano.app/',
        tags: ['Music', 'Learning'],
        image: '/projects/opus-piano.jpg',
      },
      {
        name: 'Finances',
        description:
          'Personal finance app that reads my bank notification emails and turns every purchase into a categorized transaction, with budgets.',
        url: 'https://finances.fallxn.dev/',
        tags: ['Finance', 'Automation'],
        image: '/projects/finances.jpg',
      },
      {
        name: 'Flashcards',
        description:
          'Anki-compatible spaced repetition app I use to learn English with my Anki decks, on any device.',
        url: 'https://flashcards.fallxn.dev/',
        tags: ['Learning', 'Anki'],
        image: '/projects/flashcards.jpg',
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
    cv: {
      title: 'Software Engineer',
      download: 'Download PDF',
      back: 'back to site',
      summary:
        'Full-stack software engineer with experience building and scaling web applications using Go, TypeScript, and modern frameworks like Next.js. Skilled in designing efficient APIs, optimizing system performance, and delivering reliable production-ready solutions.',
      sections: {
        summary: 'Summary',
        experience: 'Professional Experience',
        education: 'Education',
        skills: 'Technical Skills',
        additional: 'Additional Information',
      },
      experience: [
        {
          role: 'Software Developer',
          company: 'San Services',
          location: 'San Pedro Sula, Honduras',
          period: 'Jun 2025 — Present',
          bullets: [
            'Migrated legacy applications from Lucee/ColdFusion to Go, improving performance, scalability, and maintainability.',
            'Developed full-stack applications using Next.js and Strapi to streamline content management and feature delivery.',
            'Built and optimized RESTful APIs in Go, enhancing backend efficiency and system responsiveness.',
            'Contributed to modernizing legacy systems into scalable, modular architectures.',
          ],
        },
        {
          role: 'Founder & Developer',
          company: 'Vallen',
          location: 'Remote',
          period: '2024 — Present',
          bullets: [
            'Designed, built, and operate a digital product catalog SaaS with WhatsApp integration, owning the full stack from frontend to infrastructure.',
            'Implemented real-time order management, an analytics dashboard, and an AI-powered theme generator.',
            'Run the complete product lifecycle: payments, deployments, monitoring, and customer feedback.',
          ],
        },
        {
          role: 'Founder',
          company: 'Fallxn Studio',
          location: 'Remote',
          period: 'Aug 2023 — Present',
          bullets: [
            'Deliver custom websites and software for businesses across Latin America, the US, and Europe — 15+ projects shipped.',
            'Lead projects end-to-end: requirements, design, development, deployment, and maintenance.',
            'Focus on usability and performance, with average load times under 1.2 seconds.',
          ],
        },
        {
          role: 'Software Engineer',
          company: 'Lumen Energy Solutions',
          location: 'Honduras',
          period: 'May 2024 — Jun 2025',
          bullets: [
            'Developed full-stack applications for energy monitoring systems using Angular, React, and Go.',
            'Processed and analyzed telemetry data to support real-time insights and system optimization.',
            'Built backend services and APIs to handle data ingestion, storage, and visualization.',
            'Improved system reliability and performance by optimizing database queries and backend logic.',
            'Contributed to internal tools and dashboards for monitoring electrical and energy metrics.',
          ],
        },
        {
          role: 'Software Developer',
          company: 'Naranja y Media',
          location: 'Remote',
          period: 'Sep 2023 — Jan 2025',
          bullets: [
            'Developed full-stack web applications using React, Next.js, NestJS, and MongoDB.',
            'Designed and implemented scalable database structures for dynamic applications.',
            'Built and integrated APIs to support frontend functionality and third-party services.',
            'Used Docker to containerize applications, improving deployment consistency and scalability.',
            'Collaborated on delivering custom solutions tailored to client requirements.',
          ],
        },
        {
          role: 'Technical Support',
          company: 'VJ Innovations',
          location: 'San Pedro Sula, Honduras',
          period: 'Sep 2016 — Jan 2020',
          bullets: [
            'Configured and maintained network infrastructure using MikroTik, Cisco, and Ubuntu systems.',
            'Installed and supported fiber optic networks and wireless connectivity solutions.',
            'Diagnosed and resolved connectivity and hardware issues for end users.',
            'Provided technical support and ensured stable network performance across deployments.',
          ],
        },
      ],
      education: [
        {
          degree: 'B.S. in Systems Engineering',
          school: 'Universidad Nacional Autónoma de Honduras',
          location: 'Honduras',
          period: 'Jan 2019 — Jan 2024',
        },
      ],
      skills: [
        {
          label: 'Languages',
          items:
            'JavaScript, TypeScript, Python, Rust, PHP, Golang, SQL, ColdFusion',
        },
        {
          label: 'Technologies',
          items:
            'React, Next.js, Astro, Node.js, NestJS, Flask, Gin, PostgreSQL, MySQL, MongoDB',
        },
        { label: 'Cloud', items: 'AWS, Firebase, Heroku' },
        { label: 'Tools', items: 'Git, GitHub, GitLab, Docker' },
      ],
      additional: [
        { label: 'Languages', items: 'Spanish (native), English (B1)' },
        {
          label: 'Certifications',
          items:
            'Full Stack Developer (Codecademy), Design Database (Codecademy)',
        },
        {
          label: 'Awards',
          items: 'Academic Excellence (2020 — 2025)',
        },
      ],
    },
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
    toolsBlurb: 'Pequeñas apps que construí para mí y uso a diario.',
    projectTabs: { work: 'Trabajos', tools: 'Herramientas personales' },
    featured: 'destacado',
    cta: 'Escríbeme',
    contactBlurb:
      '¿Tienes un proyecto en mente o quieres trabajar conmigo? Mi bandeja de entrada siempre está abierta.',
    gameHint: 'pssst — baja, hay un minijuego',
    game: {
      title: 'Defensa espacial',
      instructions:
        'Muévete con el mouse o las flechas, haz clic o mantén Espacio para disparar. Destruye los meteoritos ? para desbloquear datos sobre mí — y esquiva el fuego enemigo.',
      complete: 'Desbloqueaste todo mi perfil — sigue jugando por el récord.',
      replay: 'reiniciar',
      disable: 'ocultar minijuego',
      enable: 'mostrar minijuego',
      start: 'Haz clic para empezar',
      startHint: 'mouse o flechas para moverte · clic o Espacio para disparar',
      gameOver: 'Fin del juego',
      playAgain: 'clic para jugar de nuevo',
      score: 'puntos',
      best: 'récord',
      facts: [
        '5+ años lanzando software',
        'Fundador de Fallxn Studio — +15 proyectos entregados',
        'Creador de Vallen, un SaaS de comercio por WhatsApp',
        'Clientes en LatAm, EE. UU. y Europa',
        'Full-stack: del píxel a PostgreSQL',
        { text: 'Desde San Pedro Sula, Honduras', flag: '/flags/honduras.svg' },
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
        image: '/projects/vallen.jpg',
      },
      {
        name: 'Fallxn Studio',
        description:
          'Mi estudio de desarrollo de software. Sitios web, software a medida y mantenimiento para clientes internacionales. +15 proyectos entregados, tiempos de carga promedio menores a 1.2s.',
        url: 'https://fallxn.studio/en',
        tags: ['Estudio', 'Web', 'Software a medida'],
        featured: true,
        image: '/projects/fallxn-studio.jpg',
      },
      {
        name: 'Assah Photography',
        description:
          'Portfolio profesional para una fotógrafa de maternidad y familia, enfocado en rendimiento e imagen.',
        url: 'https://assahphotos.com/',
        tags: ['Web', 'Portfolio'],
        image: '/projects/assah-photos.jpg',
      },
      {
        name: 'ASSAH',
        description:
          'Tienda en línea para un estudio de estampados hondureño: ropa estampada y personalizada, colecciones y envíos a todo el país.',
        url: 'https://assah.co/',
        tags: ['E-commerce', 'Web'],
        image: '/projects/assah.jpg',
      },
    ],
    tools: [
      {
        name: 'Opus Piano',
        description:
          'Curso gratuito para aprender a leer música y tocar el piano, con ejercicios que se corrigen solos, partituras y rutas de aprendizaje.',
        url: 'https://opuspiano.app/',
        tags: ['Música', 'Aprendizaje'],
        image: '/projects/opus-piano.jpg',
      },
      {
        name: 'Finances',
        description:
          'App de finanzas personales que lee los correos de notificación de mi banco y convierte cada compra en una transacción categorizada, con presupuestos.',
        url: 'https://finances.fallxn.dev/',
        tags: ['Finanzas', 'Automatización'],
        image: '/projects/finances.jpg',
      },
      {
        name: 'Flashcards',
        description:
          'App de repetición espaciada compatible con Anki que uso para aprender inglés con mis decks, desde cualquier dispositivo.',
        url: 'https://flashcards.fallxn.dev/',
        tags: ['Aprendizaje', 'Anki'],
        image: '/projects/flashcards.jpg',
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
    cv: {
      title: 'Ingeniero de Software',
      download: 'Descargar PDF',
      back: 'volver al sitio',
      summary:
        'Ingeniero de software full-stack con experiencia construyendo y escalando aplicaciones web con Go, TypeScript y frameworks modernos como Next.js. Especializado en diseñar APIs eficientes, optimizar el rendimiento de sistemas y entregar soluciones confiables listas para producción.',
      sections: {
        summary: 'Resumen',
        experience: 'Experiencia Profesional',
        education: 'Educación',
        skills: 'Habilidades Técnicas',
        additional: 'Información Adicional',
      },
      experience: [
        {
          role: 'Software Developer',
          company: 'San Services',
          location: 'San Pedro Sula, Honduras',
          period: 'Jun 2025 — Presente',
          bullets: [
            'Migré aplicaciones legacy de Lucee/ColdFusion a Go, mejorando rendimiento, escalabilidad y mantenibilidad.',
            'Desarrollé aplicaciones full-stack con Next.js y Strapi para agilizar la gestión de contenido y la entrega de funcionalidades.',
            'Construí y optimicé APIs RESTful en Go, mejorando la eficiencia del backend y la capacidad de respuesta del sistema.',
            'Contribuí a modernizar sistemas legacy hacia arquitecturas escalables y modulares.',
          ],
        },
        {
          role: 'Founder & Developer',
          company: 'Vallen',
          location: 'Remoto',
          period: '2024 — Presente',
          bullets: [
            'Diseñé, construí y opero un SaaS de catálogos digitales con integración de WhatsApp, a cargo de todo el stack: del frontend a la infraestructura.',
            'Implementé gestión de pedidos en tiempo real, dashboard de analíticas y un generador de temas con IA.',
            'Gestiono el ciclo de vida completo del producto: pagos, despliegues, monitoreo y feedback de clientes.',
          ],
        },
        {
          role: 'Founder',
          company: 'Fallxn Studio',
          location: 'Remoto',
          period: 'Ago 2023 — Presente',
          bullets: [
            'Entrego sitios web y software a medida para negocios en Latinoamérica, EE. UU. y Europa — más de 15 proyectos lanzados.',
            'Lidero proyectos end-to-end: requerimientos, diseño, desarrollo, despliegue y mantenimiento.',
            'Enfoque en usabilidad y rendimiento, con tiempos de carga promedio menores a 1.2 segundos.',
          ],
        },
        {
          role: 'Software Engineer',
          company: 'Lumen Energy Solutions',
          location: 'Honduras',
          period: 'May 2024 — Jun 2025',
          bullets: [
            'Desarrollé aplicaciones full-stack para sistemas de monitoreo energético usando Angular, React y Go.',
            'Procesé y analicé datos de telemetría para dar soporte a insights en tiempo real y optimización de sistemas.',
            'Construí servicios backend y APIs para ingesta, almacenamiento y visualización de datos.',
            'Mejoré la confiabilidad y el rendimiento del sistema optimizando consultas de base de datos y lógica de backend.',
            'Contribuí a herramientas internas y dashboards para monitorear métricas eléctricas y energéticas.',
          ],
        },
        {
          role: 'Software Developer',
          company: 'Naranja y Media',
          location: 'Remoto',
          period: 'Sep 2023 — Ene 2025',
          bullets: [
            'Desarrollé aplicaciones web full-stack con React, Next.js, NestJS y MongoDB.',
            'Diseñé e implementé estructuras de base de datos escalables para aplicaciones dinámicas.',
            'Construí e integré APIs para dar soporte al frontend y a servicios de terceros.',
            'Usé Docker para contenerizar aplicaciones, mejorando la consistencia y escalabilidad de los despliegues.',
            'Colaboré en la entrega de soluciones a medida según los requerimientos de cada cliente.',
          ],
        },
        {
          role: 'Soporte Técnico',
          company: 'VJ Innovations',
          location: 'San Pedro Sula, Honduras',
          period: 'Sep 2016 — Ene 2020',
          bullets: [
            'Configuré y mantuve infraestructura de red con sistemas MikroTik, Cisco y Ubuntu.',
            'Instalé y di soporte a redes de fibra óptica y soluciones de conectividad inalámbrica.',
            'Diagnostiqué y resolví problemas de conectividad y hardware para usuarios finales.',
            'Brindé soporte técnico asegurando un rendimiento de red estable en todos los despliegues.',
          ],
        },
      ],
      education: [
        {
          degree: 'Ingeniería en Sistemas',
          school: 'Universidad Nacional Autónoma de Honduras',
          location: 'Honduras',
          period: 'Ene 2019 — Ene 2024',
        },
      ],
      skills: [
        {
          label: 'Lenguajes',
          items:
            'JavaScript, TypeScript, Python, Rust, PHP, Golang, SQL, ColdFusion',
        },
        {
          label: 'Tecnologías',
          items:
            'React, Next.js, Astro, Node.js, NestJS, Flask, Gin, PostgreSQL, MySQL, MongoDB',
        },
        { label: 'Cloud', items: 'AWS, Firebase, Heroku' },
        { label: 'Herramientas', items: 'Git, GitHub, GitLab, Docker' },
      ],
      additional: [
        { label: 'Idiomas', items: 'Español (nativo), Inglés (B1)' },
        {
          label: 'Certificaciones',
          items:
            'Full Stack Developer (Codecademy), Design Database (Codecademy)',
        },
        {
          label: 'Reconocimientos',
          items: 'Excelencia Académica (2020 — 2025)',
        },
      ],
    },
  },
};

export function getLang(locale: string | undefined): Lang {
  return locale === 'es' ? 'es' : 'en';
}
