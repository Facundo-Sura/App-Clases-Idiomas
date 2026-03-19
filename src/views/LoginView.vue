<template>
  <div class="login-page">
    <div class="login-card">
      <div class="logo">
        <div class="logo-icon">L</div>
        <h1>LinguaClass</h1>
      </div>
      <p class="subtitle">Plataforma Educativa de Idiomas</p>

      <div class="role-selector">
        <button 
          :class="['role-btn', { active: selectedRole === 'teacher' }]"
          @click="selectedRole = 'teacher'"
        >
          Docente
        </button>
        <button 
          :class="['role-btn', { active: selectedRole === 'student' }]"
          @click="selectedRole = 'student'"
        >
          Alumno
        </button>
      </div>

      <div class="users-list">
        <p class="select-label">Selecciona un usuario:</p>
        <div class="users">
          <button
            v-for="user in availableUsers"
            :key="user.id"
            :class="['user-btn', { selected: selectedUser?.id === user.id }]"
            @click="selectedUser = user"
          >
            <img :src="user.avatar" :alt="user.name" class="user-avatar" />
            <span>{{ user.name }}</span>
          </button>
        </div>
      </div>

      <button 
        class="login-btn"
        :disabled="!selectedUser"
        @click="handleLogin"
      >
        Iniciar Sesión
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const auth = useAuthStore()

const selectedRole = ref('teacher')
const selectedUser = ref(null)

const availableUsers = computed(() => {
  return selectedRole.value === 'teacher' ? auth.teachers : auth.students
})

function handleLogin() {
  if (selectedUser.value) {
    auth.login(selectedUser.value)
    router.push(selectedUser.value.role === 'teacher' ? '/docente/alumnos' : '/alumno/inicio')
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  padding: 20px;
}

.login-card {
  background: var(--surface);
  padding: 40px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  width: 100%;
  max-width: 400px;
  animation: fadeIn 0.4s ease;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 8px;
}

.logo-icon {
  width: 48px;
  height: 48px;
  background: var(--primary);
  color: white;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
}

.logo h1 {
  font-size: 1.75rem;
  color: var(--text-primary);
}

.subtitle {
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.role-selector {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

.role-btn {
  flex: 1;
  padding: 12px;
  border-radius: var(--radius-sm);
  background: var(--background);
  color: var(--text-secondary);
  font-weight: 500;
  transition: all 0.2s;
}

.role-btn.active {
  background: var(--primary);
  color: white;
}

.select-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.users {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
}

.user-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: var(--background);
  border-radius: var(--radius-sm);
  transition: all 0.2s;
  text-align: left;
}

.user-btn:hover {
  background: var(--primary-light);
}

.user-btn.selected {
  background: var(--primary);
  color: white;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.login-btn {
  width: 100%;
  padding: 14px;
  background: var(--primary);
  color: white;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s;
}

.login-btn:hover:not(:disabled) {
  background: var(--primary-dark);
}

.login-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
