import type { Localized } from './types';

export interface StackGroup {
  title: Localized;
  note: Localized;
  items: string[];
  badge?: string;
}

export const stackGroups: StackGroup[] = [
  {
    title: { es: 'Frontend', en: 'Frontend' },
    note: {
      es: 'Interfaces rápidas, accesibles y con motion medido.',
      en: 'Fast, accessible interfaces with motion used sparingly.',
    },
    items: ['HTML', 'CSS', 'JavaScript', 'Astro', 'Tailwind', 'GSAP'],
  },
  {
    title: { es: 'Backend', en: 'Backend' },
    note: {
      es: 'APIs claras, auth sólida y lógica que se puede testear.',
      en: 'Clear APIs, solid auth and logic you can test.',
    },
    items: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST', 'JWT'],
  },
  {
    title: { es: 'Datos', en: 'Data' },
    note: {
      es: 'Modelado relacional, migraciones y consultas aisladas por organización.',
      en: 'Relational modeling, migrations and queries isolated per organization.',
    },
    items: ['PostgreSQL', 'SQLite', 'SQLAlchemy', 'SQL', 'Migrations', 'Multi-tenant'],
  },
  {
    title: { es: 'Infraestructura', en: 'Infrastructure' },
    note: {
      es: 'Deploy reproducible, logs útiles y un servidor que no da sorpresas.',
      en: 'Reproducible deploys, useful logs and a server that never surprises you.',
    },
    items: ['Docker', 'Linux', 'Caddy', 'Git', 'GitHub Actions', 'Testing'],
  },
  {
    title: { es: 'IA local', en: 'Local AI' },
    badge: 'LOCAL-FIRST',
    note: {
      es: 'Ollama y LM Studio en la máquina del cliente, sin API key. Si el modelo no está disponible, arma un borrador con datos reales en vez de inventar.',
      en: "Ollama and LM Studio on the client's machine, no API key required. If the model is unavailable, it builds a draft from real data instead of making things up.",
    },
    items: ['Ollama', 'LM Studio', 'llama 3.1', 'OpenAI-compatible', 'Offline'],
  },
  {
    title: { es: 'IA & Seguridad', en: 'AI & Security' },
    note: {
      es: 'APIs de modelos en la nube, automatización y guardas defensivas.',
      en: 'Cloud model APIs, automation and defensive guardrails.',
    },
    items: ['AI APIs', 'Prompt engineering', 'OSINT', 'Rate limiting', 'SSRF guards'],
  },
];
