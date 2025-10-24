import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import { getTickets, saveTickets } from '../../utils/storage';
import TicketModal from './TicketModal';
import './Tickets.css';

const TicketManagement = ({ showToast }) => {
  const [tickets, setTickets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    setTickets(getTickets());
  }, []);

  const handleSaveTicket = (ticket) => {
    let updatedTickets;
    if (tickets.find(t => t.id === ticket.id)) {
      updatedTickets = tickets.map(t => t.id === ticket.id ? ticket : t);
    } else {
      updatedTickets = [...tickets, ticket];
    }
    setTickets(updatedTickets);
    saveTickets(updatedTickets);
  };

  const handleDeleteTicket = (id) => {
    const updatedTickets = tickets.filter(t => t.id !== id);
    setTickets(updatedTickets);
    saveTickets(updatedTickets);
    showToast('Ticket deleted successfully!', 'success');
    setDeleteConfirm(null);
  };

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Ticket Management</h1>
          <button 
            className="btn btn-primary" 
            onClick={() => {
              setEditingTicket(null);
              setShowModal(true);
            }}
          >
            <Plus size={18} />
            New Ticket
          </button>
        </div>

        <div className="tickets-section">
          <div className="tickets-header">
            <h2 className="section-subtitle">All Tickets ({tickets.length})</h2>
          </div>

          {tickets.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">📋</div>
              <h3>No tickets yet</h3>
              <p>Create your first ticket to get started</p>
            </div>
          ) : (
            <div className="tickets-grid">
              {tickets.map(ticket => (
                <div key={ticket.id} className="ticket-card">
                  <div className="ticket-header">
                    <div>
                      <h3 className="ticket-title">{ticket.title}</h3>
                      <span className={`ticket-status status-${ticket.status}`}>
                        {ticket.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                  {ticket.description && (
                    <p className="ticket-description">{ticket.description}</p>
                  )}
                  <div className="ticket-actions">
                    <button
                      className="btn btn-secondary btn-small"
                      onClick={() => {
                        setEditingTicket(ticket);
                        setShowModal(true);
                      }}
                    >
                      <Edit2 size={16} />
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-small"
                      onClick={() => setDeleteConfirm(ticket.id)}
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <TicketModal
          ticket={editingTicket}
          onClose={() => {
            setShowModal(false);
            setEditingTicket(null);
          }}
          onSave={handleSaveTicket}
          showToast={showToast}
        />
      )}

      {deleteConfirm && (
        <div className="modal-overlay" onClick={() => setDeleteConfirm(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '400px' }}>
            <div className="modal-header">
              <h2 className="modal-title">Confirm Delete</h2>
              <button className="btn-icon" onClick={() => setDeleteConfirm(null)}>
                <X size={24} />
              </button>
            </div>
            <div className="delete-modal-content">
              <p>Are you sure you want to delete this ticket? This action cannot be undone.</p>
            </div>
            <div className="modal-actions">
              <button 
                className="btn btn-secondary" 
                onClick={() => setDeleteConfirm(null)}
              >
                Cancel
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteTicket(deleteConfirm)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketManagement;