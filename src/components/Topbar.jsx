import { Menu, Search, Moon, Sun, Command } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Topbar({ onMenuClick, onSearchClick }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="icon-btn hide-desktop" onClick={onMenuClick} aria-label="Open menu">
          <Menu size={20} />
        </button>
        <div className="brand">
          <div className="avatar avatar-sm">AH</div>
          <span className="brand-name">Ahmed<strong>Hassan</strong></span>
        </div>
      </div>

      <button className="topbar-search hide-mobile" onClick={onSearchClick}>
        <Search size={16} />
        <span>Search... or press Ctrl+K</span>
        <kbd>Ctrl+K</kbd>
      </button>

      <div className="topbar-right">
        <span className="availability-pill hide-mobile">
          <span className="dot dot-green" /> Available
        </span>
        <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="icon-btn hide-mobile" onClick={onSearchClick} aria-label="Open command palette">
          <Command size={18} />
        </button>
        <div className="avatar avatar-sm hide-mobile">AH</div>
      </div>
    </header>
  );
}
