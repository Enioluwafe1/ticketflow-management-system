import React, { useState, useEffect } from 'react';
import { isAuthenticated, logout } from './utils/auth';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Toast from './components/Layout/Toast';
import LandingPage from './components/Landing/LandingPage';
import LoginPage from './components/Auth/LoginPage';
import SignupPage from './components/Auth/SignupPage';
import Dashboard from './components/Dashboard/Dashboard';
import TicketManagement from './components/Tickets/TicketManagement';
import './styles/global.css';


function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (isAuthenticated()) {
      setCurrentPage('dashboard');
    }
  }, []);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const handleLogout = () => {
    logout();
    setCurrentPage('landing');
    showToast('Logged out successfully', 'success');
  };

  const handleLogin = () => {
    setCurrentPage('dashboard');
  };

  const handleNavigation = (page) => {
    // Check authentication for protected routes
    if (['dashboard', 'tickets'].includes(page) && !isAuthenticated()) {
      showToast('Your session has expired — please log in again.', 'error');
      setCurrentPage('login');
      return;
    }
    setCurrentPage(page);
  };

  return (
    <>
      <div className="app-container">
        {currentPage !== 'landing' && currentPage !== 'login' && currentPage !== 'signup' && (
          <Header 
            isLoggedIn={isAuthenticated()} 
            onLogout={handleLogout}
            onNavigate={handleNavigation}
          />
        )}

        {currentPage === 'landing' && (
          <>
            <Header 
              isLoggedIn={false} 
              onNavigate={handleNavigation}
            />
            <LandingPage onNavigate={handleNavigation} />
          </>
        )}

        {currentPage === 'login' && (
          <LoginPage 
            onNavigate={handleNavigation} 
            onLogin={handleLogin}
            showToast={showToast}
          />
        )}

        {currentPage === 'signup' && (
          <SignupPage 
            onNavigate={handleNavigation}
            onLogin={handleLogin}
            showToast={showToast}
          />
        )}

        {currentPage === 'dashboard' && isAuthenticated() && (
          <Dashboard onNavigate={handleNavigation} />
        )}

        {currentPage === 'tickets' && isAuthenticated() && (
          <TicketManagement showToast={showToast} />
        )}

        {currentPage !== 'login' && currentPage !== 'signup' && <Footer />}

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </>
  )
}

export default App
