# LinguaClass - Plataforma Educativa de Idiomas

MVP de una aplicación web educativa para gestión de clases de idiomas.

## Características

### Vista Docente
- **Lista de Alumnos**: Ver estudiantes con nivel, año, asistencia, notas y estado de cuota
- **Gestión de Materiales**: Subir, bloquear/desbloquear materiales por unidad
- **Exámenes**: Crear exámenes y publicar fechas para alumnos

### Vista Alumno
- **Dashboard**: Resumen con próximo examen, estadísticas personales
- **Materiales**: Ver contenido desbloqueado por el docente
- **Notas**: Historial de calificaciones con promedio
- **Asistencia**: Calendario con presencias e inasistencias
- **Cuenta**: Estado de cuota y historial de pagos

## Tecnologías
- Vue 3 (Composition API)
- Vite
- Vue Router
- Pinia
- CSS con variables

## Instalación

```bash
cd linguaclass
npm install
npm run dev
```

La aplicación estará disponible en http://localhost:5173

## Uso

1. Selecciona el rol (Docente/Alumno)
2. Elige un usuario de la lista
3. Explora las funcionalidades según el rol

### Usuarios Demo

**Docentes:**
- María García
- Carlos López

**Alumnos:**
- Ana Martínez, Luis Pérez, Sofia Rodríguez, Diego Sánchez, Carmen Fernández (pertenecen a María)
- Pablo González, Elena Torres, Miguel Ruiz (pertenecen a Carlos)
