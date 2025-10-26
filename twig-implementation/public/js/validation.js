// Form Validation Utilities
const Validation = {
  // Validate email
  isValidEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  },

  // Validate required field
  isRequired(value) {
    return value && value.trim().length > 0;
  },

  // Validate minimum length
  minLength(value, min) {
    return value && value.length >= min;
  },

  // Validate status field
  isValidStatus(status) {
    return ['open', 'in_progress', 'closed'].includes(status);
  },

  // Show error message
  showError(inputId, message) {
    const input = document.getElementById(inputId);
    if (!input) return;

    // Add error class
    input.classList.add('error');

    // Remove existing error message
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }

    // Create error message
    const errorEl = document.createElement('div');
    errorEl.className = 'error-message';
    errorEl.innerHTML = `<span>⚠</span> ${message}`;

    // Insert after input
    input.parentElement.appendChild(errorEl);
  },

  // Clear error message
  clearError(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;

    // Remove error class
    input.classList.remove('error');

    // Remove error message
    const errorEl = input.parentElement.querySelector('.error-message');
    if (errorEl) {
      errorEl.remove();
    }
  },

  // Clear all errors in a form
  clearAllErrors(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    const inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');
    inputs.forEach(input => {
      input.classList.remove('error');
    });

    const errors = form.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());
  }
};

// Make Validation available globally
window.Validation = Validation;