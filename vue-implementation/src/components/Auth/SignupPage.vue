<template>
  <div class="auth-page">
    <div class="decorative-circle auth-circle-1"></div>
    <div class="decorative-circle auth-circle-2"></div>
    <div class="auth-card">
      <h1 class="auth-title">Create Account</h1>
      <p class="auth-subtitle">Start managing tickets today</p>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label class="form-label">Full Name</label>
          <input
            type="text"
            :class="['form-input', { error: errors.name }]"
            placeholder="John Doe"
            v-model="formData.name"
          />
          <div v-if="errors.name" class="error-message">
            <AlertCircle :size="16" />
            {{ errors.name }}
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Email Address</label>
          <input
            type="email"
            :class="['form-input', { error: errors.email }]"
            placeholder="you@example.com"
            v-model="formData.email"
          />
          <div v-if="errors.email" class="error-message">
            <AlertCircle :size="16" />
            {{ errors.email }}
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input
            type="password"
            :class="['form-input', { error: errors.password }]"
            placeholder="Create a password (min 6 characters)"
            v-model="formData.password"
          />
          <div v-if="errors.password" class="error-message">
            <AlertCircle :size="16" />
            {{ errors.password }}
          </div>
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
          Create Account
        </button>
      </form>
      <div class="auth-link">
        Already have an account? <a @click="$emit('navigate', 'login')">Login</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { AlertCircle } from 'lucide-vue-next';
import { signup } from '../../utils/auth';
import { useToast } from '../../composables/useToast';

const emit = defineEmits(['navigate', 'login']);
const { showToast } = useToast();

const formData = reactive({
  name: '',
  email: '',
  password: ''
});

const errors = ref({});

const handleSubmit = () => {
  const newErrors = {};

  if (!formData.name) {
    newErrors.name = 'Name is required';
  }

  if (!formData.email) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Email is invalid';
  }

  if (!formData.password) {
    newErrors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters';
  }

  errors.value = newErrors;

  if (Object.keys(newErrors).length === 0) {
    const result = signup(formData.email, formData.password, formData.name);
    if (result.success) {
      showToast('Account created successfully! Welcome to TicketFlow.', 'success');
      setTimeout(() => emit('login'), 500);
    } else {
      showToast(result.error, 'error');
    }
  }
};
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.auth-circle-1 {
  width: 500px;
  height: 500px;
  background: rgba(255,255,255,0.1);
  top: -150px;
  right: -150px;
}

.auth-circle-2 {
  width: 400px;
  height: 400px;
  background: rgba(255,255,255,0.1);
  bottom: -100px;
  left: -100px;
}

.auth-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  padding: 3rem;
  width: 100%;
  max-width: 450px;
  position: relative;
  z-index: 2;
}

.auth-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1f2937;
  text-align: center;
}

.auth-subtitle {
  color: #6b7280;
  text-align: center;
  margin-bottom: 2rem;
}

.auth-link {
  text-align: center;
  margin-top: 1.5rem;
  color: #6b7280;
}

.auth-link a {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
}

.auth-link a:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .auth-card {
    padding: 2rem 1.5rem;
  }
}
</style>