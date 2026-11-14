import { Link } from 'react-router-dom';
import { Layout, LayoutDashboard, Smartphone, PanelsTopLeft } from 'lucide-react';
import { services } from '../data/services';

const icons = { blue: Layout, green: LayoutDashboard, purple: Smartphone, orange: PanelsTopLeft };

export default function Services() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Development</span>
          <h1>Services</h1>
          <p className="page-sub">Web development work I can help with — no paid client history claimed.</p>
        </div>
      </div>

      <div className="grid-2">
        {services.map((s) => {
          const Icon = icons[s.color];
          return (
            <div key={s.title} className={`card service-card accent-${s.color}`}>
              <div className="service-icon"><Icon size={19} /></div>
              <h3>{s.title}</h3>
              <p className="text-dim">{s.description}</p>
            </div>
          );
        })}
      </div>

      <div className="card" style={{ padding: 24, marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <h3 style={{ marginBottom: 6 }}>Interested in working together?</h3>
          <p className="text-dim">Contact me to discuss software projects, backend development, and full-stack collaboration.</p>
        </div>
        <Link to="/contact" className="btn btn-primary">Contact Me</Link>
      </div>
    </div>
  );
}
