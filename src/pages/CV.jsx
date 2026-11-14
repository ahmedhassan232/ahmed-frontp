import { Printer, Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { skillGroups, softSkills } from '../data/skills';

const EMAIL = 'ghghghb083@gmail.com';
const GITHUB = 'https://github.com/ahmedhassan232';
const LINKEDIN = 'https://www.linkedin.com/in/ahmed-hassan-05085536a';

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
            <div className="cv-role">Full Stack Developer · Backend Focus</div>
          </div>
          <div className="cv-contact">
            <div><Mail size={13} /> {EMAIL}</div>
            <div><Phone size={13} /> +20 1127490096</div>
            <div><MapPin size={13} /> Beni Suef, Egypt</div>
            <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={13} /> github.com/ahmedhassan232</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={13} /> linkedin.com/in/ahmed-hassan-05085536a</a>
          </div>
        </div>

        <div className="cv-section">
          <h3>Professional Summary</h3>
          <p className="text-dim" style={{ lineHeight: 1.7 }}>
            Full Stack Developer and Artificial Intelligence student with hands-on experience
            building web applications through personal and academic projects. Focused on backend
            development using Python, FastAPI, and PostgreSQL, with an understanding of RESTful
            API development, database management, and frontend-backend integration. Experienced
            in working with React and modern web technologies. Passionate about writing clean,
            maintainable code, solving technical problems, and developing reliable software solutions.
          </p>
        </div>

        <div className="cv-section">
          <h3>Experience</h3>
          <div className="cv-item">
            <div className="cv-item-title">Software Engineering Student | Practical Projects</div>
            <div className="cv-item-sub">2023 – Present</div>
            <p className="text-dim" style={{ fontSize: 13, marginTop: 4 }}>
              Developed personal and academic software projects involving web development,
              backend services, and application integration. Worked on product-review analysis
              using Python and Machine Learning fundamentals, built web applications, practiced
              REST API concepts and data management, and developed Arduino-based systems.
            </p>
          </div>
        </div>

        <div className="cv-section">
          <h3>Education</h3>
          <div className="cv-item">
            <div className="cv-item-title">Bachelor of Artificial Intelligence</div>
            <div className="cv-item-sub">2023 – 2027 · Faculty of Computers and Artificial Intelligence, Beni Suef</div>
            <p className="text-dim" style={{ fontSize: 13, marginTop: 4 }}>
              Studying Artificial Intelligence, Software Engineering, and Computer Science,
              while developing programming, database, application-development, and problem-solving skills.
            </p>
          </div>
        </div>

        <div className="cv-section">
          <h3>Technical Skills</h3>
          {skillGroups.map((group) => (
            <div className="cv-item" key={group.title}>
              <div className="cv-item-title">{group.title}</div>
              <div className="pill-list" style={{ marginTop: 6 }}>
                {group.skills.map((skill) => <span key={skill} className="pill">{skill}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="cv-section">
          <h3>Selected Projects</h3>
          {projects.map((project) => (
            <div className="cv-item" key={project.id}>
              <div className="cv-item-title">{project.name}</div>
              <div className="cv-item-sub">{project.tech.join(', ')}</div>
              <p className="text-dim" style={{ fontSize: 13, marginTop: 4 }}>{project.description}</p>
              <div className="pill-list" style={{ marginTop: 6 }}>
                {project.liveUrl && <a className="pill" href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={12} /></a>}
                {project.sourceUrl && <a className="pill" href={project.sourceUrl} target="_blank" rel="noreferrer">Source Code <ExternalLink size={12} /></a>}
                {project.sourceStatus && <span className="pill pill-faint">{project.sourceStatus}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="cv-section">
          <h3>Soft Skills</h3>
          <div className="pill-list">
            {softSkills.map((skill) => <span key={skill} className="pill pill-faint">{skill}</span>)}
          </div>
        </div>

        <div className="cv-section">
          <h3>Languages</h3>
          <div className="pill-list">
            <span className="pill">Arabic — Native</span>
            <span className="pill">English — Intermediate</span>
          </div>
        </div>
      </div>
    </div>
  );
}