import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, onOpen }) {
  return (
    <div className="project-card card" onClick={() => onOpen(project)} role="button" tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(project); } }}>
      <div className="project-card-preview">
        <div className="project-card-preview-glyph">{project.name.slice(0, 2).toUpperCase()}</div>
      </div>
      <div className="project-card-body">
        <div className="project-card-cats">
          {project.category.map((c) => <span key={c} className="tag">{c}</span>)}
        </div>
        <h3 className="project-card-title">{project.name}</h3>
        <p className="text-dim">{project.description}</p>

        <div className="project-card-features">
          {project.features.slice(0, 3).map((f) => (
            <div key={f} className="feature-row">
              <span className="feature-dot" />{f}
            </div>
          ))}
        </div>

        <div className="project-card-tech">
          {project.tech.map((t) => <span key={t} className="tag tag-mono">{t}</span>)}
        </div>

        <div className="project-card-actions">
          <button className="btn btn-ghost" style={{ fontSize: 13 }} onClick={(e) => { e.stopPropagation(); onOpen(project); }}>
            View Project <ArrowUpRight size={14} />
          </button>
          {project.sourceUrl ? (
            <a className="btn btn-ghost" style={{ fontSize: 13 }} href={project.sourceUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              Source Code
            </a>
          ) : project.sourceStatus ? (
            <span className="text-faint" style={{ fontSize: 12 }}>{project.sourceStatus}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}