<template>
  <div class="account-view">
    <header class="page-header">
      <h1>Mi Cuenta</h1>
      <p class="subtitle">Estado de tu suscripción</p>
    </header>

    <div class="status-card" :class="studentData?.quota">
      <div class="status-icon">
        <CheckCircle v-if="studentData?.quota === 'paid'" :size="48" />
        <AlertCircle v-else :size="48" />
      </div>
      <div class="status-content">
        <h2>{{ studentData?.quota === 'paid' ? '¡Estás al día!' : 'Tienes un pago pendiente' }}</h2>
        <p v-if="studentData?.quota === 'paid'">
          Tu suscripción está vigente hasta el 31 de diciembre de 2025
        </p>
        <p v-else>
          Por favor, regulariza tu cuota para mantener el acceso a los materiales
        </p>
      </div>
    </div>

    <div class="account-details">
      <h2>Detalles de la cuenta</h2>
      
      <div class="detail-card">
        <div class="detail-row">
          <span class="detail-label">Estado</span>
          <span class="detail-value" :class="studentData?.quota">
            {{ studentData?.quota === 'paid' ? 'Al día' : 'Pendiente' }}
          </span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Nivel actual</span>
          <span class="detail-value primary">{{ studentData?.level || 'A1' }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Año académico</span>
          <span class="detail-value">{{ studentData?.year || 2025 }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Próximo vencimiento</span>
          <span class="detail-value">31/12/2025</span>
        </div>
      </div>
    </div>

    <div class="payment-history">
      <h2>Historial de pagos</h2>
      <div class="history-list">
        <div class="history-item">
          <div class="history-icon success">
            <Check :size="16" />
          </div>
          <div class="history-content">
            <span class="history-title">Cuota Mensual - Enero 2025</span>
            <span class="history-date">15/01/2025</span>
          </div>
          <span class="history-amount">$50.00</span>
        </div>
        <div class="history-item">
          <div class="history-icon success">
            <Check :size="16" />
          </div>
          <div class="history-content">
            <span class="history-title">Cuota Mensual - Diciembre 2024</span>
            <span class="history-date">10/12/2024</span>
          </div>
          <span class="history-amount">$50.00</span>
        </div>
        <div class="history-item">
          <div class="history-icon success">
            <Check :size="16" />
          </div>
          <div class="history-content">
            <span class="history-title">Cuota Mensual - Noviembre 2024</span>
            <span class="history-date">12/11/2024</span>
          </div>
          <span class="history-amount">$50.00</span>
        </div>
      </div>
    </div>

    <button v-if="studentData?.quota === 'pending'" class="pay-btn">
      <CreditCard :size="20" />
      Pagar ahora
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { useDataStore } from '../../stores/data'
import { CheckCircle, AlertCircle, Check, CreditCard } from 'lucide-vue-next'

const auth = useAuthStore()
const data = useDataStore()

const studentData = computed(() => {
  return data.students.find(s => s.id === auth.user?.id)
})
</script>

<style scoped>
.account-view {
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

.status-card {
  background: var(--surface);
  padding: 24px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.status-card.paid .status-icon {
  color: #059669;
}

.status-card.pending {
  background: #FFFBEB;
}

.status-card.pending .status-icon {
  color: #D97706;
}

.status-content h2 {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.status-content p {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.account-details {
  margin-bottom: 24px;
}

.account-details h2,
.payment-history h2 {
  font-size: 1.1rem;
  margin-bottom: 16px;
}

.detail-card {
  background: var(--surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--border);
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-label {
  color: var(--text-secondary);
}

.detail-value {
  font-weight: 500;
}

.detail-value.paid,
.detail-value.primary {
  color: var(--primary);
}

.detail-value.pending {
  color: #D97706;
}

.payment-history {
  margin-bottom: 24px;
}

.history-list {
  background: var(--surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.history-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid var(--border);
}

.history-item:last-child {
  border-bottom: none;
}

.history-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.history-icon.success {
  background: #D1FAE5;
  color: #059669;
}

.history-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.history-title {
  font-weight: 500;
  font-size: 0.9rem;
}

.history-date {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.history-amount {
  font-weight: 600;
  color: var(--text-secondary);
}

.pay-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px;
  background: var(--primary);
  color: white;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.2s;
}

.pay-btn:hover {
  background: var(--primary-dark);
}
</style>
