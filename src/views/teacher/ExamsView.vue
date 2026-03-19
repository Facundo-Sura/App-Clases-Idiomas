<template>
  <div class="exams-view">
    <header class="page-header">
      <div>
        <h1>Exámenes</h1>
        <p class="subtitle">Programa y publica fechas de exámenes</p>
      </div>
      <button class="btn-primary" @click="showAddModal = true">
        <Plus :size="18" /> Nuevo Examen
      </button>
    </header>

    <div class="upcoming-exam" v-if="nextExam">
      <div class="exam-highlight">
        <Calendar :size="32" />
        <div>
          <span class="highlight-label">Próximo examen</span>
          <h2>{{ nextExam.title }}</h2>
          <p>{{ formatDate(nextExam.date) }} - Nivel {{ nextExam.level }}</p>
        </div>
      </div>
    </div>

    <div class="exams-list">
      <h2>Todos los exámenes</h2>
      <div class="exam-cards">
        <div 
          v-for="exam in exams" 
          :key="exam.id" 
          class="exam-card"
          :class="{ upcoming: isUpcoming(exam.date), published: exam.published }"
        >
          <div class="exam-date">
            <span class="day">{{ getDay(exam.date) }}</span>
            <span class="month">{{ getMonth(exam.date) }}</span>
          </div>
          <div class="exam-info">
            <h3>{{ exam.title }}</h3>
            <p>Nivel {{ exam.level }}</p>
          </div>
          <div class="exam-status">
            <span class="status-badge" :class="exam.published ? 'published' : 'draft'">
              {{ exam.published ? 'Publicado' : 'Borrador' }}
            </span>
          </div>
          <div class="exam-actions">
            <button 
              class="action-btn"
              :class="{ active: exam.published }"
              @click="togglePublish(exam.id)"
            >
              <Eye v-if="exam.published" :size="18" />
              <EyeOff v-else :size="18" />
              {{ exam.published ? 'Ocultar' : 'Publicar' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Exam Modal -->
    <div v-if="showAddModal" class="modal-overlay" @click.self="showAddModal = false">
      <div class="modal">
        <h2>Crear Examen</h2>
        <form @submit.prevent="handleAddExam">
          <div class="form-group">
            <label>Título del examen</label>
            <input v-model="newExam.title" type="text" required placeholder="Ej: Examen Parcial 1" />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Fecha</label>
              <input v-model="newExam.date" type="date" required />
            </div>
            <div class="form-group">
              <label>Nivel</label>
              <select v-model="newExam.level" required>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
              </select>
            </div>
          </div>
          <div class="modal-actions">
            <button type="button" class="btn-secondary" @click="showAddModal = false">Cancelar</button>
            <button type="submit" class="btn-primary">Crear</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDataStore } from '../../stores/data'
import { Plus, Calendar, Eye, EyeOff } from 'lucide-vue-next'

const data = useDataStore()

const showAddModal = ref(false)
const newExam = ref({ title: '', date: '', level: 'A1' })

const exams = computed(() => data.exams)
const nextExam = computed(() => data.nextExam)

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })
}

function getDay(dateStr) {
  return new Date(dateStr + 'T00:00:00').getDate()
}

function getMonth(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('es-ES', { month: 'short' })
}

function isUpcoming(dateStr) {
  const today = new Date().toISOString().split('T')[0]
  return dateStr >= today
}

function togglePublish(id) {
  data.toggleExamPublish(id)
}

function handleAddExam() {
  data.addExam({ ...newExam.value, published: false })
  showAddModal.value = false
  newExam.value = { title: '', date: '', level: 'A1' }
}
</script>

<style scoped>
.exams-view {
  animation: fadeIn 0.3s ease;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.page-header h1 {
  font-size: 1.5rem;
  margin-bottom: 4px;
}

.subtitle {
  color: var(--text-secondary);
}

.btn-primary {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: var(--primary);
  color: white;
  border-radius: var(--radius-sm);
  font-weight: 500;
}

.upcoming-exam {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  border-radius: var(--radius-md);
  padding: 24px;
  margin-bottom: 24px;
}

.exam-highlight {
  display: flex;
  align-items: center;
  gap: 20px;
  color: white;
}

.exam-highlight svg {
  opacity: 0.8;
}

.highlight-label {
  font-size: 0.85rem;
  opacity: 0.8;
}

.exam-highlight h2 {
  font-size: 1.25rem;
  margin: 4px 0;
}

.exam-highlight p {
  opacity: 0.9;
}

.exams-list h2 {
  font-size: 1.1rem;
  margin-bottom: 16px;
}

.exam-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.exam-card {
  background: var(--surface);
  border-radius: var(--radius-md);
  padding: 20px;
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: 16px;
}

.exam-card.upcoming {
  border-left: 4px solid var(--primary);
}

.exam-date {
  width: 56px;
  height: 56px;
  background: var(--background);
  border-radius: var(--radius-sm);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.exam-date .day {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1;
}

.exam-date .month {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
}

.exam-info {
  flex: 1;
}

.exam-info h3 {
  font-size: 1rem;
  margin-bottom: 4px;
}

.exam-info p {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.status-badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.status-badge.published {
  background: #D1FAE5;
  color: #059669;
}

.status-badge.draft {
  background: #F1F5F9;
  color: var(--text-secondary);
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: var(--background);
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  color: var(--text-secondary);
  transition: all 0.2s;
}

.action-btn:hover {
  background: var(--primary-light);
  color: var(--primary);
}

.action-btn.active {
  background: var(--primary);
  color: white;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal {
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: 24px;
  width: 100%;
  max-width: 480px;
}

.modal h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-weight: 500;
  margin-bottom: 6px;
  font-size: 0.9rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
}

.btn-secondary {
  padding: 10px 16px;
  background: var(--background);
  color: var(--text-primary);
  border-radius: var(--radius-sm);
  font-weight: 500;
}

@media (max-width: 640px) {
  .exam-card {
    flex-wrap: wrap;
  }

  .exam-actions {
    width: 100%;
    margin-top: 8px;
  }

  .action-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
