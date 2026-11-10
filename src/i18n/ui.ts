const es = {
  'site.title': 'Luka García Yucci — Desarrollador full-stack · IA local',
  'site.description':
    'Portfolio de Luka García Yucci: desarrollo full-stack, interfaces y producto, con IA local para datos sensibles. Casos de estudio de CRM, SaaS de seguridad y experiencias web.',

  'nav.profile': 'Perfil',
  'nav.work': 'Proyectos',
  'nav.stack': 'Stack',
  'nav.contact': 'Contacto',
  'nav.menu': 'Abrir menú',
  'nav.close': 'Cerrar menú',
  'header.available': 'Disponible para proyectos',

  'hero.eyebrow': 'Portfolio',
  'hero.location': 'Buenos Aires, AR',
  'hero.role': 'Desarrollador full-stack',
  'hero.tagline':
    'Construyo interfaces, sistemas y producto. Detalle, performance e IA local para datos sensibles.',
  'hero.scroll': 'Scrolleá para entrar',
  'hero.asideTop': 'Full-stack / UI',
  'hero.asideBottom': 'Lat -34.60 / Lng -58.38',

  'intro.label': 'Perfil',
  'intro.statementA': 'No hago pantallas.',
  'intro.statementB': 'Hago sistemas que se sienten simples.',
  'intro.body':
    'Trabajo de punta a punta: modelo los datos, construyo la API, diseño la interfaz y cuido el detalle hasta el último borde. Me interesa el producto que funciona, no la demo que impresiona una vez.',
  'intro.listTitle': 'En qué trabajo',
  'intro.item1': 'Aplicaciones full-stack',
  'intro.item2': 'Interfaces con criterio',
  'intro.item3': 'Herramientas de seguridad',
  'intro.item4': 'Automatización y datos',
  'intro.item5': 'IA local y privacidad',
  'intro.stat1': 'Proyectos full-stack en producción',
  'intro.stat2': 'Stack: Node · Python · Postgres',
  'intro.stat3': 'Basado en Buenos Aires',
  'intro.photoAlt': 'Retrato de Luka García Yucci',
  'intro.photoCaption': 'Buenos Aires — 2026',

  'work.label': 'Proyectos',
  'work.cases': 'casos de estudio',
  'work.lead': 'Tres sistemas, tres problemas distintos. El mismo criterio: que funcionen.',
  'work.context': 'Contexto',
  'work.built': 'Qué construí',
  'work.result': 'Resultado',
  'work.role': 'Rol',
  'work.year': 'Año',
  'work.status': 'Estado',
  'work.stack': 'Stack',
  'work.repo': 'Ver repositorio',
  'work.demo': 'Ver demo',
  'work.private': 'Repo privado — disponible a pedido',
  'work.statusProduction': 'En producción',
  'work.statusPublic': 'Repo público',

  'stack.label': 'Stack',
  'stack.meta': 'Herramientas / criterio',
  'stack.lead': 'Elijo la herramienta por el problema, no al revés. Y si el dato es sensible, el modelo corre local.',
  'stack.note':
    'Estas son las herramientas que uso a diario. Si el problema pide otra cosa, la aprendo: lo importante es la decisión, no la etiqueta.',

  'contact.label': 'Contacto',
  'contact.statementA': '¿Tenés algo para construir?',
  'contact.statementB': 'Hablemos.',
  'contact.body':
    'Contame qué problema querés resolver, qué tenés hoy y a dónde querés llegar. Si hay match, arrancamos.',
  'contact.response': 'Respuesta en 24–48 h.',
  'contact.emailLabel': 'Escribime',
  'contact.subject': 'Consulta desde el portfolio',
  'contact.or': 'También por acá',

  'footer.tagline': 'Diseñado y desarrollado en Buenos Aires.',
  'footer.index': 'Índice',
  'footer.social': 'Redes',
  'footer.top': 'Volver arriba',
  'footer.made': 'Hecho con Astro — 2026',
} as const;

const en: Record<keyof typeof es, string> = {
  'site.title': 'Luka García Yucci — Full-stack developer · Local AI',
  'site.description':
    'Luka García Yucci portfolio: full-stack development, interfaces and product, with local AI for sensitive data. Case studies across CRM, security SaaS and web experiences.',

  'nav.profile': 'Profile',
  'nav.work': 'Work',
  'nav.stack': 'Stack',
  'nav.contact': 'Contact',
  'nav.menu': 'Open menu',
  'nav.close': 'Close menu',
  'header.available': 'Available for work',

  'hero.eyebrow': 'Portfolio',
  'hero.location': 'Buenos Aires, AR',
  'hero.role': 'Full-stack developer',
  'hero.tagline':
    'I build interfaces, systems and product. Detail, performance and local AI for sensitive data.',
  'hero.scroll': 'Scroll to enter',
  'hero.asideTop': 'Full-stack / UI',
  'hero.asideBottom': 'Lat -34.60 / Lng -58.38',

  'intro.label': 'Profile',
  'intro.statementA': "I don't build screens.",
  'intro.statementB': 'I build systems that feel simple.',
  'intro.body':
    'I work end to end: model the data, build the API, design the interface and care about the detail down to the last border. I care about the product that works, not the demo that impresses once.',
  'intro.listTitle': 'What I work on',
  'intro.item1': 'Full-stack applications',
  'intro.item2': 'Interfaces with intent',
  'intro.item3': 'Security tooling',
  'intro.item4': 'Automation and data',
  'intro.item5': 'Local AI and privacy',
  'intro.stat1': 'Full-stack projects shipped',
  'intro.stat2': 'Stack: Node · Python · Postgres',
  'intro.stat3': 'Based in Buenos Aires',
  'intro.photoAlt': 'Portrait of Luka García Yucci',
  'intro.photoCaption': 'Buenos Aires — 2026',

  'work.label': 'Work',
  'work.cases': 'case studies',
  'work.lead': 'Three systems, three different problems. Same standard: make them work.',
  'work.context': 'Context',
  'work.built': 'What I built',
  'work.result': 'Outcome',
  'work.role': 'Role',
  'work.year': 'Year',
  'work.status': 'Status',
  'work.stack': 'Stack',
  'work.repo': 'View repository',
  'work.demo': 'View live demo',
  'work.private': 'Private repo — available on request',
  'work.statusProduction': 'In production',
  'work.statusPublic': 'Public repo',

  'stack.label': 'Stack',
  'stack.meta': 'Tools / approach',
  'stack.lead': 'I pick the tool for the problem, not the other way around. And if the data is sensitive, the model runs locally.',
  'stack.note':
    'These are the tools I use every day. If the problem calls for something else, I learn it: the decision matters, not the label.',

  'contact.label': 'Contact',
  'contact.statementA': 'Got something to build?',
  'contact.statementB': "Let's talk.",
  'contact.body':
    'Tell me what problem you want to solve, what you have today and where you want to go. If it fits, we start.',
  'contact.response': 'Reply within 24–48 h.',
  'contact.emailLabel': 'Email me',
  'contact.subject': 'Portfolio inquiry',
  'contact.or': 'Also here',

  'footer.tagline': 'Designed and built in Buenos Aires.',
  'footer.index': 'Index',
  'footer.social': 'Social',
  'footer.top': 'Back to top',
  'footer.made': 'Made with Astro — 2026',
};

export const ui = { es, en };
export const defaultLang = 'es' as const;
export type Lang = keyof typeof ui;
export type UIKey = keyof typeof es;
export const languages: Record<Lang, string> = { es: 'ES', en: 'EN' };
