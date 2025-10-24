import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="decorative-circle circle-1"></div>
        <div className="decorative-circle circle-2"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Manage Tickets with Ease</h1>
            <p className="hero-description">
              A powerful, intuitive ticket management system designed to streamline your workflow and boost productivity.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary btn-large" onClick={() => onNavigate('signup')}>
                Get Started Free
              </button>
              <button className="btn btn-secondary btn-large" onClick={() => onNavigate('login')}>
                Login to Account
              </button>
            </div>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose TicketFlow?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Real-Time Dashboard</h3>
              <p className="feature-description">
                Monitor all your tickets at a glance with live statistics and status updates.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3 className="feature-title">Easy Management</h3>
              <p className="feature-description">
                Create, edit, and organize tickets effortlessly with our intuitive interface.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Secure & Private</h3>
              <p className="feature-description">
                Your data is protected with industry-standard security measures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;