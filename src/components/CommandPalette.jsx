import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutGrid, User, FolderKanban, BarChart3, Briefcase, FileText,
  Award, GitBranch, PenSquare, Mail, Moon, Printer, Search,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();

  const items = useMemo(() => ([
    { label: 'Dashboard', icon: LayoutGrid, action: () => navigate('/') },
    { label: 'About', icon: User, action: () => navigate('/about') },
    { label: 'Projects', icon: FolderKanban, action: () => navigate('/projects') },
    { label: 'Skills', icon: BarChart3, action: () => navigate('/skills') },
    { label: 'Services', icon: Briefcase, action: () => navigate('/services') },
    { label: 'CV / Resume', icon: FileText, action: () => navigate('/cv') },
    { label: 'Certificates', icon: Award, action: () => navigate('/certificates') },
    { label: 'Timeline', icon: GitBranch, action: () => navigate('/timeline') },
    { label: 'Blog', icon: PenSquare, action: () => navigate('/blog') },
    { label: 'Contact', icon: Mail, action: () => navigate('/contact') },
    { label: 'Toggle Theme', icon: Moon, action: toggleTheme },
    { label: 'Print CV', icon: Printer, action: () => { navigate('/cv'); setTimeout(() => window.print(), 300); } },
    { label: 'Open Projects', icon: FolderKanban, action: () => navigate('/projects') },
    { label: 'Contact Ahmed', icon: Mail, action: () => navigate('/contact') },
  ]), [navigate, toggleTheme]);

  const filtered = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (!open) { setQuery(''); setIndex(0); }
  }, [open]);

  useEffect(() => { setIndex(0); }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') { e.preventDefault(); setIndex((i) => Math.min(i + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setIndex((i) => Math.max(i - 1, 0)); }
      if (e.key === 'Enter' && filtered[index]) {
        filtered[index].action();
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, filtered, index, onClose]);

  if (!open) return null;

  return (
    <div className="palette-scrim" onClick={onClose}>
      <div className="palette" onClick={(e) => e.stopPropagation()}>
        <div className="palette-input-row">
          <Search size={16} className="text-faint" />
          <input
            autoFocus
            placeholder="Search pages and actions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd>Esc</kbd>
        </div>
        <div className="palette-list">
          {filtered.length === 0 && <div className="palette-empty">No matches</div>}
          {filtered.map((item, i) => (
            <button
              key={item.label}
              className={`palette-item ${i === index ? 'palette-item-active' : ''}`}
              onMouseEnter={() => setIndex(i)}
              onClick={() => { item.action(); onClose(); }}
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
