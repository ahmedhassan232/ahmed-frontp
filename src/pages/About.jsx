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
          <p className="text-dim" style={{ marginTop: 4 }}>Web Developer · Software Engineering Student</p>
          <p className="text-dim" style={{ marginTop: 18, lineHeight: 1.7 }}>
            I am a Software Engineering student interested in Web Development
            and modern frontend technologies. I enjoy turning ideas and
            interface concepts into responsive, interactive, and practical
            web applications.
          </p>
          <p className="text-dim" style={{ marginTop: 14, lineHeight: 1.7 }}>
            My projects combine frontend development, dashboard design,
            data-driven interfaces, and software engineering principles.
          </p>
        </div>

        <div className="card" style={{ padding: 28 }}>
          <div className="build-card-icon accent-blue" style={{ background: 'var(--blue-dim)', color: 'var(--blue)' }}>
            <Target size={18} />
          </div>
          <h3 style={{ marginBottom: 10 }}>🎯 Goal</h3>
          <p className="text-dim" style={{ lineHeight: 1.7 }}>
            Become a professional Web Developer specializing in modern
            frontend applications and interactive web experiences.
          </p>

          <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
            <div className="cv-item">
              <div className="cv-item-title">Location</div>
              <div className="cv-item-sub">Egypt 🇪🇬</div>
            </div>
            <div className="cv-item">
              <div className="cv-item-title">Degree</div>
              <div className="cv-item-sub">Software Engineering</div>
            </div>
            <div className="cv-item">
              <div className="cv-item-title">Status</div>
              <div className="cv-item-sub">Software Engineering Student</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
