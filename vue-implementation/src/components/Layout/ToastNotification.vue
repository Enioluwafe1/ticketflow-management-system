<template>
  <Transition name="slide">
    <div v-if="toast" :class="['toast', toast.type]">
      <div class="toast-icon">
        <CheckCircle v-if="toast.type === 'success'" :size="24" color="#10b981" />
        <AlertCircle v-else :size="24" color="#dc2626" />
      </div>
      <div class="toast-message">{{ toast.message }}</div>
      <button class="btn-icon" @click="hideToast">
        <X :size="20" />
      </button>
    </div>
  </Transition>
</template>

<script setup>
import { watch, onMounted } from 'vue';
import { CheckCircle, AlertCircle, X } from 'lucide-vue-next';
import { useToast } from '../../composables/useToast';

const { toast, hideToast } = useToast();

let timer;

watch(toast, (newToast) => {
  if (newToast) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      hideToast();
    }, 4000);
  }
});

onMounted(() => {
  return () => clearTimeout(timer);
});
</script>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 2000;
  max-width: 400px;
}

.toast.success {
  border-left: 4px solid #10b981;
}

.toast.error {
  border-left: 4px solid #dc2626;
}

.toast-icon {
  flex-shrink: 0;
}

.toast-message {
  flex: 1;
  font-weight: 500;
}

.slide-enter-active {
  animation: slideIn 0.3s ease;
}

.slide-leave-active {
  animation: slideOut 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(400px);
    opacity: 0;
  }
}
</style>