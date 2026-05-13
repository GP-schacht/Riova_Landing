# RIOVA - Ríos Vivos, Comunidades en Acción

**RIOVA** es una iniciativa ciudadana creada por 10 jóvenes de la 7.ª edición del Laboratorio Latinoamericano de Acción Ciudadana. Busca mejorar la gestión de residuos sólidos en comunidades ribereñas (Mastranto Rural, La Chorrera) para proteger el río Caimito y sus ecosistemas, a través de concientización, psicoeducación ambiental y participación comunitaria.

## Stack

| Tecnología    | Propósito                     |
| ------------- | ----------------------------- |
| **React 19**  | UI y componentes              |
| **Vite 8**    | Build tool y dev server       |
| **React Router 7** | Rutas SPA (5 páginas)    |
| **Tailwind CSS 3** | Estilos utilitarios        |
| **EmailJS**   | Envío de correo desde cliente |
| **Vercel**    | Deploy (estático)             |
| **ESLint**    | Linter                        |

## Estructura del proyecto

```
vilma-py/
├── public/                      # Archivos estáticos (fonts, favicon)
├── src/
│   ├── assets/                  # Imágenes, SVG, recursos externos
│   ├── components/
│   │   ├── layout/              # navbar, footer, hero, card, gallery, contacto, banda, section
│   │   ├── ui/                  # button, container
│   │   └── others/              # scrollTop
│   ├── hooks/                   # useInView (intersección con animaciones)
│   ├── pages/                   # landing, nosotros, pilares, objetivos, equipo
│   ├── sections/                # Secciones reutilizables por página (hero-*, about-*, etc.)
│   ├── styles/                  # Global.css
│   ├── App.jsx                  # Router principal
│   └── main.jsx                 # Entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── eslint.config.js
```

### Páginas

| Ruta         | Página        | Secciones                                          |
| ------------ | ------------- | -------------------------------------------------- |
| `/`          | Landing       | Hero, About, Misión, Visión, Cards, Banda          |
| `/nosotros`  | Nosotros      | Hero, About, LLAC                                  |
| `/pilares`   | Pilares       | Hero, Salud, Habilidades                           |
| `/objetivos` | Objetivos     | Hero, General, Específicos                         |
| `/equipo`    | Equipo        | Hero, Gallery (miembros)                           |
