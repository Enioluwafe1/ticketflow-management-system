import React from 'react';
import { Camera, LogOut } from 'lucide-react';
import { getSession } from '../../utils/auth';
import './Header.css';

const Header = ({ isLoggedIn, onLogout, onNavigate }) => {
  const session = getSession();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => onNavigate('landing')}>
            <Camera size={28} />
            TicketFlow
          </div>
          <nav className="nav-buttons">
            {isLoggedIn ? (
              <>
                <span className="user-name">
                  {session?.user?.name || 'User'}
                </span>
                <button className="btn btn-danger" onClick={onLogout}>
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-secondary" onClick={() => onNavigate('login')}>
                  Login
                </button>
                <button className="btn btn-primary" onClick={() => onNavigate('signup')}>
                  Get Started
                </button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;