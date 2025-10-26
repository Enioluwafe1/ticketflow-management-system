<template>
  <Teleport to="body">
    <div class="modal-overlay" @click="$emit('close')">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h2 class="modal-title">{{ ticket ? 'Edit Ticket' : 'Create New Ticket' }}</h2>
          <button class="btn-icon" @click="$emit('close')">
            <X :size="24" />
          </button>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label class="form-label">Title *</label>
            <input
              type="text"
              :class="['form-input', { error: errors.title }]"
              placeholder="Enter ticket title"
              v-model="formData.title"
            />
            <div v-if="errors.title" class="error-message">
              <AlertCircle :size="16" />
              {{ errors.title }}
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Description</label>
            <textarea
              class="form-textarea"
              placeholder="Enter ticket description (optional)"
              v-model="formData.description"
            />
          </div>
          <div class="form-group">
            <label class="form-label">Status *</label>
            <select
              :class="['form-select', { error: errors.status }]"
              v-model="formData.status"
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
            <div v-if="errors.status" class="error-message">
              <AlertCircle :size="16" />
              {{ errors.status }}
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Priority</label>
            <select class="form-select" v-model="formData.priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div class="modal-actions">
            <button type="button" class="btn btn-secondary" @click="$emit('close')">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">
              {{ ticket ? 'Update' : 'Create' }} Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import { X, AlertCircle } from 'lucide-vue-next';
import { useToast } from '../../composables/useToast';

const props = defineProps({
  ticket: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['close', 'save']);
const { showToast } = useToast();

const formData = reactive({
  title: '',
  description: '',
  status: 'open',
  priority: 'medium'
});

const errors = ref({});

// Watch for ticket prop changes to populate form
watch(() => props.ticket, (newTicket) => {
  if (newTicket) {
    formData.title = newTicket.title;
    formData.description = newTicket.description || '';
    formData.status = newTicket.status;
    formData.priority = newTicket.priority || 'medium';
  } else {
    formData.title = '';
    formData.description = '';
    formData.status = 'open';
    formData.priority = 'medium';
  }
}, { immediate: true });

const handleSubmit = () => {
  const newErrors = {};

  if (!formData.title.trim()) {
    newErrors.title = 'Title is required';
  }

  if (!formData.status) {
    newErrors.status = 'Status is required';
  } else if (!['open', 'in_progress', 'closed'].includes(formData.status)) {
    newErrors.status = 'Status must be open, in_progress, or closed';
  }

  errors.value = newErrors;

  if (Object.keys(newErrors).length === 0) {
    const ticketData = {
      ...props.ticket,
      ...formData,
      id: props.ticket?.id || Date.now().toString(),
      createdAt: props.ticket?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    emit('save', ticketData);
    showToast(
      props.ticket ? 'Ticket updated successfully!' : 'Ticket created successfully!',
      'success'
    );
  }
};
</script>

<style scoped>
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
</style>