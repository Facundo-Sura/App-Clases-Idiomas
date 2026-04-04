# EduLingua - Plataforma Educativa de Idiomas

## Concept & Vision

EduLingua es una plataforma minimalista y profesional para gestionar clases de idiomas. La experiencia transmite orden académico con toques modernos. Interfaz clara donde profesores y alumnos encuentran todo lo que necesitan sin distracciones.

## Design Language

### Aesthetic Direction
Inspirado en plataformas educativas premium (Duolingo meets Notion). Limpio, funcional, con acentos de color que guían la atención.

### Color Palette
- **Primary**: `#6366F1` (Indigo - educación, confianza)
- **Secondary**: `#4F46E5` (Indigo oscuro)
- **Accent**: `#10B981` (Verde - éxito, presente)
- **Warning**: `#F59E0B` (Amarillo - atención)
- **Danger**: `#EF4444` (Rojo - ausente, deuda)
- **Background**: `#F8FAFC`
- **Surface**: `#FFFFFF`
- **Text Primary**: `#1E293B`
- **Text Secondary**: `#64748B`

### Typography
- **Headings**: Inter (600, 700)
- **Body**: Inter (400, 500)
- **Monospace**: JetBrains Mono (códigos, números)

### Spatial System
- Base unit: 4px
- Border radius: 8px (cards), 6px (buttons), 12px (modals)

## User Roles

### 1. Docente (Profesor)

#### Dashboard
- Resumen: total alumnos, exámenes próximos, materiales pendientes
- Acceso rápido a funciones principales

#### Gestión de Alumnos
Lista con:
- Nombre del alumno
- Nivel (A1, A2, B1, B2, C1, C2)
- Año académico (2024, 2025)
- Estado de cuota (✓ Al día / ⚠ Debe)
- Asistencia (presencias/inasistencias del mes)
- Notas promedio

#### Gestión de Material
- Lista de materiales por unidad/tema
- Estados: Bloqueado / Desbloqueado
- Subir material (PDF, imágenes, enlaces)
- Toggle para activar/bloquear por alumno

#### Exámenes
- Crear examen con fecha
- Publicar fecha para alumnos
- Ver exámenes programados

### 2. Alumno (Estudiante)

#### Dashboard
- Bienvenida con nombre
- Próximo examen con cuenta regresiva
- Estado de cuota
- Nivel actual

#### Materiales
- Ver materiales desbloqueados
- Material bloqueado muestra candado
- Progreso visual por unidades

#### Notas
- Lista de exámenes con notas
- Promedio general

#### Asistencia
- Calendario con presencias (verde) e inasistencias (rojo)
- Porcentaje de asistencia

#### Estado de Cuenta
- Estado actual (Al día / Debe)
- Monto pendiente si aplica

## Features & Interactions

### Login
- Selector de rol (Docente/Alumno)
- Seleccionar usuario de lista mock
- Sesión persiste en localStorage

### Navegación
- Sidebar en desktop
- Bottom nav en mobile
- Breadcrumbs para orientación

### Estados
- Loading: Skeleton con shimmer
- Empty: Ilustración + mensaje + acción
- Error: Toast notification

## Component Inventory

### Navigation
- **Sidebar**: Logo, nav items con iconos, user info
- **TopBar**: Título, búsqueda, notificaciones, avatar

### Cards
- **StatCard**: Icono, número, label, trend opcional
- **StudentCard**: Avatar, nombre, nivel, badges de estado
- **MaterialCard**: Preview, título, estado, acciones
- **ExamCard**: Fecha, materia, estado

### Tables
- **StudentTable**: Ordenable, filtrable, paginada
- **GradesTable**: Con promedios calculados

### Forms
- **MaterialForm**: Upload con preview
- **ExamForm**: Fecha, descripción
- **AttendanceForm**: Selector de fecha, lista de alumnos

### Feedback
- **Badge**: Estado con color (success, warning, danger)
- **Progress**: Barra de progreso con porcentaje
- **Toast**: Notificaciones temporales

## Technical Approach

### Stack
- Vue 3 (Composition API)
- Vite
- Vue Router
- Pinia (estado simple)
- CSS Modules / Scoped styles

### Estructura
```
src/
  /assets
  /components
    /common (Button, Card, Badge, Input...)
    /layout (Sidebar, TopBar, BottomNav)
    /teacher (StudentList, MaterialManager...)
    /student (Dashboard, MaterialsView...)
  /views
    /teacher
    /student
    /auth
  /stores
  /data (mock data)
  /router
  /styles
```

### Mock Data
- 2 profesores
- 8-10 alumnos
- Materiales por nivel
- Notas y asistencia simuladas
- Estados de cuota variados

### Rutas
```
/login
/docente
  /docente/alumnos
  /docente/materiales
  /docente/examenes
/alumno
  /alumno/inicio
  /alumno/materiales
  /alumno/notas
  /alumno/asistencia
  /alumno/cuenta
```
