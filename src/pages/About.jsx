import { Target } from 'lucide-react';

export default function About() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">01 — About</span>
          <h1>About Me</h1>
        </div>
      </div>

      <div className="grid-2">
        <div className="card" style={{ padding: 28 }}>
          <div className="avatar" style={{ width: 56, height: 56, fontSize: 18, marginBottom: 16 }}>AH</div>
          <h2 style={{ fontSize: 20 }}>Ahmed Hassan Sayed</h2>
          <p className="text-dim" style={{ marginTop: 4 }}>Full Stack Developer · Backend Focus</p>
          <p className="text-dim" style={{ marginTop: 18, lineHeight: 1.7 }}>
            I am a Full Stack Developer and Artificial Intelligence student with practical
            experience building personal and academic web applications. My main focus is
            backend development using Python, FastAPI, and PostgreSQL, with experience in
            RESTful APIs, database management, and frontend-backend integration.
          </p>
          <p className="text-dim" style={{ marginTop: 14, lineHeight: 1.7 }}>
            I also work with React and modern frontend technologies. I enjoy writing
            maintainable code, solving technical problems, and developing reliable
            software solutions.
          </p>
        </div>

        <div className="card" style={{ padding: 28 }}>
          <div className="build-card-icon accent-blue" style={{ background: 'var(--blue-dim)', color: 'var(--blue)' }}>
            <Target size={18} />
          </div>
          <h3 style={{ marginBottom: 10 }}>Focus</h3>
          <p className="text-dim" style={{ lineHeight: 1.7 }}>
            Building reliable web applications through strong backend foundations,
            clean APIs, effective database management, and well-integrated user interfaces.
          </p>

          <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
            <div className="cv-item">
              <div className="cv-item-title">Location</div>
              <div className="cv-item-sub">Beni Suef, Egypt</div>
            </div>
            <div className="cv-item">
              <div className="cv-item-title">Degree</div>
              <div className="cv-item-sub">Bachelor of Artificial Intelligence</div>
            </div>
            <div className="cv-item">
              <div className="cv-item-title">Education</div>
              <div className="cv-item-sub">Faculty of Computers and Artificial Intelligence · 2023–2027</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}