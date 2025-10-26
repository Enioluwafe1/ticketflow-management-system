import { ref } from 'vue';

const toast = ref(null);

export function useToast() {
  const showToast = (message, type) => {
    toast.value = { message, type };
  };

  const hideToast = () => {
    toast.value = null;
  };

  return {
    toast,
    showToast,
    hideToast
  };
}