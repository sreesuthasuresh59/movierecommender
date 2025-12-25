import React from 'react';
import ThemeToggle from './ThemeToggle';
import '../styles/Header.css';

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          
          <span className="logo-text">MovieFinder</span>
        </div>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
}

export default Header;