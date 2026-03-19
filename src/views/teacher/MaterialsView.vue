<template>
  <div class="materials-view">
    <header class="page-header">
      <div>
        <h1>Material de Clases</h1>
        <p class="subtitle">Gestiona el contenido para tus alumnos</p>
      </div>
      <button class="btn-primary" @click="showAddModal = true">
        <Plus :size="18" /> Nuevo Material
      </button>
    </header>

    <div class="filters">
      <select v-model="filterLevel" class="filter-select">
        <option value="all">Todos los niveles</option>
        <option value="A1">A1</option>
        <option value="A2">A2</option>
        <option value="B1">B1</option>
        <option value="B2">B2</option>
      </select>
      <select v-model="filterStatus" class="filter-select">
        <option value="all">Todos</option>
        <option value="unlocked">Desbloqueados</option>
        <option value="locked">Bloqueados</option>
      </select>
    </div>

    <div class="materials-grid">
      <div 
        v-for="material in filteredMaterials" 
        :key="material.id" 
        class="material-card"
        :class="{ locked: material.locked }"
      >
        <div class="material-icon">
          <FileText v-if="material.type === 'pdf'" :size="28" />
          <Image v-else-if="material.type === 'image'" :size="28" />
          <Link v-else :size="28" />
        </div>
        <div class="material-content">
          <span class="material-unit">Unidad {{ material.unit }}</span>
          <h3>{{ material.title }}</h3>
          <span class="material-level" :class="`level-${material.level.charAt(0).toLowerCase()}`">
            {{ material.level }}
          </span>
        </div>
        <div class="material-actions">
          <button 
            class="toggle-btn"
            :class="{ locked: material.locked }"
            @click="toggleLock(material.id)"
          >
            <Lock v-if="material.locked" :size="18" />
            <Unlock v-else :size="18" />
            {{ material.locked ? 'Bloqueado' : 'Desbloqueado' }}
          </button>
        </div>
      </div>
    </div>

    <div v-if="filteredMaterials.length === 0" class="empty-state">
      <BookOpen :size="48" />
      <p>No hay materiales con los filtros seleccionados</p>
    </div>

    <!-- Add Material Modal -->
    <div v-if="showAddModal" class="modal-overlay" @click.self="showAddModal = false">
      <div class="modal">
        <h2>Agregar Material</h2>
        <form @submit.prevent="handleAddMaterial">
          <div class="form-group">
            <label>Título</label>
            <input v-model="newMaterial.title" type="text" required placeholder="Ej: Unidad 1: Saludos" />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Nivel</label>
              <select v-model="newMaterial.level" required>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
              </select>
            </div>
            <div class="form-group">
              <label>Unidad</label>
              <input v-model.number="newMaterial.unit" type="number" min="1" required />
            </div>
          </div>
          <div class="form-group">
            <label>Tipo de contenido</label>
            <select v-model="newMaterial.type" required>
              <option value="pdf">PDF</option>
              <option value="image">Imagen</option>
              <option value="link">Enlace</option>
            </select>
          </div>
          <div class="form-group">
            <label>Descripción</label>
            <textarea v-model="newMaterial.content" placeholder="Descripción del material..." rows="3"></textarea>
          </div>
          <div class="modal-actions">
            <button type="button" class="btn-secondary" @click="showAddModal = false">Cancelar</button>
            <button type="submit" class="btn-primary">Agregar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDataStore } from '../../stores/data'
import { Plus, FileText, Image, Link, BookOpen, Lock, Unlock } from 'lucide-vue-next'

const data = useDataStore()

const showAddModal = ref(false)
const filterLevel = ref('all')
const filterStatus = ref('all')

const newMaterial = ref({
  title: '',
  level: 'A1',
  unit: 1,
  type: 'pdf',
  content: ''
})

const filteredMaterials = computed(() => {
  return data.materials.filter(m => {
    const levelMatch = filterLevel.value === 'all' || m.level === filterLevel.value
    const statusMatch = filterStatus.value === 'all' || 
      (filterStatus.value === 'locked' && m.locked) ||
      (filterStatus.value === 'unlocked' && !m.locked)
    return levelMatch && statusMatch
  })
})

function toggleLock(id) {
  data.toggleMaterialLock(id)
}

function handleAddMaterial() {
  data.addMaterial({ ...newMaterial.value })
  showAddModal.value = false
  newMaterial.value = { title: '', level: 'A1', unit: 1, type: 'pdf', content: '' }
}
</script>

<style scoped>
.materials-view {
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
  transition: background 0.2s;
}

.btn-primary:hover {
  background: var(--primary-dark);
}

.filters {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.filter-select {
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--surface);
  font-size: 0.9rem;
  min-width: 150px;
}

.materials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.material-card {
  background: var(--surface);
  border-radius: var(--radius-md);
  padding: 20px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.2s;
}

.material-card:hover {
  box-shadow: var(--shadow-md);
}

.material-card.locked {
  opacity: 0.7;
}

.material-icon {
  width: 48px;
  height: 48px;
  background: var(--primary-light);
  color: var(--primary);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.material-content h3 {
  font-size: 1rem;
  margin: 4px 0;
}

.material-unit {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.material-level {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
}

.level-a { background: #FEE2E2; color: #DC2626; }
.level-b { background: #FEF3C7; color: #D97706; }
.level-c { background: #D1FAE5; color: #059669; }

.material-actions {
  margin-top: auto;
}

.toggle-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 500;
  background: #D1FAE5;
  color: #059669;
  transition: all 0.2s;
}

.toggle-btn:hover {
  filter: brightness(0.95);
}

.toggle-btn.locked {
  background: #FEE2E2;
  color: #DC2626;
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
  animation: fadeIn 0.2s ease;
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
.form-group select,
.form-group textarea {
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
</style>
