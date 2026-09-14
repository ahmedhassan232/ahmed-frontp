import { Award } from 'lucide-react';
import { certificates } from '../data/certificates';

export default function Certificates() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Career</span>
          <h1>Certificates</h1>
        </div>
      </div>

      {certificates.length === 0 ? (
        <div className="card empty-state">
          <Award size={28} style={{ margin: '0 auto 12px', display: 'block', color: 'var(--text-faint)' }} />
          <h3>Coming soon</h3>
          <p>Verified certificates will be listed here once available.</p>
        </div>
      ) : (
        <div className="grid-3">
          {certificates.map((c) => (
            <div className="card cert-card" key={c.name}>
              <h3 style={{ fontSize: 15.5 }}>{c.name}</h3>
              <p className="text-dim" style={{ fontSize: 13 }}>{c.issuer}</p>
              <p className="text-faint" style={{ fontSize: 12.5 }}>{c.date}</p>
              <span className="cert-status">{c.status}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
