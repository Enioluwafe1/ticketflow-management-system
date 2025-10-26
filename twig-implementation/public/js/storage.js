// Ticket Storage Management
const TICKETS_KEY = 'ticketapp_tickets';

const Storage = {
  // Get all tickets
  getTickets() {
    const tickets = localStorage.getItem(TICKETS_KEY);
    return tickets ? JSON.parse(tickets) : [];
  },

  // Save tickets
  saveTickets(tickets) {
    localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
  },

  // Add new ticket
  addTicket(ticket) {
    const tickets = this.getTickets();
    const newTicket = {
      ...ticket,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    tickets.push(newTicket);
    this.saveTickets(tickets);
    return newTicket;
  },

  // Update ticket
  updateTicket(id, updates) {
    const tickets = this.getTickets();
    const index = tickets.findIndex(t => t.id === id);
    if (index !== -1) {
      tickets[index] = {
        ...tickets[index],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      this.saveTickets(tickets);
      return tickets[index];
    }
    return null;
  },

  // Delete ticket
  deleteTicket(id) {
    const tickets = this.getTickets();
    const filtered = tickets.filter(t => t.id !== id);
    this.saveTickets(filtered);
    return true;
  },

  // Get ticket by ID
  getTicketById(id) {
    const tickets = this.getTickets();
    return tickets.find(t => t.id === id);
  }
};

// Make Storage available globally
window.Storage = Storage;