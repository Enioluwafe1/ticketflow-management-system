<template>
  <div class="landing-page">
    <section class="hero-section">
      <div class="decorative-circle circle-1"></div>
      <div class="decorative-circle circle-2"></div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Manage Tickets with Ease</h1>
          <p class="hero-description">
            A powerful, intuitive ticket management system designed to streamline your workflow and boost productivity.
          </p>
          <div class="hero-buttons">
            <button class="btn btn-primary btn-large" @click="$emit('navigate', 'signup')">
              Get Started Free
            </button>
            <button class="btn btn-secondary btn-large" @click="$emit('navigate', 'login')">
              Login to Account
            </button>
          </div>
        </div>
      </div>
      <div class="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>

    <section class="features-section">
      <div class="container">
        <h2 class="section-title">Why Choose TicketFlow?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3 class="feature-title">Real-Time Dashboard</h3>
            <p class="feature-description">
              Monitor all your tickets at a glance with live statistics and status updates.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">✨</div>
            <h3 class="feature-title">Easy Management</h3>
            <p class="feature-description">
              Create, edit, and organize tickets effortlessly with our intuitive interface.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3 class="feature-title">Secure & Private</h3>
            <p class="feature-description">
              Your data is protected with industry-standard security measures.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineEmits(['navigate']);
</script>

<style scoped>
.landing-page {
  flex: 1;
}

/* Hero Section */
.hero-section {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 20px 150px;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Hero Decorative Circles */
.circle-1 {
  width: 400px;
  height: 400px;
  background: white;
  top: -100px;
  right: -100px;
}

.circle-2 {
  width: 300px;
  height: 300px;
  background: white;
  bottom: -50px;
  left: -50px;
}

/* Wave Divider */
.wave-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave-divider svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 80px;
}

.wave-divider .shape-fill {
  fill: #f5f7fa;
}

/* Features Section */
.features-section {
  padding: 80px 20px;
  background: #f5f7fa;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1f2937;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.feature-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1f2937;
}

.feature-description {
  color: #6b7280;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .btn-large {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>