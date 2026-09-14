import { NavLink } from 'react-router-dom';
import {
  LayoutGrid, User, FolderKanban, BarChart3, Briefcase,
  FileText, Award, GitBranch, Mail, X,
} from 'lucide-react';
import { projects } from '../data/projects';

const nav = [
  {
    label: 'Overview',
    items: [
      { to: '/', label: 'Dashboard', icon: LayoutGrid, end: true },
      { to: '/about', label: 'About Me', icon: User },
    ],
  },
  {
    label: 'Development',
    items: [
      { to: '/projects', label: 'Projects', icon: FolderKanban, badge: projects.length },
      { to: '/skills', label: 'Skills', icon: BarChart3 },
      { to: '/services', label: 'Services', icon: Briefcase },
    ],
  },
  {
    label: 'Career',
    items: [
      { to: '/cv', label: 'CV / Resume', icon: FileText },
      { to: '/certificates', label: 'Certificates', icon: Award },
      { to: '/timeline', label: 'Timeline', icon: GitBranch },
    ],
  },
  {
    label: 'Connect',
    items: [
      { to: '/contact', label: 'Contact', icon: Mail },
    ],
  },
];

export default function Sidebar({ open, collapsed, onClose }) {
  return (
    <>
      {open && <div className="sidebar-scrim" onClick={onClose} />}
      <aside className={`sidebar ${open ? 'sidebar-open' : ''} ${collapsed ? 'sidebar-collapsed' : ''}`}>
        <div className="sidebar-mobile-header">
          <span className="eyebrow">Menu</span>
          <button className="icon-btn" onClick={onClose} aria-label="Close menu"><X size={18} /></button>
        </div>
        <nav className="sidebar-nav">
          {nav.map((section) => (
            <div className="nav-section" key={section.label}>
              {!collapsed && <div className="nav-section-label">{section.label}</div>}
              {section.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={onClose}
                  className={({ isActive }) => `nav-item ${isActive ? 'nav-item-active' : ''}`}
                  title={collapsed ? item.label : undefined}
                >
                  <item.icon size={18} strokeWidth={2} />
                  {!collapsed && <span>{item.label}</span>}
                  {!collapsed && item.badge != null && <span className="nav-badge">{item.badge}</span>}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>
        {!collapsed && (
          <div className="sidebar-footer">
            <div className="sidebar-user">
              <div className="avatar">AH</div>
              <div>
                <div className="sidebar-user-name">Ahmed Hassan Sayed</div>
                <div className="sidebar-user-sub">Web Developer · Egypt</div>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
