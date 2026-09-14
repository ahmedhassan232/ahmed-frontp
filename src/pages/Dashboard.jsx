import { Link } from 'react-router-dom';
import { Zap, Code2, Smartphone, Target, ArrowUpRight, Mail, Download } from 'lucide-react';
import { projects } from '../data/projects';
import { frontendSkills } from '../data/skills';
import { buildCards } from '../data/services';

const CHART_COLORS = ['var(--blue)', 'var(--green)', 'var(--purple)', 'var(--orange)'];

function buildTypeCounts() {
  const counts = {};
  projects.forEach((p) => {
    p.filterTags.forEach((tag) => {
      if (tag === 'All') return;
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

export default function Dashboard() {
  const typeCounts = buildTypeCounts();
  const total = typeCounts.reduce((sum, [, v]) => sum + v, 0);
  let cumulative = 0;
  const gradientStops = typeCounts.map(([label, value], i) => {
    const start = (cumulative / total) * 360;
    cumulative += value;
    const end = (cumulative / total) * 360;
    return `${CHART_COLORS[i % CHART_COLORS.length]} ${start}deg ${end}deg`;
  }).join(', ');

  return (
    <div className="page">
      <div className="hero-card card">
        <div className="hero-text">
          <span className="eyebrow">WEB DEVELOPER — OVERVIEW</span>
          <h1 className="hero-title">Hi, I'm Ahmed Hassan 👋</h1>
          <p className="hero-desc">
            I am a Web Developer and Software Engineering student focused on
            building responsive websites, modern user interfaces, interactive
            dashboards, and practical frontend applications.
          </p>
          <span className="availability-pill" style={{ marginTop: 16 }}>
            <span className="dot dot-green" /> Available for Web Development Opportunities
          </span>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">View My Projects <ArrowUpRight size={15} /></Link>
            <Link to="/contact" className="btn btn-ghost">Contact Me <Mail size={15} /></Link>
            <Link to="/cv" className="btn btn-ghost">Download CV <Download size={15} /></Link>
          </div>
        </div>
      </div>

      <div className="kpi-grid">
        <div className="card kpi-card accent-blue">
          <div className="kpi-icon"><Code2 size={18} /></div>
          <div className="kpi-value">{projects.length}+</div>
          <div className="kpi-label">Web Projects</div>
        </div>
        <div className="card kpi-card accent-green">
          <div className="kpi-icon"><Zap size={18} /></div>
          <div className="kpi-value">React</div>
          <div className="kpi-label">Frontend Technologies</div>
        </div>
        <div className="card kpi-card accent-purple">
          <div className="kpi-icon"><Smartphone size={18} /></div>
          <div className="kpi-value">Yes</div>
          <div className="kpi-label">Responsive Design</div>
        </div>
        <div className="card kpi-card accent-orange">
          <div className="kpi-icon"><Target size={18} /></div>
          <div className="kpi-value">Open</div>
          <div className="kpi-label">Availability</div>
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <h2>What I Build</h2>
          <span className="text-faint">Focus areas</span>
        </div>
        <div className="grid-4">
          {buildCards.map((c) => (
            <div key={c.title} className={`card build-card accent-${c.color}`}>
              <div className="build-card-icon"><Code2 size={18} /></div>
              <h3>{c.title}</h3>
              <p className="text-dim" style={{ fontSize: 13.5 }}>{c.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <h2>Web Projects by Type</h2>
          <span className="text-faint">{total} tagged categories</span>
        </div>
        <div className="card chart-card">
          <div className="donut-wrap">
            <div
              style={{
                width: 120, height: 120, borderRadius: '50%',
                background: `conic-gradient(${gradientStops})`,
                flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <div style={{
                width: 70, height: 70, borderRadius: '50%', background: 'var(--surface)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20,
              }}>
                {projects.length}
              </div>
            </div>
            <div className="donut-legend">
              {typeCounts.map(([label, value], i) => (
                <div className="donut-legend-item" key={label}>
                  <span className="legend-dot" style={{ background: CHART_COLORS[i % CHART_COLORS.length] }} />
                  {label} — {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <h2>Skill Levels</h2>
          <Link to="/skills" className="link-more">View all →</Link>
        </div>
        <div className="card" style={{ padding: 22 }}>
          {frontendSkills.slice(0, 5).map((s) => (
            <div className="skill-row" key={s.name}>
              <div className="skill-row-top"><span>{s.name}</span><span className="text-faint">{s.level}%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{ width: `${s.level}%` }} /></div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <h2>Recent Projects</h2>
          <Link to="/projects" className="link-more">View all →</Link>
        </div>
        <div className="grid-2">
          {projects.map((p) => (
            <Link to="/projects" key={p.id} className="card" style={{ padding: 20, display: 'block' }}>
              <div className="project-card-cats">
                {p.category.map((c) => <span key={c} className="tag">{c}</span>)}
              </div>
              <h3 style={{ fontSize: 15.5, marginBottom: 6 }}>{p.name}</h3>
              <p className="text-dim" style={{ fontSize: 13 }}>{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
