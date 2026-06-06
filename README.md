# Jill's Sandwich — Panel de Administración

Sistema web de gestión integral para restaurantes. Permite administrar pedidos, clientes, menú, mesas y ventas desde un panel centralizado, con autenticación segura y verificación adicional para operaciones sensibles.

> **Demo en vivo:** [PENDIENTE — agregar URL de Vercel]  
> **API Backend:** [PENDIENTE — agregar URL del backend]  
> **Video demo:** [Primera presentación en YouTube](https://youtu.be/fP-bVC3v1AU)

---

## Capturas y funcionalidades

| Módulo | Descripción |
|--------|-------------|
| **Dashboard** | Resumen en tiempo real: pedidos del día, pendientes, clientes, items del menú, estado de mesas e items no disponibles |
| **Pedidos** | CRUD completo, filtros por estado, flujo de estados (pendiente → confirmado → preparando → listo → entregado) |
| **Clientes** | Alta, edición y baja de clientes registrados |
| **Menú** | Gestión de platos con precio, categoría y disponibilidad |
| **Mesas** | Control de mesas (disponible / ocupada) |
| **Ventas** | Resumen de ingresos, registro de pagos y confirmación con token secundario |

---

## Stack tecnológico

### Frontend (este repositorio)

| Tecnología | Uso |
|------------|-----|
| [React 19](https://react.dev/) | UI declarativa con componentes funcionales |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático |
| [Vite 8](https://vite.dev/) | Bundler y dev server |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilos utility-first |
| [React Router 7](https://reactrouter.com/) | Navegación SPA |
| [TanStack Query 5](https://tanstack.com/query) | Cache y sincronización de datos del servidor |
| [Axios](https://axios-http.com/) | Cliente HTTP con interceptores JWT |

### Backend (repositorio separado)

| Tecnología | Uso |
|------------|-----|
| [FastAPI](https://fastapi.tiangolo.com/) | API REST |
| [SQLAlchemy](https://www.sqlalchemy.org/) | ORM |
| JWT | Autenticación (access token + sales token) |

Repositorio backend: [`ProyectoDeGestionDeRestaurante-Back`](https://github.com/TU_USUARIO/ProyectoDeGestionDeRestaurante-Back) — [PENDIENTE — confirmar URL]

---

## Herramientas de IA utilizadas

Este proyecto fue desarrollado en equipo con **Desarrollo Ágil Asistido por IA** como parte del TP Integrador de Gestión de Desarrollo de Software.

| Herramienta | Rol en el proyecto |
|-------------|-------------------|
| **Claude** (chat web Pro) | Generación del código frontend: estructura, componentes, hooks, integración con la API y estilos |
| **Cursor** | Documentación, organización del repositorio, CI/CD y preparación para despliegue |

> Detalle completo de la experiencia con IA en [`INFORME_TECNICO.md`](./INFORME_TECNICO.md).

---

## Requisitos previos

- [Node.js](https://nodejs.org/) ≥ 20
- [pnpm](https://pnpm.io/) ≥ 9
- Backend FastAPI corriendo en `http://127.0.0.1:8000` (ver repo del backend)

---

## Instalación y ejecución local

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/ProyectoDeGestionDeRestaurante-Front.git
cd ProyectoDeGestionDeRestaurante-Front

# 2. Instalar dependencias
pnpm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env si el backend corre en otra URL

# 4. Iniciar en modo desarrollo
pnpm dev
```

La aplicación estará disponible en **http://localhost:5173**.

### Credenciales de prueba

| Campo | Valor |
|-------|-------|
| Usuario | `admin` |
| Contraseña | `admin1234` |
| Contraseña ventas | `ventas1234` |

---

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Servidor de desarrollo con hot reload |
| `pnpm build` | Compila TypeScript y genera build de producción en `dist/` |
| `pnpm preview` | Previsualiza el build de producción localmente |
| `pnpm lint` | Ejecuta ESLint sobre el código fuente |

---

## Estructura del proyecto

```
src/
├── api/           # Clientes HTTP (axios) por dominio
├── auth/          # Contexto de autenticación y hooks
├── components/    # UI reutilizable (botones, modales, layout, tabla)
├── hooks/         # Custom hooks con React Query
├── pages/         # Páginas por ruta
├── routes/        # Configuración de React Router
└── types/         # Interfaces TypeScript compartidas
```

---

## Variables de entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `VITE_API_URL` | URL base de la API FastAPI | `http://127.0.0.1:8000` |

En **Vercel**, configurar `VITE_API_URL` apuntando a la URL pública del backend desplegado.

---

## Despliegue

### Frontend — Vercel (recomendado)

1. Conectar el repositorio en [vercel.com](https://vercel.com)
2. Framework preset: **Vite**
3. Build command: `pnpm build`
4. Output directory: `dist`
5. Agregar variable de entorno `VITE_API_URL` con la URL del backend

El archivo `vercel.json` ya incluye rewrites para el routing SPA.

### Backend — Render / Railway

Desplegar el repositorio FastAPI y actualizar `allow_origins` en CORS con la URL de Vercel.

### CI/CD — GitHub Actions

El pipeline en `.github/workflows/` ejecuta automáticamente:

- **CI** (`ci.yml`): lint + build en cada push y PR a `main`
- **Deploy** (`deploy.yml`): deploy automático a Vercel en push a `main` (requiere secrets de Vercel)

Secrets necesarios en GitHub → Settings → Secrets:

| Secret | Descripción |
|--------|-------------|
| `VERCEL_TOKEN` | Token de API de Vercel |
| `VERCEL_ORG_ID` | ID de organización en Vercel |
| `VERCEL_PROJECT_ID` | ID del proyecto en Vercel |

---

## Autores

Proyecto desarrollado en equipo como **Trabajo Práctico Integrador** — Tecnicatura en Programación, 4° Semestre, Gestión de Desarrollo de Software.

---

## Licencia

Este proyecto es de código abierto con fines académicos.
