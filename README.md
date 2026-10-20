# Alejandro Oliva · Portfolio

Portfolio personal de Alejandro Oliva, desarrollador Full Stack. Disponible en español e inglés.

🌐 **[aleoliva2409-dev.com.ar](https://aleoliva2409-dev.com.ar)**

## 🛠️ Tecnologías

- [Astro](https://astro.build) con generación estática e i18n nativo (`es` y `en`)
- [Tailwind CSS](https://tailwindcss.com) v4
- [TypeScript](https://www.typescriptlang.org)
- [Simple Icons](https://simpleicons.org) para los íconos de habilidades
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) para el sitemap
- Deploy en [Netlify](https://www.netlify.com)

## ✨ Características

- Versión en español (`/`) y en inglés (`/en/`) con selector de idioma
- Tema claro, oscuro o del sistema
- Resaltado de la sección activa en la navegación
- SEO: canonical, `hreflang`, Open Graph, Twitter card, JSON-LD y sitemap
- Respeta `prefers-reduced-motion`

## 📁 Estructura

```text
/
├── public/              # Imágenes, favicons, og.png y robots.txt
└── src/
    ├── assets/icons/    # Íconos SVG como componentes
    ├── components/      # Secciones y componentes de la página
    ├── data/            # Experiencia laboral en ambos idiomas
    ├── i18n/            # Textos de la interfaz y helpers de traducción
    ├── layouts/         # Layout con meta tags y SEO
    ├── pages/           # index.astro (es) y en/index.astro (en)
    └── styles/          # Estilos globales y tema de Tailwind
```

Para cambiar un texto de la interfaz, editá `src/i18n/ui.ts`. Para cambiar la experiencia laboral, editá `src/data/experience.ts`.

## 🧞 Comandos

Requiere Node.js 22.12 o superior y [pnpm](https://pnpm.io).

| Comando        | Acción                                         |
| :------------- | :--------------------------------------------- |
| `pnpm install` | Instala las dependencias                       |
| `pnpm dev`     | Inicia el servidor local en `localhost:4321`   |
| `pnpm build`   | Genera el sitio de producción en `./dist/`     |
| `pnpm preview` | Previsualiza el build localmente               |

## 📄 Licencia

Este proyecto está basado en [porfolio.dev](https://github.com/midudev/porfolio.dev) de [midudev](https://github.com/midudev), con modificaciones, y se distribuye bajo la licencia [Creative Commons Atribución-NoComercial 4.0 Internacional (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/deed.es).
