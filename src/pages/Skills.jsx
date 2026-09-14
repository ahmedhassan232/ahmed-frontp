import { frontendSkills, uiuxSkills, toolSkills, secondarySkills } from '../data/skills';

export default function Skills() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">03 — Competencies</span>
          <h1>Web Development Skills</h1>
          <p className="page-sub">Self-assessed proficiency, focused on frontend and web development.</p>
        </div>
      </div>

      <div className="section">
        <div className="section-head"><h2>Frontend</h2></div>
        <div className="card" style={{ padding: 24 }}>
          {frontendSkills.map((s) => (
            <div className="skill-row" key={s.name}>
              <div className="skill-row-top"><span>{s.name}</span><span className="text-faint">{s.level}%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{ width: `${s.level}%` }} /></div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid-2">
        <div className="section">
          <div className="section-head"><h2>UI / UX</h2></div>
          <div className="card" style={{ padding: 22 }}>
            <div className="pill-list">
              {uiuxSkills.map((s) => <span key={s} className="pill">{s}</span>)}
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-head"><h2>Development Tools</h2></div>
          <div className="card" style={{ padding: 22 }}>
            <div className="pill-list">
              {toolSkills.map((s) => <span key={s} className="pill">{s}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-head"><h2>Other Technical Experience</h2></div>
        <div className="card" style={{ padding: 22 }}>
          <div className="pill-list">
            {secondarySkills.map((s) => <span key={s} className="pill pill-faint">{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
