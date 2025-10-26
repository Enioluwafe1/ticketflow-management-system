// Authentication Management
const SESSION_KEY = 'ticketapp_session';

const Auth = {
  // Check if user is authenticated
  isAuthenticated() {
    return localStorage.getItem(SESSION_KEY) !== null;
  },

  // Login user
  login(email, password) {
    if (email && password.length >= 6) {
      const session = {
        token: 'mock-token-' + Date.now(),
        user: { email, name: email.split('@')[0] }
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  },

  // Signup user
  signup(email, password, name) {
    if (email && password.length >= 6 && name) {
      const session = {
        token: 'mock-token-' + Date.now(),
        user: { email, name }
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      return { success: true };
    }
    return { success: false, error: 'Please fill all fields correctly' };
  },

  // Logout user
  logout() {
    localStorage.removeItem(SESSION_KEY);
  },

  // Get current session
  getSession() {
    const session = localStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session) : null;
  },

  // Protect route (redirect if not authenticated)
  protect() {
    if (!this.isAuthenticated()) {
      window.location.href = '/login.php';
    }
  }
};

// Make Auth available globally
window.Auth = Auth;