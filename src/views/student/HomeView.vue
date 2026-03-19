<template>
  <div class="home-view">
    <header class="welcome-header">
      <div>
        <h1>¡Hola, {{ auth.user?.name }}!</h1>
        <p class="welcome-sub">Bienvenido a tu aula virtual</p>
      </div>
      <div class="level-badge">
        <span class="level-label">Nivel actual</span>
        <span class="level-value">{{ studentData?.level || 'A1' }}</span>
      </div>
    </header>

    <div class="quick-stats">
      <div class="stat-card">
        <div class="stat-icon green">
          <CheckCircle :size="24" />
        </div>
        <div class="stat-info">
          <span class="stat-value">{{ attendancePercent }}%</span>
          <span class="stat-label">Asistencia</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon blue">
          <GraduationCap :size="20" />
        </div>
        <div class="stat-info">
          <span class="stat-value">{{ averageGrade || 'N/A' }}</span>
          <span class="stat-label">Promedio</span>
        </div>
      </div>
      <div class="stat-card" :class="{ warning: studentData?.quota === 'pending' }">
        <div class="stat-icon" :class="studentData?.quota === 'paid' ? 'green' : 'yellow'">
          <CreditCard :size="20" />
        </div>
        <div class="stat-info">
          <span class="stat-value">{{ studentData?.quota === 'paid' ? 'Al día' : 'Debe' }}</span>
          <span class="stat-label">Cuota</span>
        </div>
      </div>
    </div>

    <div class="next-exam-card" v-if="nextExam">
      <div class="exam-icon">
        <Calendar :size="24" />
      </div>
      <div class="exam-details">
        <span class="exam-label">Próximo examen</span>
        <h2>{{ nextExam.title }}</h2>
        <p>{{ formatDate(nextExam.date) }}</p>
      </div>
      <div class="exam-countdown">
        <span class="days">{{ daysUntilExam }}</span>
        <span class="days-label">días</span>
      </div>
    </div>
    <div class="no-exam-card" v-else>
      <Calendar :size="24" />
      <p>No hay exámenes programados</p>
    </div>

    <div class="section">
      <h2>Accesos rápidos</h2>
      <div class="quick-links">
        <router-link to="/alumno/materiales" class="quick-link">
          <BookOpen :size="24" />
          <span>Materiales</span>
        </router-link>
        <router-link to="/alumno/notas" class="quick-link">
          <FileText :size="24" />
          <span>Mis Notas</span>
        </router-link>
        <router-link to="/alumno/asistencia" class="quick-link">
          <CalendarCheck :size="24" />
          <span>Asistencia</span>
        </router-link>
        <router-link to="/alumno/cuenta" class="quick-link">
          <CreditCard :size="24" />
          <span>Mi Cuenta</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { useDataStore } from '../../stores/data'
import { CheckCircle, GraduationCap, CreditCard, Calendar, BookOpen, FileText, CalendarCheck } from 'lucide-vue-next'

const auth = useAuthStore()
const data = useDataStore()

const studentData = computed(() => {
  return data.students.find(s => s.id === auth.user?.id)
})

const nextExam = computed(() => data.nextExam)

const attendancePercent = computed(() => {
  if (!studentData.value) return 0
  const { present, absent } = studentData.value.attendance
  return Math.round((present / (present + absent)) * 100)
})

const averageGrade = computed(() => {
  const grades = data.studentGrades
  if (grades.length === 0) return 'N/A'
  const avg = grades.reduce((sum, g) => sum + g.grade, 0) / grades.length
  return avg.toFixed(1)
})

const daysUntilExam = computed(() => {
  if (!nextExam.value) return 0
  const today = new Date()
  const examDate = new Date(nextExam.value.date + 'T00:00:00')
  const diff = examDate - today
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
})

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })
}
</script>

<style scoped>
.home-view {
  animation: fadeIn 0.3s ease;
}

.welcome-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.welcome-header h1 {
  font-size: 1.5rem;
  margin-bottom: 4px;
}

.welcome-sub {
  color: var(--text-secondary);
}

.level-badge {
  text-align: center;
  padding: 12px 20px;
  background: var(--primary);
  color: white;
  border-radius: var(--radius-md);
}

.level-label {
  display: block;
  font-size: 0.75rem;
  opacity: 0.8;
  margin-bottom: 2px;
}

.level-value {
  font-size: 1.25rem;
  font-weight: 700;
}

.quick-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}

.stat-card {
  background: var(--surface);
  padding: 16px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: 12px;
}

.stat-card.warning {
  background: #FFFBEB;
}

.stat-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon.green { background: #D1FAE5; color: #059669; }
.stat-icon.blue { background: #EEF2FF; color: var(--primary); }
.stat-icon.yellow { background: #FEF3C7; color: #D97706; }

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-weight: 700;
  font-size: 1rem;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.next-exam-card {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  border-radius: var(--radius-md);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: white;
  margin-bottom: 24px;
}

.exam-icon {
  width: 48px;
  height: 48px;
  background: rgba(255,255,255,0.2);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.exam-details {
  flex: 1;
}

.exam-label {
  font-size: 0.8rem;
  opacity: 0.8;
}

.exam-details h2 {
  font-size: 1.1rem;
  margin: 4px 0;
}

.exam-details p {
  font-size: 0.85rem;
  opacity: 0.9;
}

.exam-countdown {
  text-align: center;
  background: rgba(255,255,255,0.2);
  padding: 12px 16px;
  border-radius: var(--radius-sm);
}

.days {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
}

.days-label {
  font-size: 0.75rem;
  opacity: 0.8;
}

.no-exam-card {
  background: var(--surface);
  padding: 24px;
  border-radius: var(--radius-md);
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.no-exam-card svg {
  margin-bottom: 8px;
  opacity: 0.5;
}

.section h2 {
  font-size: 1.1rem;
  margin-bottom: 16px;
}

.quick-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.quick-link {
  background: var(--surface);
  padding: 20px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--text-secondary);
  transition: all 0.2s;
}

.quick-link:hover {
  color: var(--primary);
  box-shadow: var(--shadow-md);
}

.quick-link span {
  font-weight: 500;
  font-size: 0.9rem;
}

@media (max-width: 480px) {
  .quick-stats {
    grid-template-columns: 1fr;
  }

  .quick-links {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
