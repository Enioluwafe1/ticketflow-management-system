<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo" @click="$emit('navigate', 'landing')">
          <Camera :size="28" />
          TicketFlow
        </div>
        <nav class="nav-buttons">
          <template v-if="isLoggedIn">
            <span class="user-name">
              {{ session?.user?.name || 'User' }}
            </span>
            <button class="btn btn-danger" @click="$emit('logout')">
              <LogOut :size="18" />
              Logout
            </button>
          </template>
          <template v-else>
            <button class="btn btn-secondary" @click="$emit('navigate', 'login')">
              Login
            </button>
            <button class="btn btn-primary" @click="$emit('navigate', 'signup')">
              Get Started
            </button>
          </template>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Camera, LogOut } from 'lucide-vue-next';
import { getSession } from '../../utils/auth';

defineProps({
  isLoggedIn: Boolean
});

defineEmits(['navigate', 'logout']);

const session = getSession();
</script>

<style scoped>
.header {
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2563eb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.nav-buttons {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.user-name {
  color: #6b7280;
  margin-right: 1rem;
}

@media (max-width: 768px) {
  .nav-buttons {
    flex-wrap: wrap;
  }
}
</style>