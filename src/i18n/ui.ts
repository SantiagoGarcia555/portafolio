export const languages = { es: 'ES', en: 'EN', de: 'DE' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

type Fact = [string, string];
type Msg = { from: 'bot' | 'me'; text: string; file?: boolean };
type ReceiptItem = { name: string; tech: string; desc: string };

export interface Dict {
  meta: { title: string; description: string };
  nav: {
    sections: string;
    inventory: string;
    orders: string;
    whatsapp: string;
    more: string;
    about: string;
    blog: string;
    contact: string;
    themeToDark: string;
    themeToLight: string;
    themeAria: string;
    langAria: string;
  };
  hero: { lead: string; side: string; play: string; playing: string; cv: string };
  inventory: {
    title: string;
    big: string;
    body: string;
    facts: Fact[];
    demoTitle: string;
    madeUp: string;
    companyA: string;
    companyB: string;
    checkDigit: string;
    scan: string;
    items: string[];
    unitsWord: string;
    placesWord: string;
  };
  orders: {
    title: string;
    big: string;
    body: string;
    cut: string;
    restore: string;
    delivered: string;
    waiting: string;
    note: string;
    aria: string;
  };
  whatsapp: {
    title: string;
    big: string;
    body: string;
    facts: Fact[];
    phoneTitle: string;
    madeUp: string;
    msgs: Msg[];
    replay: string;
  };
  more: { title: string; subtitle: string; items: ReceiptItem[]; count: string };
  about: {
    title: string;
    big: string;
    body: string;
    labelTitle: string;
    ingredients: string;
    rows: Fact[];
  };
  contact: {
    title: string;
    big: string;
    email: string;
    whatsapp: string;
    cv: string;
    name: string;
    mail: string;
    message: string;
    send: string;
    sending: string;
    ok: string;
    error: string;
    mailFallback: string;
  };
  footer: { madeWith: string };
  blog: { title: string; intro: string; empty: string; back: string };
}

const es: Dict = {
  meta: {
    title: 'Santiago García · Desarrollador Full-Stack',
    description:
      'Portafolio de Santiago García, desarrollador full-stack .NET + React en Medellín: inventario unificado, integraciones con ERP, e-commerce y WhatsApp.',
  },
  nav: {
    sections: 'Secciones',
    inventory: 'Inventario',
    orders: 'Órdenes',
    whatsapp: 'WhatsApp',
    more: 'Más trabajo',
    about: 'Sobre mí',
    blog: 'Blog',
    contact: 'Contacto',
    themeToDark: 'Oscuro',
    themeToLight: 'Claro',
    themeAria: 'Cambiar tema claro u oscuro',
    langAria: 'Idioma',
  },
  hero: {
    lead: 'Desarrollador full-stack en Medellín. Construyo el software detrás de una comercializadora de cascos: inventario, pedidos, WhatsApp y los datos desordenados que hay en medio.',
    side: 'Este es un código EAN-13 válido; 770 es el prefijo de Colombia. Pasa el cursor por las barras o tócalo: suena el inicio del Minueto en sol mayor.',
    play: 'Tocar el minueto',
    playing: 'Tocando…',
    cv: 'Descargar CV',
  },
  inventory: {
    title: '¿Dónde está el casco?',
    big: 'Un vendedor tiene un cliente esperando y un casco agotado. Mi app de inventario unificado muestra en una sola pantalla si está en otra tienda, en bodega o en el canal online.',
    body: 'El reto: un mismo casco existe dos veces, con IDs distintos, porque dos compañías comparten el mismo ERP. El EAN es la única llave que los une, así que eso fue lo primero que medí: el 99,98 % de los ítems cruzó.',
    facts: [
      ['Mi rol', 'Único desarrollador, back y front'],
      ['Hecho con', 'Monolito modular en .NET 8, PWA en React 19'],
      ['Regla', 'Un test rompe el build si un módulo cruza su límite'],
      ['Resultado', 'Una búsqueda pasó de 942 filas a 155 familias'],
      ['Estado', 'Presentado a los administradores de tienda, oct. 2026'],
    ],
    demoTitle: 'Cómo funciona la consulta',
    madeUp: 'Datos inventados',
    companyA: 'Compañía A',
    companyB: 'Compañía B',
    checkDigit: 'Dígito verificador válido',
    scan: 'Escanear otro casco',
    items: ['Casco integral negro mate, M', 'Casco abatible blanco, L', 'Guantes de moto rojos, S'],
    unitsWord: 'unidades en',
    placesWord: 'lugares',
  },
  orders: {
    title: 'Las órdenes siguen',
    big: 'Mantengo el canal online de punta a punta: la tienda en VTEX IO, un pago contraentrega propio y el middleware que lleva unos 1.450 pedidos al mes a SIESA, el ERP.',
    body: 'Cuando una orden se queda varada, un barrido automático que diseñé la reprocesa cada 30 minutos, con candado por orden, límite por corrida y circuit breaker. También rastreé cerca de 19 millones de logs acumulados en Master Data y repunté los servicios que los escribían.',
    cut: 'Cortar la conexión',
    restore: 'Restaurar la conexión',
    delivered: 'Entregadas',
    waiting: 'En espera',
    note: 'Demo simplificada: corta la conexión y las órdenes esperan; restáurala y el barrido las reprocesa.',
    aria: 'Órdenes viajando de VTEX a SIESA',
  },
  whatsapp: {
    title: 'Hola, ¿a qué sede vas?',
    big: 'Un asistente de WhatsApp registra quién entra a las sedes y avisa a los clientes antes de que venza su pedido.',
    body: 'El chatbot es una máquina de estados: según el tipo de trabajo (alturas, electricidad, montacargas…) pide los soportes de seguridad que exige. Al terminar crea un caso que un agente atiende en tiempo real desde una consola en React con SignalR.',
    facts: [
      ['Mi rol', 'Full-stack principal: toda la consola y ~80 % del backend'],
      ['Hecho con', 'ASP.NET Core, WhatsApp Cloud API, SignalR, Redis, SQL Server'],
      ['En números', '4 números de WhatsApp · 7 perfiles de requisitos SST · recordatorios en 4 etapas'],
      ['Estado', 'En producción desde 2025'],
    ],
    phoneTitle: 'Ingreso a sedes',
    madeUp: 'Datos inventados',
    msgs: [
      { from: 'bot', text: 'Hola, soy el asistente de ingreso. ¿A qué sede vas?' },
      { from: 'me', text: 'Bodega Medellín' },
      { from: 'bot', text: '¿Qué tipo de ingreso? Visitante · Proveedor · Contratista' },
      { from: 'me', text: 'Contratista, trabajo en alturas' },
      { from: 'bot', text: 'Para trabajo en alturas necesito tu ARL vigente y el certificado de alturas.' },
      { from: 'me', text: 'ARL_vigente.pdf', file: true },
      { from: 'bot', text: 'Listo. Caso #1042 creado y asignado a un agente.' },
    ],
    replay: 'Repetir conversación',
  },
  more: {
    title: 'Más trabajo',
    subtitle: 'Trabajo y proyectos propios',
    items: [
      { name: 'Portal de Talento Humano', tech: 'React + .NET', desc: 'Autoservicio de hoja de vida, ausencias y SST para dos empresas. En producción 5 semanas después del primer commit.' },
      { name: 'Votación de diseños + SSO', tech: 'WebForms', desc: 'Banco reutilizable y votación ponderada por comités. Migré 2.218 votos desde Excel con 0 diferencias.' },
      { name: 'Puente IA ↔ CRM', tech: '.NET 8', desc: 'API que deja a un agente de IA de WhatsApp consultar facturas e inventario y crear casos de garantía con fotos, mapeando el defecto por similitud de texto.' },
      { name: 'Portal B2B de garantías', tech: 'WebForms', desc: 'Rediseño visual de donde los clientes B2B registran casos.' },
      { name: 'Finance APP', tech: '.NET + React', desc: 'Finanzas personales en curso: 19 endpoints, JWT e importador CSV/Excel. Planeada con ML.NET.' },
    ],
    count: 'Ítems',
  },
  about: {
    title: 'Qué contiene',
    big: 'Empecé en Inducascos como aprendiz y hoy soy Auxiliar de Desarrollo. Casi todo mi trabajo es lograr que sistemas viejos y nuevos se entiendan.',
    body: 'Tecnólogo en Desarrollo de Software (ITM, 2025) y estudiante de 8.º semestre de Ingeniería de Sistemas en el ITM.',
    labelTitle: 'Ingredientes',
    ingredients:
      'C#, .NET 8, ASP.NET Core, EF Core, Dapper, SQL Server, PostgreSQL, Redis, React, TypeScript, Vite, TanStack Query, Tailwind CSS, Node.js, SignalR, VTEX IO, Azure (App Service, Blob, Key Vault, Entra ID), Docker, Python.',
    rows: [
      ['Puede contener trazas de', 'ASP.NET WebForms.'],
      ['Procesado con:', 'IA como herramienta. Arquitectura, validación con datos reales y despliegue, hechos a mano.'],
      ['Idiomas:', 'español, inglés intermedio, alemán en aprendizaje.'],
      ['Origen:', 'paisa, de Antioquia, Colombia.'],
    ],
  },
  contact: {
    title: 'Gracias por escanear',
    big: 'Abierto a trabajo remoto, proyectos freelance y oportunidades en Colombia.',
    email: 'Correo',
    whatsapp: 'WhatsApp',
    cv: 'Descargar CV',
    name: 'Nombre',
    mail: 'Correo',
    message: 'Mensaje',
    send: 'Enviar mensaje',
    sending: 'Enviando…',
    ok: 'Mensaje enviado. Te respondo pronto.',
    error: 'No se pudo enviar. Escríbeme directo al correo.',
    mailFallback: 'Se abrirá tu cliente de correo con el mensaje listo.',
  },
  footer: { madeWith: 'Hecho con Astro' },
  blog: {
    title: 'Blog',
    intro: 'Notas sobre lo que voy construyendo: datos, integraciones y decisiones de arquitectura.',
    empty: 'Las primeras notas vienen en camino.',
    back: '← Volver al blog',
  },
};

const en: Dict = {
  meta: {
    title: 'Santiago García · Full-Stack Developer',
    description:
      'Portfolio of Santiago García, a .NET + React full-stack developer in Medellín, Colombia: unified inventory, ERP integrations, e-commerce and WhatsApp.',
  },
  nav: {
    sections: 'Sections',
    inventory: 'Inventory',
    orders: 'Orders',
    whatsapp: 'WhatsApp',
    more: 'More work',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
    themeToDark: 'Dark',
    themeToLight: 'Light',
    themeAria: 'Toggle light or dark theme',
    langAria: 'Language',
  },
  hero: {
    lead: 'Full-stack developer in Medellín, Colombia. I build the software behind a motorcycle helmet retailer: inventory, orders, WhatsApp and the messy data in between.',
    side: "This is a valid EAN-13 barcode; 770 is Colombia's prefix. Move across the bars or play it: you'll hear the opening of the Minuet in G major.",
    play: 'Play the minuet',
    playing: 'Playing…',
    cv: 'Download CV',
  },
  inventory: {
    title: 'Where is the helmet?',
    big: 'A seller has a customer waiting and a helmet out of stock. My unified inventory app shows on one screen whether it is in another store, in the warehouse or online.',
    body: 'The catch: one helmet exists twice, with different IDs, because two companies share the same ERP. The EAN is the only key that links them, so that was the first thing I measured: 99.98% of the items matched.',
    facts: [
      ['My role', 'Only developer, backend and frontend'],
      ['Built with', '.NET 8 modular monolith, React 19 PWA'],
      ['House rule', 'A test breaks the build if a module crosses its boundary'],
      ['Result', 'One search went from 942 rows to 155 families'],
      ['Status', 'Presented to store managers, Oct 2026'],
    ],
    demoTitle: 'How the lookup works',
    madeUp: 'Made-up data',
    companyA: 'Company A',
    companyB: 'Company B',
    checkDigit: 'Check digit valid',
    scan: 'Scan another helmet',
    items: ['Full-face helmet, matte black, M', 'Modular helmet, white, L', 'Riding gloves, red, S'],
    unitsWord: 'units in',
    placesWord: 'places',
  },
  orders: {
    title: 'Orders keep moving',
    big: 'I maintain the online channel end to end: the VTEX IO store, a custom cash-on-delivery payment and the middleware that carries about 1,450 orders a month into SIESA, the ERP.',
    body: 'When an order gets stuck, an automatic sweep I designed reprocesses it every 30 minutes, with a per-order lock, a per-run limit and a circuit breaker. I also tracked down about 19 million logs piled up in Master Data and repointed the services writing them.',
    cut: 'Cut the connection',
    restore: 'Restore the connection',
    delivered: 'Delivered',
    waiting: 'Waiting',
    note: 'A simplified demo: cut the connection and orders wait; restore it and the sweep reprocesses them.',
    aria: 'Orders travelling from VTEX to SIESA',
  },
  whatsapp: {
    title: 'Hi, which site are you visiting?',
    big: 'A WhatsApp assistant registers who enters the company sites and reminds customers before their order expires.',
    body: 'The chatbot is a state machine: depending on the type of work (heights, electrical, forklifts…) it asks for the safety documents required. When it finishes, it opens a case that an agent handles in real time from a React console with SignalR.',
    facts: [
      ['My role', 'Lead full-stack: the whole console and ~80% of the backend'],
      ['Built with', 'ASP.NET Core, WhatsApp Cloud API, SignalR, Redis, SQL Server'],
      ['In numbers', '4 WhatsApp numbers · 7 safety requirement profiles · 4-stage reminders'],
      ['Status', 'In production since 2025'],
    ],
    phoneTitle: 'Site access',
    madeUp: 'Made-up data',
    msgs: [
      { from: 'bot', text: "Hi, I'm the access assistant. Which site are you visiting?" },
      { from: 'me', text: 'Medellín warehouse' },
      { from: 'bot', text: 'What kind of visit? Visitor · Supplier · Contractor' },
      { from: 'me', text: 'Contractor, work at heights' },
      { from: 'bot', text: 'For work at heights I need your current insurance (ARL) and your heights certificate.' },
      { from: 'me', text: 'ARL_current.pdf', file: true },
      { from: 'bot', text: 'Done. Case #1042 created and assigned to an agent.' },
    ],
    replay: 'Replay conversation',
  },
  more: {
    title: 'More work',
    subtitle: 'Work and side projects',
    items: [
      { name: 'HR self-service portal', tech: 'React + .NET', desc: 'Résumés, absences and workplace safety surveys for two companies. In production 5 weeks after the first commit.' },
      { name: 'Design voting + SSO', tech: 'WebForms', desc: 'A reusable design bank and weighted committee voting. I migrated 2,218 votes from Excel with 0 differences.' },
      { name: 'AI ↔ CRM bridge', tech: '.NET 8', desc: 'An API that lets a WhatsApp AI agent check invoices and stock and open warranty cases with photos, matching the reported defect by text similarity.' },
      { name: 'B2B warranty portal', tech: 'WebForms', desc: 'Visual redesign of where business customers file cases.' },
      { name: 'Finance APP', tech: '.NET + React', desc: 'Personal finance app in progress: 19 endpoints, JWT and a CSV/Excel importer. Planned with ML.NET.' },
    ],
    count: 'Items',
  },
  about: {
    title: "What's inside",
    big: 'I started at Inducascos as an apprentice and today I am a Development Assistant. Most of my work is making old and new systems understand each other.',
    body: 'Technologist in Software Development (ITM, 2025) and 8th-semester Systems Engineering student at ITM.',
    labelTitle: 'Ingredients',
    ingredients:
      'C#, .NET 8, ASP.NET Core, EF Core, Dapper, SQL Server, PostgreSQL, Redis, React, TypeScript, Vite, TanStack Query, Tailwind CSS, Node.js, SignalR, VTEX IO, Azure (App Service, Blob, Key Vault, Entra ID), Docker, Python.',
    rows: [
      ['May contain traces of', 'ASP.NET WebForms.'],
      ['Processed with:', 'AI as a tool. Architecture, validation with real data and deployment done by hand.'],
      ['Languages:', 'Spanish, intermediate English, learning German.'],
      ['Origin:', 'paisa, from Antioquia, Colombia.'],
    ],
  },
  contact: {
    title: 'Thanks for scanning',
    big: 'Open to remote work, freelance projects and opportunities in Colombia.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    cv: 'Download CV',
    name: 'Name',
    mail: 'Email',
    message: 'Message',
    send: 'Send message',
    sending: 'Sending…',
    ok: "Message sent. I'll get back to you soon.",
    error: "It couldn't be sent. Please email me directly.",
    mailFallback: 'Your email app will open with the message ready.',
  },
  footer: { madeWith: 'Made with Astro' },
  blog: {
    title: 'Blog',
    intro: "Notes on what I'm building: data, integrations and architecture decisions.",
    empty: 'The first notes are on their way.',
    back: '← Back to the blog',
  },
};

const de: Dict = {
  meta: {
    title: 'Santiago García · Full-Stack-Entwickler',
    description:
      'Portfolio von Santiago García, Full-Stack-Entwickler (.NET + React) in Medellín, Kolumbien: einheitlicher Bestand, ERP-Integrationen, E-Commerce und WhatsApp.',
  },
  nav: {
    sections: 'Bereiche',
    inventory: 'Bestand',
    orders: 'Bestellungen',
    whatsapp: 'WhatsApp',
    more: 'Weitere Arbeit',
    about: 'Über mich',
    blog: 'Blog',
    contact: 'Kontakt',
    themeToDark: 'Dunkel',
    themeToLight: 'Hell',
    themeAria: 'Helles oder dunkles Design umschalten',
    langAria: 'Sprache',
  },
  hero: {
    lead: 'Full-Stack-Entwickler in Medellín, Kolumbien. Ich baue die Software hinter einem Händler für Motorradhelme: Bestand, Bestellungen, WhatsApp und die unordentlichen Daten dazwischen.',
    side: 'Das ist ein gültiger EAN-13-Strichcode; 770 ist die Vorwahl Kolumbiens. Fahr mit dem Cursor über die Striche oder spiel ihn ab: Du hörst den Anfang des Menuetts in G-Dur.',
    play: 'Menuett abspielen',
    playing: 'Spielt…',
    cv: 'Lebenslauf herunterladen',
  },
  inventory: {
    title: 'Wo ist der Helm?',
    big: 'Ein Verkäufer hat einen wartenden Kunden und einen ausverkauften Helm. Meine App für einheitlichen Bestand zeigt auf einem Bildschirm, ob er in einer anderen Filiale, im Lager oder online verfügbar ist.',
    body: 'Die Schwierigkeit: Derselbe Helm existiert zweimal mit unterschiedlichen IDs, weil sich zwei Firmen dasselbe ERP teilen. Die EAN ist der einzige gemeinsame Schlüssel, also habe ich zuerst das gemessen: 99,98 % der Artikel ließen sich zuordnen.',
    facts: [
      ['Meine Rolle', 'Einziger Entwickler, Backend und Frontend'],
      ['Gebaut mit', 'Modularer Monolith in .NET 8, PWA in React 19'],
      ['Regel', 'Ein Test bricht den Build, wenn ein Modul seine Grenze überschreitet'],
      ['Ergebnis', 'Eine Suche ging von 942 Zeilen auf 155 Produktfamilien'],
      ['Status', 'Den Filialleitern vorgestellt, Okt. 2026'],
    ],
    demoTitle: 'So funktioniert die Abfrage',
    madeUp: 'Erfundene Daten',
    companyA: 'Firma A',
    companyB: 'Firma B',
    checkDigit: 'Prüfziffer gültig',
    scan: 'Nächsten Helm scannen',
    items: ['Integralhelm, mattschwarz, M', 'Klapphelm, weiß, L', 'Motorradhandschuhe, rot, S'],
    unitsWord: 'Stück an',
    placesWord: 'Orten',
  },
  orders: {
    title: 'Bestellungen laufen weiter',
    big: 'Ich betreue den Online-Kanal von Anfang bis Ende: den Shop auf VTEX IO, eine eigene Zahlung per Nachnahme und die Middleware, die rund 1.450 Bestellungen im Monat an SIESA, das ERP, übergibt.',
    body: 'Bleibt eine Bestellung hängen, verarbeitet ein von mir entworfener automatischer Durchlauf sie alle 30 Minuten neu, mit Sperre pro Bestellung, Limit pro Durchlauf und Circuit Breaker. Außerdem habe ich rund 19 Millionen angesammelte Logs in Master Data aufgespürt und die schreibenden Dienste umgeleitet.',
    cut: 'Verbindung trennen',
    restore: 'Verbindung herstellen',
    delivered: 'Zugestellt',
    waiting: 'Wartend',
    note: 'Vereinfachte Demo: Trenn die Verbindung und die Bestellungen warten; stell sie wieder her und der Durchlauf verarbeitet sie neu.',
    aria: 'Bestellungen auf dem Weg von VTEX zu SIESA',
  },
  whatsapp: {
    title: 'Hallo, welchen Standort besuchst du?',
    big: 'Ein WhatsApp-Assistent erfasst, wer die Standorte betritt, und erinnert Kunden, bevor ihre Bestellung verfällt.',
    body: 'Der Chatbot ist ein Zustandsautomat: Je nach Art der Arbeit (Höhe, Elektrik, Gabelstapler…) fordert er die nötigen Sicherheitsnachweise an. Am Ende erstellt er einen Fall, den ein Agent in Echtzeit in einer React-Konsole mit SignalR bearbeitet.',
    facts: [
      ['Meine Rolle', 'Haupt-Full-Stack-Entwickler: die ganze Konsole und ~80 % des Backends'],
      ['Gebaut mit', 'ASP.NET Core, WhatsApp Cloud API, SignalR, Redis, SQL Server'],
      ['In Zahlen', '4 WhatsApp-Nummern · 7 Profile für Sicherheitsanforderungen · Erinnerungen in 4 Stufen'],
      ['Status', 'Seit 2025 in Produktion'],
    ],
    phoneTitle: 'Zutritt zu Standorten',
    madeUp: 'Erfundene Daten',
    msgs: [
      { from: 'bot', text: 'Hallo, ich bin der Zutrittsassistent. Welchen Standort besuchst du?' },
      { from: 'me', text: 'Lager Medellín' },
      { from: 'bot', text: 'Welche Art von Besuch? Besucher · Lieferant · Auftragnehmer' },
      { from: 'me', text: 'Auftragnehmer, Arbeiten in der Höhe' },
      { from: 'bot', text: 'Für Arbeiten in der Höhe brauche ich deine gültige Unfallversicherung (ARL) und dein Höhenzertifikat.' },
      { from: 'me', text: 'ARL_gueltig.pdf', file: true },
      { from: 'bot', text: 'Fertig. Fall #1042 erstellt und einem Agenten zugewiesen.' },
    ],
    replay: 'Gespräch wiederholen',
  },
  more: {
    title: 'Weitere Arbeit',
    subtitle: 'Arbeit und eigene Projekte',
    items: [
      { name: 'Personalportal', tech: 'React + .NET', desc: 'Selbstservice für Lebenslauf, Abwesenheiten und Arbeitsschutz-Umfragen für zwei Firmen. 5 Wochen nach dem ersten Commit in Produktion.' },
      { name: 'Design-Abstimmung + SSO', tech: 'WebForms', desc: 'Wiederverwendbare Design-Bibliothek und gewichtete Abstimmung in Gremien. 2.218 Stimmen aus Excel migriert, 0 Abweichungen.' },
      { name: 'KI ↔ CRM-Brücke', tech: '.NET 8', desc: 'API, mit der ein KI-Agent auf WhatsApp Rechnungen und Bestand prüft und Garantiefälle mit Fotos anlegt; der Mangel wird per Textähnlichkeit zugeordnet.' },
      { name: 'B2B-Garantieportal', tech: 'WebForms', desc: 'Visuelles Redesign der Seite, auf der Geschäftskunden Fälle melden.' },
      { name: 'Finance APP', tech: '.NET + React', desc: 'Persönliche Finanz-App in Arbeit: 19 Endpunkte, JWT und CSV/Excel-Import. Mit ML.NET geplant.' },
    ],
    count: 'Posten',
  },
  about: {
    title: 'Inhalt',
    big: 'Ich habe bei Inducascos als Auszubildender angefangen und bin heute Entwicklungsassistent. Meine Arbeit besteht vor allem darin, alte und neue Systeme miteinander sprechen zu lassen.',
    body: 'Technologe für Softwareentwicklung (ITM, 2025) und Student der Systemtechnik im 8. Semester am ITM.',
    labelTitle: 'Zutaten',
    ingredients:
      'C#, .NET 8, ASP.NET Core, EF Core, Dapper, SQL Server, PostgreSQL, Redis, React, TypeScript, Vite, TanStack Query, Tailwind CSS, Node.js, SignalR, VTEX IO, Azure (App Service, Blob, Key Vault, Entra ID), Docker, Python.',
    rows: [
      ['Kann Spuren enthalten von', 'ASP.NET WebForms.'],
      ['Verarbeitet mit:', 'KI als Werkzeug. Architektur, Prüfung mit echten Daten und Deployment von Hand.'],
      ['Sprachen:', 'Spanisch, Englisch (mittleres Niveau), Deutsch (lerne ich gerade).'],
      ['Herkunft:', 'Paisa, aus Antioquia, Kolumbien.'],
    ],
  },
  contact: {
    title: 'Danke fürs Scannen',
    big: 'Offen für Remote-Arbeit, Freelance-Projekte und Chancen in Kolumbien.',
    email: 'E-Mail',
    whatsapp: 'WhatsApp',
    cv: 'Lebenslauf herunterladen',
    name: 'Name',
    mail: 'E-Mail',
    message: 'Nachricht',
    send: 'Nachricht senden',
    sending: 'Wird gesendet…',
    ok: 'Nachricht gesendet. Ich melde mich bald.',
    error: 'Senden fehlgeschlagen. Schreib mir bitte direkt per E-Mail.',
    mailFallback: 'Dein E-Mail-Programm öffnet sich mit der fertigen Nachricht.',
  },
  footer: { madeWith: 'Gemacht mit Astro' },
  blog: {
    title: 'Blog',
    intro: 'Notizen zu dem, was ich baue: Daten, Integrationen und Architekturentscheidungen.',
    empty: 'Die ersten Notizen sind unterwegs.',
    back: '← Zurück zum Blog',
  },
};

export const ui: Record<Lang, Dict> = { es, en, de };

export function useT(lang: Lang): Dict {
  return ui[lang];
}

export const contactLinks = {
  email: 'mailto:garcialondonosantiago@gmail.com',
  emailAddress: 'garcialondonosantiago@gmail.com',
  whatsapp: 'https://wa.me/573023739559',
  linkedin: 'https://www.linkedin.com/in/santiago-garcia-londo%C3%B1o-2719a923b/',
  github: 'https://github.com/SantiagoGarcia555',
  // Clave pública de Web3Forms (va visible en el HTML por diseño; solo permite enviarme mensajes).
  web3formsKey: 'a47ff050-e757-4124-9498-8190b8bf8c8a',
  // Generados con `npm run cv` (cv/generate.mjs).
  cv: {
    es: '/cv/santiago-garcia-cv-es.pdf',
    en: '/cv/santiago-garcia-cv-en.pdf',
    de: '/cv/santiago-garcia-cv-de.pdf',
  } satisfies Record<Lang, string>,
};
