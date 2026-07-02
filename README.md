# axl.santos — Personal Portfolio

Portfolio personal de [Axl Santos](https://www.linkedin.com/in/axl-santos/) — Full-Stack Developer & Founder de [Fallxn Studio](https://fallxn.studio/en) y creador de [Vallen](https://vallen.app/).

Sitio de una sola página con tema oscuro minimalista, animaciones sutiles y un minijuego integrado.

## Features

- **Multiidioma** — Inglés como idioma principal (`/`) y español en (`/es/`), con selector EN/ES en el navbar y `hreflang` para SEO.
- **Animaciones con GSAP** — Reveals escalonados al hacer scroll y un timeline de experiencia cuya línea se dibuja siguiendo el scroll (ScrollTrigger). Respeta `prefers-reduced-motion`.
- **Fondo dinámico** — Partículas monocromas tipo estrellas en canvas con parpadeo sutil + glow radial.
- **Minijuego 🎯** — Una nave que dispara a orbes flotantes; cada orbe acertado desbloquea un dato del perfil. Progreso persistente en `localStorage` y opción de ocultar el juego.
- **Responsive** — Menú móvil con animación de hamburguesa a "X".

## Stack

- [Astro 5](https://astro.build) con i18n routing nativo
- [Tailwind CSS v4](https://tailwindcss.com) (vía `@tailwindcss/vite`)
- [GSAP](https://gsap.com) + ScrollTrigger
- TypeScript
- Fuentes: Inter Variable + JetBrains Mono Variable (Fontsource)

## Estructura

```text
/
├── public/
│   ├── favicon.svg
│   └── me.png                  # Foto del hero
├── src/
│   ├── components/
│   │   ├── Background.astro    # Partículas + glow de fondo
│   │   ├── Nav.astro           # Navbar con menú móvil y selector de idioma
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro
│   │   ├── Timeline.astro      # Experiencia laboral animada
│   │   ├── MiniGame.astro      # Minijuego shooter
│   │   └── Contact.astro
│   ├── data/
│   │   └── profile.ts          # Todo el contenido (EN/ES) vive aquí
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro         # / (inglés)
│   │   └── es/index.astro      # /es/ (español)
│   ├── scripts/
│   │   └── animations.ts       # GSAP + ScrollTrigger
│   └── styles/
│       └── global.css          # Theme tokens (colores, fuentes)
└── astro.config.mjs
```

## Editar contenido

Todo el contenido (perfil, stack, proyectos, experiencia, textos del juego) está centralizado en [`src/data/profile.ts`](src/data/profile.ts), organizado por idioma en el objeto `content`. Para cambiar textos, edita ambos idiomas (`en` y `es`) — no hace falta tocar los componentes.

Los colores y fuentes se definen como tokens en [`src/styles/global.css`](src/styles/global.css) (`@theme`).

## Comandos

| Comando           | Acción                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Instala dependencias                          |
| `npm run dev`     | Dev server en `localhost:4321`                |
| `npm run build`   | Build de producción en `./dist/`              |
| `npm run preview` | Previsualiza el build antes de deployar       |
