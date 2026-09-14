import { timeline } from '../data/timeline';

export default function Timeline() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Career</span>
          <h1>Timeline</h1>
        </div>
      </div>

      <div className="card" style={{ padding: 28 }}>
        <div className="timeline-list">
          {timeline.map((t) => (
            <div className="timeline-item" key={t.title + t.year}>
              <div className="timeline-dot" />
              <div className="timeline-year">{t.year}</div>
              <h3>{t.title}</h3>
              <p className="text-dim" style={{ fontSize: 13.5 }}>{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
