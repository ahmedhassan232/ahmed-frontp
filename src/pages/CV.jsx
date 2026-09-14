import { Printer } from 'lucide-react';
import { projects } from '../data/projects';
import { certificates } from '../data/certificates';

export default function CV() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Career</span>
          <h1>CV / Resume</h1>
        </div>
        <div className="page-header-actions">
          <button className="btn btn-primary" onClick={() => window.print()}>
            <Printer size={15} /> Print / Save PDF
          </button>
        </div>
      </div>

      <div className="card cv-sheet">
        <div className="cv-header">
          <div>
            <div className="cv-name" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Ahmed Hassan Sayed</div>
            <div className="cv-role">Web Developer</div>
          </div>
          <div className="cv-contact">
            <div>ghghghb083@gmail.com</div>
            <div>linkedin.com/in/a7med-hassan-05085536a</div>
            <div>Egypt 🇪🇬</div>
          </div>
        </div>

        <div className="cv-section">
          <h3>Profile</h3>
          <p className="text-dim" style={{ lineHeight: 1.7 }}>
            Software Engineering student and Web Developer focused on building
            responsive websites, interactive dashboards, and practical
            frontend applications with React and modern JavaScript.
          </p>
        </div>

        <div className="cv-section">
          <h3>Education</h3>
          <div className="cv-item">
            <div className="cv-item-title">Software Engineering</div>
            <div className="cv-item-sub">Currently studying · Egypt</div>
          </div>
        </div>

        <div className="cv-section">
          <h3>Web Development Skills</h3>
          <div className="pill-list">
            {['Frontend Development', 'React', 'JavaScript', 'HTML', 'CSS', 'Responsive Design', 'UI Development', 'Dashboards'].map((s) => (
              <span key={s} className="pill">{s}</span>
            ))}
          </div>
        </div>

        <div className="cv-section">
          <h3>Projects</h3>
          {projects.map((p) => (
            <div className="cv-item" key={p.id}>
              <div className="cv-item-title">{p.name}</div>
              <div className="cv-item-sub">{p.tech.join(', ')}</div>
              <p className="text-dim" style={{ fontSize: 13, marginTop: 4 }}>{p.description}</p>
            </div>
          ))}
        </div>

        <div className="cv-section">
          <h3>Other Technical Skills</h3>
          <div className="pill-list">
            {['Python', 'Data Analysis', 'Arduino', 'Networking', 'Git', 'GitHub'].map((s) => (
              <span key={s} className="pill pill-faint">{s}</span>
            ))}
          </div>
        </div>

        <div className="cv-section">
          <h3>Certificates</h3>
          {certificates.length === 0 ? (
            <p className="text-faint" style={{ fontSize: 13 }}>Coming soon.</p>
          ) : certificates.map((c) => (
            <div className="cv-item" key={c.name}>
              <div className="cv-item-title">{c.name}</div>
              <div className="cv-item-sub">{c.issuer} · {c.date}</div>
            </div>
          ))}
        </div>

        <div className="cv-section">
          <h3>Languages</h3>
          <div className="pill-list">
            <span className="pill">Arabic — Native</span>
            <span className="pill">English</span>
          </div>
        </div>

        <div className="cv-section" style={{ marginBottom: 0 }}>
          <h3>Contact</h3>
          <p className="text-dim" style={{ fontSize: 13.5 }}>
            ghghghb083@gmail.com · linkedin.com/in/a7med-hassan-05085536a · Egypt
          </p>
        </div>
      </div>
    </div>
  );
}
