import type { ImageMetadata } from 'astro';
import type { Localized } from './types';

import crmDashboard from '../assets/projects/crm-dashboard.png';
import crmPipeline from '../assets/projects/crm-pipeline.png';
import crmPropiedades from '../assets/projects/crm-propiedades.png';
import shadowDashboard from '../assets/projects/shadowit-dashboard.png';
import shadowIntro from '../assets/projects/shadowit-intro.png';
import shadowLogin from '../assets/projects/shadowit-login.png';
import legalPhilosophy from '../assets/projects/legal-consulting.png';

export interface ProjectImage {
  src: ImageMetadata;
  alt: Localized;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: Localized;
  summary: Localized;
  context: Localized;
  role: Localized;
  year: number;
  status: 'production' | 'public';
  stack: string[];
  highlights: Localized<string[]>;
  result: Localized;
  cover: ProjectImage;
  gallery: ProjectImage[];
  repoUrl?: string;
  demoUrl?: string;
  repoPrivate?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'kael-crm',
    title: 'Kael CRM',
    subtitle: {
      es: 'CRM multi-tenant para inmobiliarias',
      en: 'Multi-tenant CRM for real estate teams',
    },
    summary: {
      es: 'Propiedades, contactos y operaciones en un solo sistema. Multi-tenant desde el modelo de datos, con auth por cookies, generación de contenido con IA (local o en la nube) y reportes en PDF.',
      en: 'Listings, leads and deals in one system. Multi-tenant from the data model up, with cookie-based auth, AI-generated content (local or cloud) and PDF reporting.',
    },
    context: {
      es: 'Las inmobiliarias chicas trabajan con planillas, WhatsApp y publicaciones duplicadas. El objetivo fue unificar captación, seguimiento y material de venta sin mezclar datos entre organizaciones.',
      en: 'Small agencies run on spreadsheets, WhatsApp and duplicated listings. The goal was to unify lead capture, follow-up and sales material without mixing data across organizations.',
    },
    role: {
      es: 'Full-stack: modelo de datos, API, frontend y deploy',
      en: 'Full-stack: data model, API, frontend and deployment',
    },
    year: 2026,
    status: 'production',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'JavaScript', 'Ollama', 'LM Studio', 'Docker', 'Caddy'],
    highlights: {
      es: [
        'Multi-tenancy real: cada consulta filtra por organización, con tests de aislamiento.',
        'Auth con JWT en cookies httpOnly, roles owner/agent y rate limiting.',
        'Pipeline kanban, contactos, comparables y captaciones en un mismo flujo.',
        'Generación de descripciones y reportes con IA; soporta Ollama y LM Studio locales, así los datos no salen de la red de la inmobiliaria. Exportación a PDF.',
        'Integración con Tokko y extracción de comparables desde portales.',
      ],
      en: [
        'Real multi-tenancy: every query is scoped to an organization, backed by isolation tests.',
        'JWT auth in httpOnly cookies, owner/agent roles and rate limiting.',
        'Kanban pipeline, contacts, comparables and listings in a single flow.',
        'AI-assisted copy and reporting; supports local Ollama and LM Studio so agency data never leaves its network. PDF export.',
        'Tokko integration and comparable extraction from listing portals.',
      ],
    },
    result: {
      es: 'Centraliza la operación diaria de una inmobiliaria: propiedades, interesados y seguimiento en un solo lugar.',
      en: "It centralizes an agency's daily operation: listings, leads and follow-up in a single place.",
    },
    cover: {
      src: crmDashboard,
      alt: {
        es: 'Dashboard de Kael CRM con métricas de propiedades y operaciones',
        en: 'Kael CRM dashboard with property and deal metrics',
      },
    },
    gallery: [
      {
        src: crmPipeline,
        alt: {
          es: 'Pipeline kanban con operaciones agrupadas por etapa',
          en: 'Kanban pipeline with deals grouped by stage',
        },
      },
      {
        src: crmPropiedades,
        alt: {
          es: 'Listado de propiedades con filtros y tarjetas',
          en: 'Property listing with filters and cards',
        },
      },
    ],
    repoPrivate: true,
  },
  {
    slug: 'zero',
    title: 'ZERO',
    subtitle: {
      es: 'Shadow IT & Data Leak Finder',
      en: 'Shadow IT & Data Leak Finder',
    },
    summary: {
      es: 'SaaS de auditoría defensiva que detecta Shadow IT y filtraciones de datos, clasifica hallazgos por severidad y entrega reportes ejecutivos listos para el cliente.',
      en: 'Defensive audit SaaS that finds Shadow IT and data leaks, ranks findings by severity and ships client-ready executive reports.',
    },
    context: {
      es: 'Las empresas no saben qué servicios, buckets o credenciales están exponiendo sin querer. La herramienta automatiza el descubrimiento y lo traduce en un informe accionable.',
      en: 'Companies do not know which services, buckets or credentials they expose by accident. The tool automates discovery and turns it into an actionable report.',
    },
    role: {
      es: 'Full-stack: motor de escaneo, API, auth, créditos, dashboard y reportes',
      en: 'Full-stack: scanning engine, API, auth, credits, dashboard and reports',
    },
    year: 2026,
    status: 'public',
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'Jinja2', 'SQLite / Postgres', 'HTML / CSS'],
    highlights: {
      es: [
        'Recolección OSINT defensiva: subdominios, buckets, logs y configuraciones expuestas.',
        'Análisis con IA y clasificación de riesgo en cinco niveles de severidad.',
        'Auth propia con sesiones, planes y sistema de créditos por escaneo.',
        'Dashboard con historial y reportes descargables en Markdown y JSON.',
        'Guardas SSRF y validación de dominios antes de cada corrida.',
      ],
      en: [
        'Defensive OSINT collection: subdomains, buckets, logs and exposed configuration.',
        'AI analysis and risk scoring across five severity levels.',
        'Custom auth with sessions, plans and per-scan credits.',
        'Dashboard with scan history and downloadable Markdown/JSON reports.',
        'SSRF guards and domain validation before every run.',
      ],
    },
    result: {
      es: 'Convierte una revisión manual de horas en un flujo repetible, con reportes que se pueden entregar sin editarlos a mano.',
      en: 'Turns a manual review that took hours into a repeatable flow, with reports that can be delivered without hand-editing.',
    },
    cover: {
      src: shadowDashboard,
      alt: {
        es: 'Dashboard de ZERO con historial de escaneos y créditos',
        en: 'ZERO dashboard with scan history and credits',
      },
    },
    gallery: [
      {
        src: shadowIntro,
        alt: {
          es: 'Landing de ZERO con identidad visual oscura',
          en: 'ZERO landing page with dark visual identity',
        },
      },
      {
        src: shadowLogin,
        alt: {
          es: 'Pantalla de acceso de ZERO',
          en: 'ZERO sign-in screen',
        },
      },
    ],
    repoUrl: 'https://github.com/lukayucci/shadow-it-data-leak-finder',
  },
  {
    slug: 'legal-consulting',
    title: 'Consultoría Legal',
    subtitle: {
      es: 'Landing editorial cinemática',
      en: 'Cinematic editorial landing',
    },
    summary: {
      es: 'Sitio para una firma legal con una apertura cinematográfica: el monograma se convierte en máscara y revela la imagen mientras se scrollea.',
      en: 'Site for a law firm with a cinematic opening: the monogram becomes a mask and reveals the image as you scroll.',
    },
    context: {
      es: 'Una firma que vende discreción y precisión necesitaba una presencia digital a la altura: sobria, memorable y sin ruido.',
      en: 'A firm selling discretion and precision needed a digital presence to match: restrained, memorable and free of noise.',
    },
    role: {
      es: 'Diseño y desarrollo front-end',
      en: 'Design and front-end development',
    },
    year: 2026,
    status: 'public',
    stack: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'ScrollTrigger', 'Tailwind'],
    highlights: {
      es: [
        'Reveal del hero con máscara SVG y zoom del monograma atado al scroll.',
        'Tipografía editorial y paleta negro/bronce sin assets pesados.',
        'Animaciones con GSAP + ScrollTrigger y fallback completo sin JavaScript.',
        'Formulario con validación y estados de éxito.',
      ],
      en: [
        'Hero reveal with an SVG mask and scroll-linked monogram zoom.',
        'Editorial typography and a black/bronze palette with no heavy assets.',
        'GSAP + ScrollTrigger motion with a complete no-JavaScript fallback.',
        'Form with validation and success states.',
      ],
    },
    result: {
      es: 'Una pieza de marca que se siente como la firma: silenciosa, precisa y difícil de olvidar.',
      en: 'A brand piece that feels like the firm: quiet, precise and hard to forget.',
    },
    cover: {
      src: legalPhilosophy,
      alt: {
        es: 'Sección de filosofía de la firma legal con tipografía editorial',
        en: 'Legal firm philosophy section with editorial typography',
      },
    },
    gallery: [],
    repoUrl: 'https://github.com/lukayucci/legal-consulting-beta',
  },
];
