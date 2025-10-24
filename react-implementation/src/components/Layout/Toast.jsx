import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';
import './Toast.css';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast ${type}`}>
      <div className="toast-icon">
        {type === 'success' ? (
          <CheckCircle size={24} color="#10b981" />
        ) : (
          <AlertCircle size={24} color="#dc2626" />
        )}
      </div>
      <div className="toast-message">{message}</div>
      <button className="btn-icon" onClick={onClose}>
        <X size={20} />
      </button>
    </div>
  );
};

export default Toast;