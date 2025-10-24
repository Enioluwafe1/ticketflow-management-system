import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { login } from '../../utils/auth';
import './Auth.css';

const LoginPage = ({ onNavigate, onLogin, showToast }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

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

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const result = login(formData.email, formData.password);
      if (result.success) {
        showToast('Login successful! Welcome back.', 'success');
        setTimeout(() => onLogin(), 500);
      } else {
        showToast(result.error, 'error');
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="decorative-circle auth-circle-1"></div>
      <div className="decorative-circle auth-circle-2"></div>
      <div className="auth-card">
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Login to access your dashboard</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && (
              <div className="error-message">
                <AlertCircle size={16} />
                {errors.email}
              </div>
            )}
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {errors.password && (
              <div className="error-message">
                <AlertCircle size={16} />
                {errors.password}
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            Login
          </button>
        </form>
        <div className="auth-link">
          Don't have an account? <a onClick={() => onNavigate('signup')}>Sign up</a>
        </div>
        <div className="auth-link">
          <small>Test credentials: any email + password (min 6 chars)</small>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;