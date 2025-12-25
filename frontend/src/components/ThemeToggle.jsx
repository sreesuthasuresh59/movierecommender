import React from 'react';
import '../styles/ThemeToggle.css';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <div className="toggle-track">
        <div className={`toggle-thumb ${theme}`}>
          {theme === 'light' ? '☀️' : '🌙'}
        </div>
      </div>
    </button>
  );
}

export default ThemeToggle;