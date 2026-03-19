<template>
  <div class="materials-view">
    <header class="page-header">
      <h1>Material de Clases</h1>
      <p class="subtitle">Contenido disponible para tu nivel</p>
    </header>

    <div class="progress-card">
      <div class="progress-header">
        <span>Tu progreso en {{ studentData?.level || 'A1' }}</span>
        <span class="progress-percent">{{ progressPercent }}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
      </div>
      <p class="progress-text">{{ unlockedCount }} de {{ totalCount }} unidades desbloqueadas</p>
    </div>

    <div class="materials-list">
      <div 
        v-for="material in materials" 
        :key="material.id" 
        class="material-item"
        :class="{ locked: material.locked }"
      >
        <div class="material-number">{{ material.unit }}</div>
        <div class="material-content">
          <h3>{{ material.title }}</h3>
          <p>{{ material.content }}</p>
        </div>
        <div class="material-status">
          <div v-if="material.locked" class="locked-status">
            <Lock :size="20" />
            <span>Bloqueado</span>
          </div>
          <div v-else class="unlocked-status">
            <CheckCircle :size="20" />
            <span>Disponible</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="materials.length === 0" class="empty-state">
      <BookOpen :size="48" />
      <p>No hay materiales disponibles para tu nivel</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { useDataStore } from '../../stores/data'
import { Lock, CheckCircle, BookOpen } from 'lucide-vue-next'

const auth = useAuthStore()
const data = useDataStore()

const studentData = computed(() => {
  return data.students.find(s => s.id === auth.user?.id)
})

const materials = computed(() => {
  return data.studentMaterials.sort((a, b) => a.unit - b.unit)
})

const totalCount = computed(() => materials.value.length)
const unlockedCount = computed(() => materials.value.filter(m => !m.locked).length)
const progressPercent = computed(() => {
  if (totalCount.value === 0) return 0
  return Math.round((unlockedCount.value / totalCount.value) * 100)
})
</script>

<style scoped>
.materials-view {
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

.progress-card {
  background: var(--surface);
  padding: 20px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  margin-bottom: 24px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-weight: 500;
}

.progress-percent {
  color: var(--primary);
}

.progress-bar {
  height: 8px;
  background: var(--background);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-fill {
  height: 100%;
  background: var(--primary);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.materials-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.material-item {
  background: var(--surface);
  padding: 20px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.2s;
}

.material-item:hover:not(.locked) {
  box-shadow: var(--shadow-md);
}

.material-item.locked {
  opacity: 0.6;
}

.material-number {
  width: 48px;
  height: 48px;
  background: var(--primary);
  color: white;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  flex-shrink: 0;
}

.material-item.locked .material-number {
  background: var(--text-secondary);
}

.material-content {
  flex: 1;
}

.material-content h3 {
  font-size: 1rem;
  margin-bottom: 4px;
}

.material-content p {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.locked-status,
.unlocked-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
}

.locked-status {
  background: #FEE2E2;
  color: #DC2626;
}

.unlocked-status {
  background: #D1FAE5;
  color: #059669;
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

@media (max-width: 480px) {
  .material-item {
    flex-wrap: wrap;
  }

  .material-status {
    width: 100%;
    margin-top: 8px;
  }

  .locked-status,
  .unlocked-status {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
