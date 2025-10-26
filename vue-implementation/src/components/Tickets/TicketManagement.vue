<template>
  <div class="dashboard-page">
    <div class="container">
      <div class="dashboard-header">
        <h1 class="dashboard-title">Ticket Management</h1>
        <button class="btn btn-primary" @click="openCreateModal">
          <Plus :size="18" />
          New Ticket
        </button>
      </div>

      <div class="tickets-section">
        <div class="tickets-header">
          <h2 class="section-subtitle">All Tickets ({{ tickets.length }})</h2>
        </div>

        <div v-if="tickets.length === 0" class="empty-state">
          <div class="empty-state-icon">📋</div>
          <h3>No tickets yet</h3>
          <p>Create your first ticket to get started</p>
        </div>

        <div v-else class="tickets-grid">
          <div v-for="ticket in tickets" :key="ticket.id" class="ticket-card">
            <div class="ticket-header">
              <div>
                <h3 class="ticket-title">{{ ticket.title }}</h3>
                <span :class="['ticket-status', `status-${ticket.status}`]">
                  {{ ticket.status.replace('_', ' ') }}
                </span>
              </div>
            </div>
            <p v-if="ticket.description" class="ticket-description">
              {{ ticket.description }}
            </p>
            <div class="ticket-actions">
              <button class="btn btn-secondary btn-small" @click="openEditModal(ticket)">
                <Edit2 :size="16" />
                Edit
              </button>
              <button class="btn btn-danger btn-small" @click="openDeleteConfirm(ticket.id)">
                <Trash2 :size="16" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ticket Modal -->
    <TicketModal
      v-if="showModal"
      :ticket="editingTicket"
      @close="closeModal"
      @save="handleSaveTicket"
    />

    <!-- Delete Confirmation Modal -->
    <Teleport to="body">
      <div v-if="deleteConfirm" class="modal-overlay" @click="deleteConfirm = null">
        <div class="modal" @click.stop style="max-width: 400px;">
          <div class="modal-header">
            <h2 class="modal-title">Confirm Delete</h2>
            <button class="btn-icon" @click="deleteConfirm = null">
              <X :size="24" />
            </button>
          </div>
          <div class="delete-modal-content">
            <p>Are you sure you want to delete this ticket? This action cannot be undone.</p>
          </div>
          <div class="modal-actions">
            <button class="btn btn-secondary" @click="deleteConfirm = null">
              Cancel
            </button>
            <button class="btn btn-danger" @click="handleDeleteTicket">
              Delete
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Plus, Edit2, Trash2, X } from 'lucide-vue-next';
import { getTickets, saveTickets } from '../../utils/storage';
import { useToast } from '../../composables/useToast';
import TicketModal from './TicketModal.vue';

const { showToast } = useToast();

const tickets = ref([]);
const showModal = ref(false);
const editingTicket = ref(null);
const deleteConfirm = ref(null);

const loadTickets = () => {
  tickets.value = getTickets();
};

const openCreateModal = () => {
  editingTicket.value = null;
  showModal.value = true;
};

const openEditModal = (ticket) => {
  editingTicket.value = ticket;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  editingTicket.value = null;
};

const handleSaveTicket = (ticket) => {
  let updatedTickets;
  if (tickets.value.find(t => t.id === ticket.id)) {
    updatedTickets = tickets.value.map(t => t.id === ticket.id ? ticket : t);
  } else {
    updatedTickets = [...tickets.value, ticket];
  }
  tickets.value = updatedTickets;
  saveTickets(updatedTickets);
  closeModal();
};

const openDeleteConfirm = (id) => {
  deleteConfirm.value = id;
};

const handleDeleteTicket = () => {
  const updatedTickets = tickets.value.filter(t => t.id !== deleteConfirm.value);
  tickets.value = updatedTickets;
  saveTickets(updatedTickets);
  showToast('Ticket deleted successfully!', 'success');
  deleteConfirm.value = null;
};

onMounted(() => {
  loadTickets();
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

.tickets-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.tickets-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
}

.tickets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.ticket-card {
  background: #f9fafb;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.ticket-card:hover {
  border-color: #2563eb;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
}

.ticket-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
}

.ticket-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.ticket-status {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
}

.status-open {
  background: #d1fae5;
  color: #065f46;
}

.status-in_progress {
  background: #fef3c7;
  color: #92400e;
}

.status-closed {
  background: #e5e7eb;
  color: #374151;
}

.ticket-description {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.ticket-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.modal-actions .btn {
  flex: 1;
}

.delete-modal-content {
  margin-bottom: 2rem;
  color: #6b7280;
}

@media (max-width: 768px) {
  .tickets-grid {
    grid-template-columns: 1fr;
  }
}
</style>