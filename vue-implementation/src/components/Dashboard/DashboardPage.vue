<template>
  <div class="dashboard-page">
    <div class="container">
      <div class="dashboard-header">
        <h1 class="dashboard-title">Dashboard</h1>
        <button class="btn btn-primary" @click="$emit('navigate', 'tickets')">
          Manage Tickets
        </button>
      </div>

      <div class="stats-grid">
        <div class="stat-card total">
          <div class="stat-label">Total Tickets</div>
          <div class="stat-value">{{ stats.total }}</div>
        </div>
        <div class="stat-card open">
          <div class="stat-label">Open Tickets</div>
          <div class="stat-value">{{ stats.open }}</div>
        </div>
        <div class="stat-card in-progress">
          <div class="stat-label">In Progress</div>
          <div class="stat-value">{{ stats.inProgress }}</div>
        </div>
        <div class="stat-card closed">
          <div class="stat-label">Closed Tickets</div>
          <div class="stat-value">{{ stats.closed }}</div>
        </div>
      </div>

      <div class="dashboard-content">
        <h2 class="section-subtitle">Quick Overview</h2>
        <p style="color: #6b7280; margin-top: 1rem;">
          Welcome to your dashboard! You have {{ stats.total }} total tickets. 
          Click "Manage Tickets" to view, create, edit, or delete tickets.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { getTickets } from '../../utils/storage';

defineEmits(['navigate']);

const tickets = ref([]);

const stats = computed(() => ({
  total: tickets.value.length,
  open: tickets.value.filter(t => t.status === 'open').length,
  inProgress: tickets.value.filter(t => t.status === 'in_progress').length,
  closed: tickets.value.filter(t => t.status === 'closed').length
}));

onMounted(() => {
  tickets.value = getTickets();
});
</script>

<style scoped>
.dashboard-page {
  flex: 1;
  padding: 2rem 20px;
  background: #f5f7fa;
}

.dashboard-header {
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.dashboard-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  border-left: 4px solid;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.12);
}

.stat-card.total {
  border-color: #2563eb;
}

.stat-card.open {
  border-color: #10b981;
}

.stat-card.in-progress {
  border-color: #f59e0b;
}

.stat-card.closed {
  border-color: #6b7280;
}

.stat-label {
  color: #6b7280;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
}

.dashboard-content {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>