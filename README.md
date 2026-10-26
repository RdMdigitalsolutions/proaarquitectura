# PROA Arquitectura — web estática multidioma

Web creada en HTML, CSS y JavaScript, preparada para publicar como sitio estático en catalán y castellano.

## Ver la web

Sirve la carpeta raíz con un servidor estático y abre `/`. La portada redirige a `/ca/index.html`.

Por ejemplo: `python -m http.server 8000` y después `http://localhost:8000/`.

## Idiomas y SEO

- `/ca/index.html`: versión principal en catalán.
- `/es/index.html`: versión en castellano.
- `/`: redirección a `/ca/index.html` (con regla 301 para plataformas compatibles con `_redirects` y fallback HTML).
- Cada versión incluye canonical, `hreflang` recíproco, `x-default`, Open Graph, Twitter Cards y datos estructurados localizados.
- `sitemap.xml` contiene ambas URLs y sus alternativas lingüísticas.
- Los assets compartidos se sirven desde `/assets/` mediante rutas relativas.

## Contenido incluido

- Landing responsive orientada a PROA Arquitectura.
- Foco SEO local: ITE en Terrassa, rehabilitación, reformas y arquitectura técnica.
- Servicios para administradores de fincas, comunidades y particulares.
- Sección de proyectos con fotografías temporales.
- Sección de artículos/guías orientada a SEO.
- Formulario de contacto que, en esta demo, abre el cliente de correo con el mensaje preparado.
- Google Maps integrado.
- Widget flotante con accesos directos a WhatsApp (+34 692 60 18 49).
- Datos estructurados Schema.org de negocio profesional.

## Antes de publicar en producción

1. Sustituir las imágenes temporales de Unsplash por fotografías propias de PROA.
2. Conectar el formulario a un endpoint real (por ejemplo, PHP, Formspree, Web3Forms o backend propio).
3. Verificar que el dominio de producción sea `https://proarquitectura.cat`; si cambia, actualizar canonical, `hreflang`, Open Graph, datos estructurados, `robots.txt` y `sitemap.xml`.
4. Añadir páginas legales definitivas: aviso legal, privacidad y cookies, según el sistema de analítica/formularios utilizado.
5. Verificar todos los textos de servicios y datos de contacto con el despacho.

## Estructura

- `index.html` (redirección de idioma)
- `ca/index.html`
- `es/index.html`
- `sitemap.xml`
- `_redirects`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/images/proa-logo.png`
- `assets/images/proa-original.png`
