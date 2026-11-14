import { Link } from 'react-router-dom';
import { Code2, Target, ArrowUpRight, Mail, Download, Server, Database } from 'lucide-react';
import { projects } from '../data/projects';
import { skillGroups } from '../data/skills';
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
          <span className="eyebrow">FULL STACK DEVELOPER — BACKEND FOCUS</span>
          <h1 className="hero-title">Hi, I'm Ahmed Hassan Sayed 👋</h1>
          <p className="hero-desc">
            I am a Full Stack Developer and Artificial Intelligence student focused on
            backend development with Python, FastAPI, and PostgreSQL. I also work with
            React and modern web technologies to build complete application experiences.
          </p>
          <span className="availability-pill" style={{ marginTop: 16 }}>
            <span className="dot dot-green" /> Beni Suef, Egypt · AI Student
          </span>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">View My Projects <ArrowUpRight size={15} /></Link>
            <Link to="/contact" className="btn btn-ghost">Contact Me <Mail size={15} /></Link>
            <Link to="/cv" className="btn btn-ghost">View CV <Download size={15} /></Link>
          </div>
        </div>
      </div>

      <div className="kpi-grid">
        <div className="card kpi-card accent-blue">
          <div className="kpi-icon"><Server size={18} /></div>
          <div className="kpi-value">Python</div>
          <div className="kpi-label">Backend Development</div>
        </div>
        <div className="card kpi-card accent-green">
          <div className="kpi-icon"><Database size={18} /></div>
          <div className="kpi-value">PostgreSQL</div>
          <div className="kpi-label">Database</div>
        </div>
        <div className="card kpi-card accent-purple">
          <div className="kpi-icon"><Code2 size={18} /></div>
          <div className="kpi-value">React</div>
          <div className="kpi-label">Frontend Development</div>
        </div>
        <div className="card kpi-card accent-orange">
          <div className="kpi-icon"><Target size={18} /></div>
          <div className="kpi-value">2023–2027</div>
          <div className="kpi-label">Bachelor of Artificial Intelligence</div>
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
          <h2>Selected Projects by Area</h2>
          <span className="text-faint">{total} project tags</span>
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
          <h2>Technical Skills</h2>
          <Link to="/skills" className="link-more">View all →</Link>
        </div>
        <div className="card" style={{ padding: 22 }}>
          {skillGroups.slice(0, 3).map((group) => (
            <div key={group.title} style={{ marginBottom: 16 }}>
              <div className="skill-row-top"><strong>{group.title}</strong></div>
              <div className="pill-list" style={{ marginTop: 8 }}>
                {group.skills.map((skill) => <span className="pill" key={skill}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <h2>Selected Projects</h2>
          <Link to="/projects" className="link-more">View all →</Link>
        </div>
        <div className="grid-2">
          {projects.slice(0, 4).map((p) => (
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