// Toast Notification System
const Toast = {
  // Show toast notification
  show(message, type = 'success') {
    // Remove existing toast if any
    this.hide();

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.id = 'app-toast';

    // Create icon
    const icon = document.createElement('div');
    icon.className = 'toast-icon';
    icon.textContent = type === 'success' ? '✓' : '✕';

    // Create message
    const messageEl = document.createElement('div');
    messageEl.className = 'toast-message';
    messageEl.textContent = message;

    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'btn-icon';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = () => this.hide();

    // Assemble toast
    toast.appendChild(icon);
    toast.appendChild(messageEl);
    toast.appendChild(closeBtn);

    // Add to body
    document.body.appendChild(toast);

    // Auto hide after 4 seconds
    setTimeout(() => this.hide(), 4000);
  },

  // Hide toast
  hide() {
    const toast = document.getElementById('app-toast');
    if (toast) {
      toast.classList.add('hiding');
      setTimeout(() => toast.remove(), 300);
    }
  }
};

// Make Toast available globally
window.Toast = Toast;