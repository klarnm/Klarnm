
# 🎵 Portafolio Musical Profesional

> Un portafolio web moderno y optimizado para músicos, construido con **Next.js 14**, **MongoDB Atlas** y **Tailwind CSS**.

---

## 🚀 Tecnologías Principales

- [Next.js 14](https://nextjs.org/) — Framework React para aplicaciones web modernas
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) — Base de datos en la nube
- [Tailwind CSS](https://tailwindcss.com/) — Utilidades CSS para diseño rápido y responsivo
- [NextAuth.js](https://next-auth.js.org/) — Autenticación segura
- [Framer Motion](https://www.framer.com/motion/) — Animaciones fluidas

---

## ✨ Funcionalidades

- 🎸 Visualización de canciones con reproductor de YouTube integrado
- 🔐 Panel de administración seguro para gestión de tracks
- 📱 Diseño responsive y experiencia mobile-first
- ⚡ Carga rápida y optimización SEO
- 🎨 Animaciones y transiciones profesionales
- 🖼️ Soporte para imágenes personalizadas

---

## 🛠️ Instalación y Uso Local

1. **Clona el repositorio:**
	```bash
	git clone https://github.com/klarnm/Klarnm.git
	cd Klarnm
	```
2. **Instala dependencias:**
	```bash
	npm install
	```
3. **Configura las variables de entorno:**
	- Crea un archivo `.env.local` basado en `.env.example` (si existe).
	- Añade tu URI de MongoDB Atlas y credenciales de autenticación.
4. **Inicia el servidor de desarrollo:**
	```bash
	npm run dev
	```

---

## 🎨 Personalización Visual

Coloca tus imágenes en la carpeta `/public/images/`:

- `hero-bg.jpg` — Fondo principal
- `avatar.png` — Foto o logo personal
- `/oc/` — Imágenes adicionales para tu portafolio

---

## 🔐 Panel de Administración

Accede a `/admin/login` para gestionar tu música:

- ➕ Agregar nuevas canciones
- 📝 Editar canciones existentes
- 🗑️ Eliminar canciones
- ⭐ Marcar canciones como destacadas

---

## ☁️ Despliegue en Vercel

El método recomendado es usar [Vercel](https://vercel.com/) para desplegar tu app:

1. Sube tu código a GitHub.
2. Conecta el repositorio en [Vercel](https://vercel.com/new).
3. Configura las variables de entorno (por ejemplo, `MONGODB_URI`).
4. ¡Listo! Tu portafolio estará online y optimizado.

Más información en la [documentación oficial de Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 📄 Licencia

MIT — Libre para uso y modificación.
