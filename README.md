# Yacht Punta Cana

Sitio web de alquiler de yates de lujo en Punta Cana, República Dominicana.

**Stack:** Next.js 13 (Pages Router) · React 18 · Material UI 5 · Framer Motion · next-i18next

---

## Inicio rápido

```bash
npm install
npm run dev        # http://localhost:3000

# Si hay errores de build o módulos en caché
rm -rf .next && npm run dev
```

---

## Estructura del proyecto

```
yacht-puntacana/
├── pages/
│   ├── _app.jsx                  # Provider global: tema, i18n, Layout
│   ├── index.jsx                 # Home
│   ├── services.jsx              # Servicios
│   ├── destiny.jsx               # Destinos
│   ├── contact_us.jsx            # Contacto
│   └── boats/
│       └── [slug].jsx            # ⭐ Ruta dinámica — todos los yates
│
├── components/
│   ├── layout/
│   │   └── Layout.jsx            # Navbar + Footer + botones flotantes
│   ├── Header/
│   │   └── DrawerAppBar.jsx      # Navegación desktop y mobile drawer
│   ├── boats_description/
│   │   └── BoatDescription.jsx   # ⭐ Descripción genérica (recibe datos del yate)
│   ├── BoatsComponent.jsx        # Grid de cards en el home
│   ├── BoatsBanner.jsx           # Hero banner de cada yate
│   ├── BoatServices.jsx          # Servicios incluidos
│   ├── BoatsTechnicalData.jsx    # Tabla de especificaciones técnicas
│   ├── ImageBoatsGallery.jsx     # Galería masonry con lightbox
│   ├── MainBanner.jsx            # Hero principal del home
│   ├── MainTitle.jsx             # Sección "Yacht Punta Cana"
│   ├── SupportBanner.jsx         # CTA de contacto
│   ├── Footer.jsx
│   └── buttons/
│       ├── BookNowButton.jsx
│       ├── WhatsAppButton.jsx
│       └── GoingUpButton.jsx
│
├── database/
│   └── boat_data.js              # ⭐ Fuente de verdad de todos los yates
│
├── constants/
│   └── boats.ts                  # Cards del home (imagen + link)
│
├── styles/
│   ├── globals.css               # Estilos base, animaciones, scrollbar
│   └── theme/index.jsx           # Paleta de colores MUI
│
└── public/
    └── locales/
        ├── en/common.json        # Traducciones inglés
        └── es/common.json        # Traducciones español
```

---

## ⭐ Cómo agregar un nuevo yate

Solo hay que tocar **dos archivos**. No se crea ninguna página ni componente nuevo.

### 1. `database/boat_data.js` — los datos completos

Agrega un objeto al array `boats`. Los campos marcados con `(opcional)` pueden omitirse:

```js
{
  id: "11",                          // ID único (string, no repetir)
  slug: "sea-ray-48",                // ← define la URL: /boats/sea-ray-48
  name: "Sea Ray 48",                // Nombre visible en títulos y SEO

  principalImage: "https://res.cloudinary.com/.../imagen-principal.jpg",
  shortDesc: "Descripción corta, aprox 120–150 caracteres.",

  // Párrafos de descripción (el componente renderiza los que existan)
  p1: "Primer párrafo largo...",
  p2: "Segundo párrafo...",          // (opcional)
  p3: "Tercer párrafo...",           // (opcional)

  // Galería de fotos
  gallery: [
    { id: "1", src: "https://res.cloudinary.com/.../foto1.jpg" },
    { id: "2", src: "https://res.cloudinary.com/.../foto2.jpg" },
    // ... todas las que necesites
  ],

  // Sección de dos columnas imagen + texto (opcional)
  "split-img1": "https://res.cloudinary.com/.../interior.jpg",
  "split-img2": "https://res.cloudinary.com/.../detalle.jpg",
  split: {
    desc1: "Texto de la columna izquierda...",
    desc2: "Texto de la columna derecha...",
  },

  // Especificaciones técnicas (tabla)
  features: {
    Builder: "Sea Ray",
    boatType: "Motor Yacht",
    year: "2018",
    remodeling: "2023",
    Length: "14,80 m",
    beam: "4,65 m",
    draft: "1,05 M",
    maxSpeed: "34 knots",
    hulkmaterial: "Fiberglass",
    engines: "2x600 hp",
    fueltype: "Diesel",
    Bathrooms: "2",
    capacity: "16",
  },
}
```

### 2. `constants/boats.ts` — la card del home

Agrega una entrada al array `boats`. Esto controla qué aparece en el grid de cards de la página principal:

```ts
{
  image: "https://res.cloudinary.com/.../imagen-principal.jpg",
  title: "Sea Ray 48",
  description: "yacht-card.sea-ray-48",   // clave de traducción (ver paso 3)
  link: "/boats/sea-ray-48",              // debe coincidir con el slug de arriba
},
```

### 3. Traducciones de la card (opcional)

Si quieres textos distintos por idioma en la card del home, agrega la clave en ambos archivos:

**`public/locales/en/common.json`**
```json
"yacht-card": {
  "sea-ray-48": "Luxury 48ft motor yacht, perfect for day trips along the Caribbean coast."
}
```

**`public/locales/es/common.json`**
```json
"yacht-card": {
  "sea-ray-48": "Yate a motor de 48 pies, perfecto para excursiones de un día por el Caribe."
}
```

### 4. Resultado

La ruta `/boats/sea-ray-48` se genera automáticamente. Reinicia el servidor para verla en desarrollo:

```bash
rm -rf .next && npm run dev
```

---

## Colores de marca

Definidos en `styles/theme/index.jsx`. **Los azules son la identidad de marca — no cambiar.**

| Variable | Hex | Uso |
|---|---|---|
| `first_blue` | `#0c71e0` | Acento principal, botones, hovers |
| `second_blue` | `#0859c6` | Gradientes oscuros, sombras |
| `soft_blue` | `#10a5f5` | Labels, iconos, eyebrows |
| `deep_navy` | `#06101e` | Fondo global de la app |
| `navy` | `#0a1829` | Fondo de cards y footer |
| `navy_mid` | `#0e2040` | Superficies elevadas, banners |
| `off_white` | `#eef2f8` | Texto primario sobre fondo oscuro |
| `text_muted` | `rgba(220,232,248,0.55)` | Texto secundario |

> El dorado `#c9a84c` se usa únicamente como línea decorativa fina. Nunca como acento principal.

---

## Internacionalización (i18n)

Soporta inglés (`en`) y español (`es`). Configurado con `next-i18next`.

Los textos están en `public/locales/{en,es}/common.json`.

Uso en componentes:

```jsx
import { useTranslation } from 'next-i18next';

const { t } = useTranslation();
<Typography>{t('navbar.home')}</Typography>
```

Cada página necesita `getStaticProps` con `serverSideTranslations`:

```js
export async function getStaticProps({ locale }) {
  const { serverSideTranslations } = await import('next-i18next/serverSideTranslations');
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])) },
  };
}
```

---

## Notas técnicas importantes

**`react-responsive-masonry` — error ESM**
Este paquete es ESM puro y no puede correr en el servidor de Next.js directamente.
Se importa con `next/dynamic` + `ssr: false` en `ImageBoatsGallery.jsx`. No cambiar ese patrón.
También requiere `transpilePackages: ['react-responsive-masonry']` en `next.config.js`.

**Layout global**
El `<Footer />` y el `<DrawerAppBar />` viven en `components/layout/Layout.jsx`, que se aplica en `_app.jsx`.
**No agregar `<Footer />` manualmente en las páginas** — ya está incluido globalmente.

**Ruta dinámica de yates**
`pages/boats/[slug].jsx` usa `getStaticPaths` + `getStaticProps`: las páginas se generan estáticamente en build time.
Agregar un yate nuevo requiere reiniciar el servidor en desarrollo, o hacer un nuevo build en producción.
