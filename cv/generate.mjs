// Genera la hoja de vida en ES, EN y DE (HTML → PDF con Microsoft Edge en modo headless).
// Uso: npm run cv
// Diseño pensado para ATS: una columna, títulos estándar, texto real, sin tablas ni gráficos.
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const buildDir = join(here, 'build');
const outDir = resolve(here, '..', 'public', 'cv');

const contact = {
  name: 'Santiago García Londoño',
  phone: '+57 302 373 9559',
  email: 'garcialondonosantiago@gmail.com',
  linkedin: 'linkedin.com/in/santiago-garcia-londo%C3%B1o-2719a923b',
  linkedinLabel: 'linkedin.com/in/santiago-garcia-londoño-2719a923b',
  github: 'github.com/SantiagoGarcia555',
  portfolio: 'santiagogarcia.garcialondonosantiago.workers.dev',
};

const cv = {
  es: {
    title: 'Desarrollador Full-Stack (.NET + React)',
    location: 'Medellín, Colombia',
    headings: {
      summary: 'Perfil profesional',
      experience: 'Experiencia',
      projects: 'Proyecto personal',
      education: 'Educación',
      skills: 'Habilidades técnicas',
      languages: 'Idiomas',
    },
    summary:
      'Desarrollador full-stack con 2 años de experiencia construyendo y operando sistemas de negocio en producción con C#/.NET, React y SQL Server: inventario omnicanal, portal de talento humano, integraciones con ERP, e-commerce y WhatsApp. He sido el único desarrollador de proyectos de punta a punta, desde el análisis de datos y la arquitectura hasta el despliegue y la resolución de incidentes. Tomo decisiones midiendo el dato real y documentándolas.',
    jobs: [
      {
        company: 'Inducascos',
        place: 'Medellín, Colombia',
        roles: [
          ['Auxiliar de Desarrollo (Full-Stack)', 'may. 2025 – actualidad'],
          ['Aprendiz de Desarrollo Full-Stack', 'nov. 2024 – may. 2025'],
        ],
        bullets: [
          '<b>Inventario unificado omnicanal</b> (.NET 8, React 19, SQL Server, PWA): como único desarrollador, diseñé una app para tablet que unifica el catálogo de dos compañías del ERP por código EAN (99,98 % de cruce) y muestra existencias en vivo por tienda. Monolito modular con 8 ADRs y tests de arquitectura; una búsqueda pasó de 942 a 155 resultados.',
          '<b>Portal de Talento Humano</b> (React, .NET 8, SQL Server, Azure): único desarrollador durante el primer año; en producción 5 semanas después del primer commit y hoy sirve a dos empresas. Login con Microsoft Entra ID, archivos en Azure Blob Storage, reportes PDF/Excel y organigrama basado en reglas con validación de ciclos.',
          '<b>Plataforma de WhatsApp</b> (ASP.NET Core, SignalR, Redis, WhatsApp Cloud API): desarrollador full-stack principal (toda la consola y ~80 % del backend). Chatbot de control de ingreso como máquina de estados con 7 perfiles de requisitos de seguridad, consola de agentes en tiempo real y cola de notificaciones con reintentos, backoff e idempotencia sobre 4 números corporativos.',
          '<b>E-commerce VTEX IO + middleware a ERP</b> (Node.js, TypeScript, Azure App Service, Docker): implementé el pago contraentrega y un job de reproceso automático de órdenes varadas (candados, circuit breaker, feature flags) para un canal de ~1.450 pedidos al mes; diagnostiqué y resolví incidentes en producción.',
          '<b>API de integración IA ↔ CRM/ERP</b> (.NET 8, EF Core, T-SQL): construí 4 de los 5 endpoints que usa un agente de IA de WhatsApp para consultar inventario y facturas y crear casos de garantía con adjuntos en una sola transacción, con mapeo difuso del defecto reportado.',
          '<b>Módulo de votación de diseños</b> (ASP.NET WebForms, SQL Server): rediseñé el modelo de datos y migré 2.218 votos históricos desde Excel con 0 diferencias. Integré SSO con Microsoft Entra ID (OpenID Connect + PKCE) y vinculé 339 cuentas.',
          'Levantamiento de requerimientos con áreas de negocio, estimación y backlog en Azure DevOps, y automatización de tareas administrativas con Power Automate Desktop.',
        ],
      },
    ],
    project: {
      name: 'Finance APP',
      date: '2026 – en desarrollo',
      text: 'App de finanzas personales: API en ASP.NET Core 8 y PostgreSQL con 19 endpoints REST, autenticación JWT con refresh tokens rotativos e importador de extractos CSV/Excel con detección de duplicados.',
    },
    education: [
      ['Ingeniería de Sistemas', 'Instituto Tecnológico Metropolitano (ITM)', 'En curso · 8.º semestre'],
      ['Tecnólogo en Desarrollo de Software', 'Instituto Tecnológico Metropolitano (ITM)', '2022 – 2025'],
    ],
    skills: [
      ['Backend', 'C#, .NET 8, ASP.NET Core, Entity Framework Core, Dapper, SignalR, Node.js, Express, NestJS, APIs REST'],
      ['Frontend', 'React, TypeScript, JavaScript, Vite, TanStack Query, Tailwind CSS, HTML, CSS, VTEX IO'],
      ['Datos', 'SQL Server (T-SQL, procedimientos almacenados), PostgreSQL, Redis'],
      ['Cloud y DevOps', 'Azure (App Service, Blob Storage, Key Vault, Entra ID), Docker, IIS, Azure DevOps, Git'],
      ['Prácticas', 'Arquitectura modular, ADRs, testing (xUnit, Vitest), integración con ERP, desarrollo asistido por IA'],
    ],
    languages: 'Español: nativo · Inglés: intermedio (lectura, escritura, conversación) · Alemán: básico',
  },

  en: {
    title: 'Full-Stack Developer (.NET + React)',
    location: 'Medellín, Colombia',
    headings: {
      summary: 'Summary',
      experience: 'Experience',
      projects: 'Personal project',
      education: 'Education',
      skills: 'Technical skills',
      languages: 'Languages',
    },
    summary:
      'Full-stack developer with 2 years of experience building and running production business systems with C#/.NET, React and SQL Server: omnichannel inventory, an HR portal, ERP integrations, e-commerce and WhatsApp. I have been the sole developer on end-to-end projects, from data analysis and architecture to deployment and incident response. I make decisions by measuring real data and documenting them.',
    jobs: [
      {
        company: 'Inducascos',
        place: 'Medellín, Colombia',
        roles: [
          ['Development Assistant (Full-Stack)', 'May 2025 – Present'],
          ['Full-Stack Developer Apprentice', 'Nov 2024 – May 2025'],
        ],
        bullets: [
          '<b>Unified omnichannel inventory</b> (.NET 8, React 19, SQL Server, PWA): as the sole developer, designed a tablet app that unifies the catalog of two ERP companies by EAN barcode (99.98% match rate) and shows live stock per store. Modular monolith with 8 ADRs and architecture tests; one search went from 942 to 155 results.',
          '<b>HR self-service portal</b> (React, .NET 8, SQL Server, Azure): sole developer for the first year; in production 5 weeks after the first commit and now serving two companies. Microsoft Entra ID sign-in, Azure Blob Storage files, PDF/Excel reports and a rule-based org chart with cycle validation.',
          '<b>WhatsApp platform</b> (ASP.NET Core, SignalR, Redis, WhatsApp Cloud API): lead full-stack developer (the whole console and ~80% of the backend). Site-access chatbot built as a state machine with 7 safety requirement profiles, a real-time agent console and a notification queue with retries, backoff and idempotency across 4 company numbers.',
          '<b>VTEX IO e-commerce + ERP middleware</b> (Node.js, TypeScript, Azure App Service, Docker): built cash-on-delivery payment and an automatic job that reprocesses stuck orders (locks, circuit breaker, feature flags) for a channel of ~1,450 orders a month; diagnosed and fixed production incidents.',
          '<b>AI ↔ CRM/ERP integration API</b> (.NET 8, EF Core, T-SQL): built 4 of the 5 endpoints a WhatsApp AI agent uses to check stock and invoices and to create warranty cases with attachments in a single transaction, with fuzzy matching of the reported defect.',
          '<b>Design voting module</b> (ASP.NET WebForms, SQL Server): redesigned the data model and migrated 2,218 historical votes from Excel with 0 differences. Added SSO with Microsoft Entra ID (OpenID Connect + PKCE) and linked 339 accounts.',
          'Requirements gathering with business teams, estimation and backlog in Azure DevOps, and automation of administrative tasks with Power Automate Desktop.',
        ],
      },
    ],
    project: {
      name: 'Finance APP',
      date: '2026 – in progress',
      text: 'Personal finance app: ASP.NET Core 8 and PostgreSQL API with 19 REST endpoints, JWT authentication with rotating refresh tokens and a CSV/Excel statement importer with duplicate detection.',
    },
    education: [
      ['Systems Engineering', 'Instituto Tecnológico Metropolitano (ITM), Medellín', 'In progress · 8th semester'],
      ['Technologist in Software Development', 'Instituto Tecnológico Metropolitano (ITM), Medellín', '2022 – 2025'],
    ],
    skills: [
      ['Backend', 'C#, .NET 8, ASP.NET Core, Entity Framework Core, Dapper, SignalR, Node.js, Express, NestJS, REST APIs'],
      ['Frontend', 'React, TypeScript, JavaScript, Vite, TanStack Query, Tailwind CSS, HTML, CSS, VTEX IO'],
      ['Data', 'SQL Server (T-SQL, stored procedures), PostgreSQL, Redis'],
      ['Cloud & DevOps', 'Azure (App Service, Blob Storage, Key Vault, Entra ID), Docker, IIS, Azure DevOps, Git'],
      ['Practices', 'Modular architecture, ADRs, testing (xUnit, Vitest), ERP integration, AI-assisted development'],
    ],
    languages: 'Spanish: native · English: intermediate (reading, writing, conversation) · German: basic',
  },

  de: {
    title: 'Full-Stack-Entwickler (.NET + React)',
    location: 'Medellín, Kolumbien',
    headings: {
      summary: 'Profil',
      experience: 'Berufserfahrung',
      projects: 'Eigenes Projekt',
      education: 'Ausbildung',
      skills: 'Technische Kenntnisse',
      languages: 'Sprachen',
    },
    summary:
      'Full-Stack-Entwickler mit 2 Jahren Erfahrung in Entwicklung und Betrieb produktiver Geschäftssysteme mit C#/.NET, React und SQL Server: Omnichannel-Bestand, Personalportal, ERP-Integrationen, E-Commerce und WhatsApp. Als einziger Entwickler habe ich Projekte von Anfang bis Ende umgesetzt, von Datenanalyse und Architektur bis zu Deployment und Störungsbehebung. Entscheidungen treffe ich auf Basis gemessener Daten und dokumentiere sie.',
    jobs: [
      {
        company: 'Inducascos',
        place: 'Medellín, Kolumbien',
        roles: [
          ['Entwicklungsassistent (Full-Stack)', 'Mai 2025 – heute'],
          ['Praktikant Full-Stack-Entwicklung', 'Nov. 2024 – Mai 2025'],
        ],
        bullets: [
          '<b>Einheitlicher Omnichannel-Bestand</b> (.NET 8, React 19, SQL Server, PWA): als einziger Entwickler eine Tablet-App entworfen, die den Katalog zweier Firmen im ERP per EAN-Code vereint (99,98 % Zuordnungsquote) und Live-Bestände pro Filiale zeigt. Modularer Monolith mit 8 ADRs und Architekturtests; eine Suche sank von 942 auf 155 Ergebnisse.',
          '<b>Personalportal (Self-Service)</b> (React, .NET 8, SQL Server, Azure): im ersten Jahr einziger Entwickler; 5 Wochen nach dem ersten Commit in Produktion, heute für zwei Firmen im Einsatz. Anmeldung mit Microsoft Entra ID, Dateien in Azure Blob Storage, PDF/Excel-Berichte und regelbasiertes Organigramm mit Zyklusprüfung.',
          '<b>WhatsApp-Plattform</b> (ASP.NET Core, SignalR, Redis, WhatsApp Cloud API): Haupt-Full-Stack-Entwickler (gesamte Konsole und ~80 % des Backends). Zutritts-Chatbot als Zustandsautomat mit 7 Profilen für Sicherheitsanforderungen, Agentenkonsole in Echtzeit und Benachrichtigungs-Queue mit Retries, Backoff und Idempotenz über 4 Firmennummern.',
          '<b>VTEX-IO-E-Commerce + ERP-Middleware</b> (Node.js, TypeScript, Azure App Service, Docker): Zahlung per Nachnahme und einen automatischen Job zur Neuverarbeitung hängengebliebener Bestellungen (Sperren, Circuit Breaker, Feature Flags) für rund 1.450 Bestellungen im Monat umgesetzt; Produktionsstörungen analysiert und behoben.',
          '<b>Integrations-API KI ↔ CRM/ERP</b> (.NET 8, EF Core, T-SQL): 4 von 5 Endpunkten gebaut, mit denen ein KI-Agent auf WhatsApp Bestand und Rechnungen prüft und Garantiefälle mit Anhängen in einer einzigen Transaktion anlegt, inklusive unscharfer Zuordnung des gemeldeten Mangels.',
          '<b>Modul für Design-Abstimmungen</b> (ASP.NET WebForms, SQL Server): Datenmodell neu entworfen und 2.218 historische Stimmen aus Excel ohne Abweichungen migriert. SSO mit Microsoft Entra ID (OpenID Connect + PKCE) integriert und 339 Konten verknüpft.',
          'Anforderungsanalyse mit Fachbereichen, Schätzung und Backlog in Azure DevOps sowie Automatisierung administrativer Aufgaben mit Power Automate Desktop.',
        ],
      },
    ],
    project: {
      name: 'Finance APP',
      date: '2026 – in Arbeit',
      text: 'App für persönliche Finanzen: API mit ASP.NET Core 8 und PostgreSQL mit 19 REST-Endpunkten, JWT-Authentifizierung mit rotierenden Refresh-Tokens und CSV/Excel-Import von Kontoauszügen mit Duplikaterkennung.',
    },
    education: [
      ['Systemtechnik (Ingenieurstudium)', 'Instituto Tecnológico Metropolitano (ITM), Medellín', 'Laufend · 8. Semester'],
      ['Technologe für Softwareentwicklung', 'Instituto Tecnológico Metropolitano (ITM), Medellín', '2022 – 2025'],
    ],
    skills: [
      ['Backend', 'C#, .NET 8, ASP.NET Core, Entity Framework Core, Dapper, SignalR, Node.js, Express, NestJS, REST-APIs'],
      ['Frontend', 'React, TypeScript, JavaScript, Vite, TanStack Query, Tailwind CSS, HTML, CSS, VTEX IO'],
      ['Daten', 'SQL Server (T-SQL, Stored Procedures), PostgreSQL, Redis'],
      ['Cloud & DevOps', 'Azure (App Service, Blob Storage, Key Vault, Entra ID), Docker, IIS, Azure DevOps, Git'],
      ['Arbeitsweise', 'Modulare Architektur, ADRs, Tests (xUnit, Vitest), ERP-Integration, KI-gestützte Entwicklung'],
    ],
    languages: 'Spanisch: Muttersprache · Englisch: mittleres Niveau (Lesen, Schreiben, Sprechen) · Deutsch: Grundkenntnisse',
  },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// Las viñetas pueden traer <b>…</b>; el resto del texto se escapa.
const rich = (s) => esc(s).replace(/&lt;b&gt;/g, '<b>').replace(/&lt;\/b&gt;/g, '</b>');

function html(lang, d) {
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>${contact.name} – ${esc(d.title)}</title>
<style>
  @page { size: A4; margin: 11mm 14mm; }
  * { box-sizing: border-box; }
  body { margin: 0; font: 9.4pt/1.32 Arial, Helvetica, sans-serif; color: #111; }
  h1 { font-size: 20pt; margin: 0; letter-spacing: .2px; }
  .role { font-size: 12pt; font-weight: bold; color: #1f3a8a; margin: 2px 0 6px; }
  .contact { margin: 0; font-size: 9.6pt; }
  .contact a { color: #111; text-decoration: none; }
  h2 { font-size: 11pt; text-transform: uppercase; letter-spacing: .6px; color: #1f3a8a;
       border-bottom: 1.2px solid #1f3a8a; padding-bottom: 2px; margin: 8px 0 4px; }
  p { margin: 0 0 4px; }
  .line { display: flex; justify-content: space-between; gap: 12px; }
  .company { font-weight: bold; font-size: 10.8pt; }
  .roles { margin: 2px 0 4px; }
  .roles .line span:first-child { font-weight: bold; }
  ul { margin: 2px 0 0; padding-left: 15px; }
  li { margin: 0 0 2px; }
  .skills p { margin-bottom: 2px; }
  .muted { color: #333; }
  section { break-inside: auto; }
  li, .edu { break-inside: avoid; }
</style>
</head>
<body>
  <h1>${contact.name}</h1>
  <p class="role">${esc(d.title)}</p>
  <p class="contact">${esc(d.location)} · ${contact.phone} · <a href="mailto:${contact.email}">${contact.email}</a></p>
  <p class="contact"><a href="https://www.${contact.linkedin}">${esc(contact.linkedinLabel)}</a> · <a href="https://${contact.github}">${contact.github}</a></p>
  <p class="contact">Portfolio: <a href="https://${contact.portfolio}${lang === 'es' ? '' : `/${lang}/`}">${contact.portfolio}</a></p>

  <section>
    <h2>${esc(d.headings.summary)}</h2>
    <p>${esc(d.summary)}</p>
  </section>

  <section>
    <h2>${esc(d.headings.experience)}</h2>
    ${d.jobs
      .map(
        (j) => `
    <div class="line"><span class="company">${esc(j.company)}</span><span class="muted">${esc(j.place)}</span></div>
    <div class="roles">${j.roles
      .map(([r, when]) => `<div class="line"><span>${esc(r)}</span><span>${esc(when)}</span></div>`)
      .join('')}</div>
    <ul>${j.bullets.map((b) => `<li>${rich(b)}</li>`).join('')}</ul>`,
      )
      .join('')}
  </section>

  <section>
    <h2>${esc(d.headings.projects)}</h2>
    <div class="line"><b>${esc(d.project.name)}</b><span>${esc(d.project.date)}</span></div>
    <p>${esc(d.project.text)}</p>
  </section>

  <section>
    <h2>${esc(d.headings.education)}</h2>
    ${d.education
      .map(
        ([degree, school, when]) =>
          `<div class="edu"><div class="line"><b>${esc(degree)}</b><span>${esc(when)}</span></div><p class="muted">${esc(school)}</p></div>`,
      )
      .join('')}
  </section>

  <section class="skills">
    <h2>${esc(d.headings.skills)}</h2>
    ${d.skills.map(([k, v]) => `<p><b>${esc(k)}:</b> ${esc(v)}</p>`).join('')}
  </section>

  <section>
    <h2>${esc(d.headings.languages)}</h2>
    <p>${esc(d.languages)}</p>
  </section>
</body>
</html>`;
}

const edgeCandidates = [
  process.env.EDGE_PATH,
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
].filter(Boolean);
const browser = edgeCandidates.find((p) => existsSync(p));
if (!browser) {
  console.error('No se encontró Edge ni Chrome. Define EDGE_PATH con la ruta del navegador.');
  process.exit(1);
}

mkdirSync(buildDir, { recursive: true });
mkdirSync(outDir, { recursive: true });

for (const [lang, data] of Object.entries(cv)) {
  const htmlPath = join(buildDir, `cv-${lang}.html`);
  const pdfPath = join(outDir, `santiago-garcia-cv-${lang}.pdf`);
  writeFileSync(htmlPath, html(lang, data), 'utf8');
  execFileSync(browser, [
    '--headless',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--print-to-pdf-no-header',
    `--print-to-pdf=${pdfPath}`,
    `file:///${htmlPath.replace(/\\/g, '/')}`,
  ]);
  console.log(`✓ ${pdfPath}`);
}
