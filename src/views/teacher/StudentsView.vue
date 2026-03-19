<template>
  <div class="students-view">
    <header class="page-header">
      <div>
        <h1>Mis Alumnos</h1>
        <p class="subtitle">{{ students.length }} estudiantes activos</p>
      </div>
    </header>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon blue">
          <Users :size="24" />
        </div>
        <div class="stat-content">
          <span class="stat-value">{{ students.length }}</span>
          <span class="stat-label">Alumnos</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon green">
          <CheckCircle :size="24" />
        </div>
        <div class="stat-content">
          <span class="stat-value">{{ paidCount }}</span>
          <span class="stat-label">Cuota al día</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon yellow">
          <AlertCircle :size="24" />
        </div>
        <div class="stat-content">
          <span class="stat-value">{{ pendingCount }}</span>
          <span class="stat-label">Con deuda</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon purple">
          <TrendingUp :size="24" />
        </div>
        <div class="stat-content">
          <span class="stat-value">{{ averageAttendance }}%</span>
          <span class="stat-label">Asistencia prom.</span>
        </div>
      </div>
    </div>

    <div class="students-table-container">
      <table class="students-table">
        <thead>
          <tr>
            <th>Alumno</th>
            <th>Nivel</th>
            <th>Año</th>
            <th>Asistencia</th>
            <th>Promedio</th>
            <th>Cuota</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <td class="student-cell">
              <img :src="getStudentAvatar(student.id)" class="student-avatar" :alt="student.name" />
              <span>{{ student.name }}</span>
            </td>
            <td>
              <span class="level-badge" :class="`level-${student.level.charAt(0).toLowerCase()}`">
                {{ student.level }}
              </span>
            </td>
            <td>{{ student.year }}</td>
            <td>
              <div class="attendance-cell">
                <span class="present">{{ student.attendance.present }}</span>
                <span class="divider">/</span>
                <span class="absent">{{ student.attendance.absent }}</span>
              </div>
            </td>
            <td>
              <span class="grade" :class="{ 'grade-low': student.averageGrade < 7 }">
                {{ student.averageGrade.toFixed(1) }}
              </span>
            </td>
            <td>
              <span class="quota-badge" :class="student.quota">
                {{ student.quota === 'paid' ? 'Al día' : 'Debe' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { useDataStore } from '../../stores/data'
import { Users, CheckCircle, AlertCircle, TrendingUp } from 'lucide-vue-next'

const auth = useAuthStore()
const data = useDataStore()

const students = computed(() => data.teacherStudents)

const paidCount = computed(() => students.value.filter(s => s.quota === 'paid').length)
const pendingCount = computed(() => students.value.filter(s => s.quota === 'pending').length)

const averageAttendance = computed(() => {
  if (students.value.length === 0) return 0
  const total = students.value.reduce((acc, s) => {
    const totalClasses = s.attendance.present + s.attendance.absent
    return acc + (s.attendance.present / totalClasses * 100)
  }, 0)
  return Math.round(total / students.value.length)
})

const avatars = {
  1: 'https://i.pravatar.cc/150?img=3',
  2: 'https://i.pravatar.cc/150?img=4',
  3: 'https://i.pravatar.cc/150?img=5',
  4: 'https://i.pravatar.cc/150?img=6',
  5: 'https://i.pravatar.cc/150?img=7'
}

function getStudentAvatar(id) {
  return avatars[id] || 'https://i.pravatar.cc/150?img=1'
}
</script>

<style scoped>
.students-view {
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.stat-card {
  background: var(--surface);
  padding: 20px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: 16px;
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon.blue { background: #EEF2FF; color: var(--primary); }
.stat-icon.green { background: #ECFDF5; color: var(--accent); }
.stat-icon.yellow { background: #FFFBEB; color: var(--warning); }
.stat-icon.purple { background: #F5F3FF; color: #8B5CF6; }

.stat-content {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.students-table-container {
  background: var(--surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.students-table {
  width: 100%;
  border-collapse: collapse;
}

.students-table th {
  text-align: left;
  padding: 16px;
  background: var(--background);
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
}

.students-table td {
  padding: 16px;
  border-bottom: 1px solid var(--border);
  font-size: 0.95rem;
}

.students-table tr:last-child td {
  border-bottom: none;
}

.student-cell {
  display: flex;
  align-items: center;
  gap: 12px;
}

.student-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.level-badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.level-a { background: #FEE2E2; color: #DC2626; }
.level-b { background: #FEF3C7; color: #D97706; }
.level-c { background: #D1FAE5; color: #059669; }

.attendance-cell {
  display: flex;
  align-items: center;
  gap: 4px;
}

.present { color: var(--accent); font-weight: 600; }
.divider { color: var(--text-secondary); }
.absent { color: var(--danger); }

.grade {
  font-weight: 600;
  color: var(--text-primary);
}

.grade.grade-low {
  color: var(--danger);
}

.quota-badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.quota-badge.paid {
  background: #D1FAE5;
  color: #059669;
}

.quota-badge.pending {
  background: #FEF3C7;
  color: #D97706;
}

@media (max-width: 768px) {
  .students-table-container {
    overflow-x: auto;
  }

  .students-table {
    min-width: 600px;
  }
}
</style>
