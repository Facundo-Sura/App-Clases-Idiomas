<template>
  <div class="grades-view">
    <header class="page-header">
      <h1>Mis Notas</h1>
      <p class="subtitle">Historial de calificaciones</p>
    </header>

    <div class="average-card">
      <div class="average-circle">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" class="bg" />
          <circle 
            cx="50" cy="50" r="45" 
            class="progress" 
            :style="{ strokeDashoffset: circumference - (average / 10) * circumference }"
          />
        </svg>
        <div class="average-value">
          <span class="number">{{ average }}</span>
          <span class="label">/10</span>
        </div>
      </div>
      <div class="average-info">
        <h2>Promedio General</h2>
        <p>{{ grades.length }} exámenes realizados</p>
        <span class="status" :class="getStatus(average)">
          {{ getStatusText(average) }}
        </span>
      </div>
    </div>

    <div class="grades-list">
      <h2>Detalle de exámenes</h2>
      <div class="grade-cards">
        <div v-for="grade in grades" :key="grade.id" class="grade-card">
          <div class="grade-header">
            <span class="exam-title">{{ getExamTitle(grade.examId) }}</span>
            <span class="exam-date">{{ formatDate(grade.date) }}</span>
          </div>
          <div class="grade-value" :class="getGradeClass(grade.grade)">
            {{ grade.grade.toFixed(1) }}
          </div>
          <div class="grade-bar">
            <div class="grade-fill" :style="{ width: (grade.grade / 10 * 100) + '%' }"></div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="grades.length === 0" class="empty-state">
      <FileText :size="48" />
      <p>No tienes exámenes registrados</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useDataStore } from '../../stores/data'
import { FileText } from 'lucide-vue-next'

const data = useDataStore()

const grades = computed(() => data.studentGrades)

const average = computed(() => {
  if (grades.value.length === 0) return '0.0'
  const avg = grades.value.reduce((sum, g) => sum + g.grade, 0) / grades.value.length
  return avg.toFixed(1)
})

const circumference = 2 * Math.PI * 45

function getExamTitle(examId) {
  const exam = data.exams.find(e => e.id === examId)
  return exam?.title || 'Examen'
}

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
}

function getGradeClass(grade) {
  if (grade >= 8) return 'excellent'
  if (grade >= 6) return 'good'
  return 'low'
}

function getStatus(avg) {
  const num = parseFloat(avg)
  if (num >= 8) return 'excellent'
  if (num >= 6) return 'good'
  return 'low'
}

function getStatusText(avg) {
  const num = parseFloat(avg)
  if (num >= 9) return '¡Excelente!'
  if (num >= 8) return 'Muy bien'
  if (num >= 6) return 'Aprobado'
  return 'Necesita mejorar'
}
</script>

<style scoped>
.grades-view {
  animation: fadeIn 0.3s ease;
}

.page-header {
  margin-bottom: 24px;
}

.page-header h1 {
  font-size: 1.5rem;
  margin-bottom: 4px;
}

.subtitle {
  color: var(--text-secondary);
}

.average-card {
  background: var(--surface);
  padding: 24px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
}

.average-circle {
  position: relative;
  width: 120px;
  height: 120px;
  flex-shrink: 0;
}

.average-circle svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.average-circle .bg {
  fill: none;
  stroke: var(--background);
  stroke-width: 8;
}

.average-circle .progress {
  fill: none;
  stroke: var(--primary);
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 283;
  transition: stroke-dashoffset 0.5s ease;
}

.average-value {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.average-value .number {
  font-size: 2rem;
  font-weight: 700;
}

.average-value .label {
  font-size: 1rem;
  color: var(--text-secondary);
}

.average-info h2 {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.average-info p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.status {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
}

.status.excellent { background: #D1FAE5; color: #059669; }
.status.good { background: #FEF3C7; color: #D97706; }
.status.low { background: #FEE2E2; color: #DC2626; }

.grades-list h2 {
  font-size: 1.1rem;
  margin-bottom: 16px;
}

.grade-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.grade-card {
  background: var(--surface);
  padding: 16px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.grade-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.exam-title {
  font-weight: 500;
}

.exam-date {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.grade-value {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.grade-value.excellent { color: #059669; }
.grade-value.good { color: #D97706; }
.grade-value.low { color: #DC2626; }

.grade-bar {
  height: 6px;
  background: var(--background);
  border-radius: 3px;
  overflow: hidden;
}

.grade-fill {
  height: 100%;
  background: var(--primary);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.empty-state {
  text-align: center;
  padding: 48px;
  color: var(--text-secondary);
}

.empty-state svg {
  margin-bottom: 12px;
  opacity: 0.5;
}
</style>
