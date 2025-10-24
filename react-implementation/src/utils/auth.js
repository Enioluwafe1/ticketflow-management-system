const SESSION_KEY = 'ticketapp_session';

export const isAuthenticated = () => {
  return localStorage.getItem(SESSION_KEY) !== null;
};

export const login = (email, password) => {
  if (email && password.length >= 6) {
    const session = {
      token: 'mock-token-' + Date.now(),
      user: { email, name: email.split('@')[0] }
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return { success: true };
  }
  return { success: false, error: 'Invalid credentials' };
};

export const signup = (email, password, name) => {
  if (email && password.length >= 6 && name) {
    const session = {
      token: 'mock-token-' + Date.now(),
      user: { email, name }
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return { success: true };
  }
  return { success: false, error: 'Please fill all fields correctly' };
};

export const logout = () => {
  localStorage.removeItem(SESSION_KEY);
};

export const getSession = () => {
  const session = localStorage.getItem(SESSION_KEY);
  return session ? JSON.parse(session) : null;
};