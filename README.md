# Mile Nails - Premium Web

Sitio web premium para Mile Nails, studio de belleza en Iquique.

## Stack

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS 3.4
- **Design**: Soft Feminine (Blush theme)

## Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Deployment

El proyecto está listo para deploy en Vercel:

```bash
vercel --prod
```

## Estructura

```
src/
├── layouts/
│   └── Layout.astro       # Layout base con SEO
├── components/
│   ├── Preloader.astro    # Animación de carga
│   ├── Header.astro       # Navegación
│   ├── Hero.astro         # Sección principal
│   ├── ServicesStrip.astro
│   ├── About.astro
│   ├── Services.astro     # Grid de servicios
│   ├── Gallery.astro      # Galería draggable
│   ├── Testimonials.astro
│   ├── Contact.astro
│   ├── Footer.astro
│   └── WhatsAppButton.astro
├── pages/
│   └── index.astro        # Página principal
└── styles/
    └── global.css         # Estilos globales
```

## Personalización

Editar `src/pages/index.astro` para cambiar:
- Nombre del negocio
- WhatsApp / Instagram
- Servicios y precios
- Ubicación

---

Desarrollado por [Ahjin Agency](https://ahjin.agency)
