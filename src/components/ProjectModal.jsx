import { useEffect } from 'react';
import { X, ExternalLink, Link2, LockKeyhole } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="icon-btn modal-close" onClick={onClose} aria-label="Close"><X size={18} /></button>

        <div className="modal-preview">
          <div className="project-card-preview-glyph modal-glyph">{project.name.slice(0, 2).toUpperCase()}</div>
        </div>

        <div className="modal-body">
          <div className="project-card-cats">
            {project.category.map((c) => <span key={c} className="tag">{c}</span>)}
          </div>
          <h2>{project.name}</h2>

          <section className="modal-section">
            <h4 className="eyebrow">Overview</h4>
            <p className="text-dim">{project.overview}</p>
          </section>

          <section className="modal-section">
            <h4 className="eyebrow">Problem / Goal</h4>
            <p className="text-dim">{project.problem || 'Details coming soon.'}</p>
          </section>

          {project.screens?.length > 0 && (
            <section className="modal-section">
              <h4 className="eyebrow">Interface</h4>
              <div className="chip-row">
                {project.screens.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
            </section>
          )}

          <section className="modal-section">
            <h4 className="eyebrow">Key Features</h4>
            <ul className="modal-list">
              {project.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </section>

          <section className="modal-section">
            <h4 className="eyebrow">Technologies</h4>
            <div className="chip-row">
              {project.tech.map((t) => <span key={t} className="tag tag-mono">{t}</span>)}
            </div>
          </section>

          <section className="modal-section">
            <h4 className="eyebrow">What I Built</h4>
            <p className="text-dim">{project.built || 'Details coming soon.'}</p>
          </section>

          <div className="modal-actions">
            {project.liveUrl ? (
              <a className="btn btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                Live Demo <ExternalLink size={14} />
              </a>
            ) : (
              <button className="btn btn-ghost" disabled>Live Demo Not Available</button>
            )}
            {project.sourceUrl ? (
              <a className="btn btn-ghost" href={project.sourceUrl} target="_blank" rel="noreferrer">
                Source Code <Link2 size={14} />
              </a>
            ) : project.sourceStatus ? (
              <button className="btn btn-ghost" disabled>
                {project.sourceStatus === 'Private repository' ? <LockKeyhole size={14} /> : <Link2 size={14} />}
                {project.sourceStatus}
              </button>
            ) : (
              <button className="btn btn-ghost" disabled>Source Not Available</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}