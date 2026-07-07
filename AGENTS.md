<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# TREVA Concreto — Reglas del proyecto

Este archivo documenta patrones reales extraídos del código fuente. Cada sección existe porque
sin ella un agente probablemente cometería un error o rompería la consistencia del proyecto.

---

## 1. Identidad del proyecto

Landing page estática (sin API routes) para una concretera en Mexicali.
El CTA principal es **enviar cotización por WhatsApp**. Cada componente debe facilitar ese objetivo.

**Comandos:** `npm run dev` | `npm run build` | `npm run lint` | `npm run start`
**Stack verificado:** Next.js 16, TypeScript strict, Tailwind v4, Framer Motion, Lucide React
**Sin dependencias adicionales** - no agregar sin autorización.

---

## 2. Datos de contacto (verificados en el código)

| Dato | Valor |
|------|-------|
| WhatsApp | 526863062340 |
| Teléfono | +52 686 306 2340 |
| Email | ventas@trevaconcreto.com |
| Instagram | @trevaconstruccionesccccccyconcreto |
| Ubicación | Poblado López Portillo, Valle de Mexicali, B.C. |
| Horario | Lun-Sáb 8-18, Dom cerrado |

Estos valores están hardcodeados en `layout.tsx` (JSON-LD), `Contacto.tsx`, `Footer.tsx`,
`WhatsAppButton.tsx`, `Hero.tsx` y `Calculadora.tsx`. Si cambian, actualizar **todos** los archivos.

---

## 3. Paleta de colores (definida en `globals.css`)

```
--color-primary: #E85D2C (naranja)
--color-primary-dark: #D04A1A
--color-primary-light: #F07840
--color-concrete: #6B7280 (gris)
--color-concrete-light: #9CA3AF
--color-concrete-dark: #4B5563
```

Se usan vía `text-primary`, `bg-primary`, `border-primary`, etc. - Tailwind v4 los reconoce
directamente desde `@theme inline`. No crear variantes adicionales sin razón.

---

## 4. Arquitectura de componentes (deducida de los 16 archivos)

```
app/
  layout.tsx      — fuente Inter, metadata SEO, JSON-LD LocalBusiness
  page.tsx        — composición de todos los componentes, "use client"
  globals.css     — @theme inline con la paleta completa
components/
  Navbar.tsx      — sticky con blur, cambia de transparente a blanco al scrollear > 50px
  Hero.tsx        — fondo oscuro (gradient gray-900), stats flotantes (+200 obras, 10+ años)
  QuienesSomos.tsx  — imagen + texto en grid 2 columnas
  Servicios.tsx   — grid responsive (2→3→4 cols), 11 servicios con iconos
  PorQueElegirnos.tsx  — 6 tarjetas con stagger animation
  Galeria.tsx     — iconos Lucide + fondos oscuros (pendiente reemplazar con fotos reales)
  Proceso.tsx     — 5 pasos en horizontal (lg:grid-cols-5)
  Calculadora.tsx  — 3 inputs (largo, ancho, espesor), resultado en m³, botón WhatsApp
  Cobertura.tsx   — 4 zonas + mapa Google Maps embed apuntando a Valle de Mexicali
  Testimonios.tsx  — slider horizontal con AnimatePresence, 4 testimonios
  FAQ.tsx         — acordeón animado, 6 preguntas
  Contacto.tsx    — fondo oscuro, tarjetas de contacto + formulario que envía a WhatsApp
  Footer.tsx      — 4 columnas, datos, enlaces, Instagram, horarios
  WhatsAppButton.tsx  — botón flotante verde, fixed bottom-6 right-6, z-40
  ScrollToTop.tsx  — aparece al scrollear > 500px, fixed
```

**Todos** los componentes llevan `"use client"` porque dependen de Framer Motion y/o hooks.

---

## 5. Patrón de sección (se repite idéntico en 9 componentes)

Cada sección que actúa como "bloque de contenido" usa esta estructura exacta:

```tsx
<section id="nombre" className="py-20 bg-white">     // o bg-gray-50
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}>
      <span className="text-primary text-sm font-medium uppercase tracking-wider">Label</span>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Título</h2>
      <p className="text-gray-500 mt-3 max-w-xl mx-auto">Subtítulo</p>
    </motion.div>
    ... contenido ...
  </div>
</section>
```

Razón: mantener este patrón garantiza consistencia visual entre secciones.
No modificar las medidas: `py-20`, `max-w-7xl`, `px-4 sm:px-6 lg:px-8`, `text-3xl sm:text-4xl`.

---

## 6. Fondo de secciones: alternancia obligatoria

Las secciones alternan `bg-white` y `bg-gray-50` en este orden (verificado en `page.tsx`):

| Orden | Componente | Fondo |
|-------|-----------|-------|
| 1 | Hero | oscuro (gradient) |
| 2 | QuienesSomos | `bg-white` |
| 3 | Servicios | `bg-gray-50` |
| 4 | PorQueElegirnos | `bg-white` |
| 5 | Galeria | `bg-gray-50` |
| 6 | Proceso | `bg-white` |
| 7 | Calculadora | `bg-white` |
| 8 | Cobertura | `bg-gray-50` |
| 9 | Testimonios | `bg-white` |
| 10 | FAQ | `bg-gray-50` |
| 11 | Contacto | oscuro (gray-900) |

Si se agrega una sección nueva, debe seguir esta alternancia.
Si se mueve una sección, actualizar su fondo para mantener el patrón.

---

## 7. Animaciones Framer Motion (patrón extraído de todo el codebase)

**Animación de entrada por scroll** (usada en todos los componentes):
```tsx
initial={{ opacity: 0, y: 20 }}   // o y: 30, x: -30, x: 30
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-80px" }}
transition={{ duration: 0.5, ease: "easeOut" as const }}  // → "as const" obligatorio
```

**Stagger para listas** (usado en Servicios y PorQueElegirnos):
```tsx
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },  // o 0.05
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};
```

**Slider de testimonios** (AnimatePresence con variantes por dirección):
```tsx
const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
};
```

Regla: toda animación debe tener `viewport={{ once: true }}` para no repetirse.
El `"as const"` en `ease` no es opcional - TypeScript strict lo exige.

---

## 8. Convenciones de código (verificadas en los 16 componentes)

- **Nombres de archivo**: PascalCase (`Calculadora.tsx`, `PorQueElegirnos.tsx`)
- **Exports**: `export default function Componente()` - sin arrow functions para export default
- **Props tipadas**: cuando hay props, definir interfaz inline (ej. `{ item: { q: string; a: string }; index: number }`)
- **Iconos Lucide**: importar solo los que se usan, en una línea o varias según cantidad
- **Iconos que NO existen en lucide-react**: `Facebook`, `Instagram` - usar `Globe` y `Share2` en su lugar
- **Estilos**: Tailwind utility classes, sin CSS modules, sin styled-components
- **Sin tailwind.config.ts**: la paleta está en `globals.css` con `@theme inline`
- **Formularios**: el de Contacto.tsx envía los datos por WhatsApp (no tiene backend)

---

## 9. SEO (verificado en `layout.tsx`)

El layout exporta metadata estática con title, description, keywords y OpenGraph.
Además inyecta JSON-LD con schema LocalBusiness mediante `dangerouslySetInnerHTML`.

Reglas:
- Al cambiar datos de contacto, actualizar también el JSON-LD
- Al cambiar el título/descripción, actualizar `layout.tsx`
- Los keywords están hardcodeados como array - mantener relevantes a concreto/Mexicali

---

## 10. Calculadora (`Calculadora.tsx`)

Fórmula: `m³ = largo(m) × ancho(m) × (espesor(cm) / 100)`
Redondeo: `Math.round(m3 * 100) / 100` (2 decimales)
Enlace WhatsApp generado: `https://wa.me/526863062340?text=...`

Los inputs usan `type="number"` con `step="0.01"` (largo/ancho) y `step="0.5"` (espesor).
No modificar la lógica matemática sin autorización expresa.

---

## 11. Verificación pre-commit

Antes de concluir cualquier cambio:
1. `npm run build` - detecta errores TS + compila producción
2. Los imports sin usar y variables no utilizadas causan error en build
3. Verificar que `ease: "easeOut" as const` se use en toda animación nueva
4. Si se tocaron datos de contacto, revisar los 6 archivos que los contienen
5. Si se agregó componente, verificar que siga el patrón de sección (sección 5) y la alternancia de fondos (sección 6)
6. Probar responsive mínimo: 375px, 768px, 1280px

---

## 12. MCP - Context7

Context7 está configurado como servidor MCP remoto en `opencode.json`. No necesita API key.

Cuando necesites documentación de librerías (Lucide, Tailwind v4, Framer Motion, Next.js 16),
usa las herramientas de `context7` antes de escribir código nuevo.

---

## 13. Lo que este proyecto NO tiene (evitar sugerir)

- No tiene API routes ni backend
- No tiene base de datos
- No tiene pruebas unitarias ni de integración
- No hay tailwind.config.ts
- No hay variables de entorno ni .env
- No hay autenticación, ni cookies, ni sesiones
