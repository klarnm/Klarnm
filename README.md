


# Klarnm — Mi Portafolio Musical Profesional

Este proyecto es mi portafolio musical personal, desarrollado para mostrar mi trabajo, habilidades técnicas y experiencia en desarrollo web. Construí esta plataforma con **Next.js 14**, **MongoDB Atlas** y **Tailwind CSS**, priorizando la escalabilidad, la seguridad y una experiencia de usuario moderna.

---

## 🏗️ Arquitectura y Tecnologías

- **Frontend:** [Next.js 14](https://nextjs.org/) (React, App Router, SSR/SSG, API Routes)
- **Backend:** API RESTful integrada en Next.js (Route Handlers)
- **Base de datos:** [MongoDB Atlas](https://www.mongodb.com/atlas/database) (NoSQL, escalable, cloud-managed)
- **Autenticación:** [NextAuth.js](https://next-auth.js.org/) (OAuth, JWT, credenciales personalizadas)
- **UI/UX:** [Tailwind CSS](https://tailwindcss.com/) (CSS utility-first), [Framer Motion](https://www.framer.com/motion/) (animaciones)
- **Despliegue:** [Vercel](https://vercel.com/) (CI/CD, edge network, serverless)

---

## ⚙️ Características Técnicas

- Visualizo mis tracks musicales con un reproductor de YouTube embebido
- Cuento con un panel de administración seguro (autenticación, autorización, gestión de tracks)
- La arquitectura es modular y desacoplada (`app/`, `components/`, `lib/`)
- El diseño es responsive y mobile-first
- Implemento optimización SEO y performance (carga diferida, imágenes optimizadas)
- Incluyo animaciones fluidas y personalizables
- Personalizo imágenes en `/public/images/`

---

## 🚀 Instalación y Ejecución Local

Si deseas probar o revisar el código, puedes clonar el repositorio, instalar dependencias y configurar las variables de entorno (`MONGODB_URI`, credenciales de autenticación, etc.). El proyecto se ejecuta en modo desarrollo con `npm run dev`.

---

## 🖼️ Personalización y Recursos Estáticos

Organizo mis imágenes y recursos estáticos en `/public/images/`:

- `hero-bg.jpg` — Fondo principal
- `avatar.png` — Foto o logo personal
- `/oc/` — Imágenes adicionales

---

## 🔒 Panel de Administración

Accedo a `/admin/login` (autenticación requerida) para crear, editar, eliminar y destacar tracks musicales. La gestión es segura mediante roles y sesiones.

---

## ☁️ Despliegue y Producción

El despliegue lo realizo en [Vercel](https://vercel.com/), donde configuro las variables de entorno necesarias y gestiono el entorno productivo. Para despliegues avanzados, consulto la [documentación oficial de Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 🧑‍💻 Buenas Prácticas y Recomendaciones

- Mantengo mis dependencias actualizadas (`npm update`)
- Utilizo variables de entorno seguras y nunca expongo secretos en el código
- Realizo pruebas locales antes de desplegar en producción
- Uso roles y permisos adecuados en el panel de administración
- Reviso los logs y monitorizo el rendimiento en producción

---

## 📄 Licencia

Distribuyo este proyecto bajo licencia MIT. Libre para uso, modificación y distribución.
