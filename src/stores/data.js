import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAuthStore } from './auth'

export const useDataStore = defineStore('data', () => {
  const auth = useAuthStore()

  const students = ref([
    { 
      id: 1, name: 'Ana Martínez', level: 'B1', year: 2025, teacherId: 1,
      attendance: { present: 18, absent: 2 }, quota: 'paid', averageGrade: 8.5
    },
    { 
      id: 2, name: 'Luis Pérez', level: 'A2', year: 2025, teacherId: 1,
      attendance: { present: 15, absent: 5 }, quota: 'pending', averageGrade: 7.2
    },
    { 
      id: 3, name: 'Sofia Rodríguez', level: 'B2', year: 2024, teacherId: 1,
      attendance: { present: 20, absent: 0 }, quota: 'paid', averageGrade: 9.1
    },
    { 
      id: 4, name: 'Diego Sánchez', level: 'B1', year: 2025, teacherId: 1,
      attendance: { present: 16, absent: 4 }, quota: 'pending', averageGrade: 6.8
    },
    { 
      id: 5, name: 'Carmen Fernández', level: 'A1', year: 2025, teacherId: 1,
      attendance: { present: 19, absent: 1 }, quota: 'paid', averageGrade: 8.0
    }
  ])

  const materials = ref([
    { id: 1, title: 'Unidad 1: Saludos y Presentaciones', unit: 1, level: 'A1',
      content: 'PDF con diálogo básico', type: 'pdf', locked: false, teacherId: 1 },
    { id: 2, title: 'Unidad 2: Números y Colores', unit: 2, level: 'A1',
      content: 'Ejercicios prácticos', type: 'pdf', locked: false, teacherId: 1 },
    { id: 3, title: 'Unidad 3: Familia y Amigos', unit: 3, level: 'A1',
      content: 'Vocabulario y ejemplos', type: 'pdf', locked: true, teacherId: 1 },
    { id: 4, title: 'Unidad 4: La Casa', unit: 4, level: 'A1',
      content: 'Partes de la casa', type: 'pdf', locked: true, teacherId: 1 },
    { id: 5, title: 'Unidad 5: Comida y Bebida', unit: 5, level: 'A2',
      content: 'Restaurante y supermercado', type: 'pdf', locked: false, teacherId: 1 },
    { id: 6, title: 'Unidad 6: Verbos Regulares', unit: 6, level: 'A2',
      content: 'Conjugaciones básicas', type: 'pdf', locked: true, teacherId: 1 },
    { id: 7, title: 'Unidad 7: Tiempo y Clima', unit: 7, level: 'B1',
      content: 'Clima y seasons', type: 'pdf', locked: false, teacherId: 1 },
    { id: 8, title: 'Unidad 8: Viajes', unit: 8, level: 'B1',
      content: 'Aeropuerto y hotel', type: 'pdf', locked: true, teacherId: 1 }
  ])

  const exams = ref([
    { id: 1, title: 'Examen Parcial 1', date: '2025-02-15', level: 'A1', published: true, teacherId: 1 },
    { id: 2, title: 'Examen Parcial 2', date: '2025-03-20', level: 'A1', published: true, teacherId: 1 },
    { id: 3, title: 'Examen Final', date: '2025-04-10', level: 'A1', published: false, teacherId: 1 },
    { id: 4, title: 'Examen B2 Interim', date: '2025-02-28', level: 'B2', published: true, teacherId: 1 }
  ])

  const grades = ref([
    { id: 1, studentId: 1, examId: 1, grade: 8.5, date: '2025-02-15' },
    { id: 2, studentId: 1, examId: 2, grade: 8.0, date: '2025-03-20' },
    { id: 3, studentId: 2, examId: 1, grade: 7.0, date: '2025-02-15' },
    { id: 4, studentId: 2, examId: 2, grade: 7.5, date: '2025-03-20' },
    { id: 5, studentId: 3, examId: 1, grade: 9.0, date: '2025-02-15' },
    { id: 6, studentId: 3, examId: 2, grade: 9.5, date: '2025-03-20' },
    { id: 7, studentId: 4, examId: 1, grade: 6.5, date: '2025-02-15' },
    { id: 8, studentId: 4, examId: 2, grade: 7.0, date: '2025-03-20' },
    { id: 9, studentId: 5, examId: 1, grade: 8.0, date: '2025-02-15' },
    { id: 10, studentId: 5, examId: 2, grade: 8.0, date: '2025-03-20' }
  ])

  const attendanceRecords = ref([
    { id: 1, studentId: 1, date: '2025-01-10', status: 'present' },
    { id: 2, studentId: 1, date: '2025-01-17', status: 'present' },
    { id: 3, studentId: 1, date: '2025-01-24', status: 'absent' },
    { id: 4, studentId: 2, date: '2025-01-10', status: 'present' },
    { id: 5, studentId: 2, date: '2025-01-17', status: 'absent' },
    { id: 6, studentId: 3, date: '2025-01-10', status: 'present' },
    { id: 7, studentId: 3, date: '2025-01-17', status: 'present' },
    { id: 8, studentId: 3, date: '2025-01-24', status: 'present' }
  ])

  const teacherStudents = computed(() => {
    if (!auth.user) return []
    return students.value.filter(s => s.teacherId === auth.user.id)
  })

  const studentGrades = computed(() => {
    if (!auth.user || auth.user.role !== 'student') return []
    return grades.value.filter(g => g.studentId === auth.user.id)
  })

  const studentMaterials = computed(() => {
    if (!auth.user || auth.user.role !== 'student') return []
    const studentLevel = students.value.find(s => s.id === auth.user.id)?.level || 'A1'
    return materials.value.filter(m => m.level === studentLevel || m.teacherId === auth.user.teacherId)
  })

  const nextExam = computed(() => {
    const today = new Date().toISOString().split('T')[0]
    return exams.value.find(e => e.date >= today && e.published) || null
  })

  function toggleMaterialLock(materialId) {
    const material = materials.value.find(m => m.id === materialId)
    if (material) {
      material.locked = !material.locked
    }
  }

  function addExam(exam) {
    exams.value.push({
      ...exam,
      id: exams.value.length + 1,
      teacherId: auth.user.id
    })
  }

  function toggleExamPublish(examId) {
    const exam = exams.value.find(e => e.id === examId)
    if (exam) {
      exam.published = !exam.published
    }
  }

  function addMaterial(material) {
    materials.value.push({
      ...material,
      id: materials.value.length + 1,
      teacherId: auth.user.id,
      locked: true
    })
  }

  return {
    students,
    materials,
    exams,
    grades,
    attendanceRecords,
    teacherStudents,
    studentGrades,
    studentMaterials,
    nextExam,
    toggleMaterialLock,
    addExam,
    toggleExamPublish,
    addMaterial
  }
})
