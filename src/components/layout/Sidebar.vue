<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <div class="logo">
        <div class="logo-icon">L</div>
        <span>LinguaClass</span>
      </div>
    </div>

    <nav class="sidebar-nav">
      <router-link to="/docente/alumnos" class="nav-item">
        <Users size={20} />
        <span>Alumnos</span>
      </router-link>
      <router-link to="/docente/materiales" class="nav-item">
        <BookOpen size={20} />
        <span>Materiales</span>
      </router-link>
      <router-link to="/docente/examenes" class="nav-item">
        <FileText size={20} />
        <span>Exámenes</span>
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <div class="user-info">
        <img :src="auth.user?.avatar" :alt="auth.user?.name" class="user-avatar" />
        <div class="user-details">
          <span class="user-name">{{ auth.user?.name }}</span>
          <span class="user-role">Docente</span>
        </div>
      </div>
      <button class="logout-btn" @click="handleLogout">
        <LogOut :size="18" />
      </button>
    </div>
  </aside>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
import { Users, BookOpen, FileText, LogOut } from 'lucide-vue-next'

const router = useRouter()
const auth = useAuthStore()

function handleLogout() {
  auth.logout()
  router.push('/login')
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 240px;
  background: var(--surface);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  z-index: 100;
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid var(--border);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 36px;
  height: 36px;
  background: var(--primary);
  color: white;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
}

.logo span {
  font-weight: 600;
  font-size: 1.1rem;
}

.sidebar-nav {
  flex: 1;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  transition: all 0.2s;
}

.nav-item:hover {
  background: var(--background);
  color: var(--text-primary);
}

.nav-item.router-link-active {
  background: var(--primary);
  color: white;
}

.nav-item span {
  font-weight: 500;
}

.sidebar-footer {
  padding: 16px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 500;
  font-size: 0.9rem;
}

.user-role {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.logout-btn {
  padding: 8px;
  background: var(--background);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  transition: all 0.2s;
}

.logout-btn:hover {
  background: var(--danger);
  color: white;
}

@media (max-width: 768px) {
  .sidebar {
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    flex-direction: row;
    border-right: none;
    border-top: 1px solid var(--border);
  }

  .sidebar-header,
  .sidebar-footer {
    display: none;
  }

  .sidebar-nav {
    flex-direction: row;
    justify-content: space-around;
    padding: 8px;
    width: 100%;
  }

  .nav-item {
    flex-direction: column;
    gap: 4px;
    padding: 8px 12px;
    font-size: 0.75rem;
  }

  .nav-item span {
    font-size: 0.7rem;
  }
}
</style>
