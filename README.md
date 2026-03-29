# LinguaClass - Plataforma Educativa de Idiomas

## Descripción del Proyecto

LinguaClass es una aplicación web educativa diseñada para la gestión y administración de clases de idiomas. Esta plataforma MVP permite a docentes y alumnos interactuar de manera eficiente en un entorno educativo digital.

La aplicación está dividida en dos interfaces principales:
- **Vista Docente**: Para profesores que gestionan estudiantes, materiales y exámenes.
- **Vista Alumno**: Para estudiantes que acceden a sus calificaciones, asistencia, materiales y cuenta personal.

## Características Principales

### Vista Docente
- **Lista de Alumnos**: Visualización completa de estudiantes con información detallada sobre nivel, año académico, asistencia, notas y estado de cuota.
- **Gestión de Materiales**: Capacidad para subir materiales educativos y controlar el acceso por unidad (bloquear/desbloquear).
- **Exámenes**: Creación de exámenes y publicación de fechas importantes para los alumnos.

### Vista Alumno
- **Dashboard Personal**: Resumen con información sobre el próximo examen, estadísticas personales y progreso.
- **Materiales Educativos**: Acceso a contenido desbloqueado por el docente según el avance del curso.
- **Historial de Notas**: Visualización de calificaciones con cálculo de promedio.
- **Control de Asistencia**: Calendario interactivo que muestra presencias e inasistencias.
- **Gestión de Cuenta**: Estado de cuota y historial de pagos.

## Arquitectura del Proyecto

El proyecto está construido con Vue.js 3 utilizando la Composition API y Vite como bundler para un desarrollo rápido y eficiente.

### Estructura de Carpetas
- `src/components/`: Componentes reutilizables como barras laterales (Sidebar.vue, SidebarStudent.vue).
- `src/views/`: Vistas principales divididas en carpetas para estudiantes y docentes.
- `src/stores/`: Gestión de estado con Pinia (auth.js para autenticación, data.js para datos de la aplicación).
- `src/router/`: Configuración de rutas con Vue Router.
- `src/styles/`: Estilos globales con CSS y variables personalizadas.
- `public/`: Archivos estáticos.

## Tecnologías Utilizadas
- **Vue 3** (Composition API)
- **Vite** (Bundler y servidor de desarrollo)
- **Vue Router** (Navegación)
- **Pinia** (Gestión de estado)
- **CSS** con variables personalizadas

## Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd App-Clases-Idiomas
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

La aplicación estará disponible en `http://localhost:5173`.

## Uso

1. Selecciona el rol deseado (Docente o Alumno) en la pantalla de login.
2. Elige un usuario de la lista de usuarios demo.
3. Explora las funcionalidades disponibles según el rol seleccionado.

### Usuarios Demo

**Docentes:**
- María García
- Carlos López

**Alumnos:**
- Ana Martínez, Luis Pérez, Sofia Rodríguez, Diego Sánchez, Carmen Fernández (asignados a María García)
- Pablo González, Elena Torres, Miguel Ruiz (asignados a Carlos López)

## Despliegue

El proyecto incluye configuración para despliegue en Vercel (vercel.json). Para desplegar:

1. Conecta el repositorio a Vercel.
2. Configura las variables de entorno si es necesario.
3. Despliega automáticamente con cada push a la rama principal.

## Contribución

Si deseas contribuir al proyecto:
1. Fork el repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y commits.
4. Push a tu rama y crea un Pull Request.

## Licencia

Este proyecto es de código abierto. Consulta el archivo LICENSE para más detalles.
