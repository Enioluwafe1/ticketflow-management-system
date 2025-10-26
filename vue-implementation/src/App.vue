<template>
  <div id="app">
    <AppHeader
      v-if="currentPage !== 'landing' && currentPage !== 'login' && currentPage !== 'signup'"
      :is-logged-in="isLoggedIn"
      @navigate="handleNavigation"
      @logout="handleLogout"
    />

    <template v-if="currentPage === 'landing'">
      <AppHeader :is-logged-in="false" @navigate="handleNavigation" />
      <LandingPage @navigate="handleNavigation" />
    </template>

    <LoginPage
      v-else-if="currentPage === 'login'"
      @navigate="handleNavigation"
      @login="handleLogin"
    />

    <SignupPage
      v-else-if="currentPage === 'signup'"
      @navigate="handleNavigation"
      @login="handleLogin"
    />

    <DashboardPage
      v-else-if="currentPage === 'dashboard' && isLoggedIn"
      @navigate="handleNavigation"
    />

    <TicketManagement
      v-else-if="currentPage === 'tickets' && isLoggedIn"
    />

    <AppFooter v-if="currentPage !== 'login' && currentPage !== 'signup'" />

    <ToastNotification />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { isAuthenticated, logout } from './utils/auth';
import { useToast } from './composables/useToast';
import AppHeader from './components/Layout/AppHeader.vue';
import AppFooter from './components/Layout/AppFooter.vue';
import ToastNotification from './components/Layout/ToastNotification.vue';
import LandingPage from './components/Landing/LandingPage.vue';
import LoginPage from './components/Auth/LoginPage.vue';
import SignupPage from './components/Auth/SignupPage.vue';
import DashboardPage from './components/Dashboard/DashboardPage.vue';
import TicketManagement from './components/Tickets/TicketManagement.vue';

const currentPage = ref('landing');
const isLoggedIn = ref(false);
const { showToast } = useToast();

const checkAuth = () => {
  isLoggedIn.value = isAuthenticated();
  if (isLoggedIn.value) {
    currentPage.value = 'dashboard';
  }
};

const handleLogout = () => {
  logout();
  isLoggedIn.value = false;
  currentPage.value = 'landing';
  showToast('Logged out successfully', 'success');
};

const handleLogin = () => {
  isLoggedIn.value = true;
  currentPage.value = 'dashboard';
};

const handleNavigation = (page) => {
  // Check authentication for protected routes
  if (['dashboard', 'tickets'].includes(page) && !isAuthenticated()) {
    showToast('Your session has expired — please log in again.', 'error');
    currentPage.value = 'login';
    return;
  }
  currentPage.value = page;
};

onMounted(() => {
  checkAuth();
});
</script>

<style>
@import './assets/styles/global.css';
</style>