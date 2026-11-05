# Prompt para extraer contexto de proyectos (Cowork)

Copia todo lo que está dentro del bloque de abajo y pégalo en cada proyecto.
Guarda cada resultado en `D:\Programacion\MiPortafolio\contexto\` con el nombre que indica el propio prompt.

---

```text
Necesito documentar este proyecto para mi portafolio profesional de desarrollador (lo construiré con Astro). Revisa TODO el contexto disponible en este proyecto: archivos, código, documentos, instrucciones del proyecto y conversaciones anteriores. Luego genera un único archivo Markdown con la estructura exacta de abajo.

REGLAS
1. Solo hechos verificables en el material. Si algo no aparece, escribe "No disponible". No inventes métricas, fechas, tecnologías ni resultados.
2. Confidencialidad: es para un portafolio PÚBLICO. No incluyas credenciales, URLs internas, IPs, nombres de clientes, datos personales, montos financieros ni código propietario. Si un dato sensible es importante para la historia, generalízalo (ej. "cliente del sector retail", "redujo el tiempo ~70%") y márcalo con [GENERALIZADO].
3. Distingue claramente lo que hice YO de lo que hizo el equipo u otras personas. Si no está claro, márcalo con [VERIFICAR].
4. Al final, en "Preguntas para mí", lista lo que falta y que solo yo puedo responder (métricas, impacto, fechas, mi rol exacto).
5. Escribe en español. Guarda el resultado como archivo con nombre: contexto-<nombre-del-proyecto-en-kebab-case>.md

ESTRUCTURA

# <Nombre del proyecto>

## Ficha rápida
- **Nombre público sugerido:** (si el nombre real es confidencial, propone uno genérico)
- **Tipo:** (web app, API, automatización, dashboard, integración, herramienta interna, móvil, IA/LLM, datos, otro)
- **Estado:** (producción / en desarrollo / piloto / descontinuado)
- **Periodo:** (fecha inicio – fin o "actual")
- **Mi rol:** (ej. desarrollador full-stack, líder técnico, único desarrollador)
- **Tamaño del equipo:**
- **¿Se puede mostrar públicamente?:** (sí / solo descripción / no) y por qué

## Resumen en una frase
Qué es y para qué sirve, para alguien no técnico (máx. 25 palabras).

## Problema
Qué dolor o necesidad de negocio resolvía. Cómo se hacía antes.

## Solución
Qué construí y cómo funciona a alto nivel (3–6 frases).

## Mis aportes concretos
Lista de logros con verbo de acción ("Diseñé…", "Implementé…", "Automaticé…"). Uno por línea, específicos.

## Stack tecnológico
- **Frontend:**
- **Backend:**
- **Base de datos:**
- **Infraestructura / Cloud / DevOps:**
- **IA / LLMs / APIs externas:**
- **Herramientas y librerías clave:**

## Arquitectura
Componentes principales y cómo se comunican. Si puedes, un diagrama en Mermaid.

## Desafíos técnicos y cómo los resolví
2–4 desafíos: problema → decisión → resultado.

## Impacto y resultados
Métricas cuantificables (tiempo ahorrado, usuarios, rendimiento, errores reducidos, dinero ahorrado, adopción). Marca cada una como [CONFIRMADO] (aparece en el material) o [ESTIMADO].

## Habilidades demostradas
Etiquetas cortas, técnicas y blandas (ej. "Integración de APIs", "Automatización de procesos", "Comunicación con stakeholders").

## Material visual disponible
Capturas, diagramas, demos o videos que existen, y si se pueden mostrar o habría que recrearlos o difuminarlos.

## Textos listos para el portafolio
- **Tarjeta (máx. 40 palabras):**
- **Viñeta para CV (1 línea, con métrica si existe):**
- **Párrafo de caso de estudio (80–120 palabras):**

## Preguntas para mí
Lo que falta o no pudiste verificar.
```

---

## Después de recopilar todo

Cuando tengas los archivos en `contexto/`, también me sirve (opcional) que agregues uno llamado `contexto/sobre-mi.md` con:
- Nombre de la empresa (o cómo quieres referirte a ella públicamente), cargo y fecha de ingreso
- Experiencia previa, estudios y certificaciones
- Qué tipo de trabajo buscas o a quién va dirigido el portafolio
- Idioma(s) del sitio (¿español, inglés o ambos?)
- Enlaces: GitHub, LinkedIn, correo de contacto
- Portafolios que te gusten como referencia visual
