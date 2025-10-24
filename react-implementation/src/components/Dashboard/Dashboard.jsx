import React, { useState, useEffect } from 'react';
import { getTickets } from '../../utils/storage';
import './Dashboard.css';

const Dashboard = ({ onNavigate }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(getTickets());
  }, []);

  const stats = {
    total: tickets.length,
    open: tickets.filter(t => t.status === 'open').length,
    inProgress: tickets.filter(t => t.status === 'in_progress').length,
    closed: tickets.filter(t => t.status === 'closed').length
  };

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <button className="btn btn-primary" onClick={() => onNavigate('tickets')}>
            Manage Tickets
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card total">
            <div className="stat-label">Total Tickets</div>
            <div className="stat-value">{stats.total}</div>
          </div>
          <div className="stat-card open">
            <div className="stat-label">Open Tickets</div>
            <div className="stat-value">{stats.open}</div>
          </div>
          <div className="stat-card in-progress">
            <div className="stat-label">In Progress</div>
            <div className="stat-value">{stats.inProgress}</div>
          </div>
          <div className="stat-card closed">
            <div className="stat-label">Closed Tickets</div>
            <div className="stat-value">{stats.closed}</div>
          </div>
        </div>

        <div className="dashboard-content">
          <h2 className="section-subtitle">Quick Overview</h2>
          <p style={{ color: '#6b7280', marginTop: '1rem' }}>
            Welcome to your dashboard! You have {stats.total} total tickets. 
            Click "Manage Tickets" to view, create, edit, or delete tickets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;