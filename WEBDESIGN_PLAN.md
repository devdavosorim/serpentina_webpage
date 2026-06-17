# Serpentina Taller — Web Design Plan
## Documento de referencia para desarrollo · ursoft

---

## 01. Identidad de marca

### Posicionamiento
Serpentina Taller no es una carpintería. Es un **estudio de mobiliario contemporáneo** que trabaja la madera. Cada decisión de diseño debe reforzar esa diferencia.

### Personalidad
Precisa · Atemporal · Artesanal · Contemporánea · Honesta · Sofisticada · Cercana

### Lo que el visitante debe pensar al entrar
> "Quiero que ellos fabriquen mis muebles."

---

## 02. Logotipo

### Archivos disponibles
| Archivo | Uso |
|---|---|
| `Serpentina_Taller_Dark.svg` | Uso principal — sobre fondos claros (Lino, Superficie, Hueso) |
| `Serpentina_Taller_Light.svg` | Versión clara — sobre fondos oscuros (Carbón, Nogal) |
| `favicon_serpentina.svg` | Favicon del navegador |
| `Serpentina_Taller_horizontal.svg` | Navegador del sitio y encabezados |

### Reglas de uso
- Siempre SVG vectorial, nunca PNG ni capturas de pantalla
- El punto Nogal `#8B7355` no cambia en ninguna variante
- Solo usar la versión **sólida** — la versión outline está descartada
- Zona de protección mínima: alto de la "S" en todos los lados
- Nunca sobre fotografías sin overlay oscuro suficiente

---

## 03. Sistema de color

### `tokens.css` — archivo único de design tokens

```css
/* ============================================================
   tokens.css — Serpentina Taller
   Importar primero en style.css: @import './tokens.css';
   ============================================================ */

:root {
  /* --- Colores base --- */
  --color-lino:       #F7F4EF;  /* Fondo dominante — 60% del sitio */
  --color-carbon:     #1C1917;  /* Tipografía, fondos oscuros, CTAs */

  /* --- Acento primario --- */
  --color-nogal:      #8B7355;  /* El único acento — punto del logo, eyebrows, hover */

  /* --- Neutros --- */
  --color-arena:      #C4B89A;  /* Separadores, texto sobre oscuro */
  --color-superficie: #F0EDE7;  /* Secciones alternas, cards */
  --color-hueso:      #EDE9E2;  /* Bordes, inputs */

  /* --- Uso único --- */
  --color-oliva:      #4A5240;  /* SOLO botón de WhatsApp */
  --color-caoba:      #6B3D2E;  /* SOLO mensajes de error en formularios */

  /* --- Tipografía --- */
  --font-serif: 'Cormorant Garamond', serif;
  --font-sans:  'DM Sans', sans-serif;
  --font-mono:  'DM Mono', monospace;

  /* --- Espaciado --- */
  --space-xs:   0.5rem;
  --space-sm:   1rem;
  --space-md:   1.5rem;
  --space-lg:   2.5rem;
  --space-xl:   4rem;
  --space-2xl:  6rem;
  --space-3xl:  7rem;

  --section-padding: 7rem 6rem;
  --nav-height: 72px;

  /* --- Bordes --- */
  --border-thin:   0.5px solid rgba(28, 25, 23, 0.10);
  --border-medium: 0.5px solid rgba(28, 25, 23, 0.15);
  --radius: 0;  /* Sin border-radius. El diseño es recto. */

  /* --- Animaciones --- */
  --ease-out:    cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-subtle: cubic-bezier(0.4, 0, 0.2, 1);
  --dur-fast:    0.3s;
  --dur-normal:  0.4s;
  --dur-slow:    0.6s;
}
```

### Proporción de uso
```
60% Lino        ████████████████████████████████████████████████████████████
20% Carbón      ████████████████████
12% Nogal       ████████████
 5% Arena       █████
 2% Superficie  ██
 1% Oliva       █
```

### Combinaciones aprobadas
| Nombre | Fondo | Texto | Acento | Uso |
|---|---|---|---|---|
| Principal | `#F7F4EF` Lino | `#1C1917` Carbón | `#8B7355` Nogal | 80% del sitio |
| Inversión | `#1C1917` Carbón | `#F7F4EF` Lino | `#C4B89A` Arena | Footer, hero oscuro, statements |
| Suave | `#F0EDE7` Superficie | `#1C1917` Carbón | `#8B7355` Nogal | Proceso, servicios |

---

## 04. Tipografía

### Import (en `<head>` de index.html)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap" rel="stylesheet">
```

### Roles estrictos — no intercambiables

| Familia | Rol | Pesos | Uso |
|---|---|---|---|
| Cormorant Garamond | Display | 300, 300 Italic, 400 | Hero H1, H2 de sección, citas, portafolio |
| DM Sans | Body / UI | 300, 400, 500 | Párrafos, navegación, botones, descripción |
| DM Mono | Label / Metadata | 400 | Eyebrows, materiales, coordenadas, numeración |

### Escala tipográfica

```css
/* Hero H1 */
font-family: var(--font-serif);
font-size: clamp(2.8rem, 5vw, 4.2rem);
font-weight: 300;
line-height: 1.1;
letter-spacing: -0.01em;

/* H2 Sección */
font-family: var(--font-serif);
font-size: clamp(2rem, 3.5vw, 3rem);
font-weight: 300;
line-height: 1.1;
letter-spacing: -0.01em;

/* H3 Card */
font-family: var(--font-serif);
font-size: 1.1rem;
font-weight: 400;
line-height: 1.2;

/* Body */
font-family: var(--font-sans);
font-size: 0.85rem;
font-weight: 300;
line-height: 1.9;

/* Label / Eyebrow */
font-family: var(--font-mono);
font-size: 0.65rem;
font-weight: 400;
letter-spacing: 0.2em;
text-transform: uppercase;
color: var(--color-nogal);

/* Nav / CTA */
font-family: var(--font-sans);
font-size: 0.75rem;
font-weight: 400;
letter-spacing: 0.12em;
text-transform: uppercase;
```

---

## 05. Animaciones

### Tabla de animaciones aprobadas

| Elemento | Tipo | Duración | Easing |
|---|---|---|---|
| Fade-in sección al scroll | `opacity + translateY(20px)` | `0.6s` | `ease-out` |
| Hover tarjeta de servicio | `background-color` | `0.4s` | `ease` |
| Hover imagen portafolio | `scale(1.03)` | `0.6s` | `var(--ease-out)` |
| Botón CTA | `background-color` | `0.3s` | `ease` |
| Nav al hacer scroll | `border-color, backdrop-filter` | `0.3s` | `ease` |
| Lightbox entrada | `opacity + scale(0.98→1)` | `0.4s` | `ease-out` |

### Reglas
- **Nunca** parallax agresivo
- **Nunca** loading screens ni splash screens
- **Siempre** respetar `prefers-reduced-motion`
- Implementar con `IntersectionObserver` en `main.js`

---

## 06. Stack tecnológico

```
Lenguaje:    HTML5 — index.html (una sola página)
Estilos:     CSS3 — tokens.css + style.css
Scripts:     Vanilla JS — main.js (un solo archivo)
Imágenes:    WebP + lazy loading nativo (loading="lazy")
Favicon:     favicon.svg
Control:     Git
Deploy:      Hostinger — archivos estáticos, FTP o Git deploy
Dominio:     serpentinataller.mx (pendiente)
Formulario:  Formspree (POST sin backend propio)
```

> **Sin frameworks, sin build step, sin npm.**
> Subir directo a Hostinger. Compatible con cualquier plan de hosting compartido.

---

## 07. Estructura de archivos

```
serpentina/
├── index.html
├── css/
│   ├── tokens.css          ← design tokens (colores, fuentes, espaciado)
│   └── style.css           ← @import './tokens.css'; + todos los estilos
├── js/
│   ├── gallery-data.js     ← array con metadatos de todas las imágenes
│   └── main.js             ← lógica: nav, scroll, galería, lightbox, formulario
├── assets/
│   ├── logos/
│   │   ├── Serpentina_Taller_Dark.svg
│   │   ├── Serpentina_Taller_Light.svg
│   │   ├── Serpentina_Taller_horizontal.svg
│   │   └── favicon.svg
│   └── gallery/
│       ├── cocinas/
│       ├── closets/
│       ├── mesas/
│       ├── libreros/
│       ├── comercial/
│       └── proceso/
└── og-image.jpg            ← 1200×630px para Open Graph
```

---

## 08. Galería — estrategia de integración

### Por qué `gallery-data.js` y no HTML estático

Las imágenes se gestionan en un **array de objetos JS** separado del HTML.
Agregar o quitar una foto es editar una línea en `gallery-data.js`, no tocar el HTML.
El JS renderiza las tarjetas dinámicamente y maneja filtros y lightbox sin recargar.

### `gallery-data.js`

```js
// js/gallery-data.js
const GALLERY = [
  {
    id:        'coc-01',
    src:       'assets/gallery/cocinas/cocina-nogal-01.webp',
    alt:       'Cocina integral en nogal americano, Polanco CDMX',
    categoria: 'cocinas',
    nombre:    'Cocina en nogal negro',
    material:  'Nogal americano · Acero inoxidable',
    año:       '2024',
    ubicacion: 'Polanco, CDMX',   // opcional
  },
  {
    id:        'clo-01',
    src:       'assets/gallery/closets/closet-roble-01.webp',
    alt:       'Vestidor en roble blanco, Lomas de Chapultepec',
    categoria: 'closets',
    nombre:    'Vestidor en roble blanco',
    material:  'Roble blanco · Latón',
    año:       '2024',
    ubicacion: 'Lomas, CDMX',
  },
  // ... una entrada por imagen
];
```

### Categorías
```
cocinas    → cocinas integrales terminadas
closets    → closets y vestidores
mesas      → mesas y escritorios
libreros   → libreros y estantes
comercial  → proyectos comerciales
proceso    → fabricación en taller
```

### Flujo de la galería en `main.js`

```
gallery-data.js cargado → renderGallery('todos')
  └─ crea <article> por cada item con data-categoria
  └─ cada imagen: loading="lazy" + overlay con nombre y material

Clic en filtro → filtra por data-categoria con CSS class toggle
  └─ animación fade suave al cambiar categoría

Clic en imagen → abre Lightbox
  └─ muestra imagen full, nombre, material, año
  └─ botón "Me interesa algo similar →" abre WhatsApp con texto pre-llenado
  └─ cerrar: tecla Esc, clic fuera, o botón ×
```

### Nomenclatura de archivos de imagen
```
[categoria]-[descripcion-corta]-[numero].webp

cocinas/   cocina-nogal-01.webp, cocina-fresno-02.webp
closets/   closet-roble-01.webp, closet-blanco-01.webp
mesas/     mesa-mezquite-01.webp, escritorio-nogal-01.webp
libreros/  librero-fresno-01.webp
comercial/ local-roble-01.webp
proceso/   proceso-taller-01.webp
```

### Optimización de imágenes (antes de subir)
- Formato: `.webp` obligatorio
- Ancho máximo: 1400px (pantallas retina)
- Calidad: 82–85%
- Tamaño objetivo: < 200KB por imagen
- Herramienta recomendada: Squoosh, ImageOptim, o `cwebp`

---

## 09. Arquitectura del sitio (One Page)

```
index.html
├── #inicio      → Hero
├── #servicios   → Servicios
├── #proceso     → Proceso
├── #portafolio  → Galería
├── #materiales  → Materiales
├── #testimonios → Testimonios
├── #contacto    → Contacto + Formulario
└── <footer>
```

---

## 10. Secciones — especificación detallada

### NAV
- Fijo en la parte superior (`position: fixed`)
- Fondo: `rgba(247, 244, 239, 0.85)` con `backdrop-filter: blur(12px)`
- Logo: `Serpentina_Taller_horizontal.svg` alineado a la izquierda
- Links: DM Sans 0.75rem uppercase tracked — Servicios · Proceso · Portafolio · Contacto
- CTA derecha: "Cotizar proyecto" — fondo Carbón, texto Lino
- Al hacer scroll: borde inferior `0.5px` Nogal con transición `0.3s`
- Mobile: menú hamburger con overlay Carbón

---

### HERO
- Altura: `100vh` mínimo
- Layout: grid 50/50 — izquierda visual, derecha contenido
- Visual (izquierda): fondo Carbón con SVG de vetas de madera (inline en HTML)
- Eyebrow: DM Mono — "Estudio de mobiliario"
- H1: Cormorant Garamond 300 — "Muebles que duran más que las tendencias."
- Subtext: DM Sans 300 — máximo 2 líneas
- CTAs: "Iniciar proyecto" (Carbón) + "Ver portafolio" (solo borde inferior)
- Coordenadas en el visual: DM Mono muy pequeño, `opacity: 0.3` — "N 19°26' · W 99°07'"
- Línea Nogal de `3px` en el borde inferior del hero

---

### STATEMENT (bloque oscuro)
- Fondo: Carbón `#1C1917`
- Texto: Cormorant Garamond 300, `clamp(1.8rem, 3.5vw, 3rem)`
- Copy: *"No hacemos muebles en serie. Hacemos piezas que cuentan la historia de quien las encarga."*
- Palabra clave en cursiva color Arena
- Detalle inferior derecho: DM Mono muy pequeño, baja opacidad

---

### STATS BAR
- Fondo: Nogal `#8B7355`
- Grid de 4 columnas
- Número: Cormorant Garamond 300, ~2.5rem, Lino
- Label: DM Mono uppercase, Lino opacidad 60%
- Datos: +340 proyectos · 9 años · 100% fabricación local · 18 especies de madera

---

### SERVICIOS
- Fondo: Lino
- Header asimétrico: título izquierda (Cormorant), intro derecha (DM Sans)
- Grid 3×2 con bordes `0.5px`
- Cada card: número DM Mono + nombre Cormorant + descripción DM Sans
- Flecha `→` aparece en hover, transición suave
- Hover: fondo cambia a Superficie

**Servicios:**
1. Cocinas integrales
2. Closets y vestidores
3. Muebles sobre diseño
4. Mesas y escritorios
5. Libreros y estantes
6. Mobiliario comercial

---

### PROCESO
- Fondo: Superficie `#F0EDE7`
- Línea horizontal conecta los 4 pasos
- Dot circle en cada paso — filled Nogal en el activo
- Pasos: Consulta inicial · Diseño y propuesta · Fabricación en taller · Entrega e instalación

---

### PORTAFOLIO / GALERÍA
- Fondo: Lino
- Header: título izquierda + link "Ver todos" derecha
- Filtros por categoría: Todos · Cocinas · Closets · Mesas · Libreros · Comercial · Proceso
- Grid editorial asimétrico: imagen grande (4:3) izquierda + 2 imágenes pequeñas derecha
- Cada imagen: nombre + material en DM Mono al hacer hover
- Clic: Lightbox fullscreen
- Lightbox: imagen full + nombre + material + "Me interesa algo similar →" (WhatsApp)
- Imágenes: WebP, `loading="lazy"`, dimensiones explícitas para evitar CLS

---

### MATERIALES
- Fondo: Carbón
- 4 swatches con gradientes CSS que simulan veta de madera
- Cada swatch: nombre + nombre científico + origen
- Maderas: Nogal americano · Roble blanco · Mezquite · Fresno americano

---

### TESTIMONIOS
- Fondo: Superficie
- Título central en Cormorant con palabra en cursiva
- Grid 3 columnas
- Cada testimonio: cita en Cormorant italic + nombre DM Sans + proyecto DM Mono Nogal

---

### CONTACTO
- Layout: grid 50/50
- Izquierda: título + descripción + botón WhatsApp (Oliva) + datos del taller
- Derecha: formulario minimalista (Formspree `action`)
- Inputs: borde solo en la parte inferior, sin box completo
- Labels: DM Mono uppercase Nogal
- Submit: fondo Carbón, texto Lino, hover fondo Nogal
- Campos: Nombre · Email · Tipo de proyecto · Mensaje

---

### WHATSAPP BUTTON (flotante)
- `position: fixed` bottom-right
- Color: Oliva `#4A5240`
- Ícono SVG de WhatsApp inline
- Tooltip en hover: "Escríbenos"
- Mensaje pre-completado por sección activa:
  - General: `"Hola, me gustaría cotizar un proyecto con Serpentina Taller."`
  - Desde Lightbox: `"Hola, me interesa algo similar a [nombre]. ¿Podemos hablar?"`

---

### FOOTER
- Fondo: Carbón
- Grid 4 columnas: Marca · Servicios · Estudio · Contacto
- Logo: `Serpentina_Taller_Light.svg`
- Tagline: DM Sans 300, opacidad 50%
- Links: DM Sans 300, opacidad 45%, hover 90%
- Column headers: DM Mono uppercase Arena
- Bottom bar: copyright izquierda + "Ciudad de México · Hecho a mano" derecha
- Redes: Instagram + Pinterest — SVG simples, sin color de marca

---

## 11. Integraciones

### WhatsApp Business
```
Formato: https://wa.me/52XXXXXXXXXX?text=MENSAJE_CODIFICADO
Número:  [pendiente confirmar con cliente]
```

### Redes sociales
- Instagram: `https://instagram.com/taller_serpentina`
- Pinterest: [pendiente]

### Formulario de contacto — Formspree
```html
<form action="https://formspree.io/f/XXXXXXXX" method="POST">
  <!-- Campos -->
  <!-- Success state: manejo con JS, sin redirección -->
</form>
```

---

## 12. SEO y metadatos

```html
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Serpentina Taller — Ebanistería y Mobiliario a Medida · Ciudad de México</title>
  <meta name="description" content="Estudio de mobiliario contemporáneo en Ciudad de México. Diseñamos y fabricamos muebles a medida en maderas naturales. Cocinas, closets, mesas, libreros y proyectos personalizados.">

  <!-- Open Graph -->
  <meta property="og:title" content="Serpentina Taller — Mobiliario a Medida">
  <meta property="og:description" content="Estudio de ebanistería y diseño de mobiliario en Ciudad de México.">
  <meta property="og:image" content="/og-image.jpg">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="es_MX">

  <!-- Favicon -->
  <link rel="icon" href="assets/logos/favicon.svg" type="image/svg+xml">

  <!-- Schema.org LocalBusiness -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Serpentina Taller",
    "description": "Estudio de ebanistería y mobiliario a medida",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ciudad de México",
      "addressCountry": "MX"
    },
    "telephone": "[número]",
    "url": "https://serpentinataller.mx"
  }
  </script>
</head>
```

---

## 13. Performance y accesibilidad

### Core Web Vitals targets
- LCP < 2.5s
- CLS < 0.1 — imágenes siempre con `width` y `height` explícitos
- FID < 100ms

### Checklist
- [ ] WebP con `width` y `height` explícitos en cada `<img>`
- [ ] `loading="lazy"` en todas las imágenes fuera del viewport inicial
- [ ] Hero image: `loading="eager"` + `fetchpriority="high"`
- [ ] Logo SVG inline en el nav (no `<img>`) para LCP
- [ ] Fuentes con `font-display: swap`
- [ ] `prefers-reduced-motion` en todas las animaciones de JS
- [ ] Contraste WCAG AA en todos los textos
- [ ] `alt` descriptivo en todas las imágenes de galería
- [ ] Navegación por teclado funcional (foco visible, Esc en lightbox)
- [ ] Semántica: `<main>`, `<section>`, `<nav>`, `<footer>`, `<article>`

---

## 14. Copywriting aprobado

### Reglas de voz
- Escribir poco. Cada palabra se gana su lugar.
- Sin clichés, sin frases de vendedor, sin superlativos vacíos.
- La voz es la de alguien que sabe exactamente lo que hace.

### Copy por sección

| Sección | Copy |
|---|---|
| Hero H1 | "Muebles que duran más que las tendencias." |
| Hero subtext | "Diseñamos y fabricamos mobiliario a medida usando maderas naturales seleccionadas. Cada pieza es única." |
| Statement | "No hacemos muebles en serie. Hacemos piezas que cuentan la historia de quien las encarga." |
| Servicios intro | "Trabajamos con clientes residenciales, comerciales y arquitectos en proyectos donde el detalle y la calidad no son negociables." |
| Proceso título | "Un proceso transparente de principio a fin." |
| Testimonios título | "La mejor medida de nuestro trabajo es lo que queda cuando nos vamos." |
| Contacto título | "¿Tienes un proyecto en mente?" |
| Contacto subtext | "Cuéntanos qué necesitas. Sin compromiso, sin prisa. Respondemos en menos de 24 horas." |
| WhatsApp CTA | "Escribir por WhatsApp" |
| Footer tagline | "Estudio de mobiliario y ebanistería en Ciudad de México." |

---

## 15. Checklist de entrega

### Pendiente del cliente
- [ ] Fotografías para la galería (WebP, organizadas por categoría)
- [ ] Número de WhatsApp Business
- [ ] Confirmar dominio: serpentinataller.mx
- [ ] URL de Pinterest
- [ ] ID de Formspree (crear cuenta en formspree.io)

### Durante el desarrollo
- [ ] `tokens.css` con todos los design tokens
- [ ] Logotipos SVG integrados correctamente
- [ ] `gallery-data.js` con metadatos de todas las imágenes
- [ ] Galería con filtros y lightbox funcional
- [ ] Lightbox con link a WhatsApp
- [ ] Formulario de contacto con Formspree
- [ ] WhatsApp button flotante con mensaje dinámico
- [ ] Animaciones con `IntersectionObserver` + `prefers-reduced-motion`
- [ ] Responsive: mobile, tablet, desktop
- [ ] SEO: metadatos, OG, Schema.org, favicon

### Antes de publicar
- [ ] Prueba en Chrome, Safari, Firefox
- [ ] Prueba en iPhone y Android
- [ ] Lighthouse score > 90 en todas las categorías
- [ ] Revisión final con el cliente
- [ ] Upload a Hostinger (FTP o Git deploy)
- [ ] Apuntar dominio serpentinataller.mx

---

*Serpentina Taller — Plan de diseño web v2.0 — Junio 2026*
*Stack: HTML5 · CSS3 · Vanilla JS · Hostinger*
