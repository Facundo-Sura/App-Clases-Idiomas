<template>
  <div class="attendance-view">
    <header class="page-header">
      <h1>Mi Asistencia</h1>
      <p class="subtitle">Registro de tu asistencia a clases</p>
    </header>

    <div class="stats-row">
      <div class="stat-card present">
        <CheckCircle :size="24" />
        <div>
          <span class="stat-value">{{ attendance.present }}</span>
          <span class="stat-label">Presencias</span>
        </div>
      </div>
      <div class="stat-card absent">
        <XCircle :size="24" />
        <div>
          <span class="stat-value">{{ attendance.absent }}</span>
          <span class="stat-label">Inasistencias</span>
        </div>
      </div>
      <div class="stat-card percent">
        <span class="stat-value">{{ attendancePercent }}%</span>
        <span class="stat-label">Asistencia</span>
      </div>
    </div>

    <div class="calendar-section">
      <h2>Enero 2025</h2>
      <div class="calendar">
        <div class="calendar-header">
          <span>Lun</span>
          <span>Mar</span>
          <span>Mié</span>
          <span>Jue</span>
          <span>Vie</span>
          <span>Sáb</span>
          <span>Dom</span>
        </div>
        <div class="calendar-grid">
          <div v-for="day in 31" :key="day" class="calendar-day">
            <span class="day-number">{{ day }}</span>
            <div 
              v-if="getAttendanceStatus(day)" 
              class="day-status"
              :class="getAttendanceStatus(day)"
            >
              {{ getAttendanceStatus(day) === 'present' ? 'P' : 'F' }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="legend">
      <div class="legend-item">
        <span class="dot present"></span>
        <span>Presente</span>
      </div>
      <div class="legend-item">
        <span class="dot absent"></span>
        <span>Inasistente</span>
      </div>
      <div class="legend-item">
        <span class="dot empty"></span>
        <span>Sin clase</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { useDataStore } from '../../stores/data'
import { CheckCircle, XCircle } from 'lucide-vue-next'

const auth = useAuthStore()
const data = useDataStore()

const studentData = computed(() => {
  return data.students.find(s => s.id === auth.user?.id)
})

const attendance = computed(() => {
  return studentData.value?.attendance || { present: 0, absent: 0 }
})

const attendancePercent = computed(() => {
  const { present, absent } = attendance.value
  return Math.round((present / (present + absent)) * 100) || 0
})

const mockAttendance = {
  10: 'present', 13: 'present', 15: 'present', 17: 'present',
  20: 'absent', 22: 'present', 24: 'present', 27: 'present'
}

function getAttendanceStatus(day) {
  return mockAttendance[day] || null
}
</script>

<style scoped>
.attendance-view {
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

.stats-row {
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

.stat-card.present svg { color: #059669; }
.stat-card.absent svg { color: #DC2626; }
.stat-card.percent { flex-direction: column; text-align: center; }

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
}

.stat-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.stat-card.percent .stat-label {
  margin-top: 4px;
}

.calendar-section {
  background: var(--surface);
  padding: 20px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  margin-bottom: 16px;
}

.calendar-section h2 {
  font-size: 1rem;
  margin-bottom: 16px;
}

.calendar-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
}

.calendar-header span {
  font-size: 0.75rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.calendar-day {
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: var(--background);
}

.day-number {
  font-size: 0.85rem;
  font-weight: 500;
}

.day-status {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 700;
  color: white;
}

.day-status.present { background: #059669; }
.day-status.absent { background: #DC2626; }

.legend {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.present { background: #059669; }
.dot.absent { background: #DC2626; }
.dot.empty { background: var(--background); border: 1px solid var(--border); }

@media (max-width: 480px) {
  .stats-row {
    grid-template-columns: 1fr;
  }
}
</style>
