import { skillGroups, softSkills } from '../data/skills';

export default function Skills() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">03 — Competencies</span>
          <h1>Technical Skills</h1>
          <p className="page-sub">Technologies and tools used in my personal and academic projects.</p>
        </div>
      </div>

      <div className="grid-2">
        {skillGroups.map((group) => (
          <div className="section" key={group.title}>
            <div className="section-head"><h2>{group.title}</h2></div>
            <div className="card" style={{ padding: 22 }}>
              <div className="pill-list">
                {group.skills.map((skill) => <span key={skill} className="pill">{skill}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section">
        <div className="section-head"><h2>Soft Skills</h2></div>
        <div className="card" style={{ padding: 22 }}>
          <div className="pill-list">
            {softSkills.map((skill) => <span key={skill} className="pill pill-faint">{skill}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}